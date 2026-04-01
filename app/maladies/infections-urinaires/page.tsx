"use client";

import Link from "next/link";
import { ShieldCheckIcon, BeakerIcon, ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, EyeDropperIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Brûlures mictionnelles", description: "Sensation de brûlure au moment d'uriner. Signe cardinal de l'infection urinaire basse (cystite).", niveau: "modere" as const },
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Pollakiurie", description: "Envies fréquentes d'uriner avec faibles volumes. Liées à l'inflammation de la vessie.", niveau: "modere" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Urines troubles / malodorantes", description: "Présence de bactéries et leucocytes rendant les urines opalescentes avec odeur ammoniacale.", niveau: "surveiller" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Fièvre > 38,5°C + frissons", description: "Signe d'ascension de l'infection vers les reins (pyélonéphrite). Urgence médicale nécessitant une antibiothérapie rapide.", niveau: "urgent" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Douleurs lombaires unilatérales", description: "Douleur dans le flanc irradiant vers l'épaule. Signe clinique majeur de pyélonéphrite aiguë.", niveau: "urgent" as const },
  { icon: <ShieldCheckIcon className="w-8 h-8" />, nom: "Hématurie macroscopique", description: "Urines rosées ou sanglantes. Fréquente dans la cystite hémorragique, nécessite confirmation bactériologique.", niveau: "surveiller" as const },
];

const traitements = [
  { titre: "Antibiothérapie probabiliste", description: "Fosfomycine-trométamol (monodose) pour cystite simple. Fluoroquinolones ou céphalosporines pour pyélonéphrite. Adaptation à l'antibiogramme.", type: "Médicament" as const },
  { titre: "Antalgiques / antispasmodiques", description: "Phloroglucinol pour soulager les spasmes vésicaux. Paracétamol contre la douleur et la fièvre.", type: "Médicament" as const },
  { titre: "Hydratation abondante", description: "Boire > 2L/jour pour diluer l'urine et favoriser l'élimination bactérienne.", type: "Hygiène de vie" as const },
  { titre: "Hospitalisation si pyélonéphrite sévère", description: "Antibiothérapie IV, réhydratation, surveillance si forme compliquée (obstruction, immunodépression, grossesse).", type: "Chirurgie" as const },
  { titre: "Prévention des récidives", description: "Antibiothérapie prophylactique si > 3 épisodes/an. Canneberge (proanthocyanidines) avec données limitées.", type: "Hygiène de vie" as const },
];

const preventionItems = [
  { label: "Boire > 1,5L d'eau par jour" },
  { label: "Uriner après chaque rapport sexuel" },
  { label: "Hygiène périnéale d'avant en arrière" },
  { label: "Eviter les douches vaginales irritantes" },
  { label: "Ne pas retenir ses urines trop longtemps" },
  { label: "Porter des sous-vêtements en coton" },
  { label: "Consulter rapidement dès les premiers symptômes" },
];

const populations = [
  "Femmes (x3 plus touchées que les hommes — urètre court)",
  "Femmes enceintes (risque de pyélonéphrite × 20, dépistage systématique)",
  "Diabétiques (immunodépression, vidange vésicale incomplète)",
  "Personnes âgées (atypique — confusion, chutes, sans signes urinaires)",
  "Porteurs de sonde urinaire (risque infectieux majeur)",
];

const Illustration = () => (
  <svg viewBox="0 0 480 360" fill="none" className="w-full h-auto max-w-sm mx-auto lg:max-w-none">
    <text x="240" y="25" textAnchor="middle" fill="#10B981" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Voies urinaires — Ascension bactérienne</text>
    {/* Rein gauche */}
    <path d="M120 50 C80 50 50 80 50 120 C50 210 105 280 150 280 C177 280 185 255 181 225 C179 208 165 198 160 175 C153 145 168 123 163 98 C155 70 153 50 120 50Z"
      fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" />
    <text x="120" y="165" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="Poppins,sans-serif">PYÉLO</text>
    <circle cx="120" cy="148" r="20" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5">
      <animate attributeName="r" values="18;23;18" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Uretère gauche */}
    <path d="M152 255 C155 290 158 320 160 345" stroke="rgba(16,185,129,0.5)" strokeWidth="2" strokeDasharray="5 3" />
    {/* Bassinet */}
    <ellipse cx="155" cy="250" rx="18" ry="23" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
    {/* Bactéries qui remontent */}
    {[0, 0.3, 0.6].map((t, i) => (
      <circle key={i} cx={160 + Math.sin(i * 2) * 3} cy={350 - i * 35} r="4"
        fill="rgba(239,68,68,0.6)" stroke="#EF4444" strokeWidth="1">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-200; 0,0" dur="4s" begin={`${i * 1.3}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* Vessie */}
    <ellipse cx="240" cy="340" rx="50" ry="30" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
    <text x="240" y="344" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="Poppins,sans-serif">Vessie (cystite)</text>
    <text x="355" y="290" fill="#EF4444" fontSize="9" fontFamily="Poppins,sans-serif">Bactéries</text>
    <text x="355" y="303" fill="#EF4444" fontSize="9" fontFamily="Poppins,sans-serif">↑ Ascension</text>
  </svg>
);

export default function InfectionsUrinairesPage() {
  return (
    <>
      <MaladieHero
        badge="INFECTION BACTÉRIENNE"
        urgencyLabel="Traitement urgent si fièvre"
        title="Infections urinaires"
        definition="Les infections urinaires (IU) sont causées par des bactéries colonisant les voies urinaires. De la cystite simple (bas) à la pyélonéphrite aiguë (rein), elles représentent l'une des infections bactériennes les plus fréquentes avec 150 millions de cas annuels dans le monde."
        gradientFrom="rgba(6,78,59,0.5)"
        illustration={<Illustration />}
      />

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#10B981" }}>150M/an</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>de cas dans le monde chaque année. 1 femme sur 3 a une IU avant 24 ans. Récidives fréquentes : 25% ont 2+ épisodes/an.</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Germes fréquents</span></div>
            <ul className="space-y-2">
              {["E. coli (80% des cystites)", "Klebsiella, Proteus, Enterococcus", "Staphylocoque (voies urinaires hautes)"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#10B981" }}>Excellent</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Guérison quasi-totale avec antibiothérapie adaptée. Risque de séquelles rénales en cas de pyélonéphrites répétées.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="les infections urinaires" />

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/calculs-renaux", titre: "Calculs rénaux", desc: "Les calculs obstructifs favorisent les infections." },
              { href: "/maladies/insuffisance-renale-aigue", titre: "IRA", desc: "Pyélonéphrite sévère peut provoquer une IRA." },
              { href: "/maladies/polykystose-renale", titre: "Polykystose rénale", desc: "Risque accru d'infections sur kystes." },
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
