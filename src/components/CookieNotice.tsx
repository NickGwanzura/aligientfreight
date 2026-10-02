"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieNotice() {
  const [isOpen, setIsOpen] = useState(() =>
    typeof window !== "undefined" && !localStorage.getItem("cookie-consent")
  );

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-[#2B78B8]/20 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5 md:left-auto md:right-8 md:p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h4 className="font-heading text-sm font-semibold text-black">
                Cookie Policy
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                We use cookies to analyze traffic, remember your preferences, and
                optimize your experience on our platform. See our{" "}
                <a href="/privacy" className="font-semibold text-[#245F8F] underline underline-offset-2">Privacy Policy</a>.
              </p>
            </div>
            <div className="grid grid-cols-2 items-center gap-2 shrink-0 md:flex md:gap-3">
              <button
                onClick={handleDecline}
                className="rounded-lg border border-neutral-200 px-3 py-2.5 text-xs font-semibold text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-lg bg-[#245F8F] text-white text-xs font-bold px-4 py-2.5 hover:bg-[#1E5F96] active:scale-95 transition-all shadow-md shadow-neutral-900/10"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
