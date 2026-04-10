"use client";

import MaladieHero from "@/components/poumons/template/MaladieHero";
import MaladieSymptomes from "@/components/poumons/template/MaladieSymptomes";
import MaladieIllustration from "@/components/poumons/template/MaladieIllustration";
import MaladieTraitement from "@/components/poumons/template/MaladieTraitement";
import MaladiePrevention from "@/components/poumons/template/MaladiePrevention";
import MaladiePronostic from "@/components/poumons/template/MaladiePronostic";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const TuberculoseIllustration = () => (
  <svg viewBox="0 0 300 240" className="w-full max-w-md" style={{ filter: "drop-shadow(0 0 30px rgba(239,68,68,0.12))" }}>
    <defs>
      <radialGradient id="caverne" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="tbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0284C7" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    {/* Trachée */}
    <rect x="142" y="12" width="13" height="38" rx="6" fill="none" stroke="#64748B" strokeWidth="2" strokeOpacity="0.5" />
    {/* Bronche G */}
    <path d="M142 48 Q118 60 106 74" fill="none" stroke="#64748B" strokeWidth="2" strokeOpacity="0.4" />
    {/* Bronche D */}
    <path d="M155 48 Q178 60 188 74" fill="none" stroke="#64748B" strokeWidth="2" strokeOpacity="0.4" />
    {/* Poumon gauche */}
    <path d="M106 74 Q68 90 60 130 Q56 162 70 180 Q84 198 106 200 Q126 202 138 190 L142 128 Z" fill="url(#tbGrad)" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.3" />
    {/* Poumon droit avec lésions */}
    <path d="M188 74 Q226 90 232 130 Q236 162 222 180 Q208 198 186 200 Q166 202 156 190 L155 128 Z" fill="rgba(185,28,28,0.12)" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.4" />
    {/* Caverne apex */}
    <circle cx="200" cy="95" r="22" fill="url(#caverne)" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" strokeOpacity="0.7" />
    <text x="200" y="99" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="Poppins, sans-serif" fontWeight="bold">Caverne</text>
    {/* Bacilles animés */}
    {[{ x: 175, y: 82 }, { x: 220, y: 78 }, { x: 192, y: 72 }].map((b, i) => (
      <g key={i}>
        <ellipse cx={b.x} cy={b.y} rx="5" ry="2.5" fill="#EF4444" fillOpacity="0.6" transform={`rotate(${i * 35}, ${b.x}, ${b.y})`} />
      </g>
    ))}
    {/* Ganglions */}
    <circle cx="148" cy="62" r="8" fill="rgba(249,115,22,0.2)" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.5" />
    <text x="148" y="66" textAnchor="middle" fill="#F97316" fontSize="6" fontFamily="Poppins, sans-serif">G</text>
    {/* Gouttelettes contagion */}
    {[{ x: 78, y: 30 }, { x: 95, y: 22 }, { x: 108, y: 34 }].map((g, i) => (
      <ellipse key={i} cx={g.x} cy={g.y} rx="4" ry="2.5" fill="#38BDF8" fillOpacity="0.25" />
    ))}
    <text x="92" y="14" textAnchor="middle" fill="#38BDF8" fontSize="7" fontFamily="Poppins, sans-serif">Contagion aérienne</text>
    <text x="200" y="220" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="Poppins, sans-serif">Apex pulmonaire + cavernes nécrotiques</text>
  </svg>
);

export default function TuberculoseContent() {
  return (
    <div style={{ background: "#050810" }}>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #1A0A0A 0%, #050810 65%)"
        badge="CONTAGIEUSE"
        badgeType="CONTAGIEUSE"
        title="Tuberculose"
        description="Infection bactérienne grave par Mycobacterium tuberculosis. Transmission aérienne. 10 millions de nouveaux cas par an dans le monde. Guérissable avec un traitement complet."
        illustration={<TuberculoseIllustration />}
      />

      {/* VUE D'ENSEMBLE */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="Comprendre la tuberculose" subtitle="Une infection bactérienne mondiale, déclaration obligatoire, traitement long mais efficace." />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { label: "Prévalence mondiale", value: "10M cas/an", detail: "1,5M décès (OMS 2022)", color: "#EF4444" },
              { label: "Agent infectieux", value: "Bacille de Koch", detail: "Mycobacterium tuberculosis", color: "#38BDF8" },
              { label: "Pronostic", value: "Guérissable", detail: "Si traitement complet respecté (6 mois min.)", color: "#10B981" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-10 rounded-2xl" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: item.color, fontSize: "1.05rem", lineHeight: 1.3 }}>{item.value}</p>
                <p className="mt-2" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, fontSize: "0.88rem" }}>{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <MaladieIllustration
        title="Lésions tuberculeuses pulmonaires"
        subtitle="La tuberculose crée des cavernes nécrotiques à l'apex pulmonaire. Survolez pour explorer les zones clés."
        svg={<TuberculoseIllustration />}
        zones={[
          { id: "caverne", label: "Nécrose caséeuse", detail: "La caverne tuberculeuse résulte de la destruction du tissu pulmonaire par l'infection. Elle communique avec les bronches et est source de contagion.", x: 66, y: 40 },
          { id: "ganglion", label: "Dissémination lymphatique", detail: "Les ganglions médiastinaux captent les bacilles et participent à la réponse immunitaire. Adénopathies visibles à la radio.", x: 50, y: 26 },
          { id: "bacille", label: "Mycobacterium tuberculosis", detail: "Bacille très résistant à croissance lente. Sa paroi cireuse le protège des antibiotiques ordinaires, d'où la durée du traitement.", x: 60, y: 32 },
        ]}
        legende={["Apex droit (rouge) : siège habituel des cavernes tuberculeuses", "Ganglions (orange) : drainage lymphatique et possible dissémination", "Gouttelettes (bleu) : mode de transmission par voie aérienne exclusivement"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "Hémoptysie (crachats sanglants)", detail: "Saignement bronchique par érosion vasculaire dans une caverne. Urgence diagnostique." },
          { nom: "Dyspnée sévère", detail: "Insuffisance respiratoire sur destruction pulmonaire étendue ou pleurésie tuberculeuse." },
          { nom: "Altération rapide de l'état général", detail: "Amaigrissement brutal, fièvre élevée persistante, asthénie profonde." },
        ]}
        moderes={[
          { nom: "Toux persistante >3 semaines", detail: "Signe cardinal : toute toux de plus de 3 semaines doit faire évoquer la tuberculose." },
          { nom: "Fièvre modérée vespérale", detail: "Fièvre le soir (vespérale) caractéristique, souvent peu élevée (38-38.5°C)." },
          { nom: "Sueurs nocturnes abondantes", detail: "Sudation profuse nocturne, trempant les draps : signe classique mais non spécifique." },
        ]}
        surveillance={[
          { nom: "Perte de poids inexpliquée", detail: "Amaigrissement progressif sans cause évidente : signe d'alarme systémique." },
          { nom: "Fatigue chronique", detail: "Asthénie s'installant progressivement sur plusieurs semaines." },
          { nom: "Toux sèche prolongée", detail: "Peut précéder la phase productive de plusieurs semaines." },
        ]}
        note="🔔 La tuberculose est une maladie à déclaration obligatoire (DO) à l'ARS. Une enquête autour du cas est systématiquement organisée pour dépister l'entourage."
      />

      {/* CAUSES */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="TRANSMISSION" title="Contagion et facteurs de risque" subtitle="La tuberculose se transmet uniquement par voie aérienne. Certains profils sont particulièrement à risque." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { titre: "Mode de transmission", items: ["Voie aérienne exclusive (aérosols de toux)", "Contact proche et prolongé avec un cas bacillifère", "Réactivation d'une primo-infection latente", "Pas de transmission par contact cutané ou alimentaire"], color: "#EF4444" },
              { titre: "Facteurs de risque", items: ["Immunodépression (VIH, corticoïdes, anti-TNF)", "Précarité et surpopulation (sans-abri, prison)", "Malnutrition sévère", "Diabète mal contrôlé", "Origine de zone à forte endémie", "Silicose professionnelle"], color: "#F97316" },
            ].map((cat, i) => (
              <motion.div key={i} variants={fadeUp} className="p-10 rounded-2xl" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h4 className="font-bold mb-5" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: cat.color, fontSize: "0.9rem" }}>{cat.titre}</h4>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      <span style={{ color: cat.color, flexShrink: 0 }}>•</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIAGNOSTIC */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader badge="DIAGNOSTIC" title="Démarche diagnostique" subtitle="Un faisceau d'arguments cliniques, biologiques et radiologiques est nécessaire pour confirmer la tuberculose." />
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, #38BDF8, rgba(56,189,248,0.1))" }} />
            {[
              { step: "1", titre: "IDR (intradermoréaction)", detail: "Test cutané à la tuberculine : injection intradermique, lecture à 72h. Positif si induration ≥10mm." },
              { step: "2", titre: "IGRA (Quantiféron)", detail: "Test sanguin plus spécifique que l'IDR. Non faussé par le BCG. Référence actuelle." },
              { step: "3", titre: "Radiographie thorax", detail: "Infiltrats, nodules, cavernes à l'apex pulmonaire : aspect évocateur de tuberculose active." },
              { step: "4", titre: "ECBC × 3 matins consécutifs", detail: "Recherche de bacilles de Koch à l'examen direct et en culture (résultat en 3-8 semaines)." },
              { step: "5", titre: "PCR sur crachats", detail: "Diagnostic rapide en quelques heures. Détecte aussi les résistances (rifampicine via Xpert MTB/RIF)." },
              { step: "6", titre: "Déclaration obligatoire à l'ARS", detail: "La tuberculose maladie et la tuberculose infection récente sont à déclaration obligatoire en France." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30, filter: "blur(4px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="flex gap-6 items-start pb-8 last:pb-0">
                <div className="relative flex-shrink-0 z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ background: "#080D18", borderColor: "#38BDF8" }}>
                  <span style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, color: "#38BDF8", fontSize: "0.7rem" }}>{item.step}</span>
                </div>
                <div className="flex-1 pt-2 pb-4">
                  <h4 className="font-bold mb-1" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.9rem" }}>{item.titre}</h4>
                  <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#64748B", lineHeight: 1.7, fontSize: "0.88rem" }}>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MaladieTraitement
        traitements={[
          { step: 1, titre: "Phase intensive 2 mois — RIPE", description: "Rifampicine + Isoniazide + Pyrazinamide + Éthambutol. Quadrithérapie obligatoire. Ne jamais interrompre.", type: "Médicament", detail: "Prise quotidienne, à jeun, sous surveillance médicale" },
          { step: 2, titre: "Phase continuation 4 mois — RI", description: "Rifampicine + Isoniazide en bithérapie. Durée totale minimale : 6 mois.", type: "Médicament", detail: "Non-observance = risque majeur de résistance (MDR-TB)" },
          { step: 3, titre: "Tuberculose MDR — schémas prolongés", description: "Multi-Drug Resistant TB : Bédaquiline, Délamanide + autres molécules. 18-24 mois.", type: "Médicament", detail: "Pris en charge en centre spécialisé CLAT" },
          { step: 4, titre: "Isolement respiratoire", description: "Jusqu'à négativation des crachats (≈2-4 semaines de traitement). Masque chirurgical, chambre seule.", type: "Urgence" },
          { step: 5, titre: "Enquête contact et dépistage entourage", description: "Obligatoire. Coordonné par le CLAT (Centre de Lutte Anti-Tuberculeuse) de l'ARS.", type: "Hygiène de vie", detail: "Proposé à toute personne ayant eu un contact proche prolongé" },
        ]}
      />

      <MaladiePrevention
        maladie="la tuberculose"
        checklist={[
          "Vaccination BCG (recommandée dans les zones à risque et professions exposées)",
          "Dépistage régulier si exposé (soignants, voyage zone endémique)",
          "NE JAMAIS interrompre le traitement (risque de résistance MDR-TB)",
          "Aérer les espaces de vie quotidiennement",
          "Port du masque FFP2 si cas confirmé dans l'entourage proche",
          "Signaler toute toux persistante >3 semaines au médecin",
          "Suivi médical mensuel pendant tout le traitement",
          "Bonne nutrition pour soutenir l'immunité",
        ]}
        populationsRisque={[
          "Personnes vivant avec le VIH (risque × 20 de développer la tuberculose)",
          "Patients sous anti-TNF (biothérapies de la polyarthrite, Crohn)",
          "Personnes en situation de précarité (sans-abri, prison, migrants récents)",
          "Professionnels de santé au contact de patients tuberculeux",
          "Voyageurs fréquents en zones d'endémie (Afrique sub-saharienne, Asie du Sud)",
          "Personnes souffrant de silicose ou d'autres pneumoconioses",
        ]}
      />

      <MaladiePronostic
        pronostic="Bon"
        pronosticDetail="Guérison dans 95% des cas si traitement complet respecté. MDR-TB : pronostic plus réservé."
        complications={[
          { nom: "Tuberculose miliaire (dissémination)", gravite: "rouge" },
          { nom: "MDR-TB (multirésistance)", gravite: "rouge" },
          { nom: "Méningite tuberculeuse", gravite: "rouge" },
          { nom: "Insuffisance respiratoire", gravite: "rouge" },
          { nom: "Pleurésie tuberculeuse", gravite: "orange" },
          { nom: "Séquelles fibrotiques", gravite: "orange" },
        ]}
        timeline={[
          { time: "J1", event: "Isolement respiratoire immédiat. Début de la quadrithérapie RIPE dès confirmation." },
          { time: "Sem 2-4", event: "Négativation progressive des crachats sous traitement. Levée de l'isolement." },
          { time: "M2", event: "Fin de la phase intensive RIPE. Contrôle bactériologique et clinique." },
          { time: "M6", event: "Fin du traitement standard. Guérison dans 95% des cas si compliance totale." },
          { time: ">M18", event: "MDR-TB ou XDR-TB : traitement prolongé de 18 à 24 mois en centre spécialisé." },
        ]}
        urgenceMessage="Appelez le 15 si : hémoptysie abondante, détresse respiratoire, méningite suspectée (raideur nuque, céphalées), état de choc. Signalez la suspicion de tuberculose aux secours."
        autresMaladies={[
          { titre: "Asthme", href: "/poumons/maladies/asthme", desc: "Inflammation chronique bronchique. 235M de personnes touchées." },
          { titre: "Bronchite", href: "/poumons/maladies/bronchite", desc: "Inflammation des bronches, souvent virale ou liée au tabagisme." },
          { titre: "Pneumonie", href: "/poumons/maladies/pneumonie", desc: "Infection alvéolaire. Première cause de mortalité infectieuse mondiale." },
        ]}
      />
    </div>
  );
}
