"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

type TraitementType = "Médicament" | "Urgence" | "Hygiène de vie" | "Dispositif";

interface Traitement {
  step: number;
  titre: string;
  description: string;
  type: TraitementType;
  detail?: string;
}

interface MaladieTraitementProps {
  traitements: Traitement[];
}

const typeConfig: Record<TraitementType, { color: string; bg: string; border: string }> = {
  "Urgence": { color: "#EF4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)" },
  "Médicament": { color: "#00C9FF", bg: "rgba(0,201,255,0.1)", border: "rgba(0,201,255,0.3)" },
  "Hygiène de vie": { color: "#10B981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)" },
  "Dispositif": { color: "#8B5CF6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)" },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function MaladieTraitement({ traitements }: MaladieTraitementProps) {
  return (
    <section className="py-32 px-6" style={{ background: "#050810" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="TRAITEMENTS" title="Prise en charge" subtitle="Protocoles thérapeutiques validés par les recommandations de la Haute Autorité de Santé." />

        <motion.div
          className="flex flex-col gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {traitements.map((t) => {
            const cfg = typeConfig[t.type];
            return (
              <motion.div
                key={t.step}
                variants={itemVariants}
                className="relative flex gap-6 items-start p-8 rounded-2xl"
                style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(239,68,68,0.06)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                      fontWeight: 900,
                      fontSize: "1.4rem",
                      color: "rgba(239,68,68,0.3)",
                    }}
                  >
                    {t.step}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h4
                      style={{
                        fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#F8FAFC",
                      }}
                    >
                      {t.titre}
                    </h4>
                    <span
                      className="text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                      style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                    >
                      {t.type}
                    </span>
                  </div>
                  <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.92rem", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                    {t.description}
                  </p>
                  {t.detail && (
                    <p className="mt-2" style={{ color: "#94A3B8", fontWeight: 400, fontSize: "0.85rem", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      → {t.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
