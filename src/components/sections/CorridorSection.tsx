"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Timer,
  Route,
  Gauge,
  Activity,
  Shield,
  Truck,
  Thermometer,
  HardHat,
  MapPin,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

interface Corridor {
  id: string;
  name: string;
  route: string[];
  stats: { label: string; value: string; icon: React.ReactNode }[];
  features: string[];
  pathD: string;
  pathLength: number;
}

const corridors: Corridor[] = [
  {
    id: "durban",
    name: "DURBAN CORRIDOR",
    route: ["Durban", "Johannesburg", "Harare", "Lusaka"],
    stats: [
      { label: "Transit Time", value: "5-7 days", icon: <Timer className="w-4 h-4" /> },
      { label: "Border Crossings", value: "2", icon: <Route className="w-4 h-4" /> },
      { label: "Distance", value: "1,800km", icon: <Gauge className="w-4 h-4" /> },
    ],
    features: ["Real-time tracking", "Pre-clearance", "Dedicated fleet"],
    pathD: "M 20 100 Q 60 40, 110 55 T 200 50 T 280 55",
    pathLength: 320,
  },
  {
    id: "beira",
    name: "BEIRA CORRIDOR",
    route: ["Beira", "Mutare", "Harare", "Lusaka"],
    stats: [
      { label: "Transit Time", value: "4-6 days", icon: <Timer className="w-4 h-4" /> },
      { label: "Border Crossings", value: "2", icon: <Route className="w-4 h-4" /> },
      { label: "Distance", value: "1,200km", icon: <Gauge className="w-4 h-4" /> },
    ],
    features: ["Port coordination", "Border pre-clearance", "Cold chain capable"],
    pathD: "M 20 90 Q 70 30, 120 50 T 200 45 T 280 55",
    pathLength: 310,
  },
  {
    id: "walvis",
    name: "WALVIS BAY CORRIDOR",
    route: ["Walvis Bay", "Windhoek", "Gaborone", "Johannesburg"],
    stats: [
      { label: "Transit Time", value: "6-8 days", icon: <Timer className="w-4 h-4" /> },
      { label: "Border Crossings", value: "3", icon: <Route className="w-4 h-4" /> },
      { label: "Distance", value: "2,100km", icon: <Gauge className="w-4 h-4" /> },
    ],
    features: ["Alternative route", "Mining logistics", "Project cargo ready"],
    pathD: "M 20 100 Q 65 55, 110 70 T 195 60 T 280 65",
    pathLength: 330,
  },
];

const featureIcons: Record<string, React.ReactNode> = {
  "Real-time tracking": <Activity className="w-3 h-3" />,
  "Pre-clearance": <Shield className="w-3 h-3" />,
  "Dedicated fleet": <Truck className="w-3 h-3" />,
  "Port coordination": <MapPin className="w-3 h-3" />,
  "Border pre-clearance": <Shield className="w-3 h-3" />,
  "Cold chain capable": <Thermometer className="w-3 h-3" />,
  "Alternative route": <Route className="w-3 h-3" />,
  "Mining logistics": <HardHat className="w-3 h-3" />,
  "Project cargo ready": <Gauge className="w-3 h-3" />,
};

function AnimatedRouteLine({ pathD, pathLength }: { pathD: string; pathLength: number }) {
  return (
    <svg
      viewBox="0 0 300 140"
      className="w-full h-32"
      fill="none"
      preserveAspectRatio="none"
    >
      {/* Background track */}
      <path
        d={pathD}
        stroke="rgba(30, 78, 121, 0.4)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />
      {/* Animated glow line */}
      <motion.path
        d={pathD}
        stroke="#00B4D8"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Moving cargo dot */}
      <motion.circle
        r="5"
        fill="#00B4D8"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        style={{
          offsetPath: `path("${pathD}")`,
          filter: "drop-shadow(0 0 6px rgba(0, 180, 216, 0.8))",
        }}
      />
      {/* Dot glow trail */}
      <motion.circle
        r="10"
        fill="none"
        stroke="#00B4D8"
        strokeWidth="1"
        opacity={0.3}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        style={{
          offsetPath: `path("${pathD}")`,
        }}
      />
    </svg>
  );
}

function CorridorCard({ corridor, index }: { corridor: Corridor; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 overflow-hidden"
    >
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(0, 180, 216, 0.3), 0 0 30px rgba(0, 180, 216, 0.08)",
        }}
      />

      {/* Card header */}
      <div className="relative z-10">
        <h3 className="text-lg font-heading font-bold text-black tracking-wide mb-1">
          {corridor.name}
        </h3>
        <p className="text-sm text-neutral-500 flex items-center gap-1.5 flex-wrap">
          {corridor.route.map((city, i) => (
            <span key={city} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-neutral-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
              {city}
            </span>
          ))}
        </p>
      </div>

      {/* Route visualization */}
      <div className="relative z-10 mt-4 -mx-2">
        <AnimatedRouteLine pathD={corridor.pathD} pathLength={corridor.pathLength} />
      </div>

      {/* Stats grid */}
      <div className="relative z-10 grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-neutral-200">
        {corridor.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="flex items-center justify-center gap-1 text-neutral-600 mb-1">
              {stat.icon}
            </div>
            <p className="text-sm font-semibold text-black">{stat.value}</p>
            <p className="text-xs text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Feature tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mt-4">
        {corridor.features.map((feature) => (
          <span
            key={feature}
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
          >
            <span className="text-black">{featureIcons[feature]}</span>
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function DashboardWidget({
  label,
  value,
  suffix,
  delay,
  bars,
}: {
  label: string;
  value: number;
  suffix: string;
  delay: number;
  bars?: number[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="rounded-xl bg-white border border-neutral-200 p-5 shadow-sm"
    >
      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">{label}</p>
      <div className="flex items-baseline gap-1">
        <AnimatedCounter end={value} suffix={suffix} className="text-3xl font-heading font-bold text-black" />
      </div>
      {bars && (
        <div className="flex items-end gap-1 mt-3 h-8">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-neutral-300"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: delay + 0.3 + i * 0.08, ease: "easeOut" as const }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function CorridorSection() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const isDashboardInView = useInView(dashboardRef, { once: true, margin: "-60px" });

  return (
    <section id="corridors" className="bg-white py-24 lg:py-32">
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
            Corridor Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black leading-tight">
            We Control Africa&apos;s Trade Arteries
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Strategic corridor management that transforms border delays into competitive advantage.
          </p>
        </motion.div>

        {/* Corridor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corridors.map((corridor, index) => (
            <CorridorCard key={corridor.id} corridor={corridor} index={index} />
          ))}
        </div>

        {/* Intelligence Dashboard */}
        <motion.div
          ref={dashboardRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 p-6 lg:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Corridor Intelligence Dashboard
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">LIVE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <DashboardWidget
              label="Active Shipments"
              value={47}
              suffix=""
              delay={0.1}
              bars={[35, 55, 42, 68, 52, 78, 65, 88, 72, 95, 80, 60]}
            />
            <DashboardWidget
              label="Avg Border Delay"
              value={2}
              suffix=".3 hrs"
              delay={0.25}
              bars={[80, 65, 45, 30, 25, 35, 28, 22, 18, 25, 20, 15]}
            />
            <DashboardWidget
              label="Corridor Utilization"
              value={87}
              suffix="%"
              delay={0.4}
              bars={[40, 50, 55, 60, 65, 70, 72, 75, 78, 82, 85, 87]}
            />
          </div>

          {/* Mini activity rows */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Durban Corridor", load: "92%", color: "bg-black" },
              { label: "Beira Corridor", load: "78%", color: "bg-black/70" },
              { label: "Walvis Bay", load: "65%", color: "bg-cyan-500" },
              { label: "Dar es Salaam", load: "54%", color: "bg-navy-600" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={isDashboardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center justify-between rounded-lg bg-white border border-neutral-200 px-4 py-3"
              >
                <span className="text-xs text-neutral-500">{item.label}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 rounded-full bg-neutral-200 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={isDashboardInView ? { width: `${parseInt(item.load)}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: "easeOut" as const }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-black w-8 text-right">{item.load}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
