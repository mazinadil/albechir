"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Megaphone,
  Globe2,
  Headphones,
} from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, text: "Conversion Focused\nStrategy" },
  { icon: Megaphone, text: "Meta Ads\nExperts" },
  { icon: Globe2, text: "UAE / GCC\nMarket Understanding" },
  { icon: Headphones, text: "Fast & Reliable\nSupport" },
];

export function HeroSection() {
  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", "#contact");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-white">
      {/* ═══════ Background Effects ═══════ */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.14),transparent)]" />

        {/* Animated diagonal beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-[200px] left-0 w-[600px] h-[1200px] opacity-[0.08] rotate-[-35deg]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.6) 45%, rgba(59,130,246,0.8) 50%, rgba(37,99,235,0.6) 55%, transparent 100%)",
            }}
          />
          <div
            className="absolute -top-[100px] left-[30%] w-[400px] h-[1200px] opacity-[0.06] rotate-[-35deg]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.5) 48%, rgba(96,165,250,0.6) 50%, rgba(37,99,235,0.5) 52%, transparent 100%)",
            }}
          />
          <div
            className="absolute -top-[300px] left-[55%] w-[300px] h-[1200px] opacity-[0.05] rotate-[-35deg]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.4) 49%, rgba(147,197,253,0.5) 50%, rgba(37,99,235,0.4) 51%, transparent 100%)",
            }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Blue orb glow */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.06] blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-brand-blue/[0.04] blur-[100px] animate-pulse-slow" />
      </div>

      {/* ═══════ Content ═══════ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[5.2rem] lg:pt-32 pb-14 lg:pb-16">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-8 items-center">
          {/* ─── Left Content ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 space-y-6 lg:order-1"
          >
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2.5"
            >
              {["Websites", "Ads", "Leads", "Sales"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="text-brand-blue text-[11px] font-bold tracking-[0.16em] uppercase"
                >
                  {i > 0 && (
                    <span className="text-brand-blue/30 mr-2.5">•</span>
                  )}
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2rem] min-[390px]:text-[2.1rem] sm:text-5xl lg:text-[2.85rem] xl:text-[3rem] font-extrabold leading-[1.1] sm:leading-[1.12] text-gray-950"
            >
              <span className="lg:whitespace-nowrap">Websites & Meta Ads </span>
              <br className="hidden lg:block" />
              <span className="lg:whitespace-nowrap">
                That Turn Visitors Into{" "}
              </span>
              <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="gradient-text">Real Clients</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-blue-glow rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-600 text-[17px] max-w-xl leading-relaxed"
            >
              We build conversion-focused websites, landing pages, and Meta Ads
              that generate more leads, WhatsApp messages, calls, and sales for
              your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3.5 pt-1"
            >
              <Link
                href="/#contact"
                onClick={scrollToContact}
                className="cta-attention group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-gray-200 bg-white text-gray-900 text-sm font-semibold rounded-lg transition-all duration-300 hover:border-brand-blue/20 hover:bg-brand-blue/[0.04] hover:shadow-[0_16px_34px_rgba(37,99,235,0.12)]"
              >
                View Our Work
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── Right: Generated Device Visual ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto aspect-[16/10] w-full overflow-hidden rounded-[14px] sm:max-w-[620px] lg:order-2 lg:mx-0 lg:aspect-[3/2] lg:max-w-[590px] lg:rounded-[16px]"
          >
            <div className="absolute -inset-5 rounded-[28px] bg-brand-blue/[0.08] blur-[44px] lg:-inset-8 lg:rounded-[36px] lg:blur-[60px]" />
            <Image
              src="/images/generated/al-bechir-hero-devices.jpg"
              alt="Laptop and phone website marketing mockup"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 590px"
              className="object-cover object-center drop-shadow-[0_18px_46px_rgba(0,0,0,0.38)] lg:drop-shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            />
          </motion.div>
        </div>

        {/* ─── Trust Badges ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-11 pt-5 lg:mt-16 lg:pt-7 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all duration-300">
                  <badge.icon className="w-4.5 h-4.5 text-brand-blue" />
                </div>
                <span className="text-xs text-gray-600 font-semibold leading-tight whitespace-pre-line group-hover:text-gray-900 transition-colors">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
