"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".illus-element", {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 px-6" style={{ background: "#050810" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
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
        </div>

        <div ref={ref} className="illus-element relative flex justify-center items-center mb-10">
          <div className="relative w-full max-w-2xl">
            {svg}

            {/* Hoverable zones */}
            {zones.map((zone) => (
              <button
                key={zone.id}
                className="absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-125"
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
              </button>
            ))}

            {/* Tooltip */}
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
        </div>

        {zones.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {zones.map((z) => (
              <span key={z.id} className="text-xs px-3 py-1.5 rounded-full" style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                + {z.label}
              </span>
            ))}
          </div>
        )}

        {legende && legende.length > 0 && (
          <div className="max-w-2xl mx-auto p-6 rounded-2xl" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
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
          </div>
        )}
      </div>
    </section>
  );
}
