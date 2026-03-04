import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

const BASE_URL = "https://edgepoint.agency";

const SEOHead = ({ title, description, canonical, ogType = "website", jsonLd }: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonicalUrl, ogType, jsonLd]);

  return null;
};

export default SEOHead;

/* ─── Reusable JSON-LD schemas ─── */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Edge Point Solutions Sdn Bhd",
  url: "https://edgepoint.agency",
  logo: "https://edgepoint.agency/og-image.png",
  description: "Strategy-first marketing agency in Malaysia helping SMEs grow with brand foundation, SEO, performance marketing, and events activation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-2-01, Street Mall, One South, Jalan OS, Taman Serdang Perdana 6",
    addressLocality: "Seri Kembangan",
    addressRegion: "Selangor",
    postalCode: "43300",
    addressCountry: "MY",
  },
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
  sameAs: [],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "MarketingAgency",
    name: "Edge Point Solutions Sdn Bhd",
  },
  serviceType: "Marketing Strategy",
  areaServed: "Malaysia",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand & Foundation", description: "Strategic infrastructure—positioning, messaging, offers, website development." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visibility & Organic Growth", description: "SEO, content strategy, social media marketing, organic funnel structuring." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance & Scale", description: "Paid media strategy, performance marketing, funnel optimization, campaign tracking." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Events & Activation", description: "Event planning, brand activations, offline-online funnel integration, KOL marketing." } },
    ],
  },
};

export const createFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const createArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  datePublished: article.datePublished,
  url: `https://edgepoint.agency/insights/${article.slug}`,
  publisher: {
    "@type": "Organization",
    name: "Edge Point Solutions Sdn Bhd",
    logo: { "@type": "ImageObject", url: "https://edgepoint.agency/og-image.png" },
  },
  author: { "@type": "Organization", name: "Edge Point Solutions Sdn Bhd" },
});
