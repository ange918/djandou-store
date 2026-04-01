"use client";

import Link from "next/link";
import { SparklesIcon, BeakerIcon, ArrowTrendingDownIcon, UsersIcon, ExclamationTriangleIcon, BoltIcon, EyeDropperIcon } from "@heroicons/react/24/outline";
import MaladieHero from "@/components/maladies/MaladieHero";
import MaladieSymptomes from "@/components/maladies/MaladieSymptomes";
import MaladiePrevention from "@/components/maladies/MaladiePrevention";
import MaladieTraitement from "@/components/maladies/MaladieTraitement";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const symptomes = [
  { icon: <BoltIcon className="w-8 h-8" />, nom: "Colique néphrétique", description: "Douleur lombaire violente, paroxystique, irradiant vers les organes génitaux. L'une des douleurs les plus intenses connues.", niveau: "urgent" as const },
  { icon: <EyeDropperIcon className="w-8 h-8" />, nom: "Hématurie", description: "Sang dans les urines (rose ou rouge) dû au traumatisme de la muqueuse urinaire par le calcul en migration.", niveau: "urgent" as const },
  { icon: <ExclamationTriangleIcon className="w-8 h-8" />, nom: "Fièvre + frissons", description: "Signe d'infection urinaire sur obstacle (pyélonéphrite obstructive). Urgence chirurgicale absolue.", niveau: "urgent" as const },
  { icon: <ArrowTrendingDownIcon className="w-8 h-8" />, nom: "Nausées et vomissements", description: "Accompagnent systématiquement la douleur aiguë. Liés à la stimulation vagale par la douleur intense.", niveau: "modere" as const },
  { icon: <BeakerIcon className="w-8 h-8" />, nom: "Urines troubles ou malodorantes", description: "Signe d'infection urinaire associée. Nécessite une analyse d'urine (ECBU) en urgence.", niveau: "modere" as const },
  { icon: <SparklesIcon className="w-8 h-8" />, nom: "Brûlures mictionnelles", description: "Irritation de l'uretère et de la vessie lors du passage du calcul. Souvent accompagnées d'une pollakiurie.", niveau: "surveiller" as const },
];

const traitements = [
  { titre: "Antalgiques et antispasmodiques", description: "AINS (kétoprofène) en 1re intention pour soulager la douleur. Morphine si douleur réfractaire. Phloroglucinol pour les spasmes urétéraux.", type: "Médicament" as const },
  { titre: "Hydratation abondante", description: "Boire > 2L/jour pour favoriser l'élimination spontanée des petits calculs (< 5 mm). 70-80% d'élimination spontanée dans ce cas.", type: "Hygiène de vie" as const },
  { titre: "Lithotritie extra-corporelle (LEC)", description: "Fragmentation du calcul par ondes de choc externes, sous contrôle radiologique. Ambulatoire, sans incision.", type: "Chirurgie" as const },
  { titre: "Urétéroscopie souple (URSS)", description: "Introduction d'un endoscope flexible par les voies naturelles pour fragmenter et extraire les calculs du rein.", type: "Chirurgie" as const },
  { titre: "Traitement préventif des récidives", description: "Selon la composition du calcul : réduction des oxalates, supplémentation en citrate de potassium, thiazidiques si hypercalciurie.", type: "Médicament" as const },
];

const preventionItems = [
  { label: "Boire > 2L d'eau par jour (objectif diurèse > 2L/24h)" },
  { label: "Réduire la consommation de sel (< 6g/j)" },
  { label: "Limiter les protéines animales en excès (viande rouge, abats)" },
  { label: "Consommer suffisamment de calcium alimentaire (laitages modérés)" },
  { label: "Éviter l'abus de vitamine C (> 1g/j favorise l'oxalurie)" },
  { label: "Limiter les aliments riches en oxalate (épinards, rhubarbe, noix)" },
  { label: "Faire analyser un calcul éliminé pour guider la prévention" },
];

const populations = [
  "Hommes entre 30 et 50 ans (incidence 3x plus élevée que chez la femme)",
  "Personnes vivant en région chaude ou ayant une activité physique intense",
  "Sujets ayant déjà présenté un calcul (50% de récidive à 10 ans)",
  "Patients hyperparathyroïdiens (hypercalciurie)",
  "Personnes atteintes de maladie de Crohn ou d'hyperoxalurie primaire",
];

const IllustrationCalculs = () => (
  <svg viewBox="0 0 480 360" fill="none" className="w-full h-auto max-w-sm mx-auto lg:max-w-none">
    <text x="240" y="25" textAnchor="middle" fill="#8B5CF6" fontSize="13" fontFamily="Poppins,sans-serif" fontWeight="500">Calculs rénaux — Voies urinaires</text>
    <path d="M130 60 C90 60 55 95 55 145 C55 235 115 310 165 310 C192 310 200 285 196 255 C194 238 178 228 173 205 C166 175 183 153 178 128 C170 100 168 60 130 60Z"
      fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.6)" strokeWidth="2" />
    <ellipse cx="128" cy="155" rx="20" ry="28" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
    {/* Calculs */}
    <circle cx="118" cy="145" r="6" fill="rgba(139,92,246,0.4)" stroke="#8B5CF6" strokeWidth="1.5" />
    <circle cx="132" cy="158" r="9" fill="rgba(139,92,246,0.3)" stroke="#8B5CF6" strokeWidth="2" />
    <circle cx="122" cy="168" r="4" fill="rgba(139,92,246,0.5)" stroke="#8B5CF6" strokeWidth="1.5" />
    <text x="165" y="155" fill="#8B5CF6" fontSize="9" fontFamily="Poppins,sans-serif">Calculs</text>
    <text x="165" y="167" fill="#64748B" fontSize="8" fontFamily="Poppins,sans-serif">dans bassinet</text>
    {/* Uretère */}
    <path d="M162 280 C164 300 168 320 172 345" stroke="rgba(139,92,246,0.5)" strokeWidth="2" strokeDasharray="5 3" />
    <circle cx="168" cy="340" r="5" fill="rgba(139,92,246,0.3)" stroke="#8B5CF6" strokeWidth="1.5" />
    <text x="182" y="345" fill="#8B5CF6" fontSize="9" fontFamily="Poppins,sans-serif">Calcul en migration</text>
    {/* Rein droit sain */}
    <path d="M360 60 C400 60 435 95 435 145 C435 235 375 310 325 310 C298 310 290 285 294 255 C296 238 312 228 317 205 C324 175 307 153 312 128 C320 100 322 60 360 60Z"
      fill="rgba(0,201,255,0.03)" stroke="rgba(0,201,255,0.4)" strokeWidth="1.5" />
    <text x="360" y="185" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="Poppins,sans-serif">Rein sain</text>
    <text x="240" y="280" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="Poppins,sans-serif">→ Urètre</text>
  </svg>
);

export default function CalculsRenauxPage() {
  return (
    <>
      <MaladieHero
        badge="MALADIE UROLOGIQUE"
        urgencyLabel="Douleur aiguë possible"
        title="Calculs rénaux"
        definition="Les calculs rénaux (lithiase urinaire) sont des dépôts minéraux cristallisés formés dans les reins à partir de substances dissoutes dans l'urine. Ils touchent 10 à 12% de la population mondiale et provoquent la redoutable colique néphrétique."
        gradientFrom="rgba(76,29,149,0.5)"
        illustration={<IllustrationCalculs />}
      />

      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><UsersIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Prévalence</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#8B5CF6" }}>10%</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>de la population mondiale touchée. Récidive dans 50% des cas à 10 ans. Incidence en hausse liée aux habitudes alimentaires.</p>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Compositions</span></div>
            <ul className="space-y-2">
              {["Oxalate de calcium (75% des cas)", "Acide urique (10%)", "Struvite / phosphate (10%)"].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}><span style={{ color: "#00C9FF" }}>→</span>{c}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard>
            <div className="mb-4 flex items-center gap-3"><ArrowTrendingDownIcon className="w-6 h-6" style={{ color: "#00C9FF" }} /><span className="text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>Pronostic</span></div>
            <p className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#10B981" }}>Favorable</p>
            <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>Si traité correctement, la guérison est complète. Les récidives peuvent être réduites de 50% par les mesures préventives.</p>
          </GlowCard>
        </div>
      </section>

      <MaladieSymptomes symptomes={symptomes} />
      <MaladieTraitement traitements={traitements} />
      <MaladiePrevention items={preventionItems} populations={populations} maladie="les calculs rénaux" />

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VOIR AUSSI" title="Maladies liées" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: "/maladies/infections-urinaires", titre: "Infections urinaires", desc: "Complication fréquente des calculs obstructifs." },
              { href: "/maladies/insuffisance-renale-aigue", titre: "IRA", desc: "Un calcul obstructif peut provoquer une IRA." },
              { href: "/maladies/insuffisance-renale-chronique", titre: "IRC", desc: "Calculs récidivants et dommages rénaux chroniques." },
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
