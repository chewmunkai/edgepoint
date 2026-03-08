import InsightArticleLayout, { FadeIn, ArticleQuote, NumberedCard, ArticleH2, BulletList } from "@/components/InsightArticleLayout";
import { Link } from "react-router-dom";
import blogImage from "@/assets/blog-why-marketing-plans-fail.jpg";
import blogSeo from "@/assets/blog-seo-2025.jpg";
import blogCost from "@/assets/blog-true-cost-random-marketing.jpg";
import SEOHead, { createArticleSchema } from "@/components/SEOHead";

const relatedArticles = [
  { slug: "seo-2025-what-moves-the-needle", title: "SEO in 2025: What Actually Moves the Needle", category: "SEO", image: blogSeo },
  { slug: "true-cost-of-random-marketing", title: "The True Cost of Random Marketing", category: "Growth", image: blogCost },
];

const WhyMarketingPlansFail = () => {
  return (
    <InsightArticleLayout
      meta={{
        category: "Strategy",
        title: "Why Most Marketing Plans Fail Before They Start",
        subtitle: "The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy entirely.",
        date: "January 2025",
        readTime: "7 min read",
        heroImage: blogImage,
      }}
      seoHead={
        <SEOHead
          title="Why Most Marketing Plans Fail | Edge Point"
          description="The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy entirely. Here's what that costs and how to fix it."
          ogType="article"
          jsonLd={createArticleSchema({ title: "Why Most Marketing Plans Fail Before They Start", description: "The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy.", datePublished: "2025-01-15", slug: "why-marketing-plans-fail" })}
        />
      }
      relatedArticles={relatedArticles}
      ctaLabel="Ready to Fix the Foundation?"
      ctaTitle="Start with a Strategic Audit."
      ctaDescription="We'll map your current reality, identify the gaps, and show you the highest-impact moves for the next 90 days."
    >
      <p className="text-foreground/80 text-xl leading-relaxed font-medium">
        Every year, thousands of SMEs invest heavily in marketing—ads, content, social media, SEO—and walk away with disappointing results. The instinct is to blame the execution: the agency wasn't good enough, the creative wasn't compelling, the targeting was off.
      </p>

      <p>
        But in most cases, the execution isn't the problem. The problem is that there was never a coherent strategy to execute against.
      </p>

      <ArticleH2>The Tactic-First Trap</ArticleH2>

      <p>
        Here's how it typically unfolds. A business decides it needs more leads. Someone suggests running Google Ads. They hire an agency or freelancer, set a budget, and launch campaigns. Six months later, the cost per lead is too high, the leads that do come in aren't converting, and the whole experiment gets shut down.
      </p>

      <p>
        The business concludes: "Google Ads doesn't work for us." But that's usually the wrong conclusion.
      </p>

      <p>
        What actually happened is: they drove traffic to a website that wasn't designed to convert. Their messaging didn't differentiate them from competitors. Their offer structure confused prospects. And there was no follow-up system to nurture leads that weren't ready to buy immediately.
      </p>

      <ArticleQuote
        quote="The tactic wasn't wrong. The foundation it was built on was broken."
        attribution="Fixing the tactic without fixing the foundation just accelerates the problem."
      />

      <ArticleH2>What a Marketing Strategy Actually Is</ArticleH2>

      <p>
        Strategy is not a document. It's not a brand guideline PDF or a 40-slide PowerPoint deck. A marketing strategy is a set of clear decisions about:
      </p>

      <BulletList items={[
        "Who exactly you're building for (not \"businesses\" or \"people who need X\"—a specific customer with specific problems)",
        "What makes you the obvious choice over every alternative (including doing nothing)",
        "Which channels your ideal customers use to make decisions",
        "What your offer hierarchy looks like and how you move people from discovery to purchase",
        "How you measure success in terms of revenue outcomes, not activity metrics",
      ]} />

      <p>
        Without clear answers to these questions, every marketing decision becomes a guess. And guessing with budget is expensive.
      </p>

      <ArticleH2>The Three Warning Signs</ArticleH2>

      <p>
        Most businesses in the tactic-first trap share the same warning signs. If you're experiencing any of these, strategy—not execution—is your real problem.
      </p>

      <div className="space-y-5 my-8">
        <NumberedCard num="01" title="You can't explain your positioning in one sentence" body="If someone asks why they should choose you over a competitor and you need more than 15 seconds to answer—you don't have positioning. You have a description. Descriptions don't win business." />
        <NumberedCard num="02" title="Your website doesn't have a clear conversion goal" body="Most SME websites are digital brochures. They list services, include a contact page, and hope visitors figure out what to do next. Strategic websites guide visitors toward a specific action at every stage." />
        <NumberedCard num="03" title="You're measuring effort instead of revenue" body="Follower growth, page views, email open rates—these are activity metrics. If your marketing reporting doesn't include pipeline generated, cost per acquisition, and revenue influenced, you're optimizing for the wrong thing." />
      </div>

      <ArticleH2>The Right Order of Operations</ArticleH2>

      <p>
        The businesses that see consistent, compounding returns from marketing follow a different order. They build foundation first, then layer tactics on top.
      </p>

      <p>
        Foundation means: clear positioning, a converting website, structured offers, and a defined customer journey. With foundation in place, every tactic—ads, SEO, content, social—has a clear job to do and a system to feed into.
      </p>

      <p>
        Without foundation, you're sending traffic into a broken funnel. With foundation, you're directing qualified prospects through a system designed to convert them.
      </p>

      <p>
        The irony is that most businesses spend RM50K on tactics hoping to fix a RM5K foundation problem. The solution is almost always the opposite: invest in foundation first, then scale with confidence.
      </p>

      <ArticleH2>What to Do Next</ArticleH2>

      <p>
        Before your next marketing investment—whether it's ads, content, an agency retainer, or a new channel—answer these three questions honestly:
      </p>

      <ol className="space-y-3 list-none pl-0">
        {[
          "Can you articulate in one sentence who you serve, what you do, and why they should choose you?",
          "Does your website guide visitors toward a clear action, or does it just exist?",
          "Do you know your current cost per acquisition and what a good one looks like for your business model?",
        ].map((q, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="font-heading font-bold text-foreground/20 text-xl shrink-0">{i + 1}.</span>
            <span>{q}</span>
          </li>
        ))}
      </ol>

      <p>
        If you hesitated on any of those, you already know what to work on. Fix the foundation. Then scale.
      </p>
    </InsightArticleLayout>
  );
};

export default WhyMarketingPlansFail;
