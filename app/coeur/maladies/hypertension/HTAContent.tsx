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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: "easeOut" } },
};
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const htaSvg = (
  <svg viewBox="0 0 500 320" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Artery cross-section */}
    <ellipse cx="250" cy="160" rx="120" ry="120" fill="rgba(239,68,68,0.03)" stroke="rgba(239,68,68,0.15)" strokeWidth="1" />
    {/* Outer wall (thickened) */}
    <ellipse cx="250" cy="160" rx="100" ry="100" stroke="#EF4444" strokeWidth="3" fill="rgba(239,68,68,0.08)" />
    {/* Inner wall */}
    <ellipse cx="250" cy="160" rx="60" ry="60" stroke="rgba(239,68,68,0.6)" strokeWidth="2" fill="rgba(239,68,68,0.12)" />
    {/* Lumen */}
    <ellipse cx="250" cy="160" rx="35" ry="35" fill="rgba(180,20,20,0.4)" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" />
    {/* Blood flow arrows */}
    <path d="M250 95 L250 80 M246 84 L250 78 M254 84 L250 78" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M250 225 L250 240 M246 236 L250 242 M254 236 L250 242" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    {/* Pressure indicator */}
    <rect x="340" y="60" width="100" height="60" rx="12" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
    <text x="390" y="82" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="600">PA</text>
    <text x="390" y="104" textAnchor="middle" fill="#EF4444" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="700">180/110</text>
    {/* Normal reference */}
    <rect x="60" y="60" width="100" height="60" rx="12" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
    <text x="110" y="82" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="600">Normale</text>
    <text x="110" y="104" textAnchor="middle" fill="#10B981" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="700">120/80</text>
    {/* Labels */}
    <text x="250" y="30" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Poppins, sans-serif">Coupe transversale d'artère</text>
    <text x="250" y="290" textAnchor="middle" fill="rgba(239,68,68,0.6)" fontSize="10" fontFamily="Poppins, sans-serif">Paroi épaissie — Lumière réduite</text>
  </svg>
);

const diagnosticSteps = [
  { num: 1, examen: "Mesure PA", valeur: "≥140/90 mmHg sur 3 consultations" },
  { num: 2, examen: "Classification", valeur: "Grade 1 (140–159) · Grade 2 (160–179) · Grade 3 (≥180)" },
  { num: 3, examen: "ECG", valeur: "Recherche hypertrophie ventriculaire gauche" },
  { num: 4, examen: "Biologie", valeur: "Créatinine, lipides, glycémie, kaliémie" },
  { num: 5, examen: "Fond d'œil", valeur: "Rétinopathie hypertensive" },
  { num: 6, examen: "Écho cardiaque", valeur: "Si doute sur atteinte cardiaque" },
];

export default function HTAContent() {
  return (
    <>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #3B0000 0%, #050810 65%)"
        badge="CHRONIQUE"
        badgeType="CHRONIQUE"
        title="Hypertension Artérielle"
        description="Élévation persistante de la pression sanguine au-delà de 140/90 mmHg. Souvent silencieuse, elle touche 17 millions de Français et représente le premier facteur de risque cardiovasculaire mondial."
        illustration={htaSvg}
      />

      {/* Vue d'ensemble */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="L'hypertension en chiffres" />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: UsersIcon, titre: "Prévalence", texte: "17 millions en France · 1,4 milliard dans le monde · 1ère cause de mortalité prématurée" },
              { icon: ExclamationTriangleIcon, titre: "Causes", texte: "HTA essentielle >90% des cas (génétique + mode de vie) · HTA secondaire (rénale, surrénale)" },
              { icon: ArrowTrendingDownIcon, titre: "Pronostic", texte: "Bon si contrôlé. Grave si ignoré : AVC, infarctus, insuffisance rénale terminale" },
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
        title="Mécanisme de l'hypertension"
        subtitle="Survolez les zones pour comprendre l'impact de l'HTA sur les organes cibles."
        svg={htaSvg}
        zones={[
          { id: "paroi", label: "Paroi artérielle", detail: "Rigidité et épaississement progressif de la paroi artérielle, réduisant l'élasticité vasculaire.", x: 72, y: 35 },
          { id: "lumen", label: "Lumière réduite", detail: "Réduction du calibre de l'artère augmentant les résistances périphériques et la pression.", x: 50, y: 50 },
          { id: "coeur", label: "Hypertrophie VG", detail: "Le ventricule gauche s'hypertrophie pour compenser la résistance accrue à l'éjection.", x: 28, y: 65 },
        ]}
        legende={["Rouge foncé : lumière artérielle", "Anneau rouge : paroi musculaire épaissie", "Indicateur vert : tension normale (120/80)", "Indicateur rouge : tension élevée (180/110)"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "Céphalées matinales intenses", detail: "Maux de tête au réveil, en particulier occipitaux (nuque), signe d'HTA sévère." },
          { nom: "Vision trouble soudaine", detail: "Peut indiquer une rétinopathie hypertensive ou un AVC imminent. Urgence absolue." },
          { nom: "Douleur thoracique", detail: "Associée à une PA >180 mmHg : risque d'infarctus ou de dissection aortique." },
          { nom: "PA ≥180/110 mmHg", detail: "Crise hypertensive nécessitant une prise en charge médicale immédiate." },
        ]}
        moderes={[
          { nom: "Acouphènes", detail: "Bourdonnements ou sifflements dans les oreilles, fréquents en poussée hypertensive." },
          { nom: "Épistaxis répétés", detail: "Saignements de nez fréquents sans traumatisme évident, signe d'HTA mal contrôlée." },
          { nom: "Vertiges", detail: "Sensation de tête qui tourne, surtout au lever, pouvant indiquer des fluctuations tensionnelles." },
        ]}
        surveillance={[
          { nom: "Fatigue chronique", detail: "L'effort cardiovasculaire permanent provoque une fatigue diffuse et persistante." },
          { nom: "Palpitations", detail: "Sensation de cœur qui bat trop fort ou irrégulièrement, liée au travail cardiaque augmenté." },
          { nom: "Essoufflement à l'effort", detail: "Dyspnée lors d'activités habituelles, pouvant indiquer un début d'atteinte cardiaque." },
        ]}
        note="⚠️ L'HTA est souvent asymptomatique des années durant — c'est pourquoi on l'appelle le 'tueur silencieux'. Seule une mesure régulière de la PA permet de la dépister."
      />

      {/* Causes & facteurs de risque */}
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
                { cause: "HTA essentielle", detail: ">90% des cas — origine génétique et environnementale, sans cause identifiable unique." },
                { cause: "HTA secondaire rénale", detail: "Sténose de l'artère rénale, néphropathies chroniques activant le système rénine-angiotensine." },
                { cause: "HTA secondaire surrénale", detail: "Phéochromocytome, syndrome de Conn (hyperaldostéronisme primaire)." },
                { cause: "HTA médicamenteuse", detail: "AINS, pilule contraceptive, corticoïdes, décongestionnants nasaux." },
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
                { freq: "Très fréquent", couleur: "#EF4444", items: ["Sel excessif (>10g/j)", "Obésité (IMC >30)", "Sédentarité"] },
                { freq: "Fréquent", couleur: "#F97316", items: ["Tabac", "Alcool chronique", "Stress chronique"] },
                { freq: "Non modifiable", couleur: "#64748B", items: ["Âge >65 ans", "Hérédité familiale", "Sexe masculin avant ménopause"] },
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
          <SectionHeader badge="DIAGNOSTIC" title="Étapes du diagnostic" subtitle="La HAS recommande de confirmer l'HTA sur au moins 3 consultations avant d'instaurer un traitement." />
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
        </div>
      </section>

      <MaladieTraitement
        traitements={[
          { step: 1, titre: "Hygiène de vie (toujours en premier)", description: "Sel <5g/j · Régime DASH · Exercice 30min/j · Sevrage tabac · Maintien du poids normal", type: "Hygiène de vie" },
          { step: 2, titre: "IEC — Ramipril 5-10mg/j", description: "Inhibiteurs de l'enzyme de conversion. Indiqués en cas de diabète, insuffisance cardiaque, post-infarctus.", type: "Médicament" },
          { step: 3, titre: "ARA2 — Losartan 50-100mg/j", description: "Alternative aux IEC en cas d'intolérance (toux). Efficace en cas de protéinurie.", type: "Médicament" },
          { step: 4, titre: "Diurétiques — Indapamide 1.5mg/j", description: "En cas de surcharge hydrique ou d'HTA résistante. Surveiller la kaliémie.", type: "Médicament" },
          { step: 5, titre: "Bêtabloquants — Bisoprolol 2.5-10mg/j", description: "Préférés en cas d'angor associé ou d'insuffisance cardiaque.", type: "Médicament" },
          { step: 6, titre: "Inhibiteurs calciques — Amlodipine 5-10mg/j", description: "Efficaces chez le sujet âgé. Bonne tolérance cardiovasculaire.", type: "Médicament" },
          { step: 7, titre: "HTA résistante — Spironolactone 25-50mg/j", description: "Ajouté en 4e ligne. Indiqué si hyperaldostéronisme primaire suspecté.", type: "Médicament" },
        ]}
      />

      <MaladiePrevention
        maladie="l'hypertension"
        checklist={[
          "Mesurer sa PA régulièrement (automesure à domicile)",
          "Sel <5g/j dans l'alimentation (éviter aliments ultra-transformés)",
          "Activité physique 30min/jour minimum (marche, vélo, natation)",
          "Maintenir un poids normal (IMC <25)",
          "Arrêt total du tabac",
          "Alcool modéré (<2 verres/jour)",
          "Gestion du stress (relaxation, méditation, sommeil suffisant)",
          "Suivi médical annuel si facteurs de risque",
        ]}
        populationsRisque={[
          "Personnes de plus de 65 ans",
          "Antécédents familiaux d'HTA ou de maladies cardiovasculaires",
          "Diabétiques ou patients avec IRC",
          "Personnes en surpoids ou obèses",
          "Consommateurs excessifs de sel ou d'alcool",
        ]}
      />

      <MaladiePronostic
        pronostic="Modéré"
        pronosticDetail="Excellent si PA bien contrôlée (<130/80). Grave si HTA ignorée pendant des années."
        complications={[
          { nom: "AVC ischémique ou hémorragique", gravite: "rouge" },
          { nom: "Infarctus du myocarde", gravite: "rouge" },
          { nom: "Insuffisance rénale chronique", gravite: "rouge" },
          { nom: "Insuffisance cardiaque", gravite: "rouge" },
          { nom: "Rétinopathie hypertensive", gravite: "orange" },
          { nom: "Anévrisme aortique", gravite: "orange" },
        ]}
        timeline={[
          { time: "0-10 ans", event: "HTA grade 1 silencieuse (140-159/90-99) — aucun symptôme" },
          { time: "10-20 ans", event: "Hypertrophie ventriculaire gauche, microalbuminurie, début d'atteinte rénale" },
          { time: "20-30 ans", event: "Risque de complications CV : AVC, infarctus du myocarde possibles" },
          { time: ">30 ans", event: "IRC terminale ou insuffisance cardiaque si jamais traitée" },
        ]}
        urgenceMessage="Appeler le 15 si PA ≥180/110 mmHg avec symptômes (céphalées intenses, vision trouble, douleur thoracique, déficit neurologique). C'est une urgence hypertensive."
        autresMaladies={[
          { titre: "Infarctus du myocarde", href: "/coeur/maladies/infarctus", desc: "Principale complication de l'HTA non traitée." },
          { titre: "AVC", href: "/coeur/maladies/avc", desc: "L'HTA est le 1er facteur de risque d'AVC." },
          { titre: "Insuffisance cardiaque", href: "/coeur/maladies/insuffisance-cardiaque", desc: "Conséquence tardive de l'HTA prolongée." },
        ]}
      />
    </>
  );
}
