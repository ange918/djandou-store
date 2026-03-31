"use client";

import Link from "next/link";
import { HeartIcon, ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, EyeDropperIcon, BeakerIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Microalbuminurie précoce", description: "Fuite d'albumine urinaire entre 30 et 300 mg/g de créatinine (ACR). 1er signe de néphropathie diabétique, réversible à ce stade.", niveau: "surveiller" as const },
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Protéinurie franche", description: "ACR > 300 mg/g. Stade macro-albuminurique — progression accélérée vers l'IRC sans intervention.", niveau: "modere" as const },
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Hypertension artérielle", description: "L'HTA s'installe ou s'aggrave avec la détérioration rénale. Cercle vicieux accélérant la néphropathie.", niveau: "modere" as const },
  { icon: <HeartIcon className="w-8 h-8" />, nom: "Œdèmes des membres", description: "Rétention hydrosodée progressive liée à la chute du DFG et à la perte de protéines dans les urines.", niveau: "modere" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Chute silencieuse du DFG", description: "La néphropathie diabétique est souvent silencieuse. Le DFG diminue progressivement sans symptôme clinique apparent.", niveau: "surveiller" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Neuropathie associée", description: "La neuropathie diabétique périphérique (fourmillements, douleurs) accompagne fréquemment la néphropathie.", niveau: "surveiller" as const },
];

const traitements = [
  { titre: "Contrôle glycémique strict", description: "HbA1c cible < 7%. Les nouveaux médicaments (iSGLT2 : dapagliflozine, empagliflozine) ont une action néphroprotectrice prouvée.", type: "Médicament" as const },
  { titre: "IEC ou ARA2 systématiques", description: "Néphroprotection par blocage du SRAA dès l'apparition de la microalbuminurie, même sans HTA. Réduction de 30-50% de la progression.", type: "Médicament" as const },
  { titre: "Contrôle tensionnel strict", description: "Objectif PA < 130/80 mmHg. Souvent nécessite plusieurs antihypertenseurs combinés.", type: "Médicament" as const },
  { titre: "Finerérone (antagoniste MR)", description: "Nouveau traitement sélectif réduisant le risque de progression rénale et cardiovasculaire dans la néphropathie diabétique.", type: "Médicament" as const },
  { titre: "Dialyse / greffe rénale", description: "Au stade terminal (DFG < 15), hémodialyse, dialyse péritonéale ou transplantation rénale (voire rein-pancréas).", type: "Suppléance rénale" as const },
];

const preventionItems = [
  { label: "Maintenir une HbA1c < 7% (diabétiques)" },
  { label: "Contrôler la tension artérielle (< 130/80 mmHg)" },
  { label: "Mesurer le rapport albumine/créatinine urinaire annuellement" },
  { label: "Arrêter de fumer (accélère fortement la progression)" },
  { label: "Prendre les iSGLT2 si prescrit (néphroprotecteurs)" },
  { label: "Réduire l'apport en sel et en protéines animales" },
  { label: "Maintenir un poids sain (IMC < 25)" },
];

const populations = [
  "Diabétiques de type 1 avec > 10 ans d'ancienneté de diabète",
  "Diabétiques de type 2, surtout avec HTA associée",
  "Sujets avec contrôle glycémique insuffisant sur de longues années",
  "Patients avec antécédents familiaux de maladie rénale",
  "Populations à risque cardiovasculaire élevé",
];

const Illustration = () => (
  <svg width="480" height="360" viewBox="0 0 480 360" fill="none">
    <text x="240" y="25" textAnchor="middle" fill="#F59E0B" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Néphropathie diabétique — Glomérule</text>
    <circle cx="240" cy="185" r="100" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" />
    <circle cx="240" cy="185" r="65" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" />
    {/* Membrane basale épaissie */}
    <text x="240" y="148" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="Poppins,sans-serif">Membrane basale</text>
    <text x="240" y="158" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="Poppins,sans-serif">épaissie ↑↑</text>
    {/* Dépôts mésangiaux */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <circle key={i} cx={240 + Math.cos(rad) * 40} cy={185 + Math.sin(rad) * 40} r="10"
          fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1.5" />
      );
    })}
    <text x="240" y="188" textAnchor="middle" fill="#F59E0B" fontSize="9" fontFamily="Poppins,sans-serif">Dépôts</text>
    <text x="240" y="199" textAnchor="middle" fill="#F59E0B" fontSize="9" fontFamily="Poppins,sans-serif">mésangiaux</text>
    <text x="240" y="320" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="Poppins,sans-serif">Hyperglycémie → épaississement membrane + dépôts</text>
  </svg>
);

export default function NephropathieDiabetiquePage() {
  return (
    <>
      <MaladieHero
        badge="COMPLICATION DU DIABÈTE"
        urgencyLabel="Surveillance annuelle"
        title="Néphropathie diabétique"
        definition="La néphropathie diabétique est la première cause d'insuffisance rénale chronique terminale en France. Elle résulte des effets délétères de l'hyperglycémie chronique sur les glomérules et les petits vaisseaux rénaux."
        gradientFrom="rgba(120,53,15,0.5)"
        illustration={<Illustration />}
      />

      <section className="py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F59E0B" }}>30-40%</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>des diabétiques développent une néphropathie. Représente 25-30% des IRC terminales en France.</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Mécanismes</span></div>
            <ul className="space-y-2">
              {["Hyperfiltration glomérulaire initiale", "Épaississement membrane basale", "Fibrose glomérulaire progressive"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F97316" }}>10-15 ans</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>De la microalbuminurie à l'IRC terminale sans traitement. Avec traitement optimal, évolution ralentie de 50%.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="la néphropathie diabétique" />

      <section className="py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/insuffisance-renale-chronique", titre: "IRC", desc: "Évolution finale de la néphropathie diabétique non traitée." },
              { href: "/maladies/nephropathie-hypertensive", titre: "Néphropathie hypertensive", desc: "Souvent associée — double risque rénal." },
              { href: "/maladies/glomerulonephrite", titre: "Glomérulonéphrite", desc: "Autre glomérulopathie à distinguer par biopsie." },
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
