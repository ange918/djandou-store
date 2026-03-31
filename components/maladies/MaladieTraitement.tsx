"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

interface Traitement {
  titre: string;
  description: string;
  type: "Médicament" | "Chirurgie" | "Hygiène de vie" | "Suppléance rénale";
}

interface MaladieTraitementProps {
  traitements: Traitement[];
}

const typeConfig = {
  "Médicament": { color: "#00C9FF", bg: "rgba(0,201,255,0.08)" },
  "Chirurgie": { color: "#EF4444", bg: "rgba(239,68,68,0.08)" },
  "Hygiène de vie": { color: "#10B981", bg: "rgba(16,185,129,0.08)" },
  "Suppléance rénale": { color: "#8B5CF6", bg: "rgba(139,92,246,0.08)" },
};

export default function MaladieTraitement({ traitements }: MaladieTraitementProps) {
  return (
    <section className="py-32 px-6" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="PRISE EN CHARGE"
          title="Options thérapeutiques"
          subtitle="Les traitements disponibles varient selon le stade et la cause de la maladie."
        />

        <div className="space-y-8">
          {traitements.map((t, i) => {
            const cfg = typeConfig[t.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(0,201,255,0.05)", border: "1px solid rgba(0,201,255,0.15)" }}>
                  <span
                    className="font-bold text-2xl"
                    style={{
                      fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                      color: "rgba(0,201,255,0.3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className="flex-1 rounded-[20px] p-8"
                  style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
                    >
                      {t.titre}
                    </h3>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.color}33` }}
                    >
                      {t.type}
                    </span>
                  </div>
                  <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>{t.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
