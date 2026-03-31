"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WaterCalculator from "@/components/tools/WaterCalculator";
import RiskQuiz from "@/components/tools/RiskQuiz";
import HabitTracker from "@/components/tools/HabitTracker";
import SectionHeader from "@/components/ui/SectionHeader";

const tools = [
  { id: "eau", label: "Hydratation", emoji: "💧", desc: "Calculer mon besoin en eau" },
  { id: "quiz", label: "Quiz risque", emoji: "🔍", desc: "Évaluer mon risque rénal" },
  { id: "habitudes", label: "Habitudes", emoji: "📋", desc: "Suivre mes habitudes" },
];

export default function OutilsPage() {
  const [activeTool, setActiveTool] = useState("eau");

  return (
    <>
      <section
        className="relative pt-40 pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.07) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}>
            OUTILS INTERACTIFS
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Mes outils santé
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Trois outils pratiques pour évaluer votre risque rénal, calculer votre hydratation et suivre vos habitudes de prévention.
          </p>
          <p className="mt-4 text-xs" style={{ color: "#475569" }}>Ces outils sont à titre indicatif et ne remplacent pas un avis médical professionnel.</p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className="flex-1 flex flex-col items-center gap-2 py-5 px-4 rounded-2xl transition-all duration-200"
                style={{
                  background: activeTool === tool.id ? "rgba(0,201,255,0.1)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${activeTool === tool.id ? "rgba(0,201,255,0.4)" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <span className="text-2xl">{tool.emoji}</span>
                <span className="text-sm font-medium" style={{ color: activeTool === tool.id ? "#00C9FF" : "#94A3B8" }}>
                  {tool.label}
                </span>
                <span className="text-xs" style={{ color: "#64748B" }}>{tool.desc}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTool}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTool === "eau" && <WaterCalculator />}
            {activeTool === "quiz" && <RiskQuiz />}
            {activeTool === "habitudes" && <HabitTracker />}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
          >
            Un résultat préoccupant ?
          </p>
          <p className="mb-10" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Ces outils sont des indicateurs, pas des diagnostics. Si vos résultats vous inquiètent, prenez rendez-vous avec un médecin généraliste ou un néphrologue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact"
              className="px-8 py-4 rounded-full font-medium text-white"
              style={{ background: "linear-gradient(135deg, #00C9FF, #0066FF)" }}>
              Nous contacter
            </a>
            <a href="/maladies"
              className="px-8 py-4 rounded-full font-medium"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#F8FAFC" }}>
              En savoir plus sur les maladies
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
