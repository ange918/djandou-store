"use client";

import Link from "next/link";
import { EyeIcon, ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, HeartIcon, BeakerIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Douleurs lombaires chroniques", description: "Douleurs sourdes dans les flancs liées à l'augmentation progressive du volume rénal par les kystes.", niveau: "modere" as const },
  { icon: <HeartIcon className="w-8 h-8" />, nom: "Hypertension artérielle précoce", description: "HTA présente dans 70-75% des patients avant tout déficit de la fonction rénale. Liée à l'activation du SRAA.", niveau: "modere" as const },
  { icon: <EyeIcon className="w-8 h-8" />, nom: "Hématurie macroscopique", description: "Sang dans les urines par rupture de kyste. Souvent déclenchée par l'exercice physique intense.", niveau: "surveiller" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Infection de kyste", description: "Fièvre, douleur localisée. Urgence médicale nécessitant antibiothérapie prolongée et parfois drainage.", niveau: "urgent" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Anévrysmes intracrâniens", description: "Présents chez 10-15% des patients PKD1. Risque de rupture et hémorragie méningée. Dépistage si antécédents familiaux.", niveau: "urgent" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Insuffisance rénale progressive", description: "Le DFG diminue progressivement. 50% des patients atteignent l'IRC terminale avant 60 ans (PKD1).", niveau: "surveiller" as const },
];

const traitements = [
  { titre: "Tolvaptan (Jinarc®)", description: "Antagoniste des récepteurs V2 de l'ADH, ralentit la croissance des kystes. Indiqué si PKD avec progression rapide documentée. Surveillance hépatique obligatoire.", type: "Médicament" as const },
  { titre: "Contrôle tensionnel strict", description: "IEC ou ARA2. Objectif PA < 130/80 mmHg. Le traitement de l'HTA est la mesure la plus néphroprotectrice dans la PKD.", type: "Médicament" as const },
  { titre: "Ponction/drainage de kyste", description: "En cas d'infection ou de compression sévère. Ponction guidée par échographie sous antibioprophylaxie.", type: "Chirurgie" as const },
  { titre: "Hyperhydratation", description: "Boire 3L d'eau/jour pour supprimer l'ADH endogène et ralentir la croissance des kystes (données préliminaires).", type: "Hygiène de vie" as const },
  { titre: "Dialyse / transplantation", description: "Au stade terminal. La polykystose rénale est une bonne indication à la transplantation — survie rénale excellente.", type: "Suppléance rénale" as const },
];

const preventionItems = [
  { label: "Réaliser une consultation de génétique si cas familiaux" },
  { label: "Contrôler rigoureusement la tension artérielle" },
  { label: "Boire suffisamment d'eau (2,5 à 3L/j)" },
  { label: "Éviter les sports de contact violents (risque de rupture de kyste)" },
  { label: "Ne pas prendre de caféine en excès (favorise la croissance des kystes)" },
  { label: "Dépistage des anévrysmes intracrâniens si antécédents familiaux" },
];

const populations = [
  "Personnes avec un parent au 1er degré atteint de PKD (risque 50%)",
  "Porteurs de mutation PKD1 (plus sévère, IRC terminale à 55 ans)",
  "Porteurs de mutation PKD2 (plus doux, IRC terminale à 75 ans)",
  "Sujets hypertendus jeunes sans autre cause évidente",
  "Personnes avec anévrysmes cérébraux inexpliqués",
];

const Illustration = () => (
  <svg viewBox="0 0 480 360" fill="none" className="w-full h-auto max-w-sm mx-auto lg:max-w-none">
    <text x="240" y="25" textAnchor="middle" fill="#06B6D4" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Polykystose — Kystes progressifs</text>
    {/* Rein polykystique */}
    <ellipse cx="200" cy="190" rx="140" ry="100" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.4)" strokeWidth="2" />
    {/* Kystes de différentes tailles */}
    {[
      { cx: 160, cy: 155, r: 22 }, { cx: 225, cy: 165, r: 30 }, { cx: 155, cy: 220, r: 18 },
      { cx: 235, cy: 225, r: 25 }, { cx: 285, cy: 185, r: 20 }, { cx: 185, cy: 190, r: 16 },
      { cx: 270, cy: 230, r: 15 }, { cx: 130, cy: 185, r: 13 }, { cx: 310, cy: 210, r: 12 },
    ].map((k, i) => (
      <g key={i}>
        <circle cx={k.cx} cy={k.cy} r={k.r}
          fill={`rgba(6,182,212,${0.1 + i * 0.02})`} stroke="#06B6D4" strokeWidth="1.5" />
        {i < 3 && (
          <circle cx={k.cx} cy={k.cy} r={k.r - 3} fill="rgba(6,182,212,0.05)" />
        )}
      </g>
    ))}
    <text x="200" y="315" textAnchor="middle" fill="#06B6D4" fontSize="10" fontFamily="Poppins,sans-serif">Rein polykystique — multiple kystes fluides</text>
    {/* Rein normal pour comparaison */}
    <ellipse cx="410" cy="190" rx="45" ry="70" fill="rgba(0,201,255,0.03)" stroke="rgba(0,201,255,0.3)" strokeWidth="1.5" />
    <text x="410" y="275" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Poppins,sans-serif">Normal</text>
    <line x1="350" y1="185" x2="375" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
  </svg>
);

export default function PolykystoseRenalePage() {
  return (
    <>
      <MaladieHero
        badge="MALADIE GÉNÉTIQUE"
        urgencyLabel="Suivi spécialisé"
        title="Polykystose rénale"
        definition="La polykystose rénale autosomique dominante (PKRAD) est la maladie rénale héréditaire la plus fréquente, touchant 1/1000 personnes. Causée par des mutations PKD1 ou PKD2, elle se caractérise par la prolifération progressive de kystes rénaux et hépatiques."
        gradientFrom="rgba(8,51,68,0.5)"
        illustration={<Illustration />}
      />

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widests uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#06B6D4" }}>1/1000</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>personnes en France. Environ 70 000 patients. 5-10% des IRC terminales sont liées à la polykystose.</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Génétique</span></div>
            <ul className="space-y-2">
              {["PKD1 (85%) — sévère, IRC à 55 ans", "PKD2 (15%) — plus doux, IRC à 75 ans", "Transmission autosomique dominante"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#06B6D4" }}>Variable</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Dépend du gène muté. Le tolvaptan ralentit la progression de 30%. Bonne survie après transplantation rénale.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="la polykystose rénale" />

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/syndrome-alport", titre: "Syndrome d'Alport", desc: "Autre maladie rénale héréditaire." },
              { href: "/maladies/insuffisance-renale-chronique", titre: "IRC", desc: "Évolution terminale de la PKD." },
              { href: "/maladies/infections-urinaires", titre: "Infections urinaires", desc: "Complication fréquente des kystes infectés." },
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
