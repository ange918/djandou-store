"use client";

import Link from "next/link";
import { UserGroupIcon, ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, EyeDropperIcon, BeakerIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Hématurie microscopique", description: "Présente dès la petite enfance, souvent à l'occasion d'infections ORL. Persistante et inexpliquée — premier signe diagnostique.", niveau: "surveiller" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Protéinurie progressive", description: "Apparaît secondairement, signe de dégradation glomérulaire. Son apparition marque l'accélération vers l'IRC.", niveau: "modere" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Surdité neurosensorielle", description: "Perte auditive bilatérale, symétrique, touchant les hautes fréquences. Présente dans 80% des formes liées à l'X.", niveau: "modere" as const },
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Anomalies ophtalmologiques", description: "Lenticône antérieur (déformation du cristallin) pathognomonique du syndrome d'Alport. Possible rétinopathie.", niveau: "surveiller" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Insuffisance rénale précoce", description: "Hommes atteints de la forme liée à l'X : IRC terminale souvent avant 30-40 ans sans traitement.", niveau: "urgent" as const },
  { icon: <UserGroupIcon className="w-8 h-8" />, nom: "Histoire familiale", description: "Antécédents de maladie rénale et/ou de surdité dans la famille. Dépistage des apparentés indispensable.", niveau: "surveiller" as const },
];

const traitements = [
  { titre: "IEC ou ARA2 précocement", description: "Débutés dès l'apparition de la microalbuminurie, avant même la protéinurie. Ralentissent significativement la progression.", type: "Médicament" as const },
  { titre: "Confirmation génétique", description: "Test génétique (COL4A3/COL4A4/COL4A5) ou biopsie rénale avec immunofluorescence et microscopie électronique pour confirmer le diagnostic.", type: "Chirurgie" as const },
  { titre: "Prise en charge audiologique", description: "Audioprothèses dès la perte auditive confirmée. Réévaluation régulière par audiométrie tous les 2 ans.", type: "Hygiène de vie" as const },
  { titre: "Suivi ophtalmologique", description: "Correction optique adaptée. Surveillance du lenticône antérieur. Laser si nécessaire.", type: "Hygiène de vie" as const },
  { titre: "Transplantation rénale", description: "Excellent pronostic post-greffe — pas de récidive sur le greffon. Traitement de choix à l'IRC terminale.", type: "Suppléance rénale" as const },
];

const preventionItems = [
  { label: "Réaliser un test génétique si antécédents familiaux de maladie rénale" },
  { label: "Dépister les enfants des familles atteintes dès l'âge de 3-5 ans" },
  { label: "Débuter les IEC dès la microalbuminurie documentée" },
  { label: "Faire un bilan auditif annuel" },
  { label: "Consulter un ophtalmologue régulièrement" },
  { label: "Éviter les médicaments néphrotoxiques (AINS, aminosides)" },
];

const populations = [
  "Familles avec cas de maladie rénale + surdité neurosensorielle",
  "Garçons présentant une hématurie microscopique isolée inexpliquée",
  "Jeunes adultes avec IRC inexpliquée et antécédents familiaux",
  "Femmes conductrices de la forme liée à l'X (risque IRC à 60-70 ans)",
  "Porteurs connus de mutations COL4A3/COL4A4/COL4A5",
];

const Illustration = () => (
  <svg width="480" height="360" viewBox="0 0 480 360" fill="none">
    <text x="240" y="25" textAnchor="middle" fill="#6366F1" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Syndrome d'Alport — Atteintes multiples</text>
    {/* Rein */}
    <ellipse cx="120" cy="160" rx="70" ry="100" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
    <text x="120" y="155" textAnchor="middle" fill="#6366F1" fontSize="9" fontFamily="Poppins,sans-serif">Rein</text>
    <text x="120" y="168" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Poppins,sans-serif">MBG fissurée</text>
    {/* Fissures membrane basale */}
    {[0, 1, 2, 3].map((i) => (
      <line key={i} x1={100 + i * 12} y1={175} x2={105 + i * 12} y2={185}
        stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    {/* Oreille */}
    <path d="M250 90 C265 80 285 85 290 100 C295 115 280 125 275 115 C268 105 272 95 260 95 C252 95 250 90 250 90Z" stroke="#6366F1" strokeWidth="1.5" fill="rgba(99,102,241,0.06)" />
    <path d="M265 110 C263 118 265 130 270 130" stroke="#6366F1" strokeWidth="1" fill="none" />
    <text x="270" y="147" textAnchor="middle" fill="#6366F1" fontSize="9" fontFamily="Poppins,sans-serif">Surdité</text>
    <text x="270" y="159" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Poppins,sans-serif">neurosensorielle</text>
    {/* Oeil */}
    <ellipse cx="380" cy="100" rx="35" ry="22" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
    <circle cx="380" cy="100" r="10" fill="rgba(99,102,241,0.15)" stroke="#6366F1" strokeWidth="1.5" />
    <circle cx="380" cy="100" r="4" fill="rgba(99,102,241,0.3)" />
    <text x="380" y="135" textAnchor="middle" fill="#6366F1" fontSize="9" fontFamily="Poppins,sans-serif">Lenticône</text>
    <text x="380" y="147" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Poppins,sans-serif">antérieur</text>
    {/* Liens */}
    <line x1="190" y1="160" x2="255" y2="110" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="190" y1="160" x2="345" y2="110" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    {/* Gène */}
    <text x="240" y="260" textAnchor="middle" fill="#6366F1" fontSize="11" fontFamily="Poppins,sans-serif" fontWeight="500">Mutation COL4A3 / COL4A4 / COL4A5</text>
    <text x="240" y="278" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Poppins,sans-serif">Collagène IV déficient → Membrane basale glomérulaire fragile</text>
  </svg>
);

export default function SyndromeAlportPage() {
  return (
    <>
      <MaladieHero
        badge="NÉPHROPATHIE HÉRÉDITAIRE"
        urgencyLabel="Conseil génétique"
        title="Syndrome d'Alport"
        definition="Le syndrome d'Alport est une glomérulopathie héréditaire causée par des mutations des gènes codant pour le collagène IV (COL4A3/A4/A5), protéine structurelle de la membrane basale glomérulaire. Il associe néphropathie, surdité neurosensorielle et anomalies oculaires."
        gradientFrom="rgba(30,27,75,0.6)"
        illustration={<Illustration />}
      />

      <section className="py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#6366F1" }}>1/5000</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>à 1/10 000. 2-3% des IRC terminales. Forme liée à l'X (80%), autosomique récessive (15%), dominante (5%).</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Gènes</span></div>
            <ul className="space-y-2">
              {["COL4A5 (lié à l'X — le plus fréquent)", "COL4A3 et COL4A4 (autosomique)", "Sous-diagnostic fréquent — biopsie clé"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#6366F1" }}>IEC précoce</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Traitement précoce par IEC peut retarder de 10-15 ans l'IRC terminale. Greffe rénale : excellent pronostic.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="le syndrome d'Alport" />

      <section className="py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/glomerulonephrite", titre: "Glomérulonéphrite", desc: "Diagnostic différentiel — biopsie rénale nécessaire." },
              { href: "/maladies/polykystose-renale", titre: "Polykystose rénale", desc: "Autre maladie rénale héréditaire fréquente." },
              { href: "/maladies/insuffisance-renale-chronique", titre: "IRC", desc: "Évolution terminale du syndrome d'Alport." },
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
