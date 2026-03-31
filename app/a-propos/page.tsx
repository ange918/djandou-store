"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, BeakerIcon, HeartIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeader from "@/components/ui/SectionHeader";

const sources = [
  { nom: "Haute Autorité de Santé (HAS)", url: "has-sante.fr", desc: "Recommandations cliniques françaises sur les maladies rénales chroniques" },
  { nom: "Ameli.fr — Assurance Maladie", url: "ameli.fr", desc: "Informations grand public sur les pathologies rénales et les remboursements" },
  { nom: "France Rein", url: "francerein.org", desc: "Association nationale des malades rénaux — données épidémiologiques" },
  { nom: "INSERM", url: "inserm.fr", desc: "Recherche médicale française — physiopathologie et traitements" },
  { nom: "Rein France (Registre REIN)", url: "agence-biomedecine.fr", desc: "Données officielles sur la dialyse et la transplantation rénale" },
  { nom: "European Renal Association (ERA)", url: "era-online.org", desc: "Recommandations européennes en néphrologie" },
];

export default function AProposPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.05) 0%, #0A0F1E 60%)" }}
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
            ReinSanté est un site d'information médicale dédié à la santé rénale en langue française, conçu pour les patients, les aidants et le grand public.
          </p>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="ENGAGEMENT" title="Ce que nous faisons" subtitle="Un site d'information médicale sérieux, accessible et actualisé." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard>
              <div className="mb-6" style={{ color: "#00C9FF" }}><BeakerIcon className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>Information médicale fiable</h3>
              <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>Tous nos contenus sont rédigés sur la base de recommandations officielles (HAS, ERA, KDIGO) et de publications scientifiques peer-reviewed.</p>
            </GlowCard>
            <GlowCard>
              <div className="mb-6" style={{ color: "#00C9FF" }}><HeartIcon className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>Accessible à tous</h3>
              <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>Le jargon médical est systématiquement expliqué. Nos outils interactifs permettent à chacun de mieux comprendre sa situation.</p>
            </GlowCard>
            <GlowCard>
              <div className="mb-6" style={{ color: "#00C9FF" }}><ShieldCheckIcon className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>Sans conflit d'intérêt</h3>
              <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>Aucun lien commercial avec l'industrie pharmaceutique. Pas de publicité pour des médicaments ou des compléments alimentaires.</p>
            </GlowCard>
          </div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="SOURCES" title="Nos références" subtitle="Les informations publiées sur ReinSanté s'appuient sur des sources officielles et scientifiques." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sources.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#00C9FF" }} />
                <div>
                  <p className="font-medium mb-1" style={{ color: "#F8FAFC" }}>{s.nom}</p>
                  <p className="text-xs mb-2" style={{ color: "#00C9FF" }}>{s.url}</p>
                  <p className="text-sm" style={{ color: "#64748B", fontWeight: 300 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-[24px] p-12" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EF4444" }}>
              ⚠️ Avertissement médical
            </h3>
            <p className="mb-4" style={{ color: "#94A3B8", fontWeight: 300, lineHeight: 1.8 }}>
              Les informations publiées sur ReinSanté sont fournies à titre <strong style={{ color: "#F8FAFC" }}>purement informatif et éducatif</strong>. Elles ne constituent pas un avis médical, un diagnostic, ni une prescription.
            </p>
            <p className="mb-4" style={{ color: "#94A3B8", fontWeight: 300, lineHeight: 1.8 }}>
              En cas de doute sur votre état de santé, consultez toujours un médecin qualifié. En cas d'urgence, appelez le <strong style={{ color: "#EF4444" }}>15 (SAMU)</strong> ou le <strong style={{ color: "#EF4444" }}>112</strong>.
            </p>
            <p style={{ color: "#64748B", fontSize: "0.875rem" }}>
              ReinSanté ne collecte aucune donnée personnelle de santé et n'est pas responsable des décisions prises sur la base des informations présentées.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
