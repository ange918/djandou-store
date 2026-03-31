"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MaladieHeroProps {
  badge: string;
  urgencyLabel: string;
  title: string;
  definition: string;
  gradientFrom: string;
  illustration: React.ReactNode;
}

export default function MaladieHero({
  badge,
  urgencyLabel,
  title,
  definition,
  gradientFrom,
  illustration,
}: MaladieHeroProps) {
  return (
    <section
      className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 20% 50%, ${gradientFrom} 0%, #0A0F1E 65%)`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{
                color: "#00C9FF",
                background: "rgba(0,201,255,0.08)",
                border: "1px solid rgba(0,201,255,0.2)",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              }}
            >
              {badge}
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(239,68,68,0.15)",
                color: "#EF4444",
                border: "1px solid rgba(239,68,68,0.3)",
              }}
            >
              {urgencyLabel}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              color: "#F8FAFC",
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-lg"
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#94A3B8",
            }}
          >
            {definition}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          {illustration}
        </motion.div>
      </div>
    </section>
  );
}
