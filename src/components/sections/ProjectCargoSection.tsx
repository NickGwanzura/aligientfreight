"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Pickaxe, Factory, Zap, Mountain, Weight, ArrowUp, FolderKanban, ShieldCheck } from "lucide-react";

interface CargoCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cargoCards: CargoCard[] = [
  {
    id: "mining",
    title: "Mining Equipment",
    description: "Heavy machinery mobilization for open-pit and underground operations.",
    icon: <Pickaxe className="w-10 h-10" />,
  },
  {
    id: "infrastructure",
    title: "Infrastructure Projects",
    description: "Bridge sections, construction modules, and civil engineering cargo.",
    icon: <Factory className="w-10 h-10" />,
  },
  {
    id: "power",
    title: "Power & Energy",
    description: "Turbines, transformers, and renewable energy components.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    id: "industrial",
    title: "Industrial Relocations",
    description: "Complete factory moves with precision sequencing.",
    icon: <Mountain className="w-10 h-10" />,
  },
];

const industrialStats = [
  { label: "Max Load", value: "450", suffix: " Tons", icon: <Weight className="w-5 h-5" /> },
  { label: "Lift Height", value: "85", suffix: " Meters", icon: <ArrowUp className="w-5 h-5" /> },
  { label: "Projects", value: "200", suffix: "+", icon: <FolderKanban className="w-5 h-5" /> },
  { label: "Safety Record", value: "Zero", suffix: " Incidents", icon: <ShieldCheck className="w-5 h-5" /> },
];

function CargoCardComponent({ card, index }: { card: CargoCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl border border-neutral-200 bg-white p-8 overflow-hidden"
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(0, 180, 216, 0.25), 0 0 40px rgba(0, 180, 216, 0.06)",
        }}
      />

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-neutral-100 text-black">
          {card.icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-heading font-bold text-black mb-3">
          {card.title}
        </h3>
        <p className="text-neutral-500 leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-100 rounded-bl-full -mr-6 -mt-6 pointer-events-none" />
    </motion.div>
  );
}

export default function ProjectCargoSection() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4">
            Project Cargo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-black leading-tight">
            We Move What Others Cannot.
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-2xl">
            From mining excavators to power plant turbines, we engineer the impossible into reality.
          </p>
        </motion.div>

        {/* Split Layout: Image on Left, Cards on Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50"
          >
            <Image
              src="/images/heavy_cargo.png"
              alt="Heavy Industrial Cargo Transport"
              fill
              className="object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              SPECIALIZED FLEET
            </div>
          </motion.div>

          {/* Right Column - Cargo cards grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cargoCards.map((card, index) => (
              <CargoCardComponent key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>

        {/* Industrial stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16"
        >
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {industrialStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-neutral-200 text-neutral-600 shadow-sm mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-black">
                    {stat.value}
                    <span className="text-neutral-500">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
