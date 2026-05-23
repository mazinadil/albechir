"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-12 lg:py-[5.2rem] bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-blue text-xs font-bold tracking-[0.2em] uppercase bg-brand-blue/[0.06] px-4 py-1.5 rounded-full"
          >
            Our Services
          </motion.span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-gray-900 leading-tight">
            Services Built to Help Your Business{" "}
            <span className="relative inline-block">
              <span className="text-brand-blue">Grow</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7 Q 25 0 50 4 Q 75 8 100 1" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 text-center transition-all duration-500 hover:border-brand-blue/20 hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:min-h-[300px] sm:items-start sm:p-6 sm:text-left lg:min-h-[344px] lg:p-7 lg:hover:-translate-y-2">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/0 to-transparent group-hover:via-brand-blue transition-all duration-500" />

                {/* Icon */}
                <div className="relative mb-4 h-12 w-12 sm:mb-6 sm:h-14 sm:w-14">
                  <div className="absolute inset-0 rounded-2xl bg-brand-blue/8 group-hover:bg-brand-blue/12 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-brand-blue transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-[17px] font-bold text-gray-900 mb-3 group-hover:text-brand-blue-dark transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mb-5 text-[13.5px] leading-relaxed text-gray-500 sm:mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.href}
                  className="mt-1 inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold transition-all duration-300 group-hover:gap-3 sm:mt-auto"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
