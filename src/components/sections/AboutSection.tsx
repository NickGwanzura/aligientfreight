"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 98.5, suffix: "%", label: "Customs Clearance Rate" },
  { value: null, suffix: "", label: "Operations Center", text: "24/7" },
];

const corridorNodes = [
  { id: "harare", x: 220, y: 150, label: "Harare" },
  { id: "johannesburg", x: 200, y: 250, label: "Johannesburg" },
  { id: "durban", x: 260, y: 280, label: "Durban" },
  { id: "beira", x: 300, y: 180, label: "Beira" },
  { id: "walvis", x: 80, y: 220, label: "Walvis Bay" },
];

const corridorRoutes = [
  { from: "harare", to: "johannesburg" },
  { from: "harare", to: "beira" },
  { from: "johannesburg", to: "durban" },
  { from: "johannesburg", to: "walvis" },
  { from: "durban", to: "beira" },
  { from: "walvis", to: "harare" },
];

export default function AboutSection() {
  const getNode = (id: string) => corridorNodes.find((n) => n.id === id)!;

  return (
    <SectionWrapper id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-neutral-500 uppercase tracking-widest text-sm font-semibold mb-4"
          >
            ABOUT AGILENT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black max-w-4xl mb-6"
          >
            Intelligent Corridor Management for African Trade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 font-medium"
          >
            We don&apos;t just move cargo. We engineer trade corridors.
          </motion.p>
        </div>

        {/* Two Column */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - 60% */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-neutral-600 text-base md:text-lg leading-relaxed mb-12"
            >
              <p>
                Agilent Freight operates at the intersection of logistics
                intelligence and African trade infrastructure. We manage complex
                cargo movements across Southern Africa&apos;s most critical trade
                corridors, providing end-to-end accountability that transforms
                supply chains into competitive advantages.
              </p>
              <p>
                Our corridor intelligence platform integrates real-time tracking,
                border coordination, and transit optimization to ensure your
                cargo moves with precision, predictability, and speed.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="border-l-2 border-neutral-200 pl-4">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-black mb-1">
                    {stat.text ? (
                      <span>{stat.text}</span>
                    ) : (
                      <AnimatedCounter
                        end={stat.value!}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    )}
                  </div>
                  <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 40% Corridor Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-2/5"
          >
            <div className="relative bg-neutral-50 rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200 aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px]">
              <Image
                src="/images/cargo_ship_port.png"
                alt="Modern Cargo Ship at Port"
                fill
                className="object-cover"
              />
              
              {/* Subtle gradient overlay to enhance bottom status bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom status bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-neutral-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-black font-semibold text-xs tracking-wider uppercase">
                      Port Operations
                    </span>
                  </div>
                </div>
                <span className="text-neutral-500 text-xs font-medium tracking-wider uppercase">
                  Active
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
