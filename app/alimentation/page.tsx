"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const recommandes = [
  { item: "Légumes frais (brocoli, chou, oignon, ail)", raison: "Faibles en potassium et phosphore, riches en antioxydants" },
  { item: "Fruits rouges (myrtilles, fraises, canneberges)", raison: "Anthocyanes protecteurs, faible charge glycémique" },
  { item: "Chou-fleur", raison: "Riche en vitamine C et acide folique, très faible en potassium" },
  { item: "Poisson blanc (cabillaud, sole, merlan)", raison: "Protéines de qualité, faible en phosphore" },
  { item: "Blancs d'œuf", raison: "Protéines purifiées sans phosphore du jaune" },
  { item: "Huile d'olive", raison: "Graisses mono-insaturées protectrices cardiovasculaires" },
  { item: "Riz, pâtes, pain blanc", raison: "Féculents peu chargés en potassium et phosphore" },
  { item: "Pomme, raisin, ananas", raison: "Fruits à teneur modérée en potassium" },
];

const eviter = [
  { item: "Sel en excès (> 6g/jour)", raison: "Aggrave l'hypertension et la rétention hydrique" },
  { item: "Banane, kiwi, abricot sec, avocat", raison: "Très riches en potassium, dangereux en IRC" },
  { item: "Produits laitiers en excès", raison: "Phosphore élevé, charge phosphocalcique importante" },
  { item: "Charcuterie et viandes transformées", raison: "Sel et phosphates ajoutés en grande quantité" },
  { item: "Légumineuses non trempées (haricots, lentilles)", raison: "Teneur élevée en potassium et phosphore" },
  { item: "Sodas, eau pétillante riche en sodium", raison: "Phosphate de sodium, apport élevé en sel" },
  { item: "Compléments alimentaires en potassium ou phosphore", raison: "À éviter absolument sans avis médical" },
  { item: "Alcool", raison: "Néphrotoxique direct, interactions médicamenteuses" },
];

const pathologies = [
  {
    titre: "IRC (tous stades)",
    conseils: ["Limiter les protéines animales (0,6-0,8 g/kg/j)", "Restreindre le potassium si > 5 mmol/L", "Limiter le phosphore (600-800 mg/j)", "Surveiller les apports en sodium (< 2g Na/j)"],
  },
  {
    titre: "Calculs rénaux oxaliques",
    conseils: ["Boire > 2L d'eau/jour", "Éviter épinards, rhubarbe, noix en excès", "Consommer suffisamment de calcium alimentaire", "Limiter sel et protéines animales"],
  },
  {
    titre: "Néphropathie diabétique",
    conseils: ["Contrôle glycémique strict (IG bas)", "Réduction sodée importante", "Protéines modérées (0,8 g/kg/j)", "Éviter les sucres rapides"],
  },
];

export default function AlimentationPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.05) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#10B981", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
            NUTRITION
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Alimentation rénale
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            L'alimentation joue un rôle crucial dans la protection des reins et le ralentissement des maladies rénales. Voici les grandes lignes à connaître.
          </p>
          <p className="mt-4 text-xs" style={{ color: "#475569" }}>⚠️ Ces informations sont générales. Toujours consulter un néphrologue ou diététicien spécialisé.</p>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="NUTRITION" title="À table avec les reins" subtitle="Deux listes essentielles : ce que vos reins apprécient, et ce qui les fragilise." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircleIcon className="w-6 h-6" style={{ color: "#10B981" }} />
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#10B981" }}>
                  À privilégier
                </h3>
              </div>
              <div className="space-y-4">
                {recommandes.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 p-5 rounded-xl"
                    style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}
                  >
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: "#F8FAFC" }}>{r.item}</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>{r.raison}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <XCircleIcon className="w-6 h-6" style={{ color: "#EF4444" }} />
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EF4444" }}>
                  À limiter / éviter
                </h3>
              </div>
              <div className="space-y-4">
                {eviter.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 p-5 rounded-xl"
                    style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}
                  >
                    <XCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: "#F8FAFC" }}>{e.item}</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>{e.raison}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="PATHOLOGIES" title="Conseils par pathologie" subtitle="Les recommandations nutritionnelles varient selon votre maladie rénale." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathologies.map((p, i) => (
              <div key={i} className="rounded-[20px] p-10" style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h4 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#00C9FF" }}>{p.titre}</h4>
                <ul className="space-y-3">
                  {p.conseils.map((c, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ background: "#00C9FF" }} />
                      <span style={{ color: "#94A3B8", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.6 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
