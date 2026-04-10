"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface MaladieCardProps {
  href: string;
  icon: ReactNode;
  badge: string;
  badgeType: "URGENCE" | "CHRONIQUE" | "CONTAGIEUSE" | "AIGUË / CHRONIQUE";
  titre: string;
  description: string;
}

export default function MaladieCard({ href, icon, badge, badgeType, titre, description }: MaladieCardProps) {
  const isUrgent = badgeType === "URGENCE" || badgeType === "CONTAGIEUSE";
  const badgeColor = isUrgent ? "#EF4444" : "#F97316";
  const badgeBg = isUrgent ? "rgba(239,68,68,0.1)" : "rgba(249,115,22,0.1)";
  const badgeBorder = isUrgent ? "rgba(239,68,68,0.25)" : "rgba(249,115,22,0.25)";

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02, borderColor: "rgba(56,189,248,0.25)" }}
        transition={{ duration: 0.25 }}
        className="p-10 rounded-2xl h-full flex flex-col gap-6 cursor-pointer"
        style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(56,189,248,0.1)" }}>
            {icon}
          </div>
          <span
            className="text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wider uppercase"
            style={{ color: badgeColor, background: badgeBg, border: `1px solid ${badgeBorder}`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          >
            {badge}
          </span>
        </div>

        <div className="flex-1">
          <h3
            className="mb-3"
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, fontSize: "1.05rem", color: "#F8FAFC", lineHeight: 1.3 }}
          >
            {titre}
          </h3>
          <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#64748B", lineHeight: 1.7, fontSize: "0.92rem" }}>
            {description}
          </p>
        </div>

        <motion.span
          className="inline-flex items-center gap-1 text-sm font-medium"
          style={{ color: "#38BDF8", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          Découvrir →
        </motion.span>
      </motion.div>
    </Link>
  );
}
