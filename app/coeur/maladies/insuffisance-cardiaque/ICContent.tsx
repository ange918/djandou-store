"use client";

import MaladieHero from "@/components/coeur/template/MaladieHero";
import MaladieSymptomes from "@/components/coeur/template/MaladieSymptomes";
import MaladieIllustration from "@/components/coeur/template/MaladieIllustration";
import MaladieTraitement from "@/components/coeur/template/MaladieTraitement";
import MaladiePrevention from "@/components/coeur/template/MaladiePrevention";
import MaladiePronostic from "@/components/coeur/template/MaladiePronostic";
import { motion, type Variants } from "framer-motion";
import { UsersIcon, ExclamationTriangleIcon, ArrowTrendingDownIcon, CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const cardVariants: Variants = { hidden: { opacity: 0, y: 40, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: "easeOut" } } };
const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };

const icSvg = (
  <svg viewBox="0 0 500 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Normal heart (left) */}
    <text x="120" y="25" textAnchor="middle" fill="rgba(16,185,129,0.7)" fontSize="9" fontFamily="Poppins, sans-serif">NORMAL</text>
    <path d="M120 220 C80 196 50 174 50 152 C50 134 63 122 78 122 C93 122 105 131 120 143 C135 131 147 122 162 122 C177 122 190 134 190 152 C190 174 160 196 120 220Z" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.5)" strokeWidth="2" />
    <text x="120" y="175" textAnchor="middle" fill="rgba(16,185,129,0.6)" fontSize="9" fontFamily="Poppins, sans-serif">FEVG ≥ 55%</text>

    {/* Arrow */}
    <path d="M210 160 L290 160" stroke="rgba(239,68,68,0.5)" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
    <path d="M282 154 L292 160 L282 166" stroke="rgba(239,68,68,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Dilated heart (right) */}
    <text x="380" y="25" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="9" fontFamily="Poppins, sans-serif">INSUFFISANCE CARDIAQUE</text>
    <path d="M380 240 C320 208 280 178 280 145 C280 118 298 102 320 102 C342 102 358 116 380 132 C402 116 418 102 440 102 C462 102 480 118 480 145 C480 178 440 208 380 240Z" fill="rgba(239,68,68,0.1)" stroke="#EF4444" strokeWidth="2.5" />
    <text x="380" y="175" textAnchor="middle" fill="rgba(239,68,68,0.6)" fontSize="9" fontFamily="Poppins, sans-serif">FEVG &lt; 40%</text>

    {/* Flow arrows (diminished) */}
    <path d="M380 95 L380 78" stroke="rgba(239,68,68,0.4)" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M380 245 L380 262" stroke="rgba(239,68,68,0.4)" strokeWidth="2" strokeDasharray="3 3" />

    {/* NYHA classification */}
    <rect x="10" y="240" width="220" height="50" rx="10" fill="rgba(239,68,68,0.05)" stroke="rgba(239,68,68,0.2)" strokeWidth="1" />
    <text x="120" y="258" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Poppins, sans-serif">Classification NYHA</text>
    <text x="120" y="274" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="9" fontFamily="Poppins, sans-serif">I → II → III → IV (repos)</text>
  </svg>
);

const diagnosticSteps = [
  { num: 1, examen: "Échocardiographie Doppler", valeur: "FEVG <40% = HFrEF (systolique) · FEVG préservée = HFpEF · évalue les valves" },
  { num: 2, examen: "BNP / NT-proBNP", valeur: "Biomarqueur clé : NT-proBNP >300 pg/mL signe une IC décompensée" },
  { num: 3, examen: "ECG", valeur: "Recherche arythmies (FA), hypertrophie, blocs de branche (BBG = signe de mauvais pronostic)" },
  { num: 4, examen: "Radiographie thorax", valeur: "Cardiomégalie (ICT >0.5) · congestion veineuse pulmonaire · œdème interstitiel" },
  { num: 5, examen: "Créatinine + ionogramme", valeur: "Syndrome cardiorénal fréquent · surveiller lors des diurétiques" },
];

export default function ICContent() {
  return (
    <>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #431407 0%, #050810 65%)"
        badge="CHRONIQUE"
        badgeType="CHRONIQUE"
        title="Insuffisance Cardiaque"
        description="Incapacité du cœur à assurer un débit suffisant aux besoins de l'organisme. 1,38 million de Français touchés, 64 millions dans le monde. Pronostic sévère sans traitement optimal."
        illustration={icSvg}
      />

      {/* Vue d'ensemble */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="L'insuffisance cardiaque en chiffres" />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: UsersIcon, titre: "Prévalence", texte: "1,38M en France · 64M dans le monde · 120 000 nouveaux cas par an en France" },
              { icon: ExclamationTriangleIcon, titre: "Causes", texte: "Cardiopathie ischémique post-IDM (1re cause) · HTA prolongée · Cardiomyopathie dilatée" },
              { icon: ArrowTrendingDownIcon, titre: "Pronostic", texte: "Sévère : mortalité 30-40% à 1 an en IC avancée. 50% de survie à 5 ans (stade III-IV)" },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={i} variants={cardVariants} whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.2 } }} className="p-10 rounded-2xl relative overflow-hidden" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} style={{ background: "radial-gradient(circle at 15% 15%, rgba(239,68,68,0.08) 0%, transparent 70%)" }} />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(239,68,68,0.08)" }}>
                    <Icon className="w-7 h-7" style={{ color: "#EF4444" }} />
                  </div>
                  <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC" }}>{c.titre}</h4>
                  <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#64748B", lineHeight: 1.7, fontSize: "0.9rem" }}>{c.texte}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <MaladieIllustration
        title="Cœur normal vs cœur insuffisant"
        subtitle="L'insuffisance cardiaque se traduit par une dilatation ventriculaire et une chute de la FEVG."
        svg={icSvg}
        zones={[
          { id: "vg", label: "Ventricule gauche dilaté", detail: "La cavité ventriculaire s'agrandit pour compenser la perte de contractilité, mais cela aggrave le remodelage.", x: 72, y: 55 },
          { id: "fevg", label: "FEVG effondrée", detail: "Fraction d'éjection < 40% = HFrEF. Le cœur n'éjecte plus que 40% ou moins du volume sanguin contenu.", x: 72, y: 68 },
          { id: "nyha", label: "Classification NYHA", detail: "De I (asymptomatique) à IV (dyspnée au repos). Guide les décisions thérapeutiques.", x: 28, y: 88 },
        ]}
        legende={["Vert : cœur normal (FEVG ≥ 55%)", "Rouge : cœur insuffisant dilaté (FEVG < 40%)", "Flèches : flux d'éjection diminué", "NYHA : échelle de sévérité fonctionnelle"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "Dyspnée au repos (OAP)", detail: "Œdème aigu du poumon : mousse rosée, détresse respiratoire sévère. Urgence vitale immédiate." },
          { nom: "Orthopnée sévère", detail: "Incapacité totale à s'allonger, dormant assis ou semi-assis. Signe d'IC décompensée grave." },
          { nom: "Confusion / désorientation", detail: "Hypoperfusion cérébrale par bas débit cardiaque. Urgence hospitalière." },
        ]}
        moderes={[
          { nom: "Dyspnée d'effort progressive", detail: "Au début à l'effort intense, puis à la marche ordinaire. Évolue selon les stades NYHA." },
          { nom: "Œdèmes des membres inférieurs", detail: "Gonflements bilatéraux des chevilles et des jambes, prenant le godet. Pire le soir." },
          { nom: "Fatigue intense", detail: "Épuisement disproportionné par rapport à l'effort fourni, lié au bas débit cardiaque chronique." },
          { nom: "Prise de poids > 2 kg en 48h", detail: "Signe de rétention hydrique aiguë — signal d'alarme à surveiller quotidiennement." },
        ]}
        surveillance={[
          { nom: "Nycturie", detail: "Urines nocturnes fréquentes : en position allongée, les œdèmes se résorbent et augmentent la diurèse." },
          { nom: "Toux nocturne", detail: "Toux sèche en décubitus, liée à la congestion veineuse pulmonaire. Souvent confondue avec un reflux." },
          { nom: "Ballonnements abdominaux", detail: "Congestion hépatique (hépatomégalie) et intestinale dans l'IC droite avancée." },
        ]}
        note="Pesez-vous chaque matin, à jeun, même poids de vêtements. Une prise de poids > 2 kg en 48h ou > 3 kg en 1 semaine doit déclencher un appel à votre cardiologue."
      />

      {/* Causes */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="ÉTIOLOGIE" title="Causes et facteurs de risque" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 40, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut" }} whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }} className="p-10 rounded-2xl relative overflow-hidden" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircleIcon className="w-6 h-6" style={{ color: "#EF4444" }} />
                <h3 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.95rem" }}>Causes directes</h3>
              </div>
              {[
                { cause: "Cardiopathie ischémique post-IDM", detail: "1re cause mondiale. La nécrose myocardique crée une zone akinétique qui nuit à la FEVG." },
                { cause: "HTA prolongée mal contrôlée", detail: "Cardiomyopathie hypertensive : surcharge de pression → hypertrophie VG → dilatation." },
                { cause: "Cardiomyopathie dilatée", detail: "Idiopathique, virale (myocardite), alcoolique, chimiothérapie cardiotoxique (anthracyclines)." },
                { cause: "Valvulopathies sévères", detail: "Rétrécissement aortique sévère (RAo) · Insuffisance mitrale (IM) · surchargent le VG." },
                { cause: "Arythmies rapides", detail: "Fibrillation atriale rapide → tachycardiomyopathie réversible si contrôlée à temps." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-6 last:mb-0">
                  <span style={{ color: "#EF4444", flexShrink: 0, marginTop: "2px" }}>→</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 500, color: "#F8FAFC", fontSize: "0.9rem" }}>{item.cause}</p>
                    <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "2px" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }} whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }} className="p-10 rounded-2xl relative overflow-hidden" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3 mb-8">
                <ExclamationCircleIcon className="w-6 h-6" style={{ color: "#F97316" }} />
                <h3 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.95rem" }}>Facteurs de risque</h3>
              </div>
              {[
                { freq: "Très fréquent", couleur: "#EF4444", items: ["Antécédent IDM", "HTA mal contrôlée"] },
                { freq: "Fréquent", couleur: "#F97316", items: ["Diabète", "Obésité", "Alcool excessif"] },
                { freq: "Moins fréquent", couleur: "#64748B", items: ["Myocardite virale", "Chimio cardiotoxique", "Amylose cardiaque"] },
              ].map((group, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full mb-3 inline-block" style={{ color: group.couleur, background: `${group.couleur}18`, border: `1px solid ${group.couleur}40`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                    {group.freq}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <span key={j} className="text-sm px-3 py-1.5 rounded-xl" style={{ color: "#94A3B8", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader badge="DIAGNOSTIC" title="Bilan diagnostique" subtitle="L'échocardiographie est l'examen clé. Le BNP confirme le diagnostic et guide le traitement." />
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, #EF4444, rgba(239,68,68,0.1))" }} />
            {diagnosticSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30, filter: "blur(4px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }} className="flex gap-6 items-start pb-8 last:pb-0">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ background: "#080D18", borderColor: "#EF4444" }}>
                  <span style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, color: "#EF4444", fontSize: "0.85rem" }}>{step.num}</span>
                </div>
                <div className="flex-1 pt-2 pb-4">
                  <p className="font-medium mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 500, color: "#F8FAFC", fontSize: "0.95rem" }}>{step.examen}</p>
                  <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6 }}>{step.valeur}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NYHA table */}
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut" }} className="mt-12 p-8 rounded-2xl" style={{ background: "#0D1526", border: "1px solid rgba(239,68,68,0.15)" }}>
            <h4 className="font-bold mb-6" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.9rem" }}>Classification NYHA</h4>
            <div className="flex flex-col gap-3">
              {[
                { nyha: "I", desc: "Aucune limitation d'activité physique", color: "#10B981" },
                { nyha: "II", desc: "Dyspnée pour effort modéré (marche rapide, escaliers)", color: "#F97316" },
                { nyha: "III", desc: "Dyspnée pour effort léger (marche normale sur terrain plat)", color: "#F97316" },
                { nyha: "IV", desc: "Dyspnée au repos ou effort minimal", color: "#EF4444" },
              ].map((n, i) => (
                <div key={i} className="flex items-center gap-4 py-3 px-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <span className="font-bold w-8 text-center flex-shrink-0" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: n.color, fontSize: "0.9rem" }}>
                    {n.nyha}
                  </span>
                  <span style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", fontSize: "0.9rem" }}>{n.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <MaladieTraitement
        traitements={[
          { step: 1, titre: "IC aiguë — Diurétiques IV Furosémide 40-80mg + Oxygène", description: "Urgence : hospitalisation en USIC. Décharge rapide de la congestion pulmonaire.", type: "Urgence" },
          { step: 2, titre: "IEC — Ramipril 2.5-10mg/j", description: "Réduction de la mortalité et du remodelage ventriculaire dans la HFrEF. Titration progressive.", type: "Médicament" },
          { step: 3, titre: "Bêtabloquants — Bisoprolol 1.25-10mg/j", description: "Introduire progressivement en phase stable. Réduction significative de la mortalité.", type: "Médicament" },
          { step: 4, titre: "SGLT2 — Dapagliflozine 10mg/j", description: "Nouveau traitement très efficace dans HFrEF ET HFpEF. Réduit hospitalisations et mortalité CV.", type: "Médicament" },
          { step: 5, titre: "Spironolactone 25-50mg/j", description: "Anti-minéralocorticoïde. Anti-remodelage ventriculaire. Surveiller kaliémie et créatinine.", type: "Médicament" },
          { step: 6, titre: "CRT — Resynchronisation biventriculaire", description: "Si FEVG ≤ 35% + QRS large (BBG ≥ 150ms). Améliore la synchronisation ventriculaire.", type: "Dispositif" },
          { step: 7, titre: "ICD — Défibrillateur implantable", description: "Prévention primaire de mort subite si FEVG < 35% après optimisation thérapeutique.", type: "Dispositif" },
        ]}
      />

      <MaladiePrevention
        maladie="l'insuffisance cardiaque"
        checklist={[
          "Traiter HTA et diabète précocement et durablement",
          "Ne pas fumer (facteur majeur d'IDM → IC)",
          "Activité physique adaptée quotidienne",
          "Peser chaque matin (alerte si +2kg en 48h)",
          "Sel <5g/j, alcool limité",
          "Vaccinations grippe + pneumocoque annuelles",
          "Suivi cardiologique régulier (écho tous les 6-12 mois)",
          "Ne jamais arrêter les médicaments sans avis médical",
        ]}
        populationsRisque={[
          "Survivants d'infarctus du myocarde",
          "Hypertendu avec hypertrophie ventriculaire gauche",
          "Diabétiques de type 2 (IC 2× plus fréquente)",
          "Patients traités par chimiothérapie cardiotoxique",
          "Personnes avec fibrillation atriale non contrôlée",
        ]}
      />

      <MaladiePronostic
        pronostic="Sévère"
        pronosticDetail="Mortalité 30-40% à 1 an en IC avancée (stade NYHA III-IV). 50% de survie à 5 ans sans traitement optimal."
        complications={[
          { nom: "Mort subite (50% des décès)", gravite: "rouge" },
          { nom: "Syndrome cardiorénal", gravite: "rouge" },
          { nom: "Fibrillation atriale", gravite: "rouge" },
          { nom: "Anémie de l'IC", gravite: "orange" },
          { nom: "Cachexie cardiaque", gravite: "orange" },
          { nom: "Hospitalisation répétée", gravite: "orange" },
        ]}
        timeline={[
          { time: "Déclencheur", event: "Facteur initial : IDM, HTA, myocardite, cardiotoxique" },
          { time: "1 an", event: "Remodelage ventriculaire, dilatation progressive, NYHA II stable" },
          { time: "5 ans", event: "IC NYHA II-III stabilisée sous traitement médical optimal" },
          { time: "10 ans", event: "IC avancée NYHA III-IV, complications multiples, hospitalisations fréquentes" },
        ]}
        urgenceMessage="Appeler le 15 immédiatement si : dyspnée au repos, crachat rosé (OAP), confusion ou syncope, prise de poids brutale > 2 kg en 48h avec aggravation de la dyspnée."
        autresMaladies={[
          { titre: "Infarctus du myocarde", href: "/coeur/maladies/infarctus", desc: "Première cause d'insuffisance cardiaque." },
          { titre: "Hypertension artérielle", href: "/coeur/maladies/hypertension", desc: "Surcharge de pression → dilatation ventriculaire." },
          { titre: "AVC", href: "/coeur/maladies/avc", desc: "Même terrain de risque cardiovasculaire." },
        ]}
      />
    </>
  );
}
