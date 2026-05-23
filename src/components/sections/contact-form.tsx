"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Send,
  Loader2,
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

export interface ContactFormProps {
  buttonText?: string;
  successTitle?: string;
  successDescription?: string;
  inputBgClassName?: string;
}

export function ContactForm({
  buttonText = "Get Free Consultation",
  successTitle = "Message Sent!",
  successDescription = "We'll get back to you within 24 hours.",
  inputBgClassName = "bg-white",
}: ContactFormProps) {
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
  
  const selectedCountry = useMemo(() => {
    return (
      countryCodeOptions.find(
        (country) => `${country.iso} ${country.value}` === selectedCountryCode
      ) ??
      countryCodeOptions.find((country) => country.iso === "AE") ??
      countryCodeOptions[0]
    );
  }, [selectedCountryCode]);

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
    <div>
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
            <p className="text-gray-950 font-semibold text-base">{successTitle}</p>
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
              {successDescription}
            </p>
          </div>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="name-input" className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                Full Name
              </label>
              <input
                id="name-input"
                {...register("name")}
                placeholder="Your Name"
                className={cn(
                  "w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-950 placeholder-gray-400 text-sm focus:border-brand-blue/50 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300",
                  inputBgClassName
                )}
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
                <div className={cn(
                  "flex w-full rounded-xl border border-gray-200 transition-all duration-300 focus-within:border-brand-blue/50 focus-within:bg-white focus-within:ring-1 focus-within:ring-brand-blue/30",
                  inputBgClassName
                )}>
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
                    placeholder="Phone"
                    aria-invalid={!!errors.phone}
                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-gray-950 placeholder-gray-400 outline-none"
                  />
                </div>

                {/* Dropdown Menu */}
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

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
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
                placeholder="Email Address"
                className={cn(
                  "w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-950 placeholder-gray-400 text-sm focus:border-brand-blue/50 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300",
                  inputBgClassName
                )}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Need Selection */}
            <div className="space-y-1.5">
              <label htmlFor="need-select" className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                How can we help?
              </label>
              <div className="relative">
                <select
                  id="need-select"
                  {...register("message")}
                  className={cn(
                    "w-full appearance-none px-4 py-3.5 pr-11 border border-gray-200 rounded-xl text-sm focus:border-brand-blue/50 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all duration-300",
                    selectedNeed ? "text-gray-950" : "text-gray-400",
                    inputBgClassName
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
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
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
              className="cta-attention group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isSubmitting ? (
                <Loader2 className="relative z-10 w-4 h-4 animate-spin" />
              ) : (
                <Send className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
              <span className="relative z-10">{buttonText}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
