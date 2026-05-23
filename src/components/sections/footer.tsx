"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { footerLinks, contactInfo, socialLinks } from "@/data/navigation";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
};

export function Footer() {
  return (
    <>
      <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
        {/* Background accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/[0.03] rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-1"
          >
            <Link
              href="/"
              className="relative mx-auto mb-4 block h-10 w-[190px] transition-opacity hover:opacity-90 sm:mx-0 sm:h-11 sm:w-[210px]"
              aria-label="AL Bechir home"
            >
            <Image
                src="/images/logo/al-bechir-logo.png"
                alt="AL Bechir"
                fill
                sizes="(max-width: 640px) 190px, 210px"
                className="object-contain object-center sm:object-left"
              />
            </Link>
            <p className="mx-auto mb-5 max-w-sm text-center text-sm leading-relaxed text-gray-500 sm:mx-0 sm:text-left">
              We build websites, landing pages, and ad systems that help
              businesses grow with more leads, calls, and sales.
            </p>
            {/* Social */}
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-blue/10 hover:border-brand-blue/20 hover:text-brand-blue transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0"
          >
            <h3 className="mb-4 text-sm font-semibold text-gray-950">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={`quick-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-brand-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="min-w-0"
          >
            <h3 className="mb-4 text-sm font-semibold text-gray-950">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={`service-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-brand-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 min-w-0 sm:col-span-1 lg:col-span-1"
          >
            <h3 className="mb-4 text-sm font-semibold text-gray-950">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-gray-500 text-sm hover:text-brand-blue transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors duration-200">
                    <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-gray-500 text-sm hover:text-brand-blue transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors duration-200">
                    <Mail className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-500 text-sm">
                <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                </div>
                {contactInfo.location}
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} AL Bechir for Global Buisness LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-600 text-sm hover:text-brand-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 text-sm hover:text-brand-blue transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      </footer>

      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-success text-white shadow-[0_12px_36px_rgba(34,197,94,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16a34a] hover:shadow-[0_16px_44px_rgba(34,197,94,0.45)]"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
