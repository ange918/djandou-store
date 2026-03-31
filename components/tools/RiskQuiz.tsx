"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { q: "Avez-vous du diabète ou êtes-vous prédiabétique ?", poids: 3 },
  { q: "Souffrez-vous d'hypertension artérielle ?", poids: 3 },
  { q: "Un membre de votre famille a-t-il une maladie rénale ?", poids: 2 },
  { q: "Êtes-vous âgé(e) de plus de 60 ans ?", poids: 2 },
  { q: "Prenez-vous régulièrement des anti-inflammatoires (ibuprofène, etc.) ?", poids: 2 },
  { q: "Fumez-vous actuellement ?", poids: 1 },
  { q: "Êtes-vous en surpoids ou obésité ?", poids: 1 },
  { q: "Buvez-vous moins de 1,5 L d'eau par jour ?", poids: 1 },
  { q: "Avez-vous des antécédents d'infections urinaires répétées ?", poids: 1 },
  { q: "N'avez-vous jamais fait de bilan rénal (prise de sang, urine) ?", poids: 2 },
];

export default function RiskQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const answer = (yes: boolean) => {
    const next = [...answers, yes];
    setAnswers(next);
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const score = answers.reduce((acc, a, i) => acc + (a ? questions[i].poids : 0), 0);
  const maxScore = questions.reduce((acc, q) => acc + q.poids, 0);
  const pct = Math.round((score / maxScore) * 100);

  const niveau = pct <= 25 ? "faible" : pct <= 55 ? "modéré" : "élevé";
  const niveauConfig = {
    faible: { color: "#10B981", label: "Risque faible", desc: "Votre profil ne présente pas de facteurs de risque majeurs. Continuez à prendre soin de vous." },
    modéré: { color: "#F97316", label: "Risque modéré", desc: "Quelques facteurs de risque identifiés. Un bilan rénal annuel est recommandé." },
    élevé: { color: "#EF4444", label: "Risque élevé", desc: "Plusieurs facteurs de risque importants. Consultez un médecin pour un bilan complet dès que possible." },
  };

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setDone(false);
  };

  return (
    <div
      className="rounded-[24px] p-10"
      style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <h3
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
      >
        Quiz de risque rénal
      </h3>
      <p className="mb-10 text-sm" style={{ color: "#64748B" }}>
        10 questions pour évaluer votre risque de développer une maladie rénale.
      </p>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-medium" style={{ color: "#00C9FF" }}>
                {current + 1}/{questions.length}
              </span>
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: `${((current) / questions.length) * 100}%`,
                    background: "linear-gradient(90deg, #00C9FF, #0066FF)",
                  }}
                />
              </div>
            </div>

            <p
              className="text-xl mb-10 leading-relaxed"
              style={{ color: "#F8FAFC", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 400 }}
            >
              {questions[current].q}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => answer(true)}
                className="py-4 rounded-xl font-medium transition-all duration-200"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  color: "#EF4444",
                }}
              >
                Oui
              </button>
              <button
                onClick={() => answer(false)}
                className="py-4 rounded-xl font-medium transition-all duration-200"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#10B981",
                }}
              >
                Non
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{
                background: `${niveauConfig[niveau].color}15`,
                border: `2px solid ${niveauConfig[niveau].color}`,
              }}
            >
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: niveauConfig[niveau].color }}
              >
                {pct}%
              </span>
            </div>

            <h4
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: niveauConfig[niveau].color }}
            >
              {niveauConfig[niveau].label}
            </h4>

            <p className="max-w-md mx-auto mb-10 leading-relaxed" style={{ color: "#94A3B8" }}>
              {niveauConfig[niveau].desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restart}
                className="px-8 py-3 rounded-full text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.06)", color: "#94A3B8", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                Recommencer
              </button>
              <a
                href="/contact"
                className="px-8 py-3 rounded-full text-sm font-medium text-white"
                style={{ background: "linear-gradient(135deg, #00C9FF, #0066FF)" }}
              >
                Consulter un médecin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
