"use client";

import { motion } from "framer-motion";
import PaysCard from "./PaysCard";
import type { PaysUrgence } from "@/lib/urgences-data";

interface RegionSectionProps {
  region: string;
  pays: PaysUrgence[];
}

export default function RegionSection({ region, pays }: RegionSectionProps) {
  if (pays.length === 0) return null;

  return (
    <div className="mb-16">
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {pays.slice(0, 5).map((p) => {
              const code = [...p.drapeau]
                .map((c) => String.fromCharCode((c.codePointAt(0) ?? 0) - 0x1f1a5))
                .join("")
                .toLowerCase();
              return (
                <img
                  key={p.pays}
                  src={`https://flagcdn.com/w40/${code}.png`}
                  alt={p.pays}
                  width={24}
                  height={16}
                  style={{ width: 24, height: 16, objectFit: "cover", borderRadius: 3, border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}
                />
              );
            })}
          </div>
          <h2 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, fontSize: "1.1rem", color: "#F8FAFC" }}>
            {region}
          </h2>
        </div>
        <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
        <span className="text-xs px-3 py-1 rounded-full" style={{ color: "#64748B", background: "rgba(255,255,255,0.04)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
          {pays.length} pays
        </span>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pays.map((p, i) => (
          <motion.div
            key={p.pays}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
          >
            <PaysCard pays={p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
