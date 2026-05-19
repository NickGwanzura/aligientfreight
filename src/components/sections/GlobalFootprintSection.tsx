"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";



const stats = [
  { value: 4, suffix: "", label: "Continents" },
  { value: 15, suffix: "+", label: "Countries" },
  { value: 50, suffix: "+", label: "Trade Lanes" },
  { value: 12, suffix: "", label: "Strategic Partners" },
];

export default function GlobalFootprintSection() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-neutral-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            GLOBAL FOOTPRINT
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
            Connected to Every Major Trade Lane
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Strategic partnerships and agency networks spanning Africa, Asia,
            Europe, and the Americas.
          </p>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-neutral-50 rounded-2xl border border-neutral-200 p-6 lg:p-10 mb-12 shadow-sm overflow-hidden"
        >
          <div className="relative aspect-[16/9] max-h-[600px] w-full overflow-hidden rounded-xl shadow-inner border border-neutral-200">
            <Image
              src="/images/world_trade_map.png"
              alt="Global Trade Routes & Shipping Paths Map"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-black mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-neutral-500 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
