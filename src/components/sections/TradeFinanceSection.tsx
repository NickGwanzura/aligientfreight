"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Import financing with cargo collateralization",
  "Documentary credit and letter of credit services",
  "Supply chain finance for extended payment terms",
  "FX hedging and currency risk management",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const dashboardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.4 },
  },
};

export default function TradeFinanceSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Trade Finance
          </span>
          <h2 className="font-heading text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            Capital That Moves With Your Cargo
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Cargo-backed trade finance that turns supply chain velocity into
            working capital.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg leading-relaxed text-slate-700"
            >
              Trade shouldn&apos;t wait for cash flow. Our integrated trade
              finance solutions bridge the gap between shipment and settlement,
              enabling continuous commercial flow across African markets.
            </motion.p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black">
                    <Check className="h-4 w-4 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-slate-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column - dashboard mockup */}
          <motion.div
            variants={dashboardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl bg-neutral-50 shadow-2xl shadow-neutral-200/50 ring-1 ring-neutral-200">
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Agilent Trade Finance
                </span>
                <div className="h-2 w-16 rounded-full bg-neutral-300" />
              </div>

              <div className="p-6">
                {/* Trade flow diagram */}
                <div className="mb-6 rounded-xl bg-white p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Trade Flow
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="mx-auto mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                        <span className="text-xs font-bold text-black">
                          S
                        </span>
                      </div>
                      <span className="text-xs text-neutral-600">Supplier</span>
                    </div>
                    <div className="mx-2 flex flex-1 items-center gap-1">
                      <div className="h-px flex-1 bg-neutral-300" />
                      <ArrowRight className="h-3.5 w-3.5 text-neutral-400" />
                      <div className="h-px flex-1 bg-neutral-300" />
                    </div>
                    <div className="text-center">
                      <div className="mx-auto mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-200 ring-1 ring-neutral-300">
                        <span className="text-xs font-bold text-black">
                          A
                        </span>
                      </div>
                      <span className="text-xs text-neutral-600">Agilent</span>
                    </div>
                    <div className="mx-2 flex flex-1 items-center gap-1">
                      <div className="h-px flex-1 bg-neutral-300" />
                      <ArrowRight className="h-3.5 w-3.5 text-neutral-400" />
                      <div className="h-px flex-1 bg-neutral-300" />
                    </div>
                    <div className="text-center">
                      <div className="mx-auto mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                        <span className="text-xs font-bold text-black">
                          B
                        </span>
                      </div>
                      <span className="text-xs text-neutral-600">Buyer</span>
                    </div>
                  </div>
                </div>

                {/* Finance metrics */}
                <div className="mb-6 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white p-3 shadow-sm border border-neutral-100">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      Approved Limit
                    </p>
                    <p className="mt-1 text-lg font-bold text-black">$2.5M</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 shadow-sm border border-neutral-100">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      Active Facilities
                    </p>
                    <p className="mt-1 text-lg font-bold text-black">12</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 shadow-sm border border-neutral-100">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      Avg Processing
                    </p>
                    <p className="mt-1 text-lg font-bold text-neutral-700">
                      48hrs
                    </p>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Trade Volume (Q1-Q4)
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] text-neutral-500">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end gap-3">
                    {[
                      { label: "Q1", value: 42, color: "bg-navy-700" },
                      { label: "Q2", value: 58, color: "bg-navy-600" },
                      { label: "Q3", value: 76, color: "bg-lime" },
                      { label: "Q4", value: 92, color: "bg-black" },
                    ].map((bar) => (
                      <div key={bar.label} className="flex flex-1 flex-col items-center gap-1.5">
                        <div className="w-full rounded-t-sm bg-neutral-200">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${bar.value * 0.8}px` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                              delay: 0.6,
                              ease: [0.25, 0.1, 0.25, 1] as const,
                            }}
                            className={`w-full rounded-t-sm ${bar.color}`}
                          />
                        </div>
                        <span className="text-[10px] text-neutral-500">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active trades status */}
                <div className="rounded-lg bg-white p-3 shadow-sm border border-neutral-100">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                    Active Trades
                  </p>
                  <div className="space-y-2">
                    {[
                      { id: "TF-2024-0892", desc: "Pharma Import — RSA", amt: "$450K" },
                      { id: "TF-2024-0891", desc: "Mining Equipment — DRC", amt: "$1.2M" },
                      { id: "TF-2024-0890", desc: "Agri Export — Zambia", amt: "$280K" },
                    ].map((trade) => (
                      <div
                        key={trade.id}
                        className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-neutral-50"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                          <div>
                            <p className="text-xs font-medium text-black">
                              {trade.id}
                            </p>
                            <p className="text-[10px] text-neutral-500">
                              {trade.desc}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-neutral-700">
                          {trade.amt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-black/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-black/5 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
