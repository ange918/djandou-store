"use client";

import { motion } from "framer-motion";
import { BiPhone } from "react-icons/bi";
import type { PaysUrgence } from "@/lib/urgences-data";

interface PaysCardProps {
  pays: PaysUrgence;
}

export default function PaysCard({ pays }: PaysCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(239,68,68,0.3)", boxShadow: "0 0 20px rgba(239,68,68,0.07)" }}
      transition={{ duration: 0.22 }}
      className="p-6 rounded-2xl flex flex-col gap-4"
      style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center gap-3">
        <span className="text-4xl leading-none">{pays.drapeau}</span>
        <div>
          <h3 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, fontSize: "0.9rem", color: "#F8FAFC" }}>
            {pays.pays}
          </h3>
          <span className="text-xs" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>{pays.region}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "🚑 Médical", num: pays.medical },
          { label: "🚒 Pompiers", num: pays.pompiers },
          { label: "👮 Police", num: pays.police },
        ].map(({ label, num }) => (
          <a key={label} href={`tel:${num}`} className="flex flex-col items-center gap-1 p-2 rounded-xl transition-colors duration-200" style={{ background: "rgba(255,255,255,0.03)" }}>
            <span className="text-xs" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>{label}</span>
            <span style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "1rem", color: "#EF4444", letterSpacing: "-0.02em" }}>{num}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href={`tel:${pays.medical}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
        >
          <BiPhone size={16} />
          Appeler
        </a>
      </div>

      {pays.extra && (
        <p className="text-xs text-center" style={{ color: "#38BDF8", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>{pays.extra}</p>
      )}
    </motion.div>
  );
}
