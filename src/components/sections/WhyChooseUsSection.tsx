"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  GitBranch,
  ShieldCheck,
  Zap,
  Globe,
  PackageCheck,
  Landmark,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Experience",
    description:
      "Deep expertise navigating African trade regulations, border protocols, and corridor dynamics.",
  },
  {
    icon: GitBranch,
    title: "Corridor Intelligence",
    description:
      "Real-time corridor monitoring with predictive delay forecasting and alternative routing.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Accountability",
    description:
      "Single point of accountability from origin to destination. No finger-pointing.",
  },
  {
    icon: Zap,
    title: "Proactive Operations",
    description:
      "We solve problems before they reach your inbox. Exception management, not exception reporting.",
  },
  {
    icon: Globe,
    title: "Regional Network",
    description:
      "Partnerships across 15+ countries with deep local expertise and relationships.",
  },
  {
    icon: PackageCheck,
    title: "Specialized Cargo Expertise",
    description:
      "From pharmaceuticals to mining equipment, we understand cargo-specific requirements.",
  },
  {
    icon: Landmark,
    title: "Trade Finance Integration",
    description:
      "Finance and logistics in one ecosystem. Reduced friction, faster cash conversion.",
  },
  {
    icon: Clock,
    title: "Operational Reliability",
    description:
      "99.2% on-time performance backed by SLA commitments and real-time visibility.",
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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header and Image Split */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/2"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Why Agilent
            </span>
            <h2 className="font-heading text-4xl font-bold text-black md:text-5xl">
              Built for Africa&apos;s Logistics Complexity
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-lg">
              We don&apos;t just understand African logistics. We&apos;ve
              engineered solutions specifically for its challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/2 w-full relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl shadow-neutral-200/50"
          >
            <Image
              src="/images/warehouse_interior.png"
              alt="High-tech Logistics Warehouse"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Feature cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
                }}
                className="group rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-200 shadow-sm">
                  <Icon
                    className="h-6 w-6 text-neutral-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
