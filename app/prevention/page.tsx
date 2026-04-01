"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  ShieldExclamationIcon,
  HeartIcon,
  BeakerIcon,
  BoltIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const checklist = [
  { label: "Contrôler ma tension artérielle régulièrement (cible < 130/80 mmHg)" },
  { label: "Surveiller ma glycémie si je suis diabétique (HbA1c < 7%)" },
  { label: "Boire entre 1,5 et 2 litres d'eau par jour" },
  { label: "Réduire ma consommation de sel (< 6g/jour)" },
  { label: "Éviter les anti-inflammatoires en automédication (ibuprofène, etc.)" },
  { label: "Ne pas fumer ou arrêter le tabac" },
  { label: "Maintenir un poids corporel sain (IMC entre 18,5 et 24,9)" },
  { label: "Pratiquer 150 minutes d'activité physique modérée par semaine" },
  { label: "Faire un bilan rénal annuel si je suis diabétique ou hypertendu" },
  { label: "Limiter la consommation d'alcool (< 2 verres/jour)" },
  { label: "Signaler toute prise de médicaments à mon médecin (risque néphrotoxique)" },
  { label: "Consulter rapidement en cas d'infection urinaire" },
];

const risques = [
  {
    icon: <HeartIcon className="w-7 h-7" />,
    titre: "Diabète",
    desc: "30-40% des diabétiques développent une néphropathie. Le contrôle glycémique rigoureux est la prévention principale.",
    niveau: "Très élevé",
    color: "#EF4444",
  },
  {
    icon: <BoltIcon className="w-7 h-7" />,
    titre: "Hypertension artérielle",
    desc: "2e cause d'IRC terminale. Une tension mal contrôlée détruit progressivement les petits vaisseaux rénaux.",
    niveau: "Très élevé",
    color: "#EF4444",
  },
  {
    icon: <BeakerIcon className="w-7 h-7" />,
    titre: "Antécédents familiaux",
    desc: "Polykystose, syndrome d'Alport et autres maladies génétiques nécessitent une surveillance renforcée.",
    niveau: "Élevé",
    color: "#F97316",
  },
  {
    icon: <EyeIcon className="w-7 h-7" />,
    titre: "Âge > 60 ans",
    desc: "Le DFG diminue naturellement de 1 mL/min/an après 40 ans. Un suivi régulier s'impose avec l'avancée en âge.",
    niveau: "Modéré",
    color: "#F97316",
  },
  {
    icon: <ShieldExclamationIcon className="w-7 h-7" />,
    titre: "Obésité",
    desc: "L'hyperfiltration compensatrice liée à l'obésité accélère la dégradation rénale sur le long terme.",
    niveau: "Modéré",
    color: "#F97316",
  },
  {
    icon: <CheckCircleIcon className="w-7 h-7" />,
    titre: "Tabagisme",
    desc: "Le tabac diminue le flux sanguin rénal et amplifie les effets du diabète et de l'HTA sur les reins.",
    niveau: "Modéré",
    color: "#F97316",
  },
];

export default function PreventionPage() {
  const [checked, setChecked] = useState<boolean[]>(checklist.map(() => false));
  const score = checked.filter(Boolean).length;

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.06) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#10B981", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
            PRÉVENTION
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Protéger ses reins
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            La prévention des maladies rénales repose sur des habitudes de vie simples et une surveillance médicale adaptée à votre profil de risque.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="CHECKLIST" title="Mes bonnes pratiques" subtitle="Cochez les habitudes que vous appliquez déjà. Identifiez les points d'amélioration." />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm" style={{ color: "#94A3B8" }}>Progression</p>
                <span className="font-bold text-lg" style={{ color: "#10B981", fontFamily: "var(--font-unbounded, Unbounded, sans-serif)" }}>{score}/{checklist.length}</span>
              </div>
              <div className="w-full h-2 rounded-full mb-10" style={{ background: "rgba(255,255,255,0.06)" }}>
                <motion.div
                  className="h-2 rounded-full"
                  style={{ background: "linear-gradient(90deg, #10B981, #00C9FF)" }}
                  animate={{ width: `${(score / checklist.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="space-y-3">
                {checklist.map((item, i) => (
                  <motion.button
                    key={i}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-4 p-4 sm:p-5 rounded-xl text-left"
                    style={{
                      background: checked[i] ? "rgba(16,185,129,0.06)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${checked[i] ? "rgba(16,185,129,0.25)" : "rgba(255,255,255,0.06)"}`,
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: checked[i] ? "#10B981" : "rgba(255,255,255,0.2)", background: checked[i] ? "#10B981" : "transparent" }}>
                      {checked[i] && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span style={{ color: checked[i] ? "#10B981" : "#94A3B8", fontWeight: 300, fontSize: "0.9rem" }}>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div
              className="rounded-[20px] p-6 sm:p-8 h-fit lg:sticky lg:top-28"
              style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h4 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>Votre score</h4>
              <div className="text-center py-8">
                <p className="text-6xl font-bold mb-2" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: score > 8 ? "#10B981" : score > 4 ? "#F97316" : "#EF4444" }}>
                  {score}
                </p>
                <p className="text-sm" style={{ color: "#64748B" }}>bonnes pratiques sur {checklist.length}</p>
              </div>
              <p className="text-sm text-center" style={{ color: "#64748B", lineHeight: 1.7 }}>
                {score > 8 ? "Excellent profil préventif ! Continuez ainsi." : score > 4 ? "Bon début. Quelques habitudes à améliorer." : "Plusieurs points importants à travailler. Consultez un médecin."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="RISQUES" title="Facteurs de risque" subtitle="Identifiez les facteurs qui exposent davantage certaines personnes aux maladies rénales." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risques.map((r, i) => (
              <GlowCard key={i}>
                <div className="flex items-start justify-between mb-5">
                  <div style={{ color: "#00C9FF" }}>{r.icon}</div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ color: r.color, background: `${r.color}15` }}>{r.niveau}</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>{r.titre}</h3>
                <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.875rem" }}>{r.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
