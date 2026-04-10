"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function SectionReveal({ children, delay = 0, className, direction = "up" }: SectionRevealProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -50, filter: "blur(8px)" }
      : direction === "right"
      ? { opacity: 0, x: 50, filter: "blur(8px)" }
      : { opacity: 0, y: 50, filter: "blur(8px)" };

  const animate =
    direction === "left" || direction === "right"
      ? { opacity: 1, x: 0, filter: "blur(0px)" }
      : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
