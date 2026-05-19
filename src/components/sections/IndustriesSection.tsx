"use client";

import { motion } from "framer-motion";
import {
  Pickaxe,
  Sprout,
  Factory,
  ShoppingCart,
  HardHat,
  Cog,
  Zap,
  Package,
} from "lucide-react";

const industries = [
  {
    icon: Pickaxe,
    title: "Mining",
    description:
      "Explosives, equipment, and concentrate logistics for surface and underground operations.",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description:
      "Seed, fertilizer, and commodity export logistics with seasonal surge capacity.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Just-in-time component delivery and finished goods distribution across SADC.",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description:
      "High-velocity replenishment and seasonal peak management for modern retail.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Materials, equipment, and modular component logistics for infrastructure projects.",
  },
  {
    icon: Cog,
    title: "Industrial",
    description:
      "Spare parts, raw materials, and finished product logistics for heavy industry.",
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Renewable components, fossil fuel logistics, and power infrastructure cargo.",
  },
  {
    icon: Package,
    title: "FMCG",
    description:
      "Temperature-controlled distribution and rapid replenishment for consumer goods.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-neutral-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-neutral-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            INDUSTRIES SERVED
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
            Sector-Specific Logistics Intelligence
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Every industry has unique cargo requirements. We&apos;ve built
            specialized capabilities for Africa&apos;s key sectors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 50px -12px rgba(7, 27, 42, 0.15)",
              }}
              className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 transition-all cursor-default shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-5">
                <industry.icon className="w-7 h-7 text-neutral-600" />
              </div>
              <h3 className="text-black font-heading font-semibold text-lg mb-2">
                {industry.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
