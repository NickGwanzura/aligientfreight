"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
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
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-[#2B78B8] text-white text-xs border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/85">
            <a
              href="tel:+263242313707"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+263 24 231 3707</span>
            </a>
            <a
              href="mailto:Info@agilentzw.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>Info@agilentzw.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-white/65 tracking-wider uppercase">
            <span>3 Dale Road Malborough, Harare, Zimbabwe</span>
            <span className="w-px h-3 bg-white/30" />
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
            ? "top-0 lg:top-8 bg-[#2B78B8]/95 backdrop-blur-xl border-b border-white/20"
            : "top-0 lg:top-8 bg-[#2B78B8]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/agilient-freight-logo.svg"
              alt="Agilent Freight"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-white/85 hover:text-white transition-colors font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white text-[#245F8F] text-xs font-semibold tracking-wide uppercase transition-colors hover:bg-white/85"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
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
            className="fixed inset-0 z-30 bg-[#2B78B8] pt-28 px-6 lg:hidden"
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
                  className="text-3xl text-white font-heading font-light hover:text-white/70 transition-colors py-3 border-b border-white/20"
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
                className="mt-8 px-6 py-4 bg-white text-[#245F8F] text-center font-semibold tracking-wide uppercase text-sm"
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/263789301172"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Agilient Freight on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
