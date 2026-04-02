"use client";

import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

interface MaladiePreventionProps {
  maladie: string;
  checklist: string[];
  populationsRisque: string[];
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MaladiePrevention({ maladie, checklist, populationsRisque }: MaladiePreventionProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const score = checked.size;
  const total = checklist.length;
  const pct = Math.round((score / total) * 100);

  return (
    <section className="py-32 px-6" style={{ background: "#080D18" }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader badge="PRÉVENTION" title={`Prévenir ${maladie}`} subtitle="Adoptez ces habitudes pour réduire significativement votre risque. Cochez ce que vous faites déjà." />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 p-8 rounded-2xl"
          style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <span style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 500, color: "#F8FAFC", fontSize: "0.95rem" }}>
              Votre score de prévention
            </span>
            <motion.span
              key={score}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#EF4444", fontSize: "1.2rem" }}
            >
              {score}/{total}
            </motion.span>
          </div>
          <div className="w-full rounded-full h-3 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              className="h-3 rounded-full"
              style={{ background: "linear-gradient(90deg, #EF4444, #B91C1C)" }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <p className="mt-4 text-sm" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}>
            {pct === 0 && "Commencez à cocher les bonnes habitudes que vous avez déjà !"}
            {pct > 0 && pct < 50 && "Bien démarré ! Continuez à adopter ces habitudes."}
            {pct >= 50 && pct < 100 && "Très bien ! Vous faites déjà beaucoup pour votre santé."}
            {pct === 100 && "Excellent ! Vous avez adopté toutes les bonnes habitudes de prévention."}
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 mb-12">
          {checklist.map((item, i) => {
            const isChecked = checked.has(i);
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ x: 4 }}
                onClick={() => toggle(i)}
                className="flex items-center gap-4 p-5 rounded-2xl text-left w-full"
                style={{
                  background: isChecked ? "rgba(239,68,68,0.06)" : "#0D1526",
                  border: `1px solid ${isChecked ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.06)"}`,
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <motion.div
                  className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                  animate={{
                    scale: isChecked ? [1, 1.2, 1] : 1,
                    borderColor: isChecked ? "#EF4444" : "rgba(255,255,255,0.2)",
                    background: isChecked ? "#EF4444" : "rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <AnimatePresence>
                    {isChecked && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-white text-xs font-bold"
                      >
                        ✓
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                <span
                  style={{
                    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                    fontWeight: isChecked ? 400 : 300,
                    fontSize: "0.95rem",
                    color: isChecked ? "#F8FAFC" : "#94A3B8",
                    transition: "color 0.2s",
                  }}
                >
                  {item}
                </span>
              </motion.button>
            );
          })}
        </div>

        {populationsRisque.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <ShieldExclamationIcon className="w-6 h-6 flex-shrink-0" style={{ color: "#EF4444" }} />
              <h4 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.95rem" }}>
                Populations à risque
              </h4>
            </div>
            <ul className="flex flex-col gap-2">
              {populationsRisque.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span style={{ color: "#EF4444", flexShrink: 0, marginTop: "2px" }}>•</span>
                  <span style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.7 }}>
                    {p}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
