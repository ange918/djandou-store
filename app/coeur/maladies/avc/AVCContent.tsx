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

const avcSvg = (
  <svg viewBox="0 0 500 340" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Brain outline */}
    <path d="M250 60 C190 58 145 80 130 115 C115 150 120 195 140 220 C155 240 170 260 180 280 L320 280 C330 260 345 240 360 220 C380 195 385 150 370 115 C355 80 310 58 250 60Z" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.3)" strokeWidth="2" />
    {/* Brain folds */}
    <path d="M190 100 C200 95 215 98 220 105 C225 112 215 118 210 115" stroke="rgba(239,68,68,0.25)" strokeWidth="1.5" fill="none" />
    <path d="M280 100 C290 95 305 98 310 105 C315 112 305 118 300 115" stroke="rgba(239,68,68,0.25)" strokeWidth="1.5" fill="none" />
    <path d="M170 165 C180 155 200 158 205 168 C210 178 195 185 185 178" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" fill="none" />
    <path d="M295 165 C310 155 330 158 335 168 C340 178 320 185 310 178" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" fill="none" />
    {/* Ischemic zone (right hemisphere) */}
    <ellipse cx="315" cy="160" rx="60" ry="55" fill="rgba(127,0,0,0.3)" stroke="rgba(200,0,0,0.5)" strokeWidth="1.5" strokeDasharray="5 3" />
    {/* Penumbra zone */}
    <ellipse cx="315" cy="160" rx="45" ry="40" fill="rgba(200,0,0,0.15)" />
    {/* Core necrosis */}
    <ellipse cx="315" cy="160" rx="22" ry="20" fill="rgba(150,0,0,0.5)" />
    {/* Cerebral artery */}
    <path d="M250 60 C260 80 275 100 300 120" stroke="rgba(239,68,68,0.6)" strokeWidth="2.5" />
    {/* Thrombus marker */}
    <circle cx="290" cy="112" r="10" fill="#EF4444" opacity="0.85" />
    <text x="290" y="116" textAnchor="middle" fill="white" fontSize="9" fontFamily="Poppins, sans-serif" fontWeight="700">✕</text>

    {/* FAST test boxes */}
    <rect x="15" y="290" width="90" height="40" rx="8" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
    <text x="60" y="306" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="700">F — Face</text>
    <text x="60" y="322" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Poppins, sans-serif">Asymétrie</text>

    <rect x="118" y="290" width="90" height="40" rx="8" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
    <text x="163" y="306" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="700">A — Arms</text>
    <text x="163" y="322" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Poppins, sans-serif">Bras qui tombe</text>

    <rect x="221" y="290" width="90" height="40" rx="8" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
    <text x="266" y="306" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="700">S — Speech</text>
    <text x="266" y="322" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Poppins, sans-serif">Langage trouble</text>

    <rect x="324" y="290" width="90" height="40" rx="8" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" />
    <text x="369" y="306" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="700">T — Time</text>
    <text x="369" y="322" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Poppins, sans-serif">Appeler le 15</text>

    <text x="250" y="40" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Poppins, sans-serif">AVC ischémique — Zone ischémique cérébrale</text>
    <text x="315" y="168" textAnchor="middle" fill="rgba(255,180,180,0.8)" fontSize="8" fontFamily="Poppins, sans-serif">Nécrose</text>
    <text x="315" y="200" textAnchor="middle" fill="rgba(255,180,180,0.5)" fontSize="8" fontFamily="Poppins, sans-serif">Pénombre</text>
  </svg>
);

const diagnosticSteps = [
  { num: 1, examen: "Scanner cérébral sans injection (URGENCE)", valeur: "Différencie ischémie vs hémorragie. Décision thérapeutique cruciale (thrombolyse ou non)" },
  { num: 2, examen: "IRM cérébrale diffusion", valeur: "Plus sensible que le scanner pour les petits infarctus et les lésions précoces" },
  { num: 3, examen: "ECG immédiat", valeur: "Recherche FA (cause embolique chez 30% des AVC ischémiques)" },
  { num: 4, examen: "Écho Doppler carotidien", valeur: "Sténose carotidienne athéromateuse : cause emboligène accessible à la chirurgie" },
  { num: 5, examen: "Holter ECG 72h", valeur: "Si FA paroxystique suspectée (symptômes intermittents, non détectés sur ECG simple)" },
  { num: 6, examen: "Bilan biologique complet", valeur: "Glycémie, NFS, INR, plaquettes, lipides, homocystéine" },
];

export default function AVCContent() {
  return (
    <>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #1E0000 0%, #050810 65%)"
        badge="URGENCE"
        badgeType="URGENCE"
        title="Accident Vasculaire Cérébral"
        description="Interruption brutale de la circulation cérébrale par ischémie (85%) ou hémorragie (15%). 190 000 cas par an en France. Chaque minute compte : 1,9 million de neurones perdus par minute sans traitement."
        illustration={avcSvg}
      />

      {/* Vue d'ensemble */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="L'AVC en chiffres" />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: UsersIcon, titre: "Prévalence", texte: "190 000 AVC/an en France · 101M dans le monde · 3e cause de décès · 1re cause de handicap acquis de l'adulte" },
              { icon: ExclamationTriangleIcon, titre: "Causes", texte: "Ischémie (85%) : thrombose, embolie cardiaque (FA) · Hémorragie (15%) : rupture d'anévrisme, HTA" },
              { icon: ArrowTrendingDownIcon, titre: "Pronostic", texte: "10-20% de décès à 1 an · 50% de séquelles persistantes · 10% de récidive par an sans prévention" },
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
        title="Mécanisme de l'AVC ischémique"
        subtitle="La zone de pénombre (entourant la nécrose) est sauvable si la recanalisation est rapide. C'est la cible de la thrombolyse."
        svg={avcSvg}
        zones={[
          { id: "thrombus", label: "Occlusion artérielle", detail: "Thrombose in situ sur plaque carotidienne ou embolie d'origine cardiaque (FA). Occlusion aiguë de l'artère.", x: 58, y: 38 },
          { id: "necrose", label: "Zone de nécrose", detail: "Cœur ischémique irréversible. Les neurones meurent en quelques minutes sans oxygène.", x: 66, y: 52 },
          { id: "penombre", label: "Zone de pénombre", detail: "Tissu cérébral menacé mais encore viable. C'est la cible thérapeutique de la thrombolyse/thrombectomie.", x: 64, y: 64 },
        ]}
        legende={["Rouge foncé : nécrose irréversible (core)", "Rouge clair : zone de pénombre (sauvable <4,5h)", "✕ : site d'occlusion artérielle", "FAST : test rapide de dépistage de l'AVC"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "F — Face : sourire asymétrique", detail: "Demandez à la personne de sourire : un côté de la bouche est dévié, un œil ferme mal." },
          { nom: "A — Arms : un bras tombe", detail: "Demandez de lever les deux bras : l'un retombe spontanément ou dévie vers le bas." },
          { nom: "S — Speech : discours incompréhensible", detail: "Langage inintelligible, mots mélangés, incapacité à répéter une phrase simple (aphasie)." },
          { nom: "T — Time : appeler le 15 immédiatement", detail: "Si l'un des signes précédents est présent. Ne pas attendre, même si les symptômes semblent passagers." },
          { nom: "Céphalée violente 'coup de tonnerre'", detail: "Onset soudain, jamais ressentie auparavant. Signe de rupture d'anévrisme (hémorragie méningée)." },
          { nom: "Perte de vision brutale (monoculaire)", detail: "Perte de vision d'un œil ou d'un hémichamp visuel — signe d'occlusion artérielle rétinienne ou cérébrale." },
        ]}
        moderes={[
          { nom: "Engourdissement unilatéral", detail: "Fourmillements ou perte de sensibilité d'un côté du corps : main, bras, jambe, visage." },
          { nom: "Trouble de l'équilibre soudain", detail: "Ataxie, vertiges rotatoires ou perte d'équilibre brutale, parfois sans autre signe." },
        ]}
        surveillance={[
          { nom: "AIT — Accident Ischémique Transitoire", detail: "Symptômes identiques à l'AVC mais régressant en <24h. Urgence absolue quand même : risque élevé de récidive dans les 48h." },
        ]}
        note="🔴 TEST FAST : Face — Arm — Speech — Time. Si l'un des trois premiers signes est présent, appelez le 15 IMMÉDIATEMENT. Un AIT est une urgence médicale : 10% des AIT font un AVC dans les 2 jours suivants."
      />

      {/* Causes */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="ÉTIOLOGIE" title="Causes et facteurs de risque" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 40, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut" }} whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }} className="p-10 rounded-2xl relative overflow-hidden" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircleIcon className="w-6 h-6" style={{ color: "#EF4444" }} />
                <h3 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.95rem" }}>Types d'AVC</h3>
              </div>
              {[
                { cause: "AVC ischémique athéromateux", detail: "Thrombose in situ sur une plaque d'athérosclérose carotidienne ou intracérébrale (40% des AVC)." },
                { cause: "AVC ischémique embolique (FA)", detail: "Caillot formé dans l'oreillette fibrillante, migre vers le cerveau. 30% des AVC ischémiques." },
                { cause: "AVC hémorragique (HTA)", detail: "Rupture d'une artériole fragilisée par l'HTA chronique. Hémorragie intraparenchymateuse." },
                { cause: "Hémorragie méningée", detail: "Rupture d'un anévrisme artériel. Céphalée 'coup de tonnerre' brutale et violente." },
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
                { freq: "Très fréquent", couleur: "#EF4444", items: ["HTA (1er FDR)", "Fibrillation atriale"] },
                { freq: "Fréquent", couleur: "#F97316", items: ["Tabac", "Diabète", "Hypercholestérolémie"] },
                { freq: "Modéré", couleur: "#F59E0B", items: ["Obésité", "Alcool excessif", "Migraine avec aura"] },
                { freq: "Non modifiable", couleur: "#64748B", items: ["Âge", "ATCD familiaux AVC"] },
              ].map((group, i) => (
                <div key={i} className="mb-5 last:mb-0">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full mb-2 inline-block" style={{ color: group.couleur, background: `${group.couleur}18`, border: `1px solid ${group.couleur}40`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
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
          <SectionHeader badge="DIAGNOSTIC" title="Protocole d'urgence AVC" subtitle="Objectif : scanner en moins de 25 minutes, décision thérapeutique en moins de 60 minutes." />
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
          { step: 1, titre: "URGENCE — Appeler le 15 immédiatement", description: "Ne pas attendre. Transport médicalisé en Unité Neurovasculaire (UNV). Code AVC activé.", type: "Urgence" },
          { step: 2, titre: "AVC ischémique < 4,5h — Thrombolyse IV Alteplase 0.9mg/kg", description: "10% en bolus IV, 90% en perfusion sur 60 minutes. Contre-indications à vérifier (anticoagulants, chirurgie récente).", type: "Urgence" },
          { step: 3, titre: "Occlusion proximale < 24h — Thrombectomie mécanique", description: "Extraction endovasculaire du caillot sous angiographie. Efficace jusqu'à 24h si pénombre viable à l'IRM.", type: "Urgence" },
          { step: 4, titre: "AVC hémorragique — Contrôle TA + neurochirurgie", description: "Labetalol ou Nicardipine IV. Évacuation chirurgicale si hématome avec effet de masse.", type: "Urgence" },
          { step: 5, titre: "Prévention secondaire — Aspirine 75-100mg + Statines + Anticoagulant si FA", description: "Rivaroxaban 20mg/j si FA. Débuter rapidement après AVC ischémique (délai selon taille de l'infarctus).", type: "Médicament" },
        ]}
      />

      <MaladiePrevention
        maladie="l'AVC"
        checklist={[
          "Contrôler sa tension artérielle (<130/80 mmHg)",
          "Traiter la fibrillation atriale (anticoagulants si nécessaire)",
          "Arrêter le tabac définitivement",
          "Activité physique régulière (30 min/j minimum)",
          "Alimentation méditerranéenne, sel limité",
          "Glycémie contrôlée si diabétique",
          "Apprendre et enseigner le test FAST",
          "Appeler le 15 sans attendre au moindre doute",
        ]}
        populationsRisque={[
          "Hypertendu non contrôlé (HTA = 1er facteur de risque d'AVC)",
          "Personnes en fibrillation atriale non anticoagulées",
          "Fumeurs > 10 PA",
          "Antécédent d'AIT (risque de récidive 10%/an)",
          "Sténose carotidienne > 70%",
        ]}
      />

      <MaladiePronostic
        pronostic="Variable"
        pronosticDetail="Bon si thrombolyse < 90 min (50% récupération complète). Grave si délai > 4,5h ou localisation défavorable."
        complications={[
          { nom: "Hémiplégie / hémiplégie", gravite: "rouge" },
          { nom: "Aphasie (30% des cas)", gravite: "rouge" },
          { nom: "Mort à 1 an (10-20%)", gravite: "rouge" },
          { nom: "Dépression post-AVC (30%)", gravite: "orange" },
          { nom: "Épilepsie post-AVC", gravite: "orange" },
          { nom: "Récidive 10%/an sans prévention", gravite: "orange" },
        ]}
        timeline={[
          { time: "0 min", event: "Symptômes soudains FAST — Appeler le 15 immédiatement" },
          { time: "30 min", event: "Arrivée SAMU, transport UNV en code AVC" },
          { time: "60 min", event: "Scanner cérébral en urgence (ischémie vs hémorragie)" },
          { time: "90 min", event: "Thrombolyse IV si AVC ischémique éligible (<4,5h)" },
          { time: "24h", event: "Stabilisation, rééducation précoce débutée en UNV" },
          { time: "3 mois", event: "Rééducation intensive : kinésithérapie, orthophonie, ergothérapie" },
        ]}
        urgenceMessage="Appeler le 15 immédiatement dès qu'un signe FAST est présent (Face, Arms, Speech). Même si les symptômes semblent régresser (AIT) : ne pas attendre, le risque de récidive est maximum dans les 48h. Ne pas conduire, ne pas donner d'aspirine sans avis médical."
        autresMaladies={[
          { titre: "Hypertension artérielle", href: "/coeur/maladies/hypertension", desc: "Premier facteur de risque d'AVC (ischémique et hémorragique)." },
          { titre: "Infarctus du myocarde", href: "/coeur/maladies/infarctus", desc: "Même terrain athérosclérotique cardiovasculaire." },
          { titre: "Insuffisance cardiaque", href: "/coeur/maladies/insuffisance-cardiaque", desc: "La FA associée augmente le risque embolique." },
        ]}
      />
    </>
  );
}
