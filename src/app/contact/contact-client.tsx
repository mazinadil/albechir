"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Send,
  Loader2,
  Sparkles,
  ChevronDown,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { countryCodeOptions } from "@/data/country-codes";
import {
  contactFormSchema,
  contactNeedPlaceholder,
  contactNeedOptions,
  type ContactFormData,
} from "@/lib/schemas/contact";
import { contactInfo } from "@/data/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/sections/footer";
import { cn } from "@/lib/utils";

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

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-start gap-4 p-6 bg-brand-success/10 border border-brand-success/20 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-success/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-success" />
                  </div>
                  <div>
                    <p className="text-gray-950 font-semibold text-base">Inquiry Successfully Received!</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Thank you for reaching out. We have logged your request and a strategy expert is preparing your audit roadmap right now. Expect a message shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        id="name-input"
                        {...register("name")}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-950 placeholder-gray-400 text-sm focus:border-brand-blue/50 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone-input" className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Mobile Number
                      </label>
                      <div className="relative" ref={countryPickerRef}>
                        <input type="hidden" {...register("countryCode")} />
                        <div className="flex w-full rounded-xl border border-gray-200 bg-gray-50/50 transition-all duration-300 focus-within:border-brand-blue/50 focus-within:bg-white focus-within:ring-1 focus-within:ring-brand-blue/30">
                          <div className="relative shrink-0 border-r border-gray-200">
                            <button
                              type="button"
                              aria-label="Country code selector"
                              aria-haspopup="listbox"
                              aria-expanded={isCountryOpen}
                              onClick={() => setIsCountryOpen((open) => !open)}
                              className="flex min-h-[48px] w-[95px] items-center justify-between gap-1.5 py-3 pl-3 pr-2 text-left text-xs font-bold text-gray-950 outline-none"
                            >
                              <span className="truncate">
                                {selectedCountry.iso} {selectedCountry.value}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "h-3.5 w-3.5 shrink-0 text-gray-500 transition-transform",
                                  isCountryOpen && "rotate-180"
                                )}
                              />
                            </button>
                          </div>
                          <input
                            id="phone-input"
                            {...register("phone")}
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel-national"
                            placeholder="Phone number"
                            aria-invalid={!!errors.phone}
                            className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-gray-950 placeholder-gray-400 outline-none"
                          />
                        </div>

                        {/* Searchable Dropdown menu */}
                        <AnimatePresence>
                          {isCountryOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.15, ease: "easeOut" }}
                              className="absolute left-0 top-[calc(100%+8px)] z-50 w-[340px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl"
                            >
                              <div className="border-b border-gray-100 p-3">
                                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
                                  <Search className="h-4 w-4 text-brand-blue" />
                                  <input
                                    value={countrySearch}
                                    onChange={(event) =>
                                      setCountrySearch(event.target.value)
                                    }
                                    placeholder="Search country or dial code"
                                    className="min-w-0 flex-1 bg-transparent text-sm text-gray-950 placeholder-gray-400 outline-none"
                                  />
                                </div>
                              </div>
                              <div
                                role="listbox"
                                className="max-h-64 overflow-y-auto p-1.5"
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
                                          ? "bg-brand-blue/10 text-gray-950"
                                          : "text-gray-600 hover:bg-brand-blue/[0.05] hover:text-gray-950"
                                      )}
                                    >
                                      <span className="flex h-8 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-[11px] font-bold text-brand-blue">
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
                        </AnimatePresence>
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    
                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        placeholder="e.g. john@business.com"
                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-950 placeholder-gray-400 text-sm focus:border-brand-blue/50 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* What Do You Need Selector */}
                    <div className="space-y-1.5">
                      <label htmlFor="need-select" className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                        How can we help?
                      </label>
                      <div className="relative">
                        <select
                          id="need-select"
                          {...register("message")}
                          className={cn(
                            "w-full appearance-none px-4 py-3.5 pr-11 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:border-brand-blue/50 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300",
                            selectedNeed ? "text-gray-950" : "text-gray-400"
                          )}
                        >
                          <option value="" disabled className="bg-white text-gray-400">
                            {contactNeedPlaceholder}
                          </option>
                          {contactNeedOptions.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="bg-white text-gray-950"
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-500" />
                      </div>
                      {errors.message && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {serverError && (
                    <p className="text-sm font-semibold text-red-500 bg-red-50/80 border border-red-100 p-3.5 rounded-xl">
                      {serverError}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-attention group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark" />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {isSubmitting ? (
                        <Loader2 className="relative z-10 w-4.5 h-4.5 animate-spin" />
                      ) : (
                        <Send className="relative z-10 w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                      
                      <span className="relative z-10">Get Free Growth Strategy</span>
                    </button>
                  </div>
                </form>
              )}
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
