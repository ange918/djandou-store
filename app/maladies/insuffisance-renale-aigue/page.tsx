"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExclamationTriangleIcon,
  ClockIcon,
  HeartIcon,
  BeakerIcon,
  ArrowTrendingDownIcon,
  UsersIcon,
  ExclamationCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Oligurie / Anurie", description: "Diminution brutale du volume urinaire (< 400 mL/j) ou arrêt complet de la diurèse. Signe cardinal de l'IRA.", niveau: "urgent" as const },
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Hyperkaliémie", description: "Élévation du potassium sanguin (> 5,5 mmol/L) pouvant provoquer des troubles du rythme cardiaque graves voire un arrêt cardiaque.", niveau: "urgent" as const },
  { icon: <ExclamationCircleIcon className="w-8 h-8" />, nom: "Surcharge hydrique", description: "Œdèmes diffus, œdème pulmonaire avec dyspnée aiguë. Conséquence de l'incapacité des reins à éliminer l'excès d'eau.", niveau: "urgent" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Encéphalopathie urémique", description: "Confusion, agitation, convulsions dues à l'accumulation de toxines urémiques dans le sang. Urgence neurologique.", niveau: "urgent" as const },
  { icon: <HeartIcon className="w-8 h-8" />, nom: "Nausées et vomissements", description: "L'urémie irrite la muqueuse gastrique, provoquant des nausées persistantes et des vomissements parfois incoercibles.", niveau: "modere" as const },
  { icon: <ClockIcon className="w-8 h-8" />, nom: "Asthénie intense", description: "Fatigue profonde liée à l'accumulation de déchets métaboliques et aux perturbations électrolytiques.", niveau: "modere" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Douleurs lombaires", description: "Douleur dans les flancs pouvant indiquer une cause obstructive (calcul, caillot) ou une néphrite interstitielle.", niveau: "surveiller" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Hypertension artérielle aiguë", description: "Élévation brutale de la pression artérielle due à la rétention de sel et d'eau par les reins défaillants.", niveau: "modere" as const },
];

const traitements = [
  { titre: "Traitement de la cause", description: "Identification et traitement de la cause déclenchante : arrêt du médicament néphrotoxique, levée de l'obstruction, traitement du sepsis ou de l'état de choc.", type: "Hygiène de vie" as const },
  { titre: "Réanimation hémodynamique", description: "Expansion volémique par solutés cristalloïdes en cas d'hypovolémie, ou diurétiques en cas de surcharge. Maintien de la pression artérielle.", type: "Médicament" as const },
  { titre: "Correction des troubles électrolytiques", description: "Hyperkaliémie (kayexalate, bicarbonate, insuline-glucose), acidose métabolique, hyperphosphatémie.", type: "Médicament" as const },
  { titre: "Épuration extra-rénale (EER)", description: "Dialyse d'urgence si hyperkaliémie sévère, surcharge hydrique réfractaire, acidose sévère ou encéphalopathie urémique.", type: "Suppléance rénale" as const },
  { titre: "Néphroprotection", description: "Arrêt des médicaments néphrotoxiques (AINS, aminosides, produits de contraste iodés, IEC/ARA2 si hypovolémie).", type: "Médicament" as const },
  { titre: "Nutrition adaptée", description: "Apports protéiques modérés (0,8-1,2 g/kg/j selon le contexte), restriction en potassium et phosphore, hydratation contrôlée.", type: "Hygiène de vie" as const },
];

const preventionItems = [
  { label: "Éviter les AINS en automédication (ibuprofène, diclofénac)" },
  { label: "S'hydrater suffisamment avant et après un examen avec produit de contraste" },
  { label: "Signaler toute allergie ou insuffisance rénale avant tout examen d'imagerie" },
  { label: "Surveiller la tension artérielle et traiter toute hypotension rapidement" },
  { label: "Traiter rapidement les infections urinaires et les sepsis" },
  { label: "Éviter les associations médicamenteuses néphrotoxiques" },
  { label: "Contrôler régulièrement la créatinine si traitement chronique potentiellement toxique" },
];

const populations = [
  "Personnes âgées de plus de 65 ans (réserve fonctionnelle rénale réduite)",
  "Diabétiques et hypertendus traités par IEC ou ARA2",
  "Patients hospitalisés en soins intensifs (sepsis, chirurgie lourde)",
  "Sujets présentant une insuffisance rénale chronique préexistante",
  "Patients traités par médicaments néphrotoxiques (aminosides, cisplatine, lithium)",
  "Personnes déshydratées (gastro-entérite, forte chaleur, insuffisance cardiaque)",
];

const IllustrationIRA = () => (
  <svg viewBox="0 0 500 380" fill="none" className="w-full h-auto max-w-sm mx-auto lg:max-w-none" xmlns="http://www.w3.org/2000/svg">
    <text x="250" y="30" textAnchor="middle" fill="#EF4444" fontSize="14" fontFamily="Poppins,sans-serif" fontWeight="500">
      IRA — Rein en état de choc
    </text>
    {/* Rein gauche — atteint */}
    <path d="M140 80 C100 80 65 115 65 160 C65 250 120 320 165 320 C192 320 200 295 196 265 C194 248 180 238 175 215 C168 185 183 163 178 138 C170 110 168 80 140 80Z"
      fill="rgba(239,68,68,0.06)" stroke="#EF4444" strokeWidth="2.5" />
    {/* Zone choc - inflammation */}
    <circle cx="140" cy="175" r="30" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.6)" strokeWidth="1.5" strokeDasharray="4 2">
      <animate attributeName="r" values="28;33;28" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="140" y="178" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="Poppins,sans-serif">Nécrose</text>
    {/* Flèche DFG chutant */}
    <path d="M220 120 L220 200" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
    <text x="235" y="130" fill="#EF4444" fontSize="10" fontFamily="Poppins,sans-serif">DFG ↓↓</text>
    <text x="235" y="145" fill="#94A3B8" fontSize="9" fontFamily="Poppins,sans-serif">{"< 15 mL/min"}</text>
    {/* Définition arrowhead */}
    <defs>
      <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 Z" fill="#EF4444" />
      </marker>
    </defs>
    {/* Obstruction uretère */}
    <path d="M168 290 L172 340" stroke="rgba(0,201,255,0.4)" strokeWidth="2" strokeDasharray="4 3" />
    <circle cx="170" cy="345" r="7" fill="rgba(239,68,68,0.3)" stroke="#EF4444" strokeWidth="1.5" />
    <text x="185" y="350" fill="#EF4444" fontSize="9" fontFamily="Poppins,sans-serif">Obstruction</text>
    {/* Rein droit — moins atteint */}
    <path d="M370 80 C410 80 445 115 445 160 C445 250 390 320 345 320 C318 320 310 295 314 265 C316 248 330 238 335 215 C342 185 327 163 332 138 C340 110 342 80 370 80Z"
      fill="rgba(239,68,68,0.03)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" />
    {/* Gradient de couleur montrant dégradation */}
    <rect x="280" y="355" width="150" height="15" rx="7" fill="url(#gradDFG)" />
    <defs>
      <linearGradient id="gradDFG" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
    </defs>
    <text x="280" y="345" fill="#64748B" fontSize="9" fontFamily="Poppins,sans-serif">DFG 0</text>
    <text x="420" y="345" fill="#64748B" fontSize="9" fontFamily="Poppins,sans-serif">15+</text>
  </svg>
);

export default function IRAPage() {
  return (
    <>
      <MaladieHero
        badge="MALADIE RÉNALE"
        urgencyLabel="Urgence médicale"
        title="Insuffisance rénale aiguë"
        definition="L'insuffisance rénale aiguë (IRA) est une perte rapide et brutale de la fonction rénale survenant en quelques heures à quelques jours, entraînant une accumulation de déchets azotés et des perturbations hydroélectrolytiques potentiellement mortelles."
        gradientFrom="rgba(127,29,29,0.5)"
        illustration={<IllustrationIRA />}
      />

      {/* Vue d'ensemble */}
      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3">
              <UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span>
            </div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EF4444" }}>5-10%</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>des hospitalisations sont compliquées d'une IRA. En soins intensifs, ce taux monte à 30-50%.</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3">
              <ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Causes principales</span>
            </div>
            <ul className="space-y-2">
              {["Hypovolémie / choc (pré-rénale)", "Nécrose tubulaire aiguë", "Obstruction des voies urinaires"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                  <span style={{ color: "#00C9FF" }}>→</span>{c}
                </li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3">
              <ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span>
            </div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F97316" }}>60%</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>de récupération complète si traitée rapidement. Mortalité de 30-50% en réanimation selon la cause.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="l'insuffisance rénale aiguë" />

      {/* Voir aussi */}
      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/insuffisance-renale-chronique", titre: "Insuffisance rénale chronique", desc: "L'IRA peut évoluer en IRC si non traitée." },
              { href: "/maladies/nephropathie-diabetique", titre: "Néphropathie diabétique", desc: "Facteur de risque majeur d'IRA." },
              { href: "/maladies/nephropathie-hypertensive", titre: "Néphropathie hypertensive", desc: "HTA sévère comme cause d'IRA." },
            ].map((m, i) => (
              <GlowCard key={i} href={m.href}>
                <h4 className="font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#00C9FF" }}>{m.titre}</h4>
                <p className="text-sm" style={{ color: "#64748B" }}>{m.desc}</p>
              </GlowCard>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/maladies" className="px-6 py-3 rounded-full text-sm font-medium" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8" }}>
              ← Toutes les maladies
            </Link>
            <Link href="/outils" className="px-6 py-3 rounded-full text-sm font-medium text-white" style={{ background: "linear-gradient(135deg, #00C9FF, #0066FF)" }}>
              Tester mon risque
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
