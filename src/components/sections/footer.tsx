"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:pr-20 lg:pr-24">
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
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20ba5a] hover:shadow-[0_14px_38px_rgba(37,211,102,0.45)] hover:scale-105"
      >
        <WhatsAppIcon className="h-7.5 w-7.5 text-white" />
      </a>
    </>
  );
}
