"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  titleClassName = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <motion.div
      className={`flex flex-col ${alignClass} mb-20`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.span
        variants={fadeInUp}
        className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
        style={{
          color: "#00C9FF",
          background: "rgba(0,201,255,0.08)",
          border: "1px solid rgba(0,201,255,0.2)",
          fontFamily: "var(--font-poppins, Poppins, sans-serif)",
        }}
      >
        {badge}
      </motion.span>

      <motion.h2
        variants={fadeInUp}
        className={`font-unbounded font-bold leading-tight max-w-2xl ${titleClassName}`}
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
          lineHeight: 1.2,
          color: "#F8FAFC",
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-xl font-poppins"
          style={{
            color: "#64748B",
            fontWeight: 300,
            lineHeight: 1.8,
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
