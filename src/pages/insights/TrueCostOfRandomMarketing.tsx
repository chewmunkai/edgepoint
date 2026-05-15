import InsightArticleLayout, { FadeIn, ArticleQuote, NumberedCard, ArticleH2, BulletList } from "@/components/InsightArticleLayout";
import blogImage from "@/assets/blog-true-cost-random-marketing.jpg";
import blogMarketing from "@/assets/blog-why-marketing-plans-fail.jpg";
import blogSeo from "@/assets/blog-seo-2025.jpg";
import SEOHead, { createArticleSchema } from "@/components/SEOHead";

const relatedArticles = [
  { slug: "why-marketing-plans-fail", title: "Why Most Marketing Plans Fail Before They Start", category: "Strategy", image: blogMarketing },
  { slug: "seo-2025-what-moves-the-needle", title: "SEO in 2025: What Actually Moves the Needle", category: "SEO", image: blogSeo },
];

const TrueCostOfRandomMarketing = () => {
  return (
    <InsightArticleLayout
      meta={{
        category: "Growth",
        title: "The True Cost of Random Marketing",
        subtitle: "How disconnected campaigns silently drain your budget and stall growth—and what to do instead.",
        date: "February 2025",
        readTime: "8 min read",
        heroImage: blogImage,
      }}
      seoHead={
        <SEOHead
          title="True Cost of Random Marketing | Digital Marketing Malaysia"
          description="A Kuala Lumpur marketing agency view on how disconnected SEO, Google Ads and social campaigns drain Malaysian SME budgets—and the fix."
          ogType="article"
          jsonLd={createArticleSchema({ title: "The True Cost of Random Marketing", description: "How disconnected campaigns silently drain your budget and stall growth.", datePublished: "2025-02-15", slug: "true-cost-of-random-marketing" })}
        />
      }
      relatedArticles={relatedArticles}
      ctaLabel="Stop the Random Marketing Cycle"
      ctaTitle="Start with a Strategic Audit."
      ctaDescription="We'll audit what's working, cut what's not, and build a connected strategy that focuses your budget on the highest-impact moves."
    >
      <p className="text-foreground/80 text-xl leading-relaxed font-medium">
        There's a type of marketing that looks productive—meetings are happening, content is being published, ads are running, campaigns are launching—but nothing is actually moving. Revenue stays flat. Leads stay expensive. The team stays busy. This is what random marketing looks like from the inside.
      </p>

      <p>
        The problem with random marketing isn't that any individual tactic is wrong. It's that tactics without a connecting strategy don't reinforce each other. They compete for budget, confuse prospects with inconsistent messaging, and produce results that are impossible to attribute or optimize.
      </p>

      <ArticleH2>What Random Marketing Actually Costs</ArticleH2>

      <p>
        Most businesses underestimate the true cost of their disconnected approach because they only count direct spend. But the real cost has four components:
      </p>

      <div className="space-y-5 my-8">
        <NumberedCard num="01" title="The Direct Spend That Goes Nowhere" body="The most obvious cost: money spent on campaigns that don't convert. Google Ads driving traffic to a non-converting website. Social media spend building followers who don't buy. SEO content attracting visitors who bounce. Each of these represents real budget producing no revenue." />
        <NumberedCard num="02" title="The Opportunity Cost of Distraction" body="Every tactic you're running requires attention, management, and creative resource. When you're running six disconnected channels, you're spreading that resource across six different initiatives—none of which gets the focused investment needed to perform well." />
        <NumberedCard num="03" title="The Brand Confusion Tax" body="When your ads say one thing, your website says another, and your social content says a third, prospects get confused—and confused prospects don't buy. Inconsistent messaging forces every prospect to do more cognitive work to understand your value proposition. Most won't bother." />
        <NumberedCard num="04" title="The Compounding Damage of Bad Data" body="When campaigns aren't connected to a unified strategy, the data they produce is misleading. You optimize the wrong things, cut channels that are actually working, and scale channels that aren't. Bad strategy produces bad data, which produces worse strategy." />
      </div>

      <ArticleQuote
        quote="Most businesses aren't losing to better competitors. They're losing to their own lack of strategic clarity."
        attribution="The competitor with a clearer message, a tighter funnel, and a focused channel strategy will almost always win—regardless of budget."
      />

      <ArticleH2>The Anatomy of a Connected Strategy</ArticleH2>

      <p>
        A connected marketing strategy isn't complicated. It's just intentional. Every element serves the same goal, speaks to the same customer, and feeds the same funnel. Here's what that looks like in practice:
      </p>

      <ul className="space-y-4 list-none pl-0 my-6">
        {[
          { label: "One clear positioning statement", desc: "Every piece of marketing starts from the same foundation—who you serve, what you do, why you're different. No deviation across channels." },
          { label: "A defined customer journey", desc: "You know how prospects discover you, what they need to believe before they buy, and what the conversion path looks like. Every tactic is mapped to a stage in that journey." },
          { label: "Two or three focused channels", desc: "Not eight. Not everything. The channels where your ideal customers make decisions—run well, with adequate investment, with consistent messaging." },
          { label: "A unified measurement framework", desc: "One set of metrics that everyone agrees matters. Pipeline generated. Cost per acquisition. Revenue influenced. Not vanity metrics that look good in reports." },
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-lg border border-foreground/8 bg-white p-4">
            <span className="font-heading font-bold text-neon text-lg mt-0.5 shrink-0">→</span>
            <div>
              <span className="font-heading font-bold text-foreground text-sm block mb-1">{item.label}</span>
              <span className="font-body text-foreground/55 text-sm">{item.desc}</span>
            </div>
          </li>
        ))}
      </ul>

      <ArticleH2>The Counterintuitive Fix</ArticleH2>

      <p>
        The instinct when marketing isn't working is to do more: more channels, more content, more campaigns, more budget. It feels like the answer must be more activity.
      </p>

      <p>
        The actual answer is almost always less—but better. Cut the channels that aren't producing. Tighten the message. Invest more in fewer, better-chosen tactics. Give them time to work.
      </p>

      <p>
        The businesses that consistently win at marketing aren't doing the most. They're doing the right things, consistently, with enough investment to actually see results. That requires strategy—deciding what not to do as much as what to do.
      </p>

      <ArticleH2>How to Stop the Randomness</ArticleH2>

      <p>
        If you recognize the random marketing pattern in your business, the fix starts with an honest audit of what's actually working. Not what feels productive—what's actually driving pipeline and revenue.
      </p>

      <p>
        That means looking at every channel and asking: "If we stopped this tomorrow, would it measurably affect revenue?" If the answer is no, you have your first cut.
      </p>

      <p>
        From there, build a strategy from the output back: what revenue do you need, what conversion rate does that require, how much pipeline does that mean, which channels can generate that pipeline efficiently? Work backwards from the goal, not forwards from "what should we try next."
      </p>
    </InsightArticleLayout>
  );
};

export default TrueCostOfRandomMarketing;
