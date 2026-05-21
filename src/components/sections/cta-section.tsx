"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Send,
  Loader2,
  Sparkles,
  ChevronDown,
  Search,
} from "lucide-react";
import { countryCodeOptions } from "@/data/country-codes";
import {
  contactFormSchema,
  contactNeedPlaceholder,
  contactNeedOptions,
  type ContactFormData,
} from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

const benefits = [
  "Free Consultation",
  "No Obligation",
  "Custom Strategy",
  "Fast Response",
];

export function CtaSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryPickerRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      countryCode: "AE +971",
      message: "",
    },
  });
  const selectedNeed = useWatch({ control, name: "message" });
  const selectedCountryCode = useWatch({ control, name: "countryCode" });
  const selectedCountry =
    countryCodeOptions.find(
      (country) => `${country.iso} ${country.value}` === selectedCountryCode
    ) ??
    countryCodeOptions.find((country) => country.iso === "AE") ??
    countryCodeOptions[0];

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();

    if (!query) {
      return countryCodeOptions;
    }

    return countryCodeOptions.filter((country) =>
      `${country.iso} ${country.name} ${country.value}`
        .toLowerCase()
        .includes(query)
    );
  }, [countrySearch]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        countryPickerRef.current &&
        !countryPickerRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setServerError("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong");
      }

      setIsSubmitted(true);
      reset({
        countryCode: "AE +971",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_50%,rgba(37,99,235,0.08),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
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

            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-white leading-[1.15]">
              Let&apos;s Turn Your Traffic
              <br />
              Into <span className="gradient-text">Real Customers</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Book a free consultation and let&apos;s discuss how we can help
              you get more leads, inquiries, and sales.
            </p>

            {/* Form */}
            <div className="mt-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 p-5 bg-brand-success/10 border border-brand-success/20 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-success/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-success" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Message Sent!</p>
                    <p className="text-gray-400 text-sm">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-white placeholder-gray-500 text-sm focus:border-brand-blue/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative" ref={countryPickerRef}>
                        <input type="hidden" {...register("countryCode")} />
                        <div className="flex w-full rounded-xl border border-white/[0.06] bg-white/[0.04] transition-all duration-300 focus-within:border-brand-blue/50 focus-within:bg-white/[0.06] focus-within:ring-1 focus-within:ring-brand-blue/30">
                          <div className="relative shrink-0 border-r border-white/[0.06]">
                            <button
                              type="button"
                              aria-label="Country code"
                              aria-haspopup="listbox"
                              aria-expanded={isCountryOpen}
                              onClick={() => setIsCountryOpen((open) => !open)}
                              className="flex min-h-[50px] w-[90px] items-center justify-between gap-1.5 py-3.5 pl-3 pr-2 text-left text-[11px] font-semibold text-white outline-none"
                            >
                              <span className="truncate">
                                {selectedCountry.iso} {selectedCountry.value}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "h-3 w-3 shrink-0 transition-transform",
                                  isCountryOpen && "rotate-180"
                                )}
                              />
                            </button>
                          </div>
                          <input
                            {...register("phone")}
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel-national"
                            placeholder="Phone"
                            aria-invalid={!!errors.phone}
                            className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none"
                          />
                        </div>

                        {isCountryOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.16, ease: "easeOut" }}
                            className="absolute left-0 top-[calc(100%+8px)] z-50 w-[340px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08152d]/95 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                          >
                            <div className="border-b border-white/[0.06] p-3">
                              <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.05] px-3 py-2.5">
                                <Search className="h-4 w-4 text-brand-blue" />
                                <input
                                  value={countrySearch}
                                  onChange={(event) =>
                                    setCountrySearch(event.target.value)
                                  }
                                  placeholder="Search country or code"
                                  className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                                />
                              </div>
                            </div>
                            <div
                              role="listbox"
                              className="max-h-72 overflow-y-auto p-1.5"
                            >
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                  <button
                                    key={`${country.iso}-${country.value}`}
                                    type="button"
                                    role="option"
                                    aria-selected={
                                      selectedCountry.iso === country.iso
                                    }
                                    onClick={() => {
                                      setValue(
                                        "countryCode",
                                        `${country.iso} ${country.value}`,
                                        {
                                          shouldDirty: true,
                                          shouldValidate: true,
                                        }
                                      );
                                      setCountrySearch("");
                                      setIsCountryOpen(false);
                                    }}
                                    className={cn(
                                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                                      selectedCountry.iso === country.iso
                                        ? "bg-brand-blue/15 text-white"
                                        : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                                    )}
                                  >
                                    <span className="flex h-8 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[11px] font-bold text-brand-blue">
                                      {country.iso}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="block truncate text-sm font-semibold">
                                        {country.name}
                                      </span>
                                      <span className="block text-xs text-gray-500">
                                        {country.value}
                                      </span>
                                    </span>
                                  </button>
                                ))
                              ) : (
                                <div className="px-3 py-8 text-center text-sm text-gray-500">
                                  No countries found
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-white placeholder-gray-500 text-sm focus:border-brand-blue/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <select
                          {...register("message")}
                          className={cn(
                            "w-full appearance-none px-4 py-3.5 pr-11 bg-white/[0.04] border border-white/[0.06] rounded-xl text-sm focus:border-brand-blue/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300",
                            selectedNeed ? "text-white" : "text-gray-500"
                          )}
                        >
                          <option value="" disabled className="bg-[#0b2a63] text-gray-500">
                            {contactNeedPlaceholder}
                          </option>
                          {contactNeedOptions.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="bg-[#0b2a63] text-white"
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                      </div>
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {serverError && (
                    <p className="text-sm text-red-400">{serverError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta-attention group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isSubmitting ? (
                      <Loader2 className="relative z-10 w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="relative z-10 w-4 h-4" />
                    )}
                    <span className="relative z-10">Get Free Consultation</span>
                  </button>
                </form>
              )}
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
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:border-brand-blue/10 transition-colors duration-300"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-white text-sm font-medium">
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
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/[0.06] rounded-full blur-[60px]" />

              <div className="relative flex items-center gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center border border-brand-blue/10">
                    <Sparkles className="w-7 h-7 text-brand-blue" />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-brand-navy border-2 border-brand-navy-light flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px]">
                    AL Bechir Team
                  </p>
                  <p className="text-gray-400 text-sm mt-0.5">
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
                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} border-2 border-brand-navy-light flex items-center justify-center`}
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
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                >
                  <p className="text-white font-bold text-lg">{stat.value}</p>
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
