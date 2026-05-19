"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageSquare,
  Share2,
} from "lucide-react";

const footerLinks = {
  services: [
    "Air Freight",
    "Ocean Freight",
    "Road Freight",
    "Customs Clearance",
    "Project Cargo",
    "Cold Chain Logistics",
    "Trade Finance",
    "Corridor Management",
  ],
  corridors: [
    "Durban Corridor",
    "Beira Corridor",
    "Walvis Bay Corridor",
    "Dar es Salaam Corridor",
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-50 text-neutral-900 border-t border-neutral-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm font-heading">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-black font-heading font-bold text-sm tracking-tight leading-tight">
                  AGILENT
                </span>
                <span className="text-neutral-400 text-[9px] font-heading font-medium tracking-[0.25em] leading-tight">
                  FREIGHT
                </span>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-sm">
              The Corridor Managers. Delivering intelligent freight forwarding,
              corridor management, and trade logistics solutions across Southern
              Africa and global trade routes.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Globe },
                { icon: MessageSquare },
                { icon: Share2 },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-neutral-200 flex items-center justify-center transition-colors hover:border-neutral-300 hover:bg-neutral-100"
                >
                  <social.icon className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-medium text-[10px] tracking-[0.2em] uppercase mb-6 text-neutral-400">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Corridors */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-medium text-[10px] tracking-[0.2em] uppercase mb-6 text-neutral-400">
              Trade Corridors
            </h4>
            <ul className="space-y-3">
              {footerLinks.corridors.map((corridor) => (
                <li key={corridor}>
                  <span className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors cursor-default">
                    {corridor}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-medium text-[10px] tracking-[0.2em] uppercase mb-6 text-neutral-400">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <span className="text-neutral-500 text-sm">3 Dale Road Malborough, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href="tel:+263XXXXXXXXX" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                  +263 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href="mailto:info@agilentfreight.com" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                  info@agilentfreight.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Agilent Freight. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400 text-xs hover:text-neutral-600 transition-colors cursor-default">Privacy Policy</span>
            <span className="text-neutral-400 text-xs hover:text-neutral-600 transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
