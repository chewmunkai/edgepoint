import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple in-memory rate limiter (per isolate instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Sanitize string to prevent HTML injection in email
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Validation helpers
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[0-9\-+() ]{3,20}$/.test(phone);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ success: false, error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const body = await req.json();
    const { name, email, company, phone, spend, challenge, source } = body;

    // --- Input validation ---
    const errors: string[] = [];

    if (typeof name !== "string" || name.trim().length === 0) {
      errors.push("Name is required.");
    } else if (name.length > 100) {
      errors.push("Name must be under 100 characters.");
    }

    if (typeof email !== "string" || !isValidEmail(email)) {
      errors.push("A valid email is required.");
    } else if (email.length > 255) {
      errors.push("Email must be under 255 characters.");
    }

    if (phone !== undefined && phone !== "") {
      if (typeof phone !== "string" || !isValidPhone(phone)) {
        errors.push("Phone must contain only digits, spaces, dashes, or parentheses (max 20 chars).");
      }
    }

    if (company !== undefined && company !== "") {
      if (typeof company !== "string" || company.length > 100) {
        errors.push("Company must be under 100 characters.");
      }
    }

    if (spend !== undefined && spend !== "") {
      if (typeof spend !== "string" || spend.length > 50) {
        errors.push("Budget selection is invalid.");
      }
    }

    if (challenge !== undefined && challenge !== "") {
      if (typeof challenge !== "string" || challenge.length > 2000) {
        errors.push("Challenge must be under 2000 characters.");
      }
    }

    if (typeof source !== "undefined" && (typeof source !== "string" || source.length > 50)) {
      errors.push("Source is invalid.");
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ success: false, error: errors.join(" ") }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- Build sanitized email HTML ---
    const fields: { label: string; value: string }[] = [];
    fields.push({ label: "Name", value: sanitizeHtml(name.trim()) });
    if (company) fields.push({ label: "Company", value: sanitizeHtml(company.trim()) });
    if (phone) fields.push({ label: "Phone", value: sanitizeHtml(phone.trim()) });
    if (email) fields.push({ label: "Email", value: sanitizeHtml(email.trim()) });
    if (spend) fields.push({ label: "Annual Marketing Budget", value: sanitizeHtml(spend) });
    if (challenge) fields.push({ label: "Biggest Bottleneck / Challenge", value: sanitizeHtml(challenge.trim()) });

    const rows = fields
      .map(
        (f) =>
          `<tr><td style="padding:8px 12px;font-weight:600;color:#333;border-bottom:1px solid #eee;white-space:nowrap;vertical-align:top;">${f.label}</td><td style="padding:8px 12px;color:#555;border-bottom:1px solid #eee;">${f.value}</td></tr>`
      )
      .join("");

    const safeName = sanitizeHtml(name.trim());
    const safeCompany = company ? sanitizeHtml(company.trim()) : "";
    const safeSource = source ? sanitizeHtml(source) : "Website";

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#007BFF;margin-bottom:4px;">New Strategic Audit Enquiry</h2>
        <p style="color:#888;font-size:13px;margin-top:0;">From: ${safeSource}</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          ${rows}
        </table>
        <p style="margin-top:24px;font-size:12px;color:#aaa;">This enquiry was submitted via edgepoint.lovable.app</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Edge Point <onboarding@resend.dev>",
        to: ["chewwenkai@gmail.com"],
        subject: `New Enquiry from ${safeName}${safeCompany ? ` — ${safeCompany}` : ""}`,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending enquiry email:", error);
    return new Response(JSON.stringify({ success: false, error: "An unexpected error occurred. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
