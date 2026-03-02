import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const body = await req.json();
    const { name, email, company, phone, spend, challenge, source } = body;

    // Build email HTML based on which form was submitted
    const fields: { label: string; value: string }[] = [];
    fields.push({ label: "Name", value: name || "—" });
    if (company) fields.push({ label: "Company", value: company });
    if (phone) fields.push({ label: "Phone", value: phone });
    if (email) fields.push({ label: "Email", value: email });
    if (spend) fields.push({ label: "Annual Marketing Budget", value: spend });
    if (challenge) fields.push({ label: "Biggest Bottleneck / Challenge", value: challenge });

    const rows = fields
      .map(
        (f) =>
          `<tr><td style="padding:8px 12px;font-weight:600;color:#333;border-bottom:1px solid #eee;white-space:nowrap;vertical-align:top;">${f.label}</td><td style="padding:8px 12px;color:#555;border-bottom:1px solid #eee;">${f.value}</td></tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#007BFF;margin-bottom:4px;">New Strategic Audit Enquiry</h2>
        <p style="color:#888;font-size:13px;margin-top:0;">From: ${source || "Website"}</p>
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
        subject: `New Enquiry from ${name || "Website Visitor"}${company ? ` — ${company}` : ""}`,
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
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
