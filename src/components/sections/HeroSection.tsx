"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowDown, Play } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const smoothMouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const p: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setParticles(p);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      smoothMouseX.set(x * 15);
      smoothMouseY.set(y * 15);
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothMouseX, smoothMouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Background layer with parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {/* Pure white base */}
        <div className="absolute inset-0 bg-white" />

        {/* Subtle radial gradient following mouse */}
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: `radial-gradient(600px circle at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, rgba(0,0,0,0.08), transparent 60%)`,
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-black"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Animated horizontal scan lines */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-black/5"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-0 right-0 h-px bg-black/5"
          animate={{ top: ["100%", "0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Route lines - subtle white/gray */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000" stopOpacity="0" />
              <stop offset="30%" stopColor="#000" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#000" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[
            { d: "M-100,200 Q300,100 500,250 T1100,180 T1300,350", dur: 10 },
            { d: "M-100,400 Q400,300 700,450 T1200,380 T1400,500", dur: 12 },
            { d: "M-100,600 Q500,500 800,650 T1300,550 T1500,700", dur: 14 },
            { d: "M-100,100 Q250,200 600,120 T1000,220 T1400,150", dur: 11 },
            { d: "M-100,500 Q350,600 900,480 T1300,600", dur: 13 },
          ].map((route, i) => (
            <g key={i}>
              <path
                d={route.d}
                fill="none"
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                strokeDasharray="8 8"
              />
              <motion.path
                d={route.d}
                fill="none"
                stroke="url(#routeGrad)"
                strokeWidth="1.5"
                strokeDasharray="60 200"
                initial={{ strokeDashoffset: 300 }}
                animate={{ strokeDashoffset: -300 }}
                transition={{
                  duration: route.dur,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/40 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col justify-center pt-32 lg:pt-40 px-6 pb-16 md:px-12 lg:px-20"
        style={{ y: textY, opacity }}
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Top metadata row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 flex items-center gap-6 text-neutral-500 text-xs tracking-[0.2em] uppercase"
          >
            <span>3 Dale Road Malborough, Harare, Zimbabwe</span>
            <span className="w-8 h-px bg-neutral-300 hidden sm:block" />
            <span>Since 1999</span>
            <span className="w-8 h-px bg-neutral-300" />
            <span>Global Freight Solutions</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl font-bold leading-[1.05] text-black md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] tracking-tight"
          >
            <span className="block">Engineering</span>
            <span className="block">
              Cargo{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Flow</span>
                <motion.span
                  className="absolute bottom-1 left-0 h-2 md:h-3 lg:h-4 bg-black/10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ originX: 0 }}
                />
              </span>
            </span>
            <span className="block text-neutral-400">Across Africa</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-xl text-base text-neutral-600 md:text-lg leading-relaxed"
          >
            Agilent Freight delivers intelligent freight forwarding, corridor
            management, and trade logistics solutions across Southern Africa and
            global trade routes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all hover:bg-black/90"
            >
              Request Freight Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-3 border border-black/20 text-black px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all hover:border-black/40 hover:bg-black/5"
            >
              <Play className="h-4 w-4" />
              Explore Capabilities
            </a>
          </motion.div>

          {/* Bottom stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 md:mt-24 grid grid-cols-3 gap-8 border-t border-neutral-200 pt-8 max-w-lg"
          >
            {[
              { value: "15+", label: "Countries" },
              { value: "24/7", label: "Operations" },
              { value: "99.2%", label: "On-Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="text-2xl md:text-3xl font-heading font-bold text-black">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 rotate-90 origin-center translate-x-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
