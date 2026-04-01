"use client";

import { motion, type Variants } from "framer-motion";
import { ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

interface Symptome {
  nom: string;
  detail: string;
}

interface MaladieSymptomesProps {
  urgents: Symptome[];
  moderes: Symptome[];
  surveillance: Symptome[];
  note?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function SymptomeCard({ symptome, type }: { symptome: Symptome; type: "urgent" | "modere" | "surveillance" }) {
  const configs = {
    urgent: { color: "#EF4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", badge: "🔴 Urgent", icon: ExclamationCircleIcon },
    modere: { color: "#F97316", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)", badge: "🟠 Modéré", icon: ExclamationTriangleIcon },
    surveillance: { color: "#3B82F6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)", badge: "🔵 À surveiller", icon: InformationCircleIcon },
  };
  const { color, bg, border, badge, icon: Icon } = configs[type];

  return (
    <motion.div
      variants={cardVariants}
      className="p-8 rounded-2xl"
      style={{ background: "#0D1526", border: `1px solid ${border}` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div className="flex-1">
          <h4
            className="text-base font-bold mb-1"
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.9rem" }}
          >
            {symptome.nom}
          </h4>
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ color, background: bg, border: `1px solid ${border}`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          >
            {badge}
          </span>
        </div>
      </div>
      <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
        {symptome.detail}
      </p>
    </motion.div>
  );
}

export default function MaladieSymptomes({ urgents, moderes, surveillance, note }: MaladieSymptomesProps) {
  return (
    <section className="py-32 px-6" style={{ background: "#080D18" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="SYMPTÔMES" title="Reconnaître les symptômes" subtitle="Savoir identifier les signes d'alerte peut sauver des vies. Ne jamais ignorer les symptômes urgents." />

        {urgents.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: "rgba(239,68,68,0.2)" }} />
              <span className="text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full" style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                Urgents — Appeler le 15
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(239,68,68,0.2)" }} />
            </div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              {urgents.map((s, i) => <SymptomeCard key={i} symptome={s} type="urgent" />)}
            </motion.div>
          </div>
        )}

        {moderes.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: "rgba(249,115,22,0.2)" }} />
              <span className="text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full" style={{ color: "#F97316", background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                Modérés
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(249,115,22,0.2)" }} />
            </div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              {moderes.map((s, i) => <SymptomeCard key={i} symptome={s} type="modere" />)}
            </motion.div>
          </div>
        )}

        {surveillance.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: "rgba(59,130,246,0.2)" }} />
              <span className="text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full" style={{ color: "#3B82F6", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                À surveiller
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(59,130,246,0.2)" }} />
            </div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              {surveillance.map((s, i) => <SymptomeCard key={i} symptome={s} type="surveillance" />)}
            </motion.div>
          </div>
        )}

        {note && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-2xl"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}
          >
            <p style={{ color: "#F8FAFC", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 400, lineHeight: 1.7, fontSize: "0.95rem" }}>
              {note}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
