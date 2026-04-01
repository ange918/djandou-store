"use client";

import Link from "next/link";
import { BeakerIcon, ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, EyeDropperIcon, SparklesIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Polyurie / polydipsie", description: "Émission de grandes quantités d'urines (> 3L/j) associée à une soif intense. Liée à un défaut de concentration urinaire.", niveau: "surveiller" as const },
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Troubles électrolytiques", description: "Hypokaliémie, hypophosphatémie, hyponatrémie ou hypomagnésémie selon la tubulopathie. Peuvent causer arythmies et paralysie.", niveau: "urgent" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Glycosurie sans hyperglycémie", description: "Glucose dans les urines malgré une glycémie normale — pathognomonique du syndrome de Fanconi ou de glycosurie rénale isolée.", niveau: "modere" as const },
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Rachitisme / ostéomalacie", description: "Carence en phosphore par fuite rénale provoquant une minéralisation osseuse insuffisante chez l'enfant et l'adulte.", niveau: "modere" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Acidose métabolique", description: "Incapacité du tubule à réabsorber les bicarbonates ou à excréter les protons. Fatigue, hyperventilation compensatrice.", niveau: "urgent" as const },
  { icon: <SparklesIcon className="w-8 h-8" />, nom: "Lithiase urinaire récidivante", description: "Certaines tubulopathies (cystinurie, hyperoxalurie primitive) provoquent des calculs urinaires très récidivants dès l'enfance.", niveau: "modere" as const },
];

const traitements = [
  { titre: "Supplémentation électrolytique", description: "Potassium, phosphore, bicarbonate, magnésium selon les déficits identifiés. Souvent nécessaire à vie dans les formes héréditaires.", type: "Médicament" as const },
  { titre: "Traitement de la cause", description: "Arrêt de la néphrotoxine (tenofovir, cisplatine, métaux lourds), traitement de la myélomatose, correction de l'obstruction.", type: "Médicament" as const },
  { titre: "Thiazidiques (diabète insipide néphrogénique)", description: "Paradoxalement, les thiazidiques réduisent la polyurie dans le diabète insipide néphrogénique en diminuant la charge en eau.", type: "Médicament" as const },
  { titre: "D-pénicillamine / tiopronine", description: "Dans la cystinurie, ces agents chélateurs réduisent la concentration de cystine urinaire et préviennent la lithiase.", type: "Médicament" as const },
  { titre: "Transplantation rénale / hépatique", description: "Dans les formes sévères d'hyperoxalurie primitive type 1 (déficit enzymatique hépatique), greffe combinée foie-rein.", type: "Suppléance rénale" as const },
];

const preventionItems = [
  { label: "Surveiller la kaliémie et la phosphatémie si traitement antirétroviral (ténofovir)" },
  { label: "Éviter l'exposition aux métaux lourds (plomb, cadmium, mercure)" },
  { label: "Boire abondamment en cas de cystinurie (> 3L/j)" },
  { label: "Alcaliniser les urines en cas de cystinurie ou d'uricurie" },
  { label: "Dépistage génétique familial si tubulopathie héréditaire" },
  { label: "Consulter un néphrologue spécialisé pour adaptation du traitement" },
];

const populations = [
  "Enfants atteints de maladies métaboliques héréditaires (cystinose, tyrosinémie, galactosémie)",
  "Patients traités par ténofovir (VIH) ou cisplatine (chimiothérapie) au long cours",
  "Sujets exposés aux métaux lourds professionnellement",
  "Personnes avec lithiases urinaires récidivantes inexpliquées",
  "Adultes avec hypokaliémie chronique inexpliquée (syndrome de Bartter ou Gitelman)",
];

const Illustration = () => (
  <svg viewBox="0 0 480 360" fill="none" className="w-full h-auto max-w-sm mx-auto lg:max-w-none">
    <text x="240" y="25" textAnchor="middle" fill="#3B82F6" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Néphron — Segments tubulaires</text>
    {/* Glomérule */}
    <circle cx="120" cy="80" r="30" fill="rgba(59,130,246,0.08)" stroke="#3B82F6" strokeWidth="1.5" />
    <text x="120" y="83" textAnchor="middle" fill="#3B82F6" fontSize="9" fontFamily="Poppins,sans-serif">Glomérule</text>
    {/* TCP - Tube contourné proximal */}
    <path d="M145 85 C180 85 200 110 200 130 C200 150 175 155 175 170 C175 185 195 190 200 210" stroke="#EF4444" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x="215" y="135" fill="#EF4444" fontSize="9" fontFamily="Poppins,sans-serif">TCP</text>
    <text x="215" y="148" fill="#64748B" fontSize="7" fontFamily="Poppins,sans-serif">(Fanconi ici)</text>
    {/* Anse de Henlé */}
    <path d="M200 210 C200 240 230 260 255 260 C280 260 285 240 285 220" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x="255" y="280" fill="#F59E0B" fontSize="9" fontFamily="Poppins,sans-serif">Anse Henlé</text>
    <text x="255" y="293" fill="#64748B" fontSize="7" fontFamily="Poppins,sans-serif">(Bartter)</text>
    {/* TCD */}
    <path d="M285 220 C290 205 320 200 340 185 C360 170 360 150 355 135" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x="355" y="165" fill="#10B981" fontSize="9" fontFamily="Poppins,sans-serif">TCD</text>
    <text x="355" y="178" fill="#64748B" fontSize="7" fontFamily="Poppins,sans-serif">(Gitelman)</text>
    {/* Canal collecteur */}
    <path d="M355 135 C355 110 360 90 360 65" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x="370" y="95" fill="#8B5CF6" fontSize="9" fontFamily="Poppins,sans-serif">Canal</text>
    <text x="370" y="108" fill="#8B5CF6" fontSize="9" fontFamily="Poppins,sans-serif">collecteur</text>
    <text x="370" y="121" fill="#64748B" fontSize="7" fontFamily="Poppins,sans-serif">(DI néphro.)</text>
    <text x="240" y="328" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Poppins,sans-serif">Chaque tubulopathie atteint un segment spécifique du néphron</text>
  </svg>
);

export default function TubulopathiesPage() {
  return (
    <>
      <MaladieHero
        badge="NÉPHROPATHIE TUBULAIRE"
        urgencyLabel="Spécialisation rénale"
        title="Tubulopathies"
        definition="Les tubulopathies sont des maladies des tubules rénaux, structures chargées de la réabsorption et de la sécrétion de substances filtrées par le glomérule. Congénitales ou acquises, elles provoquent des pertes anormales d'électrolytes, d'eau ou de métabolites dans les urines."
        gradientFrom="rgba(23,37,84,0.6)"
        illustration={<Illustration />}
      />

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#3B82F6" }}>Variable</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Les tubulopathies héréditaires sont rares (Bartter 1-2/1M). Acquises : plus fréquentes (médicaments, toxiques).</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Types principaux</span></div>
            <ul className="space-y-2">
              {["Syndrome de Fanconi (TCP global)", "Bartter / Gitelman (Anse / TCD)", "Diabète insipide néphrogénique"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#3B82F6" }}>Variable</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Formes acquises : guérison possible si cause éliminée. Formes héréditaires : traitement à vie mais pronostic rénal souvent favorable.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="les tubulopathies" />

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/calculs-renaux", titre: "Calculs rénaux", desc: "Cystinurie et hyperoxalurie causent des lithiases récidivantes." },
              { href: "/maladies/syndrome-alport", titre: "Syndrome d'Alport", desc: "Autre néphropathie héréditaire avec anomalies tubulaires." },
              { href: "/maladies/insuffisance-renale-chronique", titre: "IRC", desc: "Complication des tubulopathies sévères non traitées." },
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
