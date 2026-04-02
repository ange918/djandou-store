"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

interface MaladieHeroProps {
  gradient: string;
  badge: string;
  badgeType: "URGENCE" | "CHRONIQUE";
  title: string;
  description: string;
  illustration: ReactNode;
}

export default function MaladieHero({ gradient, badge, badgeType, title, description, illustration }: MaladieHeroProps) {
  const badgeColor = badgeType === "URGENCE" ? "#EF4444" : "#F97316";
  const badgeBg = badgeType === "URGENCE" ? "rgba(239,68,68,0.1)" : "rgba(249,115,22,0.1)";
  const badgeBorder = badgeType === "URGENCE" ? "rgba(239,68,68,0.3)" : "rgba(249,115,22,0.3)";
  const glowColor = badgeType === "URGENCE" ? "rgba(239,68,68,0.07)" : "rgba(249,115,22,0.07)";

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{ background: gradient }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 600, height: 600, top: "0%", left: "-5%", borderRadius: "50%", background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-36 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8 flex-wrap">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
            >
              VOLET CŒUR
            </span>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: badgeColor, background: badgeBg, border: `1px solid ${badgeBorder}`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
            >
              {badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              lineHeight: 1.1,
              color: "#F8FAFC",
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-lg"
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#94A3B8",
            }}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          {illustration}
        </motion.div>
      </div>
    </section>
  );
}
