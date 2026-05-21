"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", "#contact");
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-brand-navy/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/[0.04]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="relative block h-10 w-[188px] transition-opacity hover:opacity-90"
            aria-label="AL Bechir home"
          >
            <Image
              src="/images/logo/al-bechir-logo-white-text.png"
              alt="AL Bechir"
              fill
              sizes="188px"
              priority
              className="object-contain object-left drop-shadow-[0_0_18px_rgba(37,99,235,0.2)]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/[0.06] rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/#contact"
              onClick={scrollToContact}
              className="cta-attention relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden group/btn transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Free Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-brand-navy-light/95 backdrop-blur-xl border-t border-white/[0.04] overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded-xl transition-all",
                        pathname === link.href
                          ? "text-white bg-white/[0.04]"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
              ))}
              <div className="pt-4 px-2">
                <Link
                  href="/#contact"
                  onClick={scrollToContact}
                  className="cta-attention block w-full text-center px-5 py-3 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white text-sm font-semibold rounded-xl shadow-lg shadow-brand-blue/20 transition-all hover:shadow-brand-blue/30"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
