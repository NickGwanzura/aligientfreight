"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Plane,
  Ship,
  Truck,
  FileCheck,
  Boxes,
  ThermometerSnowflake,
  Landmark,
  Route,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Time-critical cargo delivered via strategic air partnerships across major African and international hubs.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description:
      "FCL and LCL solutions through key ports, optimized for cost and transit time balance.",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description:
      "Cross-border road networks connecting SADC markets with seamless documentation.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "Expert brokerage ensuring compliance, speed, and minimal duty exposure.",
  },
  {
    icon: Boxes,
    title: "Project Cargo",
    description:
      "Heavy lift, oversized, and complex project logistics for infrastructure and mining.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled supply chains for pharmaceuticals and perishables.",
  },
  {
    icon: Landmark,
    title: "Trade Finance",
    description:
      "Working capital solutions that unlock trade potential and cash flow.",
  },
  {
    icon: Route,
    title: "Corridor Management",
    description:
      "End-to-end corridor optimization integrating route, border, and inland strategy.",
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
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-neutral-500 uppercase tracking-widest text-sm font-semibold mb-4"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-black mb-6"
          >
            Comprehensive Freight Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 leading-relaxed"
          >
            From air to ocean, road to rail, we orchestrate multi-modal logistics
            with operational precision.
          </motion.p>
        </div>

        {/* Featured Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-xl shadow-neutral-200/50"
        >
          <Image
            src="/images/trucking_highway.png"
            alt="Modern Trucking Fleet on Highway"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Cross-Border Road Network
            </span>
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25, ease: "easeOut" as const },
                }}
                className="group relative bg-white border border-neutral-200 rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-neutral-200">
                  <Icon className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-black font-heading font-semibold text-lg mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn more */}
                <div className="flex items-center gap-1 text-neutral-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
