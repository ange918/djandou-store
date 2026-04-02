"use client";

import { motion, type Variants } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

type PronosticLevel = "Bon" | "Modéré" | "Sévère" | "Variable";

interface TimelineEvent {
  time: string;
  event: string;
}

interface Complication {
  nom: string;
  gravite: "rouge" | "orange";
}

interface MaladiePronosticProps {
  pronostic: PronosticLevel;
  pronosticDetail: string;
  complications: Complication[];
  timeline: TimelineEvent[];
  urgenceMessage: string;
  autresMaladies: { titre: string; href: string; desc: string }[];
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const levelConfig: Record<PronosticLevel, { color: string; pct: number; label: string }> = {
  "Bon": { color: "#10B981", pct: 80, label: "Bon pronostic avec traitement adapté" },
  "Modéré": { color: "#F97316", pct: 50, label: "Pronostic modéré, suivi nécessaire" },
  "Sévère": { color: "#EF4444", pct: 25, label: "Pronostic sévère, prise en charge urgente" },
  "Variable": { color: "#F97316", pct: 55, label: "Pronostic variable selon la rapidité de prise en charge" },
};

export default function MaladiePronostic({ pronostic, pronosticDetail, complications, timeline, urgenceMessage, autresMaladies }: MaladiePronosticProps) {
  const cfg = levelConfig[pronostic];

  return (
    <>
      {/* Pronostic */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="PRONOSTIC" title="Évolution et complications" subtitle="Comprendre l'évolution naturelle de la maladie et les risques associés." />

          {/* Gauge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 p-10 rounded-2xl"
            style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <span style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 400, color: "#94A3B8" }}>Sévère</span>
              <span
                style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: cfg.color, fontSize: "1.1rem" }}
              >
                {pronostic}
              </span>
              <span style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 400, color: "#94A3B8" }}>Bon</span>
            </div>
            <div className="w-full rounded-full h-4 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                className="h-4 rounded-full"
                style={{ background: `linear-gradient(90deg, #EF4444, ${cfg.color})` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${cfg.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="mt-4 text-sm" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}>
              {cfg.label} — {pronosticDetail}
            </p>
          </motion.div>

          {/* Complications */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {complications.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-xl"
                style={{
                  background: c.gravite === "rouge" ? "rgba(239,68,68,0.06)" : "rgba(249,115,22,0.06)",
                  border: `1px solid ${c.gravite === "rouge" ? "rgba(239,68,68,0.2)" : "rgba(249,115,22,0.2)"}`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                    fontWeight: 500,
                    color: c.gravite === "rouge" ? "#EF4444" : "#F97316",
                    fontSize: "0.9rem",
                  }}
                >
                  {c.nom}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="mb-16">
            <motion.h3
              className="text-xl font-bold mb-10"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC" }}
            >
              Progression dans le temps
            </motion.h3>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, #EF4444, rgba(239,68,68,0.1))" }} />
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="flex gap-6 items-start pb-8 last:pb-0"
                >
                  <div className="relative flex-shrink-0 z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ background: "#050810", borderColor: "#EF4444" }}>
                    <span style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, color: "#EF4444", fontSize: "0.65rem" }}>
                      {t.time}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", lineHeight: 1.7, fontSize: "0.92rem" }}>
                      {t.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Urgence box */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl flex items-start gap-5"
            style={{ background: "rgba(239,68,68,0.08)", border: "2px solid rgba(239,68,68,0.3)" }}
          >
            <PhoneIcon className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#EF4444" }} />
            <div>
              <h4 className="font-bold mb-2" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#EF4444", fontSize: "0.9rem" }}>
                Quand appeler le 15 ?
              </h4>
              <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#F8FAFC", lineHeight: 1.7, fontSize: "0.92rem" }}>
                {urgenceMessage}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-24 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-xl font-bold mb-10"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC" }}
          >
            Voir aussi
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {autresMaladies.map((m, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={m.href}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03, borderColor: "rgba(239,68,68,0.3)" }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-2xl h-full"
                    style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <h4 className="font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.85rem" }}>
                      {m.titre}
                    </h4>
                    <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#64748B", fontSize: "0.85rem", lineHeight: 1.7 }}>
                      {m.desc}
                    </p>
                    <p className="mt-4 text-sm font-medium" style={{ color: "#EF4444", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      Découvrir →
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/coeur"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/5"
                style={{ border: "1px solid rgba(239,68,68,0.3)", color: "#EF4444", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
              >
                ← Retour au volet Cœur
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
