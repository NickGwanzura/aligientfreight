"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#corridors", label: "Corridors" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white text-neutral-900 text-xs border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-neutral-500">
            <a
              href="tel:+263789301172"
              className="flex items-center gap-2 hover:text-neutral-900 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+263 78 930 1172</span>
            </a>
            <a
              href="mailto:info@agilentfreight.com"
              className="flex items-center gap-2 hover:text-neutral-900 transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>info@agilentfreight.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-neutral-400 tracking-wider uppercase">
            <span>3 Dale Road Malborough, Harare, Zimbabwe</span>
            <span className="w-px h-3 bg-neutral-300" />
            <span>The Corridor Managers</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-0 lg:top-8 bg-white/90 backdrop-blur-xl border-b border-neutral-200"
            : "top-0 lg:top-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black flex items-center justify-center">
              <span className="text-white font-bold text-sm font-heading">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-black font-heading font-bold text-sm tracking-tight leading-tight">
                AGILENT
              </span>
              <span className="text-neutral-500 text-[9px] font-heading font-medium tracking-[0.25em] leading-tight">
                FREIGHT
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-black text-white text-xs font-semibold tracking-wide uppercase hover:bg-black/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white pt-28 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl text-black font-heading font-light hover:text-neutral-600 transition-colors py-3 border-b border-neutral-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-6 py-4 bg-black text-white text-center font-semibold tracking-wide uppercase text-sm"
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
