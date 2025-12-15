import { motion } from "framer-motion";
import { Bot, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const PROJECTS = [
  {
    id: "support-hub",
    name: "AI Support Hub for SaaS Teams",
    summary:
      "A ready-made support workspace with chat, ticket context, and AI assistance connected to your docs.",
    description:
      "This project is a full support portal where users can chat, raise tickets, and get instant AI-powered answers based on your documentation and previous conversations. It includes role-based dashboards, status tracking, and a searchable history so teams always see what happened before.",
    image: "https://undraw.co/static/illustrations/undraw_artificial_intelligence_re_enpp.svg",
  },
  {
    id: "automation-board",
    name: "Automation Control Board",
    summary:
      "A central panel to monitor, trigger, and manage automations across tools like CRMs, sheets, and APIs.",
    description:
      "This dashboard gives a single place to see what automations are running, when they last executed, and what data moved. You can pause, re-run, or adjust automations without touching code. It ships with logs, filters, and health indicators so you always know what is working.",
    image: "https://undraw.co/static/illustrations/undraw_automation_re_t0bk.svg",
  },
  {
    id: "fullstack-site",
    name: "AI-Ready Full Stack Starter Site",
    summary:
      "A full stack website template with auth, content sections, and built-in AI assistant blocks.",
    description:
      "This project is a production-ready base for marketing or product sites that already includes authentication, content pages, a blog layout, and slots where AI features can be plugged in (assistants, search, document tools). It is designed to be customized visually while keeping the structure stable.",
    image: "https://undraw.co/static/illustrations/undraw_website_27ju.svg",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="container px-4 pt-40 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Ready-to-Use Projects You Can Launch Fast
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Pick a project, request small changes, and we adapt it to your brand, data, and stack. You
            get a finished system instead of starting from zero.
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`grid md:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
                  <Bot className="w-3.5 h-3.5" />
                  Ready Project
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {project.name}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  {project.summary}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {project.description}
                </p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    Delivered as full source code and deployment instructions.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    We can adjust visuals, copy, and integrations based on your needs.
                  </li>
                </ul>

                <ProjectInterestForm projectName={project.name} />
              </div>

              <div className="glass rounded-2xl overflow-hidden border border-border/60 bg-card">
                <div className="aspect-video w-full relative flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-contain p-6 md:p-8"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 pb-4 text-xs text-muted-foreground">
                  Visual representation of this project. Replace with your own screenshots or demo video when ready.
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

type ProjectInterestFormProps = {
  projectName: string;
};

const ProjectInterestForm = ({ projectName }: ProjectInterestFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = "projects@dummy-email.com";
    const subject = encodeURIComponent(`Interested in project – ${projectName}`);
    const body = encodeURIComponent(
      `Project: ${projectName}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`
    );
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-4">
      <div className="grid sm:grid-cols-3 gap-2">
        <input
          className="w-full rounded-lg border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="w-full rounded-lg border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full rounded-lg border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full px-6 py-2 text-xs font-medium button-gradient"
      >
        I’m interested in this project
      </button>
    </form>
  );
};

export default Resources;


