"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";

export function WhyChooseSection() {
  return (
    <section className="py-[3.9rem] lg:py-[5.2rem] bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-blue/[0.02] blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-brand-blue text-xs font-bold tracking-[0.2em] uppercase bg-brand-blue/[0.06] px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-gray-900 leading-tight">
            We Don&apos;t Just Build. We Deliver{" "}
            <span className="text-brand-blue">Results.</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.slice(0, 4).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center group"
            >
              {/* Icon container */}
              <div className="relative mx-auto w-[72px] h-[72px] mb-6">
                <div className="absolute inset-0 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] transition-shadow duration-500" />
                <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-brand-blue/20 transition-colors duration-500" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-brand-blue transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>

              <h3 className="text-[17px] font-bold text-gray-900 mb-2.5">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-[13.5px] leading-relaxed max-w-[220px] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
