import { motion } from "framer-motion";
import { ArrowRight, Bot, MessageSquare, Zap, Shield, Cpu, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description: "Tailored models for automation, predictions, NLP, and data intelligence."
  },
  {
    icon: MessageSquare,
    title: "Powerful WhatsApp & Telegram Bots",
    description: "Fully automated bots for sales, support, lead generation, bookings, and more."
  },
  {
    icon: Zap,
    title: "End-to-End Integration",
    description: "We connect your bot or AI system with your CRM, website, app, or any internal software."
  },
  {
    icon: Shield,
    title: "Fast Delivery & Affordable Pricing",
    description: "Enterprise-level solutions designed to fit businesses of all sizes."
  }
];
const aiStackFeatures = [
  "AI-powered workflow automation",
  "Custom API design & integration",
  "LLM-powered data processing",
  "Document understanding & extraction",
  "AI-driven decision engines",
  "Real-time analytics dashboards",
  "Webhook & third-party integrations",
  "Fine-tuned ChatGPT / DeepSeek models"
];
const omniBotFeatures = [
  "AI chatbots for WhatsApp, Instagram & websites",
  "Lead capture + instant qualification",
  "24/7 automated customer support",
  "Conversational sales funnels",
  "Multi-language intelligent replies",
  "E-commerce and payment workflows",
  "Integrations with CRM, Google Sheets & APIs",
  "ChatGPT/DeepSeek smart conversation engine"
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
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">AI Solutions</span> & Smart Bot
            <br />
            Integrations for Every Business
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Unlock automation, intelligent customer engagement, and seamless workflows with our custom AI systems and WhatsApp/Telegram bot integrations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold mb-8"
          >
            Grow Faster. Work Smarter. <span className="text-primary">Automate Everything.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient" asChild>
              <Link to="/services">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link to="/about">
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative mx-auto max-w-4xl mt-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
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
          </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We help businesses leverage the power of Artificial Intelligence to automate operations, 
            support customers, increase sales, and scale effortlessly. From advanced AI models to 
            high-performance WhatsApp and Telegram bots — we build everything your business needs 
            to operate intelligently.
          </p>
        </motion.div>

<section className="container px-4 py-20 section-gradient">
  <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
        <span className="text-sm font-medium flex items-center gap-2">
          <Cpu className="w-4 h-4 text-blue-500" />
          AI Full-Stack Development
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Build Powerful AI-Driven Applications
      </h2>

      <p className="text-lg text-muted-foreground mb-6">
        We help businesses integrate AI into their full workflow — from backend APIs 
        to intelligent automation systems. Deliver smarter, faster operations with 
        custom LLMs, robust APIs, and real-time AI decision engines.
      </p>

      <div className="space-y-4">
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
            Automate complex tasks end-to-end
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
            Build scalable and secure APIs
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
            Reduce manual work by 60-90%
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
            Get faster insights from your data
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
      <h4 className="font-semibold mb-4">Capabilities</h4>

      <div className="grid grid-cols-1 gap-3">
        {aiStackFeatures.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>

  </div>
</section>


<section className="container px-4 py-20 section-gradient">
  <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
        <span className="text-sm font-medium flex items-center gap-2">
          <Bot className="w-4 h-4 text-purple-500" />
          Omnichannel AI Bots
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Automate Conversations Across All Platforms
      </h2>

      <p className="text-lg text-muted-foreground mb-6">
        Deliver seamless experiences on WhatsApp, Instagram, Facebook, websites 
        and more. Our AI bots handle sales, support, bookings, and follow-ups — 
        all automatically and intelligently.
      </p>

      <div className="space-y-4">
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
            Centralized automation for all platforms
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
            Increase sales & lead conversions
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
            Reduce support workload drastically
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
            Unified bot for all channels
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
      <h4 className="font-semibold mb-4">Supported Platforms</h4>

      <div className="grid grid-cols-1 gap-3">
        {omniBotFeatures.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>

  </div>
</section>
{/* 

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Bot, title: "AI Full-Stack Development & Intelligent API Automation", desc: "End-to-end AI workflows tailored for your business Real-time data processing & prediction engines \nCustom API orchestration for apps, CRMs, bots & dashboards\nFast deployment with scalable microservices\nEnterprise-grade performance & security" },
            { icon: MessageSquare, title: "WhatsApp & Telegram Bots", desc: "Automated messaging for sales, support, and engagement" },
            { icon: Zap, title: "Process Automation", desc: "Streamline workflows and eliminate repetitive tasks" },
            { icon: Users, title: "Customer Engagement", desc: "24/7 intelligent customer support and lead qualification" }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div> */}
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="container px-4 py-20 section-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="container px-4 py-20">
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already discovered the power of AI automation. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-gradient" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </motion.div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
