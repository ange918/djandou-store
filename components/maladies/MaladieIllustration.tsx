"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

interface Zone {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  r: number;
}

interface MaladieIllustrationProps {
  title: string;
  subtitle: string;
  zones: Zone[];
  svgContent: React.ReactNode;
  legende: string[];
}

export default function MaladieIllustration({
  title,
  subtitle,
  zones,
  svgContent,
  legende,
}: MaladieIllustrationProps) {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="ILLUSTRATION" title={title} subtitle={subtitle} />

        <div className="relative flex justify-center mb-12 overflow-x-auto">
          <div className="relative min-w-0">
            <svg width="700" height="450" viewBox="0 0 700 450" className="max-w-full h-auto">
              {svgContent}
              {zones.map((zone) => (
                <circle
                  key={zone.id}
                  cx={zone.x}
                  cy={zone.y}
                  r={zone.r}
                  fill="rgba(0,201,255,0.1)"
                  stroke="#00C9FF"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setActiveZone(zone.id)}
                  onMouseLeave={() => setActiveZone(null)}
                  style={{ opacity: activeZone === zone.id ? 1 : 0.4 }}
                />
              ))}
            </svg>

            <AnimatePresence>
              {activeZone && (() => {
                const zone = zones.find((z) => z.id === activeZone);
                if (!zone) return null;
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute pointer-events-none rounded-xl p-4 max-w-[200px]"
                    style={{
                      left: zone.x,
                      top: zone.y - 80,
                      transform: "translateX(-50%)",
                      background: "#0F172A",
                      border: "1px solid rgba(0,201,255,0.3)",
                      zIndex: 10,
                    }}
                  >
                    <p className="text-sm font-bold mb-1" style={{ color: "#00C9FF", fontFamily: "var(--font-unbounded, Unbounded, sans-serif)" }}>
                      {zone.label}
                    </p>
                    <p className="text-xs" style={{ color: "#94A3B8", lineHeight: 1.6 }}>
                      {zone.description}
                    </p>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>

        {legende.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {legende.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00C9FF" }} />
                <span style={{ color: "#94A3B8", fontSize: "0.875rem" }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
