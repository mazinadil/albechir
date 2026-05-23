"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";

const benefits = [
  "Free Consultation",
  "No Obligation",
  "Custom Strategy",
  "Fast Response",
];

export function CtaSection() {
  return (
    <section id="contact" className="py-[3.9rem] lg:py-[5.2rem] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f4f8ff] to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_50%,rgba(37,99,235,0.12),transparent)]" />
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7"
          >
            <span className="inline-block text-brand-blue text-xs font-bold tracking-[0.2em] uppercase bg-brand-blue/[0.06] border border-brand-blue/10 px-4 py-1.5 rounded-full">
              Ready to Grow Your Business?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 leading-[1.15]">
              Let&apos;s Turn Your Traffic
              <br />
              Into <span className="gradient-text">Real Customers</span>
            </h2>

            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Book a free consultation and let&apos;s discuss how we can help
              you get more leads, inquiries, and sales.
            </p>

            {/* Reusable Modular Contact Form */}
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>

          {/* Right - Benefits + Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-blue/20 transition-colors duration-300"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-gray-950 text-sm font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Team card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_18px_46px_rgba(37,99,235,0.08)] overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/[0.06] rounded-full blur-[60px]" />

              <div className="relative flex items-center gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center border border-brand-blue/10">
                    <Sparkles className="w-7 h-7 text-brand-blue" />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border-2 border-blue-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-950 font-semibold text-[15px]">
                    AL Bechir Team
                  </p>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Usually responds within 2 hours
                  </p>
                  <div className="flex items-center gap-2 mt-2.5">
                    <div className="flex -space-x-2">
                      {[
                        "from-blue-400 to-blue-600",
                        "from-purple-400 to-purple-600",
                        "from-emerald-400 to-emerald-600",
                      ].map((gradient, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} border-2 border-white flex items-center justify-center`}
                        >
                          <span className="text-white text-[8px] font-bold">
                            {["M", "A", "S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs">+5 experts</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats mini cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "150+", label: "Projects" },
                { value: "98%", label: "Satisfaction" },
                { value: "5★", label: "Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  className="text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                  <p className="text-gray-950 font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

