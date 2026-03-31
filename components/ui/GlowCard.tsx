"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function GlowCard({ children, className = "", href }: GlowCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(0,201,255,0.3)" }}
      transition={{ duration: 0.3 }}
      className={`rounded-[20px] p-10 ${className}`}
      style={{
        background: "#0F172A",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
}
