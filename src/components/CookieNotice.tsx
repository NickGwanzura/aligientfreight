"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieNotice() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

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
          className="fixed bottom-6 left-6 right-6 z-50 mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white/90 p-5 shadow-2xl backdrop-blur-md md:left-auto md:right-8 md:p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h4 className="font-heading text-sm font-semibold text-black">
                Cookie Policy
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                We use cookies to analyze traffic, remember your preferences, and
                optimize your experience on our platform. By continuing to browse, you agree to our use of cookies.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors py-2 px-3"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-lg bg-black text-white text-xs font-bold px-5 py-2.5 hover:bg-black/90 active:scale-95 transition-all shadow-md shadow-neutral-900/10"
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
