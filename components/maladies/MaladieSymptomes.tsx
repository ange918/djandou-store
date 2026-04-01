"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

interface Symptome {
  icon: React.ReactNode;
  nom: string;
  description: string;
  niveau: "urgent" | "modere" | "surveiller";
}

interface MaladieSymptomesProps {
  symptomes: Symptome[];
}

const niveauConfig = {
  urgent: { label: "Urgent", color: "#EF4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)" },
  modere: { label: "Modéré", color: "#F97316", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.3)" },
  surveiller: { label: "À surveiller", color: "#00C9FF", bg: "rgba(0,201,255,0.1)", border: "rgba(0,201,255,0.3)" },
};

export default function MaladieSymptomes({ symptomes }: MaladieSymptomesProps) {
  return (
    <section className="py-16 md:py-32 px-6" style={{ background: "#080D18" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="SIGNES CLINIQUES"
          title="Reconnaître les symptômes"
          subtitle="Identifiez les signes qui nécessitent une attention médicale immédiate ou un suivi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptomes.map((s, i) => {
            const cfg = niveauConfig[s.niveau];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[20px] p-5 sm:p-8"
                style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div style={{ color: "#00C9FF" }}>{s.icon}</div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}
                  >
                    {cfg.label}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
                >
                  {s.nom}
                </h3>
                <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
