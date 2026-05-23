"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { contactInfo } from "@/data/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/sections/footer";
import { ContactForm } from "@/components/sections/contact-form";

const timelineSteps = [
  {
    step: "01",
    title: "Request Received",
    description: "Your inquiry goes directly to our core growth strategy team. You will receive an immediate automated confirmation email.",
  },
  {
    step: "02",
    title: "Analysis & Audit",
    description: "Within 2 business hours, our marketing and technical specialists will audit your current online presence or business niche.",
  },
  {
    step: "03",
    title: "15-Min Free Session",
    description: "We connect over Zoom or a direct call to present our roadmap and show you exactly how to double your current conversions.",
  },
];

const stats = [
  { value: "150+", label: "Success Projects" },
  { value: "98%", label: "Lead Growth Rate" },
  { value: "5.0 ★", label: "Client Satisfaction" },
];

export function ContactClient() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-white">
        {/* ═══════ Background Accent Effects ═══════ */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(37,99,235,0.14),transparent)]" />
          
          {/* Animated diagonal beams */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-[100px] left-0 w-[500px] h-[1000px] opacity-[0.06] rotate-[-35deg]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.5) 45%, rgba(59,130,246,0.6) 50%, rgba(37,99,235,0.5) 55%, transparent 100%)",
              }}
            />
            <div
              className="absolute -top-[200px] left-[45%] w-[400px] h-[1000px] opacity-[0.04] rotate-[-35deg]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.4) 48%, rgba(96,165,250,0.5) 50%, rgba(37,99,235,0.4) 52%, transparent 100%)",
              }}
            />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute top-[15%] right-[5%] w-[450px] h-[450px] rounded-full bg-brand-blue/[0.06] blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-blue/[0.04] blur-[100px] animate-pulse-slow" />
        </div>

        {/* ═══════ Main Page Content Container ═══════ */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20">
          
          {/* ─── Hero Heading Header ─── */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-blue/[0.06] border border-brand-blue/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
              <span className="text-brand-blue text-[11px] font-bold tracking-[0.16em] uppercase">
                Let&apos;s Collaborate
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 leading-[1.12]"
            >
              Let&apos;s Discuss Your Next <br />
              <span className="gradient-text">Big Growth Phase</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind or want to scale your lead generation? Contact our strategy team today for a completely free audit and consultation.
            </motion.p>
          </div>

          {/* ─── Two-Column Interactive Layout ─── */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
            
            {/* ─── LEFT COLUMN: Glassmorphic Form ─── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-[0_20px_50px_rgba(15,23,42,0.04)] overflow-hidden"
            >
              {/* Subtle top decoration beam */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-glow to-brand-blue-dark" />

              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-2">
                Select a Service & Connect
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Fill in the details below. Our technical and sales experts usually follow up in under 2 hours.
              </p>

              <ContactForm
                buttonText="Get Free Growth Strategy"
                successTitle="Inquiry Successfully Received!"
                successDescription="Thank you for reaching out. We have logged your request and a strategy expert is preparing your audit roadmap right now. Expect a message shortly."
                inputBgClassName="bg-gray-50/50"
              />
            </motion.div>

            {/* ─── RIGHT COLUMN: Connective details & Timeline ─── */}
            <div className="space-y-10">
              
              {/* WhatsApp direct card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-6 rounded-2xl bg-[#22C55E]/[0.06] border border-[#22C55E]/15 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#22C55E]/10 rounded-full blur-xl" />
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <div className="space-y-3.5 flex-1">
                    <div>
                      <h3 className="font-bold text-gray-950 text-base">Instant WhatsApp Chat</h3>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        Prefer instant messaging? Chat with our team right now on WhatsApp for rapid feedback.
                      </p>
                    </div>
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-success text-white text-xs font-bold rounded-xl shadow-md shadow-brand-success/20 hover:shadow-lg hover:shadow-brand-success/35 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span>Start Chatting</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Direct Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_12px_40px_rgba(15,23,42,0.02)] space-y-4"
              >
                <h3 className="font-bold text-gray-950 text-[15px] border-b border-gray-100 pb-3">
                  Direct Contact Information
                </h3>
                
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3.5 text-gray-600 hover:text-brand-blue group transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400">Email Address</p>
                      <p className="text-sm font-semibold text-gray-950">{contactInfo.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3.5 text-gray-600 hover:text-brand-blue group transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400">Call Support</p>
                      <p className="text-sm font-semibold text-gray-950">{contactInfo.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 text-gray-600">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-brand-blue">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400">Working Hours</p>
                      <p className="text-sm font-semibold text-gray-950">{contactInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-gray-600">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-brand-blue">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400">Primary Office</p>
                      <p className="text-sm font-semibold text-gray-950">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ─── Timeline "What Happens Next" ─── */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="font-extrabold text-gray-950 text-lg">
                  What Happens Next?
                </h3>
                
                <div className="space-y-6 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-brand-blue/30 before:to-transparent">
                  {timelineSteps.map((step) => (
                    <div key={step.step} className="flex gap-4 relative">
                      <div className="w-10.5 h-10.5 rounded-full bg-white border-2 border-brand-blue text-brand-blue flex items-center justify-center flex-shrink-0 font-extrabold text-xs shadow-sm z-10">
                        {step.step}
                      </div>
                      <div className="space-y-1 pt-1.5">
                        <h4 className="font-bold text-gray-950 text-sm">{step.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    className="text-center p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <p className="text-brand-blue font-extrabold text-base">{stat.value}</p>
                    <p className="text-gray-500 text-[10px] mt-0.5 leading-tight font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
