"use client";

import Link from "next/link";
import { BeakerIcon, ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, EyeDropperIcon, HeartIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Hématurie glomérulaire", description: "Urines rosées avec hématies déformées (acanthocytes) en microscopie. Hématurie microscopique persistante sur les bandelettes.", niveau: "urgent" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Protéinurie néphrotique", description: "Protéinurie massive (> 3,5 g/24h) avec syndrome néphrotique : œdèmes, hypoalbuminémie, hyperlipidémie.", niveau: "urgent" as const },
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Syndrome néphritique aigu", description: "Hématurie + protéinurie + HTA + oligurie + œdèmes apparaissant brutalement. Urgence médicale.", niveau: "urgent" as const },
  { icon: <HeartIcon className="w-8 h-8" />, nom: "Hypertension artérielle", description: "HTA souvent inaugurale, parfois sévère. Liée à la rétention hydrosodée et à l'activation du SRAA.", niveau: "modere" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Œdèmes periorbital", description: "Gonflement autour des yeux au réveil, signe caractéristique du syndrome néphrotique pur.", niveau: "modere" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Insuffisance rénale rapide", description: "Certaines glomérulonéphrites (rapidement progressives) détruisent les reins en quelques semaines sans traitement.", niveau: "urgent" as const },
];

const traitements = [
  { titre: "Corticothérapie", description: "Prednisone à forte dose (1 mg/kg/j) pendant 4 à 6 semaines, puis décroissance. Traitement de 1re ligne dans de nombreuses formes.", type: "Médicament" as const },
  { titre: "Immunosuppresseurs", description: "Cyclophosphamide, mycophénolate mofétil, ciclosporine selon le type histologique et la réponse aux corticoïdes.", type: "Médicament" as const },
  { titre: "Biopsie rénale diagnostique", description: "Indispensable pour typer la glomérulonéphrite et adapter le traitement. Réalisée sous anesthésie locale guidée par échographie.", type: "Chirurgie" as const },
  { titre: "Traitements néphroprotecteurs", description: "IEC/ARA2 pour réduire la protéinurie. Statines si hypercholestérolémie. Anticoagulants si syndrome néphrotique sévère.", type: "Médicament" as const },
  { titre: "Plasmaphérèse", description: "Dans certaines formes sévères (Goodpasture, vascularites ANCA+), échanges plasmatiques pour éliminer les anticorps pathologiques.", type: "Chirurgie" as const },
];

const preventionItems = [
  { label: "Traiter rapidement toute infection ORL ou cutanée à streptocoque" },
  { label: "Consulter un médecin si urines rouges ou mousseuses persistantes" },
  { label: "Contrôler l'hypertension artérielle de manière optimale" },
  { label: "Éviter les médicaments néphrotoxiques en cas de glomérulonéphrite connue" },
  { label: "Suivre régulièrement les examens biologiques rénaux" },
];

const populations = [
  "Enfants (néphrose lipoïdique : glomérulonéphrite la plus fréquente de l'enfant)",
  "Jeunes adultes (lupus érythémateux, IgA néphropathie)",
  "Patients diabétiques (glomérulosclérose diabétique)",
  "Sujets présentant des maladies auto-immunes (lupus, vascularites)",
  "Post-infection streptococcique (glomérulonéphrite post-infectieuse)",
];

const IllustrationGlomeru = () => (
  <svg viewBox="0 0 480 360" fill="none" className="w-full h-auto max-w-sm mx-auto lg:max-w-none">
    <text x="240" y="25" textAnchor="middle" fill="#EC4899" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Glomérule enflammé</text>
    {/* Capsule de Bowman */}
    <circle cx="240" cy="185" r="100" fill="rgba(236,72,153,0.04)" stroke="rgba(236,72,153,0.3)" strokeWidth="1.5" />
    {/* Capillaires glomérulaires enflammés */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 240 + Math.cos(rad) * 55;
      const y = 185 + Math.sin(rad) * 55;
      return (
        <circle key={i} cx={x} cy={y} r={12 + Math.random() * 5}
          fill={i % 3 === 0 ? "rgba(236,72,153,0.2)" : "rgba(239,68,68,0.12)"}
          stroke={i % 3 === 0 ? "#EC4899" : "rgba(239,68,68,0.5)"} strokeWidth="1.5">
          {i % 3 === 0 && <animate attributeName="r" values={`${12}; ${16}; ${12}`} dur="2.5s" repeatCount="indefinite" />}
        </circle>
      );
    })}
    <circle cx="240" cy="185" r="20" fill="rgba(236,72,153,0.15)" stroke="#EC4899" strokeWidth="2" />
    <text x="240" y="188" textAnchor="middle" fill="#EC4899" fontSize="9" fontFamily="Poppins,sans-serif">Mésangium</text>
    <text x="240" y="318" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="Poppins,sans-serif">Zones d'inflammation pulsantes (zones roses)</text>
    <text x="240" y="332" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Poppins,sans-serif">Capsule de Bowman (cercle externe)</text>
  </svg>
);

export default function GlomerulonephritePage() {
  return (
    <>
      <MaladieHero
        badge="MALADIE GLOMÉRULAIRE"
        urgencyLabel="Biopsie nécessaire"
        title="Glomérulonéphrite"
        definition="La glomérulonéphrite est une inflammation des glomérules rénaux, structures microscopiques chargées de filtrer le sang. Elle se manifeste par la présence anormale de sang et/ou protéines dans les urines et peut évoluer vers l'insuffisance rénale chronique."
        gradientFrom="rgba(131,24,67,0.5)"
        illustration={<IllustrationGlomeru />}
      />

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EC4899" }}>1/10k</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>habitants par an. Très variable selon le type. Représente 20-25% des causes d'IRC terminale.</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Types principaux</span></div>
            <ul className="space-y-2">
              {["IgA néphropathie (Berger) - 25%", "Glomérulosclérose focale - 20%", "Néphrite lupique - 10%"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EC4899" }}>Variable</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Dépend du type histologique. Rémission complète dans 80-90% des néphrose lipoïdique. IRC terminale dans 30-40% des formes sévères.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="la glomérulonéphrite" />

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/syndrome-alport", titre: "Syndrome d'Alport", desc: "Néphropathie héréditaire touchant la membrane basale glomérulaire." },
              { href: "/maladies/insuffisance-renale-chronique", titre: "IRC", desc: "Évolution possible à long terme si non traitée." },
              { href: "/maladies/nephropathie-diabetique", titre: "Néphropathie diabétique", desc: "Autre cause de glomérulopathie chronique." },
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
