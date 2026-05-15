import InsightArticleLayout, { FadeIn, ArticleQuote, NumberedCard, ArticleH2, BulletList } from "@/components/InsightArticleLayout";
import blogImage from "@/assets/blog-seo-2025.jpg";
import blogMarketing from "@/assets/blog-why-marketing-plans-fail.jpg";
import blogCost from "@/assets/blog-true-cost-random-marketing.jpg";
import SEOHead, { createArticleSchema } from "@/components/SEOHead";

const relatedArticles = [
  { slug: "why-marketing-plans-fail", title: "Why Most Marketing Plans Fail Before They Start", category: "Strategy", image: blogMarketing },
  { slug: "true-cost-of-random-marketing", title: "The True Cost of Random Marketing", category: "Growth", image: blogCost },
];

const SEO2025WhatMovesTheNeedle = () => {
  return (
    <InsightArticleLayout
      meta={{
        category: "SEO",
        title: "SEO in 2025: What Actually Moves the Needle",
        subtitle: "Forget keyword stuffing. Here's what search engines really reward now—and how to build an organic strategy that compounds over time.",
        date: "February 2025",
        readTime: "9 min read",
        heroImage: blogImage,
      }}
      seoHead={
        <SEOHead
          title="SEO 2025: What Moves the Needle | SEO Agency Malaysia"
          description="From a Kuala Lumpur SEO agency: what Google really rewards in 2025 and how Malaysian SMEs can build organic strategies that compound."
          ogType="article"
          jsonLd={createArticleSchema({ title: "SEO in 2025: What Actually Moves the Needle", description: "What search engines really reward now and how to build an organic strategy that compounds.", datePublished: "2025-02-01", slug: "seo-2025-what-moves-the-needle" })}
        />
      }
      relatedArticles={relatedArticles}
      ctaLabel="Want an Organic Strategy That Actually Works?"
      ctaTitle="Start with a Strategic Audit."
      ctaDescription="We'll assess your current organic presence, identify your biggest opportunities, and build a roadmap tied to revenue outcomes."
    >
      <p className="text-foreground/80 text-xl leading-relaxed font-medium">
        SEO has changed more in the last 18 months than in the previous five years combined. AI-generated content flooded the web, Google's algorithm updates became more aggressive, and the businesses that were "winning" with volume-first content strategies got hit hard.
      </p>

      <p>
        But here's the thing: the fundamentals of SEO haven't changed. What's changed is how strictly they're being enforced—and what it now takes to stand out in a world saturated with AI-assisted mediocrity.
      </p>

      <ArticleH2>The Death of the Volume Game</ArticleH2>

      <p>
        For years, the playbook was simple: publish more content, target more keywords, build more links. The businesses that could produce content at scale had an advantage. Then AI made content production essentially free—and overnight, the competitive moat of "we publish more" disappeared.
      </p>

      <p>
        Google's response was to double down on quality signals that AI-generated content struggles to fake: genuine expertise, real author authority, content that demonstrates first-hand experience, and pages that actually satisfy search intent rather than just matching keywords.
      </p>

      <ArticleQuote
        quote="Publishing 10 genuinely useful articles will outperform 100 mediocre ones—every time."
        attribution="The volume game is over. The expertise game is just getting started."
      />

      <ArticleH2>What Actually Moves the Needle in 2025</ArticleH2>

      <div className="space-y-5 my-8">
        <NumberedCard num="01" title="Commercial Intent Keyword Targeting" body="Ranking for informational queries is fine, but it's commercial intent keywords—the searches people make when they're close to a purchase decision—that drive revenue. If your keyword strategy isn't mapped to your customer journey and buying stages, you're attracting the wrong traffic." />
        <NumberedCard num="02" title="Topical Authority Over Keyword Coverage" body="Google increasingly rewards sites that demonstrate deep expertise on a topic over sites that cover many topics shallowly. A business that comprehensively covers everything related to B2B lead generation will outrank one that has one surface-level article on the same topic—even if the latter has more backlinks." />
        <NumberedCard num="03" title="Technical Foundations That Actually Matter" body="Page speed, mobile responsiveness, Core Web Vitals—these matter, but not as much as some agencies would have you believe. What matters more: crawlability, proper internal linking, and ensuring Google can actually index and understand your content hierarchy." />
        <NumberedCard num="04" title="Content That Earns Links Naturally" body="The best link-building strategy is creating content that other websites actually want to reference—original research, comprehensive guides, unique data, genuine expert perspectives. Outreach campaigns for generic content have diminishing returns. Remarkable content earns links passively." />
        <NumberedCard num="05" title="Conversion-Optimised Landing Pages" body="Organic traffic without a converting destination is wasted. Too many businesses invest in SEO to drive traffic, then send visitors to generic service pages with no clear call to action. Every high-intent keyword should have a dedicated, purpose-built page designed to convert." />
      </div>

      <ArticleH2>The Channels That Amplify SEO</ArticleH2>

      <p>
        SEO doesn't exist in isolation. The businesses seeing the strongest organic growth treat it as part of an integrated system:
      </p>

      <BulletList items={[
        "Social media amplifies content reach and generates signals that indirectly support rankings",
        "Email marketing drives repeat visitors and engagement signals to high-priority pages",
        "PR and thought leadership earn the kind of editorial links that move domain authority",
        "Paid search data reveals which organic keywords actually convert, not just rank",
      ]} />

      <ArticleH2>The Timeline Reality</ArticleH2>

      <p>
        If someone promises you SEO results in 30 days, run. Organic search is a compounding channel—it takes time to build, but the returns continue long after the work is done. A realistic timeline:
      </p>

      <div className="grid gap-3 my-6">
        {[
          { period: "Month 1–2", desc: "Technical fixes, content strategy, initial content production. No visible results yet." },
          { period: "Month 3–4", desc: "Early rankings for low-competition terms. Traffic starts to trickle in." },
          { period: "Month 5–6", desc: "Compounding begins. Rankings improve, traffic grows, conversions appear." },
          { period: "Month 6+", desc: "Exponential returns. Every asset you've created continues working for you." },
        ].map((row) => (
          <div key={row.period} className="flex items-start gap-4 rounded-lg border border-foreground/8 bg-white p-4">
            <span className="font-heading font-bold text-sm text-neon/60 whitespace-nowrap w-28 shrink-0">{row.period}</span>
            <p className="font-body text-foreground/60 text-sm leading-relaxed">{row.desc}</p>
          </div>
        ))}
      </div>

      <ArticleH2>The Question to Ask Before You Start</ArticleH2>

      <p>
        Before investing in SEO, ask: "Do we have a converting website for organic traffic to land on?" If the answer is no, fix that first. SEO drives discovery. Your website converts that discovery into revenue. One without the other is wasted investment.
      </p>

      <p>
        The businesses winning at organic growth in 2025 aren't the ones publishing the most. They're the ones with the clearest positioning, the most useful content, and the tightest conversion funnels. That's the game worth playing.
      </p>
    </InsightArticleLayout>
  );
};

export default SEO2025WhatMovesTheNeedle;
