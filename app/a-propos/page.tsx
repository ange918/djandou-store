"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, BeakerIcon, HeartIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";

const valeurs = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    titre: "Fiabilité",
    desc: "Toutes nos informations sont sourcées à partir de guidelines médicales reconnues (HAS, KDIGO, Société de Néphrologie). Aucune affirmation non vérifiée.",
  },
  {
    icon: <BeakerIcon className="w-8 h-8" />,
    titre: "Pédagogie",
    desc: "Nous traduisons le jargon médical en langage accessible, sans sacrifier la précision scientifique. Comprendre pour mieux agir.",
  },
  {
    icon: <HeartIcon className="w-8 h-8" />,
    titre: "Indépendance",
    desc: "ReinSanté est un projet éditorial indépendant, sans publicité médicale ni conflit d'intérêts avec l'industrie pharmaceutique.",
  },
];

const stats = [
  { n: "10", label: "maladies rénales documentées" },
  { n: "50+", label: "symptômes et examens décrits" },
  { n: "3", label: "outils interactifs disponibles" },
  { n: "100%", label: "contenu en français" },
];

const equipe = [
  { nom: "Dr. Marie Leclerc", role: "Néphrologue — Validation médicale", initiales: "ML" },
  { nom: "Antoine Rousseau", role: "Rédacteur médical — Contenu éditorial", initiales: "AR" },
  { nom: "Sophie Martin", role: "UX Designer — Expérience utilisateur", initiales: "SM" },
];

export default function AProposPage() {
  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.06) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}>
            À PROPOS
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Notre mission
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            ReinSanté est né d'un constat simple : les maladies rénales touchent des millions de personnes, mais restent largement méconnues du grand public. Nous voulons changer cela.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xl sm:text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC", lineHeight: 1.4 }}
          >
            Rendre l&apos;information rénale accessible à tous
          </p>
          <p className="text-center mb-4 max-w-2xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.9 }}>
            Dans le monde, plus de 850 millions de personnes souffrent d'insuffisance rénale chronique. Beaucoup l'ignorent jusqu'à un stade avancé. La sensibilisation précoce sauve des vies.
          </p>
          <p className="text-center max-w-2xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.9 }}>
            ReinSanté propose des informations médicalement validées, des outils pratiques et des ressources pédagogiques — le tout gratuitement et sans inscription.
          </p>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <div key={i} className={`text-center py-8 px-4 ${i < stats.length - 1 ? (i === 1 ? "border-r-0 border-b md:border-b-0 md:border-r border-white/[0.06]" : "border-r border-white/[0.06]") : ""}`}>
                <p className="text-3xl sm:text-4xl font-bold gradient-text" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)" }}>{s.n}</p>
                <p className="text-xs mt-2" style={{ color: "#64748B", lineHeight: 1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-5xl mx-auto">
          <h3
            className="text-xl sm:text-2xl font-bold mb-12 text-center"
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
          >
            Nos valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valeurs.map((v, i) => (
              <GlowCard key={i}>
                <div className="mb-6" style={{ color: "#00C9FF" }}>{v.icon}</div>
                <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>{v.titre}</h4>
                <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>{v.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-xl sm:text-2xl font-bold mb-12 text-center"
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
          >
            L&apos;équipe
          </h3>
          <div className="space-y-4">
            {equipe.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl"
                style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-lg"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,201,255,0.2), rgba(0,102,255,0.2))",
                    color: "#00C9FF",
                    fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                  }}
                >
                  {m.initiales}
                </div>
                <div>
                  <p className="font-bold" style={{ color: "#F8FAFC", fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontSize: "0.95rem" }}>{m.nom}</p>
                  <p className="text-sm mt-1" style={{ color: "#64748B" }}>{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="mt-12 p-6 sm:p-8 rounded-[20px] text-center"
            style={{ background: "rgba(0,201,255,0.05)", border: "1px solid rgba(0,201,255,0.15)" }}
          >
            <p className="text-sm mb-2 font-medium" style={{ color: "#00C9FF" }}>Avertissement légal</p>
            <p className="text-sm" style={{ color: "#64748B", lineHeight: 1.7 }}>
              ReinSanté est un site d&apos;information médicale générale. Son contenu ne constitue pas un avis médical et ne peut remplacer une consultation avec un professionnel de santé qualifié.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
