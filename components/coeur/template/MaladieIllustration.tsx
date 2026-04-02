"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Zone {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
}

interface MaladieIllustrationProps {
  title: string;
  subtitle: string;
  svg: ReactNode;
  zones: Zone[];
  legende?: string[];
}

export default function MaladieIllustration({ title, subtitle, svg, zones, legende }: MaladieIllustrationProps) {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);

  return (
    <section className="py-32 px-6" style={{ background: "#050810" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              color: "#F8FAFC",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, lineHeight: 1.8 }}>
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center mb-10"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-2xl">
            {svg}

            {zones.map((zone, i) => (
              <motion.button
                key={zone.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: "backOut" }}
                whileHover={{ scale: 1.3 }}
                className="absolute w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  left: `${zone.x}%`,
                  top: `${zone.y}%`,
                  transform: "translate(-50%, -50%)",
                  background: "rgba(239,68,68,0.2)",
                  border: "2px solid rgba(239,68,68,0.6)",
                  zIndex: 10,
                }}
                onMouseEnter={() => setActiveZone(zone)}
                onMouseLeave={() => setActiveZone(null)}
                onClick={() => setActiveZone(activeZone?.id === zone.id ? null : zone)}
              >
                <span style={{ color: "#EF4444", fontSize: "10px", fontWeight: 700 }}>+</span>
              </motion.button>
            ))}

            <AnimatePresence>
              {activeZone && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-20 max-w-xs p-4 rounded-xl pointer-events-none"
                  style={{
                    left: `${Math.min(activeZone.x, 70)}%`,
                    top: `${activeZone.y - 2}%`,
                    transform: "translate(-50%, -110%)",
                    background: "#0D1526",
                    border: "1px solid rgba(239,68,68,0.3)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#EF4444", fontSize: "0.8rem", marginBottom: "4px" }}>
                    {activeZone.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", fontSize: "0.82rem", lineHeight: 1.6 }}>
                    {activeZone.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {zones.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {zones.map((z) => (
              <span key={z.id} className="text-xs px-3 py-1.5 rounded-full" style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                + {z.label}
              </span>
            ))}
          </motion.div>
        )}

        {legende && legende.length > 0 && (
          <motion.div
            className="max-w-2xl mx-auto p-6 rounded-2xl"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
              Légende
            </p>
            <ul className="flex flex-col gap-2">
              {legende.map((l, i) => (
                <li key={i} style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {l}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
