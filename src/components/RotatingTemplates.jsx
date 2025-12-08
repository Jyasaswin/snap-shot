// src/pages/home.tsx  (or wherever your Home/Index component lives)
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

/**
 * Two large template cards in a cylinder-like 3D view that respond to vertical scroll.
 * - Black theme
 * - Large templates so back slides are not visible
 * - Fade-in + glow when entering viewport
 * - No auto-rotate — user scroll controls rotation
 */

const TemplateCard: React.FC<{
  title: string;
  subtitle?: string;
  points: string[];
  icon?: React.ComponentType<any>;
  sideHeading?: string;
}> = ({ title, subtitle, points, icon: Icon, sideHeading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className="panel relative mx-auto rounded-3xl p-12 min-h-[520px] md:min-h-[640px] max-w-6xl bg-gradient-to-br from-[#0b0b0b] via-[#0f0f11] to-[#111013] border border-neutral-800 shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
    >
      <div className="absolute -left-8 top-8 rotate-[-90deg] text-sm tracking-wider text-neutral-500 hidden md:block">
        {sideHeading}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
              {Icon ? <Icon className="w-7 h-7 text-primary" /> : <Cpu className="w-7 h-7 text-primary" />}
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white leading-tight">{title}</h3>
              {subtitle && <p className="text-sm text-neutral-400 mt-1">{subtitle}</p>}
            </div>
          </div>

          <ul className="space-y-3 mt-6">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-3 h-3 rounded-full bg-primary/80 shadow-[0_0_14px_rgba(99,102,241,0.16)]" />
                <p className="text-neutral-300">{p}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button size="lg" className="button-gradient" asChild>
              <Link to="/services">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-[#061018] to-[#0b1320] border border-neutral-800 flex items-center justify-center p-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Sample UI Preview</h4>
              <p className="text-sm text-neutral-400 max-w-sm mx-auto">
                A preview block — replace with a real screenshot, an animated gif, or an illustration of your service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="glow absolute -inset-1 rounded-3xl pointer-events-none opacity-0 md:opacity-40" />
    </motion.div>
  );
};

const Home: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [angle, setAngle] = useState(0);

  // This effect maps vertical scroll to a small rotateX to give cylinder-like feeling.
  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const screenCenter = window.innerHeight / 2;
      // compute offset of wrap center relative to viewport center, normalized -1..1
      const wrapCenterY = rect.top + rect.height / 2;
      const offset = (wrapCenterY - screenCenter) / screenCenter; // -2 .. 2 typically
      // keep angle small so effect is subtle; tweak multiplier to taste
      const newAngle = Math.max(Math.min(offset * 12, 18), -18); // clamp -18..18 degrees
      setAngle(newAngle);
    };

    // initial
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050506] text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative container px-4 pt-28 pb-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            AI Solutions & Smart Bots — Build, Integrate, Scale
          </h1>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl">
            We design full-stack AI systems, public APIs, and intelligent messaging bots that plug into business workflows and drive customer engagement.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="button-gradient" asChild>
              <Link to="/services">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link to="/about">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cylinder-like scrolling area */}
      <section
        ref={wrapRef}
        className="py-20"
        style={{
          perspective: "1500px",
        }}
      >
        <div
          className="mx-auto max-w-7xl px-4"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${angle}deg)`,
            transition: "transform 0.12s linear",
          }}
        >
          {/* Large stacked templates */}
          <div className="space-y-14">
            <TemplateCard
              title="Full-Stack AI & Public APIs"
              subtitle="Build full pipelines, from model training to production APIs"
              sideHeading="AI & APIs"
              icon={Cpu}
              points={[
                "Custom models for prediction, NLP, vision and automation",
                "Scalable REST / GraphQL APIs for integration",
                "Monitoring, logging, latency & security best practices",
                "CI/CD for models and infra — deploy reliably",
              ]}
            />

            <TemplateCard
              title="Messaging Bots — WhatsApp, Telegram & More"
              subtitle="Conversational flows, automations and integrations"
              sideHeading="Messaging Bots"
              icon={Bot}
              points={[
                "WhatsApp & Telegram bots for sales, support & booking",
                "Context-aware conversations with fallback escalation",
                "CRM / DB / Payment integrations for end-to-end flows",
                "Analytics, retention & proactive outreach capabilities",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Replace previous 'What we do' or feature grid as needed — kept minimal here */}
      <section className="container px-4 py-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-3">Why partners choose us</h2>
          <p className="text-neutral-300">We deliver practical, production-ready AI and bot systems with clear ROI and fast time-to-value.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
