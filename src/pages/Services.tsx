import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SERVICES = [
  {
    id: "fullstack",
    name: "Full Stack Web Development",
    summary:
      "End-to-end web applications—from clean UIs to reliable backends, databases, and deployments.",
    description:
      "We design and build full stack web applications that cover everything: frontend interfaces, backend logic, databases, authentication, APIs, and hosting. Every project follows modern architecture patterns, clear folder structure, and a clean separation of concerns so your codebase stays understandable and easy to extend.",
    details:
      "We focus on security, performance, and developer experience. That means type-safe APIs, environment-based configs, clear documentation, and CI-ready code. Whether it's a dashboard, SaaS product, or internal tool, we ship production-grade foundations instead of one-off demos.",
    image:
      "https://undraw.co/static/illustrations/undraw_website_27ju.svg",
    docsLink: "https://developer.mozilla.org/en-US/docs/Web",
    docsLabel: "MDN Web Docs – Web Development",
    subItems: [
      {
        name: "Admin dashboards",
        description:
          "Role-based dashboards with analytics, filters, data tables, exports, and integrations with your internal APIs.",
      },
      {
        name: "SaaS-style apps",
        description:
          "Multi-tenant products with billing, subscriptions, onboarding flows, and user management built in.",
      },
      {
        name: "Internal tools",
        description:
          "Lightweight tools that sit on top of your existing database or APIs to help teams move faster.",
      },
    ],
  },
  {
    id: "automation",
    name: "Automation Solutions",
    summary:
      "Workflow automations that remove repetitive manual work and keep your systems in sync.",
    description:
      "We design automation systems that connect your tools, schedule background jobs, and move data reliably between services. Instead of fragile no-code flows that break silently, we build maintainable automation layers with logging, retries, and clear ownership.",
    details:
      "From cron jobs and queue workers to webhooks and event-driven pipelines, we help you automate notifications, reporting, data syncing, and more. Everything is documented so your team knows exactly what runs and where.",
    image:
      "https://undraw.co/static/illustrations/undraw_automation_re_t0bk.svg",
    docsLink: "https://www.selenium.dev",
    docsLabel: "Selenium – Automation Concepts",
    subItems: [
      {
        name: "Data pipelines",
        description:
          "Scheduled or event-based jobs that collect, transform, and push data into CRMs, warehouses, or dashboards.",
      },
      {
        name: "Ops & reporting",
        description:
          "Automated daily/weekly reports, alerts, and monitoring to keep teams informed without manual effort.",
      },
      {
        name: "Business workflows",
        description:
          "End-to-end flows like onboarding, approvals, renewals, and follow-ups that run in the background 24/7.",
      },
    ],
  },
  {
    id: "ai-web",
    name: "AI-Powered Full Stack Websites",
    summary:
      "Web platforms with search, recommendations, document tools, and AI features built directly into the product.",
    description:
      "We combine full stack engineering with modern AI so your product can search, summarize, recommend, and assist users intelligently. Instead of a basic chatbot on the side, AI is treated as a first-class part of the UI and backend.",
    details:
      "We work with LLMs, vector search, embeddings, and custom retrieval flows. Guardrails, rate limiting, and observability are included so AI features behave reliably in production, not just in demos.",
    image:
      "https://undraw.co/static/illustrations/undraw_artificial_intelligence_re_enpp.svg",
    docsLink: "https://huggingface.co",
    docsLabel: "Hugging Face – AI & Models",
    subItems: [
      {
        name: "Document assistants",
        description:
          "Upload-and-ask experiences that let users query PDFs, docs, and knowledge bases in natural language.",
      },
      {
        name: "Smart search",
        description:
          "Semantic search across content, products, or tickets, with filters and relevance tuned to your domain.",
      },
      {
        name: "Recommendation systems",
        description:
          "Personalized content or product recommendations based on behavior, context, and business rules.",
      },
    ],
  },
  {
    id: "bots",
    name: "Bots (With & Without AI)",
    summary:
      "Rule-based and AI-driven bots for chat, monitoring, data tasks, and automation across platforms.",
    description:
      "We build bots that can live on chat platforms, inside web apps, or behind APIs. Depending on the use case, they can be deterministic and rule-based or powered by LLMs for more flexible, conversational behavior.",
    details:
      "Every bot is designed with logging, error handling, and safety in mind so you can trust it with real users and production data. We also connect bots to your CRMs, ticketing tools, and databases so they do more than just reply.",
    image:
      "https://undraw.co/static/illustrations/undraw_chatbot_re_h7a0.svg",
    docsLink: "https://platform.openai.com",
    docsLabel: "OpenAI Platform – Bots & Assistants",
    subItems: [
      {
        name: "Support bots",
        description:
          "Bots that can answer FAQs, collect context, and route users correctly before humans step in.",
      },
      {
        name: "Monitoring & alerts",
        description:
          "Background agents that watch metrics, logs, or events and ping the right people or channels.",
      },
      {
        name: "Data & API helpers",
        description:
          "Bots that can fetch, transform, and push data from one API or system into another on demand.",
      },
    ],
  },
];

const Services = () => {
  const [searchParams] = useSearchParams();
  const initialServiceIdFromUrl = searchParams.get("service");
  const defaultServiceId =
    (initialServiceIdFromUrl && SERVICES.some((s) => s.id === initialServiceIdFromUrl)
      ? initialServiceIdFromUrl
      : SERVICES[0].id);

  const [activeServiceId, setActiveServiceId] = useState<string>(defaultServiceId);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);

  const activeService = SERVICES.find((s) => s.id === activeServiceId)!;
  const activeSub = activeService.subItems[activeSubIndex];

  useEffect(() => {
    const idFromUrl = searchParams.get("service");
    if (idFromUrl && SERVICES.some((s) => s.id === idFromUrl) && idFromUrl !== activeServiceId) {
      setActiveServiceId(idFromUrl);
      setActiveSubIndex(0);
    }
  }, [searchParams, activeServiceId]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Services Layout */}
      <section className="container px-4 pt-40 pb-20">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Active service detail */}
          <div className="space-y-10">
            {/* Description block */}
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
                <Bot className="w-3.5 h-3.5" />
                {activeService.name}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                {activeService.name}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                {activeService.description}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {activeService.details}
              </p>

              <a
                href={activeService.docsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm text-primary hover:underline mt-1"
              >
                <LinkIcon className="w-3.5 h-3.5" />
                {activeService.docsLabel}
              </a>
            </motion.div>

            {/* Form + media */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="glass rounded-2xl p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Tell us about your {activeService.name.toLowerCase()}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your idea, current tools, and what outcome you want. We&apos;ll reply with a clear next step.
                </p>
                <ServiceInquiryForm activeServiceName={activeService.name} />
              </div>

              <div className="glass rounded-2xl overflow-hidden border border-border/60 bg-card">
                <div className="aspect-video w-full relative flex items-center justify-center">
                  <img
                    src={activeService.image}
                    alt={activeService.name}
                    className="h-full w-full object-contain p-6 md:p-8"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 pb-4 text-xs text-muted-foreground">
                  Visual example of this service area. Replace with your own demo/video when ready.
                </div>
              </div>
            </div>

            {/* Sub-services thumbnails + detail */}
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  What we can build under {activeService.name}
                </h3>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-1">
                {activeService.subItems.map((sub, index) => {
                  const isActive = index === activeSubIndex;
                  return (
                    <button
                      key={sub.name}
                      onClick={() => setActiveSubIndex(index)}
                      className={`min-w-[180px] max-w-[210px] text-left rounded-xl border px-3 py-3 text-xs md:text-sm transition-all ${
                        isActive
                          ? "border-primary bg-primary/10 shadow-sm"
                          : "border-border bg-background/60 hover:border-primary/40 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="font-medium line-clamp-2">{sub.name}</span>
                      </div>
                      <p className="text-[11px] md:text-xs text-muted-foreground line-clamp-3">
                        {sub.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="glass rounded-2xl p-4 md:p-5">
                <h4 className="text-base md:text-lg font-semibold mb-1">
                  {activeSub.name}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  {activeSub.description}
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-border pt-8 mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Not sure which service fits? Describe your idea and we&apos;ll recommend the best path.
              </div>
              <Button size="sm" className="button-gradient" asChild>
                <Link to="/">
                  Go back to overview
                  <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

type ServiceInquiryFormProps = {
  activeServiceName: string;
};

const ServiceInquiryForm = ({ activeServiceName }: ServiceInquiryFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = "projects@dummy-email.com";
    const subject = encodeURIComponent(`Service inquiry – ${activeServiceName}`);
    const body = encodeURIComponent(
      `Service: ${activeServiceName}\nName: ${name}\nEmail: ${email}\n\nDetails:\n${details}`
    );
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="text-xs font-medium text-muted-foreground">Service</label>
        <div className="mt-1.5 text-xs rounded-lg border border-dashed border-border bg-background/60 px-3 py-2">
          {activeServiceName}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground">Name</label>
          <input
            className="w-full mt-1.5 rounded-lg border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Email</label>
          <input
            type="email"
            className="w-full mt-1.5 rounded-lg border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-muted-foreground">What do you need built?</label>
        <textarea
          className="w-full mt-1.5 rounded-lg border border-border bg-background/70 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 min-h-[110px]"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Describe your use case, current tools, and any deadlines or constraints."
          required
        />
      </div>
      <Button type="submit" size="sm" className="button-gradient w-full md:w-auto">
        Send service details
      </Button>
    </form>
  );
};

export default Services;
