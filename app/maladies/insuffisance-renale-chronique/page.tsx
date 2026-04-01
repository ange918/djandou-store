"use client";

import Link from "next/link";
import {
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  UsersIcon,
  BeakerIcon,
  BoltIcon,
  EyeDropperIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Fatigue chronique", description: "Asthénie profonde liée à l'anémie (carence en EPO) et à l'accumulation de toxines urémiques dans le sang.", niveau: "modere" as const },
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Œdèmes des membres", description: "Rétention d'eau et de sel due à la baisse du DFG, provoquant des gonflements aux chevilles, pieds et jambes.", niveau: "modere" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Hypertension artérielle", description: "L'HTA est à la fois cause et conséquence de l'IRC. Elle s'aggrave progressivement avec la détérioration rénale.", niveau: "surveiller" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Anémie", description: "Pâleur, essoufflement à l'effort. Due à la carence en érythropoïétine (EPO), hormone produite par les reins.", niveau: "modere" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Prurit urémique", description: "Démangeaisons cutanées intenses liées à l'accumulation de phosphore et d'urée. Signe tardif d'IRC avancée.", niveau: "surveiller" as const },
  { icon: <HeartIcon className="w-8 h-8" />, nom: "Nausées / perte d'appétit", description: "Inappétence progressive et nausées chroniques à mesure que les toxines urémiques s'accumulent dans l'organisme.", niveau: "modere" as const },
  { icon: <ClockIcon className="w-8 h-8" />, nom: "Crampes musculaires", description: "Déséquilibres électrolytiques (calcium, magnésium, potassium) provoquant des crampes, surtout nocturnes.", niveau: "surveiller" as const },
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Oligurie tardive", description: "Réduction progressive du volume urinaire aux stades avancés de l'IRC (stade 4-5, DFG < 30 mL/min).", niveau: "urgent" as const },
];

const traitements = [
  { titre: "Néphroprotection active", description: "IEC ou ARA2 pour réduire la protéinurie et ralentir la progression. Cibles : PA < 130/80, protéinurie < 0,5 g/j.", type: "Médicament" as const },
  { titre: "Contrôle des facteurs de risque", description: "Traitement optimal du diabète (HbA1c < 7%), de l'HTA et de la dyslipidémie. Ces mesures ralentissent la progression de l'IRC.", type: "Hygiène de vie" as const },
  { titre: "Traitement de l'anémie", description: "Agents stimulants l'érythropoïèse (ASE : érythropoïétine recombinante) et supplémentation en fer.", type: "Médicament" as const },
  { titre: "Correction des troubles minéraux", description: "Chélateurs du phosphore (sevelamer, carbonate de calcium), analogues de la vitamine D (calcitriol), calcimimétiques.", type: "Médicament" as const },
  { titre: "Dialyse (suppléance)", description: "Hémodialyse (3 séances/semaine, 4h) ou dialyse péritonéale (à domicile) pour les stades 5 (DFG < 15 mL/min).", type: "Suppléance rénale" as const },
  { titre: "Transplantation rénale", description: "Traitement de référence de l'IRC terminale. Survie du greffon à 10 ans : environ 60%. Qualité de vie supérieure à la dialyse.", type: "Chirurgie" as const },
];

const preventionItems = [
  { label: "Contrôler ma tension artérielle (objectif < 130/80 mmHg)" },
  { label: "Surveiller ma glycémie si diabétique (HbA1c < 7%)" },
  { label: "Arrêter de fumer" },
  { label: "Maintenir un poids normal (IMC 18,5-24,9)" },
  { label: "Éviter les AINS en automédication" },
  { label: "Faire un bilan rénal annuel si facteurs de risque" },
  { label: "Respecter le régime hyposodé prescrit (< 6g sel/j)" },
  { label: "Pratiquer une activité physique régulière adaptée" },
];

const populations = [
  "Diabétiques de type 1 ou 2 (risque de néphropathie diabétique)",
  "Hypertendus mal contrôlés depuis plusieurs années",
  "Personnes avec antécédents familiaux de maladie rénale",
  "Sujets ayant présenté une IRA ou des infections urinaires répétées",
  "Personnes obèses (hyperfiltration glomérulaire chronique)",
  "Patients traités au long cours par médicaments néphrotoxiques",
];

const IllustrationIRC = () => (
  <svg viewBox="0 0 500 360" fill="none" className="w-full h-auto max-w-sm mx-auto lg:max-w-none" xmlns="http://www.w3.org/2000/svg">
    <text x="250" y="25" textAnchor="middle" fill="#F97316" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">
      5 stades de l'IRC — Dégradation progressive
    </text>
    {[
      { x: 20, scale: 1, label: "Stade 1", sub: "DFG > 90", color: "#10B981" },
      { x: 110, scale: 0.85, label: "Stade 2", sub: "60-89", color: "#84CC16" },
      { x: 195, scale: 0.7, label: "Stade 3", sub: "30-59", color: "#F59E0B" },
      { x: 275, scale: 0.55, label: "Stade 4", sub: "15-29", color: "#F97316" },
      { x: 345, scale: 0.42, label: "Stade 5", sub: "< 15", color: "#EF4444" },
    ].map((stage, i) => {
      const h = 150 * stage.scale;
      const w = 55 * stage.scale;
      const y = 180 - h;
      return (
        <g key={i}>
          <ellipse cx={stage.x + 32} cy={y + 10} rx={w / 2} ry={h / 2}
            fill={`${stage.color}15`} stroke={stage.color} strokeWidth="1.5" />
          <text x={stage.x + 32} y={y - 5} textAnchor="middle" fill={stage.color} fontSize="9" fontFamily="Poppins,sans-serif">{stage.label}</text>
          <text x={stage.x + 32} y={y + 8} textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Poppins,sans-serif">{stage.sub}</text>
          <text x={stage.x + 32} y={190} textAnchor="middle" fill="#64748B" fontSize="7" fontFamily="Poppins,sans-serif">mL/min</text>
        </g>
      );
    })}
    <path d="M50 190 L440 190" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <text x="250" y="230" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="Poppins,sans-serif">→ Progression dans le temps (années)</text>
    <circle cx="430" cy="175" r="25" fill="rgba(239,68,68,0.1)" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 2">
      <animate attributeName="r" values="23;27;23" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="430" y="175" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="Poppins,sans-serif">DIALYSE</text>
    <text x="430" y="186" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="Poppins,sans-serif">GREFFE</text>
  </svg>
);

export default function IRCPage() {
  return (
    <>
      <MaladieHero
        badge="MALADIE CHRONIQUE"
        urgencyLabel="Suivi nécessaire"
        title="Insuffisance rénale chronique"
        definition="L'IRC est une diminution progressive et irréversible du DFG (&lt; 60 mL/min/1,73m²) pendant plus de 3 mois, touchant 850 millions de personnes dans le monde. Elle évolue silencieusement vers l'IRC terminale nécessitant dialyse ou greffe."
        gradientFrom="rgba(154,52,18,0.5)"
        illustration={<IllustrationIRC />}
      />

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F97316" }}>850M</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>de personnes atteintes d&apos;IRC dans le monde. Plus de 4 millions sont en IRC terminale (dialyse ou greffe).</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Causes</span></div>
            <ul className="space-y-2">
              {["Néphropathie diabétique (25-30%)", "Néphropathie hypertensive (25%)", "Glomérulonéphrites chroniques"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widests uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F97316" }}>Vie entière</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Suivi nécessaire à vie. Avec traitement optimal, la progression peut être ralentie de 30 à 50%.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="l'insuffisance rénale chronique" />

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/insuffisance-renale-aigue", titre: "Insuffisance rénale aiguë", desc: "L'IRA peut évoluer en IRC si non traitée." },
              { href: "/maladies/nephropathie-diabetique", titre: "Néphropathie diabétique", desc: "1re cause d'IRC terminale dans le monde." },
              { href: "/maladies/nephropathie-hypertensive", titre: "Néphropathie hypertensive", desc: "2e cause d'IRC terminale." },
            ].map((m, i) => (
              <GlowCard key={i} href={m.href}>
                <h4 className="font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#00C9FF" }}>{m.titre}</h4>
                <p className="text-sm" style={{ color: "#64748B" }}>{m.desc}</p>
              </GlowCard>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/maladies" className="px-6 py-3 rounded-full text-sm font-medium" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8" }}>← Toutes les maladies</Link>
            <Link href="/outils" className="px-6 py-3 rounded-full text-sm font-medium text-white" style={{ background: "linear-gradient(135deg, #00C9FF, #0066FF)" }}>Tester mon risque</Link>
          </div>
        </div>
      </section>
    </>
  );
}
