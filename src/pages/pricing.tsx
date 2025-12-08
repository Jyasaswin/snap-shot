import { motion } from "framer-motion";
import { CheckCircle, Layers, Server, Bot, MessageSquare, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const pricingPackages = [
  {
    color: "blue",
    bg: "bg-blue-500/10",
    icon: Layers,
    title: "AI Full Suite Package",
    description:
      "Complete AI ecosystem including text, image, and audio AI models with enterprise integration.",
    features: [
      "Text, Image, Audio AI Models",
      "Document processing & NLP",
      "Image generation & OCR",
      "Speech-to-text & voice assistants",
      "API Access for any platform",
      "Custom workflows & dashboards",
      "Enterprise-grade security",
      "Cloud or On-Premise deployment"
    ],
    button: "Get Custom Quote"
  },
  {
    color: "green",
    bg: "bg-green-500/10",
    icon: Bot,
    title: "Standard Bot Package (Non-AI)",
    description:
      "Menu-based WhatsApp & Telegram automation for businesses that need structured workflows.",
    features: [
      "Menu-driven replies",
      "Keyword triggers",
      "Booking & support automation",
      "Order tracking & catalogs",
      "CRM / ERP integrations",
      "Analytics & workflow automation",
      "Cloud or On-Premise deployment"
    ],
    button: "Request Quote"
  },
  {
    color: "red",
    bg: "bg-red-500/10",
    icon: Brain,
    title: "AI-Powered Bot Package",
    description:
      "Advanced AI-driven conversational bots for WhatsApp and Telegram with multilingual support.",
    features: [
      "AI conversational responses",
      "Custom trained AI models",
      "Hybrid AI + automation flows",
      "Knowledge-base integration",
      "CRM/API/Database connections",
      "Multilingual AI support",
      "Analytics & insights dashboard",
      "Cloud or On-Premise deployment"
    ],
    button: "Get Custom Quote"
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="container px-4 pt-40 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Pricing <span className="text-gradient">Plans</span>
        </motion.h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Flexible AI and automation solutions for every business scale.
        </p>
      </section>

      <section className="container px-4 pb-20 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPackages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-8 flex flex-col"
          >
            <div className={`w-14 h-14 rounded-xl ${pkg.bg} flex items-center justify-center mb-4`}>
              <pkg.icon className={`w-7 h-7 text-${pkg.color}-500`} />
            </div>

            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-muted-foreground mb-6 text-sm">{pkg.description}</p>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="button-gradient w-full py-3 rounded-xl mt-auto text-sm font-medium">
              {pkg.button}
            </button>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;