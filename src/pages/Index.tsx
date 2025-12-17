import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import fullStackImg from "@/assets/full_stack_web_dev.png";
import automationImg from "@/assets/automation_solutions.png";
import aiPlatformsImg from "@/assets/ai_platforms.png";
import chatbotsImg from "@/assets/chatbots_agents.png";

const featureShowcase = [
  {
    title: "Full Stack Web Development",
    description:
      "We build complete web applications covering frontend, backend, databases, APIs, auth, and deployment with modern architecture for performance, security, and scale.",
    detail: "Performance-first builds with CI/CD, observability, and clean code standards.",
    image: fullStackImg,
    link: "https://developer.mozilla.org/en-US/docs/Web",
    cta: "Learn More"
  },
  {
    title: "Automation Solutions",
    description:
      "Automation systems that remove repetitive work and optimize workflows—data processing, background jobs, integrations, and scheduled tasks that boost efficiency and accuracy.",
    detail: "Webhook-driven flows, custom schedulers, and ops tooling tailored to your stack.",
    image: automationImg,
    link: "https://www.selenium.dev",
    cta: "See Automations"
  },
  {
    title: "AI-Powered Full Stack Websites",
    description:
      "Intelligent platforms with document processing, image analysis, smart search, recommendations, and assistants embedded seamlessly into full stack apps.",
    detail: "Retrieval, fine-tuning, guardrails, and human-in-the-loop baked into the UX.",
    image: aiPlatformsImg,
    link: "https://huggingface.co",
    cta: "Explore AI Builds"
  },
  {
    title: "Bots (With & Without AI)",
    description:
      "Custom bots from rule-based automation to advanced AI agents handling messaging, monitoring, data extraction, notifications, and intelligent interactions.",
    detail: "Multi-channel (web/WhatsApp/API), secure handoffs, analytics, and CRM integration.",
    image: chatbotsImg,
    link: "https://platform.openai.com",
    cta: "View Bots"
  }
];

const Index = () => {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium flex items-center gap-2">
            <Bot className="w-4 h-4 text-primary" />
            AI-Powered Business Solutions
          </span>
        </motion.div> */}

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium flex items-center gap-2">
              <Bot className="w-4 h-4 text-primary" />
              AI-Powered Business Solutions
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-balance drop-shadow-xl">
            Building Smart Digital Solutions That Scale With Your Ideas
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground mb-4"
          >
            We design and develop intelligent digital solutions by combining full stack development, automation,
            and artificial intelligence. Our focus is on building clean, scalable, and high-performance systems
            that solve real problems and remain easy to maintain and extend.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-sm md:text-base text-muted-foreground mb-8"
          >
            From first prototype to production, we keep your stack simple, future-proof, and easy to evolve.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl font-semibold mb-8"
          >
            Grow Faster. Work Smarter. <span className="text-primary">Automate Everything.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="button-gradient" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link to="/services">View Our Work</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative mx-auto max-w-4xl mt-20"
        >
          {/* <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Support Available</div>
              </div>
            </div>
          </div> */}
        </motion.div>
      </motion.section>

      {/* What We Do Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What we deliver</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Use proven builds we already have—then tailor them to your stack. Every option is production-ready and ships with integrations, QA, and support.
          </p>
        </motion.div>

        <div className="space-y-16">
          {featureShowcase.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`flex flex-col lg:flex-row gap-10 items-center max-w-6xl mx-auto ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className="space-y-4 w-full lg:w-1/2">
                <div className="inline-flex px-3 py-1 rounded-full glass text-sm font-semibold tracking-wide uppercase text-primary/90">
                  {item.title}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
                <Button variant="outline" className="rounded-full" asChild>
                  <Link to="/services">{item.cta}</Link>
                </Button>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="aspect-video w-full relative flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain mix-blend-screen"
                      style={{
                        maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)"
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact / Inquiry Form */}
      <section className="container px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-5 md:p-6 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Tell us what you need</h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-6">
            Share your project details and we’ll follow up. This form will send an email—update the address anytime.
          </p>

          <ContactForm />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = "projects@dummy-email.com";
    const subject = encodeURIComponent("Project inquiry – call back request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`
    );
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            className="w-full mt-1.5 rounded-full border border-border bg-background/70 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1.5 rounded-full border border-border bg-background/70 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            className="w-full mt-1.5 rounded-full border border-border bg-background/70 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/50"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button type="submit" size="lg" className="button-gradient rounded-full px-8">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Index;
