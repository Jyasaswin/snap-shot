import { motion } from "framer-motion";
import { Target, Lightbulb, Code, Rocket, HeartHandshake, Bot, Cpu, Zap, Settings, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business needs, challenges, and goals.",
    icon: Lightbulb
  },
  {
    step: "02",
    title: "Prototype",
    description: "We create a proof of concept to validate the solution before full development.",
    icon: Code
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds your custom AI solution with precision and best practices.",
    icon: Settings
  },
  {
    step: "04",
    title: "Deployment",
    description: "We deploy and integrate the solution seamlessly into your existing systems.",
    icon: Rocket
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "We provide continuous support, updates, and optimization for your AI systems.",
    icon: HeartHandshake
  }
];

const services = [
  { icon: Bot, title: "AI Development", desc: "Custom AI models and intelligent systems" },
  { icon: Cpu, title: "Chatbot Development", desc: "WhatsApp, Telegram & web chatbots" },
  { icon: Zap, title: "Integrations", desc: "Seamless connection with your existing tools" },
  { icon: Settings, title: "Automation", desc: "Workflow and process automation" },
  { icon: Globe, title: "Custom API Solutions", desc: "Tailored backend solutions for any need" }
];

const About = () => {
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
            About <span className="text-gradient">AI Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to make businesses smarter through AI and automation.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <Target className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-muted-foreground italic">
            "To make businesses smarter through AI and automation."
          </p>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in building intelligent solutions that transform how businesses operate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
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
              <p className="text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container px-4 py-20 section-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful delivery of every project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 mb-8 last:mb-0"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{step.step}</span>
              </div>
              <div className="glass rounded-xl p-6 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Innovation", desc: "We stay at the cutting edge of AI technology to deliver the best solutions." },
            { title: "Quality", desc: "Every project is built with meticulous attention to detail and best practices." },
            { title: "Partnership", desc: "We work closely with our clients as true partners in their success." }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6 text-center"
            >
              <h3 className="font-semibold text-xl mb-2 text-primary">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
