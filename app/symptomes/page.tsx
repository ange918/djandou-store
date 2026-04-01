"use client";

import { motion } from "framer-motion";
import {
  ExclamationCircleIcon,
  EyeDropperIcon,
  BoltIcon,
  FaceSmileIcon,
  ArrowTrendingDownIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const symptomes = [
  {
    icon: <EyeDropperIcon className="w-8 h-8" />,
    nom: "Urine mousseuse ou trouble",
    desc: "La présence de protéines dans l'urine (protéinurie) la rend mousseuse. Une urine trouble peut signaler une infection.",
    niveau: "urgent" as const,
  },
  {
    icon: <ExclamationCircleIcon className="w-8 h-8" />,
    nom: "Sang dans les urines (hématurie)",
    desc: "Urines rosées, rouges ou brunes. Peut être visible à l'œil nu ou détectable uniquement en laboratoire.",
    niveau: "urgent" as const,
  },
  {
    icon: <ArrowTrendingDownIcon className="w-8 h-8" />,
    nom: "Diminution du volume urinaire",
    desc: "Oligurie (< 500 mL/jour) ou anurie (< 100 mL/jour) sont des signes d'alerte majeurs d'insuffisance rénale.",
    niveau: "urgent" as const,
  },
  {
    icon: <FaceSmileIcon className="w-8 h-8" />,
    nom: "Œdèmes des membres inférieurs",
    desc: "Rétention d'eau causant des gonflements aux chevilles, pieds et jambes. Signe d'insuffisance rénale avancée.",
    niveau: "modere" as const,
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    nom: "Fatigue intense",
    desc: "L'accumulation de déchets dans le sang (urémie) et l'anémie liée à la carence en érythropoïétine causent une fatigue profonde.",
    niveau: "modere" as const,
  },
  {
    icon: <BeakerIcon className="w-8 h-8" />,
    nom: "Nausées et perte d'appétit",
    desc: "L'urémie irrite la muqueuse gastrique. Les nausées persistantes sont un signe tardif d'insuffisance rénale chronique.",
    niveau: "modere" as const,
  },
  {
    icon: <ExclamationCircleIcon className="w-8 h-8" />,
    nom: "Hypertension artérielle",
    desc: "Les reins défaillants ne régulent plus correctement la pression artérielle. L'HTA est à la fois cause et conséquence de la maladie rénale.",
    niveau: "surveiller" as const,
  },
  {
    icon: <EyeDropperIcon className="w-8 h-8" />,
    nom: "Douleurs lombaires",
    desc: "Douleur dans le bas du dos (flancs) peut indiquer une infection rénale, un calcul ou une polykystose.",
    niveau: "surveiller" as const,
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    nom: "Crampes musculaires nocturnes",
    desc: "Déséquilibres en électrolytes (sodium, potassium, calcium) liés à la dysfonction rénale causent des crampes fréquentes.",
    niveau: "surveiller" as const,
  },
  {
    icon: <FaceSmileIcon className="w-8 h-8" />,
    nom: "Démangeaisons cutanées",
    desc: "Accumulation de phosphore et d'urée dans le sang irrite la peau. Signe tardif d'IRC avancée.",
    niveau: "surveiller" as const,
  },
  {
    icon: <ArrowTrendingDownIcon className="w-8 h-8" />,
    nom: "Dyspnée (essoufflement)",
    desc: "Rétention liquidienne dans les poumons (œdème pulmonaire) ou anémie sévère peuvent provoquer une gêne respiratoire.",
    niveau: "urgent" as const,
  },
  {
    icon: <BeakerIcon className="w-8 h-8" />,
    nom: "Mictions nocturnes (nycturie)",
    desc: "Se lever plusieurs fois la nuit pour uriner peut indiquer une atteinte de la concentration urinaire par les reins.",
    niveau: "surveiller" as const,
  },
];

const niveauConfig = {
  urgent: { label: "Urgent", color: "#EF4444", bg: "rgba(239,68,68,0.08)" },
  modere: { label: "Modéré", color: "#F97316", bg: "rgba(249,115,22,0.08)" },
  surveiller: { label: "À surveiller", color: "#00C9FF", bg: "rgba(0,201,255,0.08)" },
};

const examens = [
  { examen: "Créatinine sérique", normale: "60–110 μmol/L (H) / 44–97 (F)", anomalie: "> 150 μmol/L : insuffisance rénale possible" },
  { examen: "DFG (eGFR)", normale: "> 90 mL/min/1,73m²", anomalie: "< 60 : IRC confirmée si > 3 mois" },
  { examen: "Protéinurie 24h", normale: "< 150 mg/24h", anomalie: "> 300 mg : néphropathie glomérulaire" },
  { examen: "Rapport albumine/créatinine", normale: "< 30 mg/g", anomalie: "> 300 mg/g : macroalbuminurie" },
  { examen: "Urée sanguine", normale: "2,5–7,5 mmol/L", anomalie: "> 15 : urémie significative" },
  { examen: "Potassium (kaliémie)", normale: "3,5–5,0 mmol/L", anomalie: "> 5,5 : hyperkaliémie dangereuse" },
  { examen: "ECBU (bandelette urinaire)", normale: "Négatif leucocytes/nitrites", anomalie: "Leucocyturie > 10⁴/mL : infection" },
];

export default function SymptomesPage() {
  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.05) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
            SIGNES D'ALERTE
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Symptômes rénaux
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Apprenez à reconnaître les signes d'une atteinte rénale. Certains nécessitent une consultation urgente, d'autres un suivi régulier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="CLINIQUE" title="Signes d'alerte" subtitle="Chaque symptôme est classé selon son niveau d'urgence. En cas de doute, consultez toujours un médecin." />

          <div className="flex flex-wrap gap-3 mb-12">
            {Object.entries(niveauConfig).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: cfg.bg, border: `1px solid ${cfg.color}30` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: cfg.color }} />
                <span className="text-xs font-medium" style={{ color: cfg.color }}>{cfg.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptomes.map((s, i) => {
              const cfg = niveauConfig[s.niveau];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-[20px] p-5 sm:p-8"
                  style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div style={{ color: "#00C9FF" }}>{s.icon}</div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ color: cfg.color, background: cfg.bg }}>
                      {cfg.label}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC", lineHeight: 1.3 }}>{s.nom}</h3>
                  <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.875rem" }}>{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="BIOLOGIE" title="Examens clés" subtitle="Valeurs normales et seuils d'alerte des principaux examens biologiques rénaux." />

          <div className="rounded-[20px] overflow-hidden overflow-x-auto" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="min-w-[560px]">
              <div className="grid grid-cols-3 px-5 sm:px-8 py-4" style={{ background: "rgba(0,201,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Examen", "Valeur normale", "Anomalie"].map((h) => (
                  <p key={h} className="text-xs font-medium tracking-wider uppercase" style={{ color: "#00C9FF" }}>{h}</p>
                ))}
              </div>
              {examens.map((ex, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-5 sm:px-8 py-5"
                  style={{
                    borderBottom: i < examens.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                  }}
                >
                  <p className="text-sm font-medium pr-2" style={{ color: "#F8FAFC", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>{ex.examen}</p>
                  <p className="text-sm font-mono pr-2" style={{ color: "#10B981" }}>{ex.normale}</p>
                  <p className="text-sm" style={{ color: "#94A3B8", fontWeight: 300 }}>{ex.anomalie}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-5 sm:p-8 rounded-[20px]" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EF4444" }}>
              🚨 Quand consulter en urgence ?
            </h4>
            <ul className="space-y-3">
              {["Anurie (absence d'urine) depuis plus de 12h", "Sang abondant dans les urines", "Douleur lombaire intense avec fièvre > 38,5°C (pyélonéphrite)", "Œdème aigu du poumon (essoufflement soudain)", "Convulsions ou état confusionnel (encéphalopathie urémique)"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "#EF4444" }}>→</span>
                  <span style={{ color: "#94A3B8", fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
