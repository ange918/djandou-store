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
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const PneumonieIllustration = () => (
  <svg viewBox="0 0 300 230" className="w-full max-w-md" style={{ filter: "drop-shadow(0 0 30px rgba(239,68,68,0.15))" }}>
    <defs>
      <radialGradient id="infectZone" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Trachée */}
    <rect x="142" y="12" width="13" height="38" rx="6" fill="none" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.5" />
    {/* Bronche G */}
    <path d="M142 48 Q118 60 106 74" fill="none" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.5" />
    {/* Bronche D */}
    <path d="M155 48 Q178 60 188 74" fill="none" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.5" />
    {/* Poumon gauche — sain */}
    <path d="M106 74 Q68 90 60 130 Q56 162 70 180 Q84 198 106 200 Q126 202 138 190 L142 128 Z" fill="rgba(56,189,248,0.06)" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.3" />
    {/* Poumon droit — infecté */}
    <path d="M188 74 Q226 90 232 130 Q236 162 222 180 Q208 198 186 200 Q166 202 156 190 L155 128 Z" fill="rgba(239,68,68,0.12)" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.5" />
    {/* Zone d'infection */}
    <circle cx="200" cy="148" r="38" fill="url(#infectZone)" />
    {/* Alvéoles infectées */}
    {[{ cx: 196, cy: 140 }, { cx: 215, cy: 148 }, { cx: 200, cy: 162 }, { cx: 182, cy: 150 }].map((c, i) => (
      <circle key={i} cx={c.cx} cy={c.cy} r="10" fill="rgba(239,68,68,0.2)" stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.5" />
    ))}
    {/* Alvéoles saines G */}
    {[{ cx: 82, cy: 148 }, { cx: 100, cy: 162 }, { cx: 78, cy: 168 }].map((c, i) => (
      <circle key={i} cx={c.cx} cy={c.cy} r="9" fill="rgba(56,189,248,0.1)" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.3" />
    ))}
    <text x="80" y="218" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="Poppins, sans-serif">Poumon sain</text>
    <text x="200" y="218" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="Poppins, sans-serif">Alvéoles infectées</text>
    {/* Séparateur */}
    <line x1="148" y1="30" x2="148" y2="200" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 3" strokeWidth="1" />
  </svg>
);

export default function PneumonieContent() {
  return (
    <div style={{ background: "#050810" }}>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #0F1A2E 0%, #050810 65%)"
        badge="URGENCE"
        badgeType="URGENCE"
        title="Pneumonie"
        description="Infection des alvéoles pulmonaires. Première cause de mortalité infectieuse mondiale. Une prise en charge rapide par antibiotiques est essentielle."
        illustration={<PneumonieIllustration />}
      />

      {/* VUE D'ENSEMBLE */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="Comprendre la pneumonie" subtitle="Une infection des alvéoles pulmonaires qui peut rapidement devenir grave, surtout chez les personnes fragiles." />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { label: "Gravité", value: "1re cause mondiale", detail: "Mortalité infectieuse mondiale", color: "#EF4444" },
              { label: "Cause principale", value: "Pneumocoque", detail: "Streptococcus pneumoniae (60-70%)", color: "#38BDF8" },
              { label: "Pronostic", value: "Bon si rapide", detail: "Grave chez les personnes fragiles", color: "#F97316" },
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
        title="Alvéoles infectées vs saines"
        subtitle="Dans la pneumonie, les alvéoles se remplissent de liquide et de cellules inflammatoires, bloquant les échanges gazeux."
        svg={<PneumonieIllustration />}
        zones={[
          { id: "alveoles", label: "Exsudat purulent", detail: "Les alvéoles se remplissent de pus et de liquide inflammatoire, empêchant l'oxygénation du sang.", x: 66, y: 62 },
          { id: "vaisseaux", label: "Échanges gazeux compromis", detail: "L'oxygène ne peut plus passer des alvéoles infectées vers le sang : chute de la SpO2.", x: 55, y: 75 },
          { id: "pneumocoque", label: "Pneumocoque", detail: "Streptococcus pneumoniae : bactérie la plus fréquente. Capsule polysaccharidique résistante.", x: 72, y: 72 },
        ]}
        legende={["Poumon gauche (bleu) : alvéoles saines, oxygénation normale", "Poumon droit (rouge) : alvéoles remplies d'exsudat, infection bactérienne", "Score PSI/CRB65 : évalue la gravité → hospitalisation ou ambulatoire"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "Fièvre >38.5°C avec frissons", detail: "Début brutal avec frissons intenses : tableau typique de pneumonie à pneumocoque." },
          { nom: "Dyspnée rapide — SpO2 <92%", detail: "Saturation en oxygène basse : indication d'hospitalisation en urgence." },
          { nom: "Confusion (sujet âgé)", detail: "La désorientation chez le sujet âgé est souvent le premier signe de pneumonie grave." },
        ]}
        moderes={[
          { nom: "Toux avec expectorations colorées", detail: "Crachats jaunes, verts ou rouille (pneumocoque) caractéristiques." },
          { nom: "Douleur thoracique unilatérale", detail: "Douleur pleurale en coup de poignard, s'aggravant à l'inspiration profonde." },
          { nom: "Fatigue intense", detail: "Asthénie profonde disproportionnée par rapport à la fièvre." },
        ]}
        surveillance={[
          { nom: "Fièvre persistante après rhume", detail: "Aggravation après une amélioration initiale : signe de surinfection bactérienne." },
          { nom: "Aggravation après amélioration", detail: "Méfiance : un rhume qui s'aggrave au 5e-7e jour peut virer à la pneumonie." },
        ]}
        note="⚠️ La pneumonie peut être trompeuse chez le sujet âgé : pas toujours de fièvre. Penser à évoquer le diagnostic devant une confusion ou un état général dégradé."
      />

      {/* CAUSES */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="CAUSES" title="Agents infectieux et facteurs de risque" subtitle="La pneumonie peut être bactérienne, virale ou fungique selon le terrain du patient." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { titre: "Agents bactériens", items: ["Pneumocoque (S. pneumoniae) — 60-70%", "Légionelle (légionellose)", "Mycoplasme (pneumonie atypique)", "Chlamydia pneumoniae", "Haemophilus influenzae (BPCO)"], color: "#EF4444" },
              { titre: "Agents viraux / fungiques", items: ["Virus influenza (grippe)", "SARS-CoV-2 (Covid-19)", "VRS (enfants, immunodéprimés)", "Aspergillus (immunodéprimés)", "Pneumocystis jirovecii (VIH)"], color: "#38BDF8" },
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
          <SectionHeader badge="DIAGNOSTIC" title="Démarche diagnostique" subtitle="Clinique + radiographie thorax + score de gravité pour orienter la prise en charge." />
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, #38BDF8, rgba(56,189,248,0.1))" }} />
            {[
              { step: "1", titre: "Auscultation", detail: "Crépitants localisés, souffle tubaire : condensation pulmonaire sous-jacente." },
              { step: "2", titre: "Radiographie thorax", detail: "Opacité alvéolaire systématisée ou en foyer : confirme le diagnostic de pneumonie." },
              { step: "3", titre: "Bilan biologique", detail: "NFS (hyperleucocytose), CRP, procalcitonine : évaluent l'intensité de l'infection." },
              { step: "4", titre: "ECBC + hémocultures", detail: "Si hospitalisation : identification du germe pour adapter l'antibiothérapie." },
              { step: "5", titre: "Score PSI / CRB65", detail: "Évaluation de la gravité → orientation ambulatoire ou hospitalière voire réanimation." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30, filter: "blur(4px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="flex gap-6 items-start pb-8 last:pb-0">
                <div className="relative flex-shrink-0 z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ background: "#080D18", borderColor: "#38BDF8" }}>
                  <span style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, color: "#38BDF8", fontSize: "0.75rem" }}>{item.step}</span>
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
          { step: 1, titre: "Amoxicilline 1g × 3/j — pneumocoque", description: "Antibiotique de référence pour la pneumonie communautaire à pneumocoque. 5-7 jours.", type: "Médicament", detail: "Commencer rapidement : chaque heure compte" },
          { step: 2, titre: "Azithromycine 500mg/j — pneumonie atypique", description: "Mycoplasme, Chlamydia, Légionelle. Macrolide en monothérapie ou associé.", type: "Médicament" },
          { step: 3, titre: "Hospitalisation — antibiotiques IV + O2", description: "Si SpO2 <92%, signes de gravité, sujet fragile ou score CRB65 élevé : hospitalisation urgente.", type: "Urgence", detail: "Réanimation si choc septique ou détresse respiratoire aiguë" },
          { step: 4, titre: "Paracétamol 1g × 3/j", description: "Confort et contrôle de la fièvre. Éviter les AINS (aggravation possible des pneumonies).", type: "Médicament" },
          { step: 5, titre: "Kinésithérapie respiratoire", description: "Drainage bronchique pour faciliter l'expectoration et la résolution de la condensation.", type: "Hygiène de vie" },
        ]}
      />

      <MaladiePrevention
        maladie="la pneumonie"
        checklist={[
          "Vaccination antipneumococcique (>65 ans, immunodéprimés)",
          "Vaccination antigrippale annuelle",
          "Arrêt du tabac (protection mucociliaire)",
          "Lavage des mains régulier",
          "Aération du logement quotidienne",
          "Suivi médical si pathologie chronique sous-jacente",
          "Bonne hydratation et alimentation équilibrée",
          "Consulter rapidement si fièvre + toux + douleur thoracique",
        ]}
        populationsRisque={[
          "Personnes de plus de 65 ans (immunosénescence)",
          "Immunodéprimés : VIH, cancer, corticothérapie, greffe",
          "Diabétiques (immunité compromise)",
          "Patients insuffisants cardiaques ou respiratoires (BPCO)",
          "Fumeurs actifs (défenses mucociliaires altérées)",
          "Nourrissons de moins de 2 ans (immunité immature)",
        ]}
      />

      <MaladiePronostic
        pronostic="Variable"
        pronosticDetail="Bon chez le sujet jeune sain traité rapidement. Mortalité 5-30% chez les personnes fragiles hospitalisées."
        complications={[
          { nom: "Pleurésie purulente", gravite: "rouge" },
          { nom: "Abcès pulmonaire", gravite: "rouge" },
          { nom: "Sepsis / choc septique", gravite: "rouge" },
          { nom: "Insuffisance respiratoire aiguë", gravite: "rouge" },
          { nom: "Péricardite", gravite: "orange" },
        ]}
        timeline={[
          { time: "J1", event: "Début brutal : fièvre élevée, frissons, douleur thoracique. Consultation urgente." },
          { time: "J3", event: "Sous antibiotiques : la fièvre doit commencer à baisser." },
          { time: "J7", event: "Amélioration clinique franche. Fin du traitement antibiotique en général." },
          { time: "Mois", event: "Contrôle radiographique à 1 mois pour s'assurer de la résolution complète." },
        ]}
        urgenceMessage="Appelez le 15 (SAMU) si : SpO2 <92%, fréquence respiratoire >30/min, confusion, pression artérielle basse, impossibilité de prendre les médicaments par voie orale."
        autresMaladies={[
          { titre: "Asthme", href: "/poumons/maladies/asthme", desc: "Inflammation chronique bronchique. 235M de personnes touchées." },
          { titre: "Bronchite", href: "/poumons/maladies/bronchite", desc: "Inflammation des bronches, virale dans 90% des cas." },
          { titre: "Tuberculose", href: "/poumons/maladies/tuberculose", desc: "Infection par le bacille de Koch. 10M de nouveaux cas/an." },
        ]}
      />
    </div>
  );
}
