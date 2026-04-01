"use client";

import Link from "next/link";
import { ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, HeartIcon, BeakerIcon, EyeDropperIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <BoltIcon className="w-8 h-8" />, nom: "HTA résistante", description: "Pression artérielle élevée malgré 3 antihypertenseurs dont un diurétique. Signe d'atteinte rénale avancée.", niveau: "urgent" as const },
  { icon: <HeartIcon className="w-8 h-8" />, nom: "Maux de tête pulsatiles", description: "Céphalées occipitales au réveil, caractéristiques d'une HTA sévère non contrôlée.", niveau: "modere" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Protéinurie modérée", description: "Fuite protéique urinaire modérée (0,3-1 g/24h). Moins sévère que dans la néphropathie diabétique.", niveau: "surveiller" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Baisse silencieuse du DFG", description: "Détérioration lente et asymptomatique de la fonction rénale pendant des années.", niveau: "surveiller" as const },
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Hématurie microscopique", description: "Hématies dans les urines détectées à la bandelette, liées aux lésions vasculaires rénales.", niveau: "surveiller" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Crise hypertensive", description: "PA > 180/120 avec signes d'atteinte d'organe cible : confusion, vision trouble, insuffisance cardiaque aiguë.", niveau: "urgent" as const },
];

const traitements = [
  { titre: "Antihypertenseurs en 1re ligne", description: "IEC ou ARA2 si protéinurie. Amlodipine, thiazidiques en association. Objectif PA < 130/80 mmHg.", type: "Médicament" as const },
  { titre: "Réduction sodée stricte", description: "< 6g de sel par jour réduction de 5-6 mmHg de PA systolique. Mesure non médicamenteuse la plus efficace.", type: "Hygiène de vie" as const },
  { titre: "Traitement des facteurs aggravants", description: "Arrêt tabac, perte de poids si surpoids, réduction alcool, exercice physique régulier adapté.", type: "Hygiène de vie" as const },
  { titre: "Néphroprotection avancée", description: "iSGLT2 (dapagliflozine) ont une indication en IRC avec ou sans diabète, avec effet néphroprotecteur démontré.", type: "Médicament" as const },
  { titre: "Suppléance rénale", description: "Si progression vers IRC terminale : dialyse ou transplantation rénale.", type: "Suppléance rénale" as const },
];

const preventionItems = [
  { label: "Mesurer ma tension artérielle régulièrement (tensiomètre au domicile)" },
  { label: "Prendre mon traitement antihypertenseur sans interruption" },
  { label: "Réduire le sel à moins de 6g/jour" },
  { label: "Pratiquer 30 min d'activité physique modérée par jour" },
  { label: "Arrêter de fumer" },
  { label: "Limiter l'alcool (< 2 verres/jour)" },
  { label: "Surveiller créatinine et microalbuminurie annuellement" },
];

const populations = [
  "Hypertendus depuis > 10 ans avec mauvais contrôle tensionnel",
  "Sujets noirs africains (risque x4 de néphropathie hypertensive sévère)",
  "Personnes obèses avec syndrome métabolique",
  "Fumeurs hypertendus (double risque vasculaire rénal)",
  "Sujets avec HTA et apnées du sommeil non traitées",
];

const Illustration = () => (
  <svg width="480" height="360" viewBox="0 0 480 360" fill="none">
    <text x="240" y="25" textAnchor="middle" fill="#EF4444" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Artériole rénale — HTA</text>
    {/* Artériole normale (gauche) */}
    <path d="M80 120 C80 120 80 250 80 280" stroke="#00C9FF" strokeWidth="20" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M80 120 C80 120 80 250 80 280" stroke="rgba(0,201,255,0.2)" strokeWidth="30" strokeLinecap="round" fill="none"/>
    <text x="80" y="105" textAnchor="middle" fill="#00C9FF" fontSize="9" fontFamily="Poppins,sans-serif">Normale</text>
    <text x="80" y="295" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Poppins,sans-serif">Lumière large</text>
    {/* Artériole hypertensive (droite) */}
    <path d="M240 120 C240 120 240 250 240 280" stroke="#EF4444" strokeWidth="38" strokeLinecap="round" fill="none" opacity="0.3"/>
    <path d="M240 120 C240 120 240 250 240 280" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.9"/>
    <text x="240" y="105" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="Poppins,sans-serif">HTA chronique</text>
    <text x="240" y="295" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Poppins,sans-serif">Paroi épaissie, lumière réduite</text>
    {/* Jauge pression */}
    <rect x="360" y="100" width="80" height="200" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <rect x="370" y={100 + (200 - 160)} width="60" height="160" rx="8" fill="url(#gradPress)"/>
    <defs><linearGradient id="gradPress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#EF4444" /><stop offset="100%" stopColor="#F97316" /></linearGradient></defs>
    <text x="400" y="95" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="Poppins,sans-serif" fontWeight="bold">180</text>
    <text x="400" y="310" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Poppins,sans-serif">mmHg</text>
    <text x="400" y="185" textAnchor="middle" fill="white" fontSize="9" fontFamily="Poppins,sans-serif" fontWeight="bold">PA ↑↑</text>
  </svg>
);

export default function NephropathieHypertensivePage() {
  return (
    <>
      <MaladieHero
        badge="COMPLICATION HTA"
        urgencyLabel="Surveillance rénale"
        title="Néphropathie hypertensive"
        definition="La néphropathie hypertensive désigne les lésions rénales induites par une hypertension artérielle chronique mal contrôlée. Elle est la 2e cause d'IRC terminale en France et souvent silencieuse pendant des années."
        gradientFrom="rgba(127,29,29,0.5)"
        illustration={<Illustration />}
      />

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EF4444" }}>25%</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>des IRC terminales en France. Parmi les 15 millions d'hypertendus français, environ 10% développent une néphropathie.</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Mécanismes</span></div>
            <ul className="space-y-2">
              {["Artériosclérose des artères rénales", "Ischémie glomérulaire chronique", "Activation SRAA et fibrose"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F97316" }}>Contrôlable</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Un contrôle tensionnel optimal (PA < 130/80) réduit de 30% la progression vers l'IRC terminale.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="la néphropathie hypertensive" />

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/insuffisance-renale-chronique", titre: "IRC", desc: "Évolution possible de la néphropathie hypertensive." },
              { href: "/maladies/nephropathie-diabetique", titre: "Néphropathie diabétique", desc: "Souvent associée — double atteinte métabolique." },
              { href: "/maladies/insuffisance-renale-aigue", titre: "IRA", desc: "Crise hypertensive sévère peut provoquer une IRA." },
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
