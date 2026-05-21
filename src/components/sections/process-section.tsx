"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-brand-blue text-xs font-bold tracking-[0.2em] uppercase bg-brand-blue/[0.06] px-4 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-gray-900 leading-tight">
            Simple Process. Clear{" "}
            <span className="text-brand-blue">Results.</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[56px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full origin-left"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #2563EB 0px, #2563EB 6px, transparent 6px, transparent 14px)",
                opacity: 0.25,
              }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center group"
              >
                {/* Step circle + number */}
                <div className="relative z-10 mx-auto mb-7">
                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md shadow-brand-blue/20">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Circle */}
                  <div className="w-[110px] h-[110px] mx-auto rounded-full bg-gradient-to-b from-[#f8fafc] to-white border-2 border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:border-brand-blue/20 group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
                    <step.icon className="w-8 h-8 text-brand-blue transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="text-[17px] font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed max-w-[230px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
