"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowLeftRight, Truck, Link2 } from "lucide-react";

const metrics = [
  { icon: MapPin, title: "Regional Coverage", subtitle: "Southern Africa & Beyond" },
  { icon: ArrowLeftRight, title: "Cross Border Operations", subtitle: "Seamless Corridor Management" },
  { icon: Truck, title: "Air, Ocean & Road", subtitle: "Multi-Modal Solutions" },
  { icon: Link2, title: "End-to-End Logistics", subtitle: "Complete Supply Chain Control" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function TrustStrip() {
  return (
    <section className="relative w-full border-b border-neutral-200 bg-white">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              variants={itemVariants}
              className="group relative flex items-start gap-4 px-6 py-8 transition-colors hover:bg-neutral-50 sm:px-8 lg:py-10"
            >
              {index < metrics.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-neutral-200 lg:block" />
              )}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 text-neutral-500 transition-all group-hover:border-neutral-300 group-hover:text-neutral-900">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-xs font-semibold text-black tracking-wide uppercase">
                  {metric.title}
                </h3>
                <p className="text-xs text-neutral-500">{metric.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
