import { motion } from "framer-motion";
import { 
  Bot, MessageSquare, Send, Zap, Code, 
  ShoppingCart, Building, Heart, GraduationCap, 
  DollarSign, UtensilsCrossed, CheckCircle, ArrowRight,
  Brain, FileText, Mic, Database, Link as LinkIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const aiServices = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Smart conversational AI that understands, responds, and assists customers using natural language."
  },
  {
    icon: Brain,
    title: "Custom AI Models",
    description: "Predictive analytics, recommendation engines, and specialized machine learning models tailored to your business."
  },
  {
    icon: FileText,
    title: "NLP Solutions",
    description: "Text classification, document scanning, sentiment analysis, summarization, OCR, and language processing."
  },
  {
    icon: Mic,
    title: "AI Assistants",
    description: "Voice or text-based assistants for websites, apps, and internal operations."
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Automated data extraction, processing, insights, and reporting with AI."
  }
];

const whatsappFeatures = [
  "Auto-reply 24/7 support",
  "Lead generation & qualification",
  "WhatsApp store/catalog bot",
  "Appointment booking",
  "Order tracking",
  "Payment integration",
  "CRM and website integration",
  "ChatGPT-powered intelligent replies"
];

const telegramCapabilities = [
  "Customer support bots",
  "Information bots",
  "Mini-app style bots",
  "Subscription & membership systems",
  "Automated messaging",
  "Payment-enabled stores",
  "AI conversational bots"
];

const automationServices = [
  { title: "CRMs", desc: "Automate customer relationship management" },
  { title: "ERPs", desc: "Streamline enterprise resource planning" },
  { title: "E-commerce", desc: "Automate order processing and inventory" },
  { title: "Email/WhatsApp flows", desc: "Automated communication sequences" },
  { title: "Data pipelines", desc: "Automated data processing and transfer" },
  { title: "Internal workflows", desc: "Custom business process automation" }
];

const industries = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    solutions: ["Recommendation bots", "Abandoned cart automation", "WhatsApp sales systems"]
  },
  {
    icon: Building,
    title: "Real Estate",
    solutions: ["Lead qualification bots", "Property info systems", "Booking assistants"]
  },
  {
    icon: Heart,
    title: "Healthcare",
    solutions: ["Appointment bots", "Follow-up automation", "Patient information systems"]
  },
  {
    icon: GraduationCap,
    title: "Education",
    solutions: ["AI tutoring", "Virtual assistants", "Student support bots"]
  },
  {
    icon: DollarSign,
    title: "Finance",
    solutions: ["Automated reporting", "Statement processing", "Data AI tools"]
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    solutions: ["WhatsApp ordering bots", "Delivery tracking", "Reservation systems"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="container px-4 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI and automation solutions tailored to your business needs.
          </p>
        </motion.div>
      </section>

      {/* AI Development Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
            <span className="text-sm font-medium text-primary">AI Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Intelligent AI Solutions</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aiServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WhatsApp Bot Section */}
      <section className="container px-4 py-20 section-gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
              <span className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-green-500" />
                WhatsApp Bot Development
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engage Customers on WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Engage customers instantly on the platform they use the most. Our WhatsApp bots provide 
              24/7 automated support, lead generation, and seamless business operations.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold">Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  Higher engagement rates
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  Faster customer service
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  Fully automated workflows
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  Seamless integration with your tools
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h4 className="font-semibold mb-4">Features</h4>
            <div className="grid grid-cols-1 gap-3">
              {whatsappFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Telegram Bot Section */}
      <section className="container px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 order-2 lg:order-1"
          >
            <h4 className="font-semibold mb-4">Capabilities</h4>
            <div className="grid grid-cols-1 gap-3">
              {telegramCapabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{cap}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
              <span className="text-sm font-medium flex items-center gap-2">
                <Send className="w-4 h-4 text-blue-500" />
                Telegram Bot Development
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Telegram Bots
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful bots designed for speed, scalability, and automation. Build sophisticated 
              Telegram experiences from customer support to payment-enabled stores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Automation & Integrations Section */}
      <section className="container px-4 py-20 section-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
            <span className="text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Automation & Integrations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamline Your Operations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect all your systems and automate repetitive tasks for maximum efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {automationServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-primary" />
            Integration Capabilities
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {["API development", "Third-party software", "Custom backend systems", "Webhooks & automation services"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Industry Solutions Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
            <span className="text-sm font-medium text-primary">Industry Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every Industry</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized AI and bot solutions designed for your specific industry needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{industry.title}</h3>
              <ul className="space-y-2">
                {industry.solutions.map((solution, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help automate and transform your business with AI.
          </p>
          <Button size="lg" className="button-gradient" asChild>
            <Link to="/about">
              Book a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
