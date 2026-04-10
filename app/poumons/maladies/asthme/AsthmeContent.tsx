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

const AsthmeIllustration = () => (
  <svg viewBox="0 0 320 200" className="w-full max-w-md" style={{ filter: "drop-shadow(0 0 30px rgba(56,189,248,0.12))" }}>
    <defs>
      <linearGradient id="broncheSaine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="broncheAsthme" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#B91C1C" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    {/* Label gauche */}
    <text x="60" y="18" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="Poppins, sans-serif">Bronche saine</text>
    {/* Bronche saine */}
    <ellipse cx="60" cy="100" rx="38" ry="70" fill="none" stroke="#38BDF8" strokeWidth="3" strokeOpacity="0.5" />
    <ellipse cx="60" cy="100" rx="22" ry="54" fill="url(#broncheSaine)" fillOpacity="0.15" />
    {/* Air flow sain */}
    <path d="M60 60 L60 140" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.4" />
    <text x="60" y="165" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Poppins, sans-serif">Lumière normale</text>

    {/* Label droit */}
    <text x="240" y="18" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="Poppins, sans-serif">Bronche asthmatique</text>
    {/* Bronche asthmatique — paroi épaissie */}
    <ellipse cx="240" cy="100" rx="38" ry="70" fill="none" stroke="#EF4444" strokeWidth="6" strokeOpacity="0.5" />
    <ellipse cx="240" cy="100" rx="12" ry="40" fill="url(#broncheAsthme)" fillOpacity="0.15" />
    {/* Mucus */}
    <ellipse cx="240" cy="128" rx="8" ry="10" fill="#F97316" fillOpacity="0.4" />
    <text x="240" y="165" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Poppins, sans-serif">Obstruction / inflammation</text>

    {/* Séparateur */}
    <line x1="155" y1="25" x2="155" y2="155" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);

export default function AsthmeContent() {
  return (
    <div style={{ background: "#050810" }}>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #0A1F3D 0%, #050810 65%)"
        badge="CHRONIQUE"
        badgeType="CHRONIQUE"
        title="Asthme"
        description="Inflammation chronique des bronches entraînant des crises d'essoufflement et de sifflements. Une maladie contrôlable grâce à un traitement adapté."
        illustration={<AsthmeIllustration />}
      />

      {/* VUE D'ENSEMBLE */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="Comprendre l'asthme" subtitle="Une inflammation chronique qui rétrécit les voies respiratoires de façon réversible." />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { label: "Prévalence", value: "235M dans le monde", detail: "~4M en France", color: "#38BDF8" },
              { label: "Cause", value: "Inflammation chronique", detail: "Bronchique (allergie + génétique)", color: "#38BDF8" },
              { label: "Pronostic", value: "Contrôlable", detail: "Non guérissable mais gérable", color: "#10B981" },
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
        title="Mécanisme de l'asthme"
        subtitle="La bronche asthmatique se rétrécit sous l'effet de l'inflammation. Survolez les zones pour en savoir plus."
        svg={<AsthmeIllustration />}
        zones={[
          { id: "mucus", label: "Sécrétion de mucus", detail: "La muqueuse enflammée produit un mucus épais qui obstrue les bronches.", x: 72, y: 72 },
          { id: "lumiere", label: "Obstruction réversible", detail: "La lumière bronchique se rétrécit lors des crises. Elle se rouvre avec le traitement.", x: 72, y: 50 },
          { id: "paroi", label: "Muqueuse enflammée", detail: "La paroi bronchique s'épaissit et se raidit, réduisant le passage de l'air.", x: 28, y: 42 },
        ]}
        legende={["Bronche saine (gauche) : lumière large, paroi fine", "Bronche asthmatique (droite) : paroi épaissie, mucus, lumière rétrécie"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "Crise sévère — dyspnée intense", detail: "Essoufflement majeur au repos, impossibilité de terminer une phrase." },
          { nom: "Lèvres bleutées (cyanose)", detail: "Signe de manque d'oxygène sévère. Appeler le 15 immédiatement." },
          { nom: "Impossible de parler", detail: "La détresse respiratoire extrême empêche de former des phrases complètes." },
        ]}
        moderes={[
          { nom: "Essoufflement à l'effort", detail: "Dyspnée apparaissant lors d'activités physiques modérées." },
          { nom: "Sifflements expiratoires", detail: "Bruit caractéristique lors de l'expiration dû au rétrécissement bronchique." },
          { nom: "Oppression thoracique", detail: "Sensation de serrement ou de poids sur la poitrine." },
        ]}
        surveillance={[
          { nom: "Toux sèche nocturne", detail: "Souvent premier signe d'asthme non contrôlé ou d'allergie sous-jacente." },
          { nom: "Réveils nocturnes", detail: "L'asthme nocturne est fréquent, lié aux variations du cortisol." },
          { nom: "Fatigue inexpliquée", detail: "Une respiration laborieuse constante épuise progressivement le patient." },
        ]}
        note="⚠️ En cas de crise grave : Ventoline 2 bouffées, asseyez-vous, appelez le 15 si pas d'amélioration en 5 minutes."
      />

      {/* CAUSES & FACTEURS DE RISQUE */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="CAUSES" title="Déclencheurs et facteurs de risque" subtitle="L'asthme résulte d'une combinaison de prédisposition génétique et d'expositions environnementales." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { titre: "Allergènes", items: ["Acariens de la poussière", "Pollens (arbres, graminées)", "Poils d'animaux (chat, chien)", "Moisissures intérieures"], color: "#38BDF8" },
              { titre: "Irritants", items: ["Tabac actif et passif", "Pollution atmosphérique", "Produits chimiques, parfums", "Air froid et sec"], color: "#F97316" },
              { titre: "Facteurs déclenchants", items: ["Effort physique intense", "Infections virales (rhume, grippe)", "Stress émotionnel", "Reflux gastro-œsophagien"], color: "#8B5CF6" },
              { titre: "Prédispositions", items: ["Terrain atopique (rhinite, eczéma)", "Antécédents familiaux d'asthme", "Obésité", "Naissances prématurées"], color: "#10B981" },
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
          <SectionHeader badge="DIAGNOSTIC" title="Comment diagnostiquer l'asthme ?" subtitle="Un bilan fonctionnel respiratoire est indispensable pour confirmer et quantifier l'asthme." />
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, #38BDF8, rgba(56,189,248,0.1))" }} />
            {[
              { step: "1", titre: "Spirométrie", detail: "Mesure du VEMS (Volume Expiratoire Maximal par Seconde) — valeur clé du diagnostic." },
              { step: "2", titre: "Test de réversibilité", detail: "Amélioration du VEMS >12% après bronchodilatateur : confirme l'asthme." },
              { step: "3", titre: "Test d'hyperréactivité", detail: "Méthacholine ou exercice : provoque une bronchoconstriction chez l'asthmatique." },
              { step: "4", titre: "Tests allergologiques", detail: "Prick tests cutanés pour identifier les allergènes déclenchants." },
              { step: "5", titre: "Peak-flow", detail: "Débitmètre de pointe : surveillance quotidienne à domicile du souffle." },
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
          { step: 1, titre: "Ventoline (salbutamol) — Traitement de crise", description: "2 bouffées en cas de crise. Bronchodilatateur à action rapide, effet en 3-5 minutes.", type: "Médicament", detail: "Toujours avoir sa Ventoline sur soi" },
          { step: 2, titre: "Corticoïdes inhalés — Traitement de fond", description: "Béclométasone, budésonide pris quotidiennement, même sans symptômes.", type: "Médicament", detail: "Réduisent l'inflammation bronchique chronique" },
          { step: 3, titre: "LABA — Bronchodilatateurs longue durée", description: "Formotérol, salmétérol. Associés aux corticoïdes si asthme modéré à sévère.", type: "Médicament", detail: "Ne jamais utiliser seuls sans corticoïdes" },
          { step: 4, titre: "Biothérapies", description: "Dupilumab, omalizumab pour les asthmes sévères allergiques réfractaires.", type: "Médicament", detail: "Asthme sévère non contrôlé par les traitements standards" },
          { step: 5, titre: "Plan d'action personnalisé", description: "Document écrit avec le médecin indiquant quand et comment augmenter le traitement.", type: "Hygiène de vie", detail: "Indispensable pour gérer les crises à domicile" },
        ]}
      />

      <MaladiePrevention
        maladie="l'asthme"
        checklist={[
          "Identifier et éviter ses déclencheurs personnels",
          "Prendre le traitement de fond TOUS les jours (même sans symptômes)",
          "Toujours avoir sa Ventoline sur soi",
          "Aérer son logement quotidiennement",
          "Housse anti-acariens sur matelas et oreillers",
          "Éviter le tabac (actif et passif)",
          "Consulter avant effort physique intense",
          "Suivi pneumologique annuel minimum",
        ]}
        populationsRisque={[
          "Personnes allergiques (rhinite allergique, eczéma atopique)",
          "Enfants avec antécédents familiaux d'asthme ou d'atopie",
          "Travailleurs exposés à des irritants professionnels (boulangers, coiffeurs, peintres)",
          "Personnes obèses (inflammation systémique aggravant l'asthme)",
          "Prématurés et enfants exposés au tabac passif dès la naissance",
        ]}
      />

      <MaladiePronostic
        pronostic="Bon"
        pronosticDetail="L'asthme est contrôlable dans la grande majorité des cas avec un traitement adapté."
        complications={[
          { nom: "Asthme aigu grave", gravite: "rouge" },
          { nom: "Remodelage bronchique", gravite: "orange" },
          { nom: "Insuffisance respiratoire", gravite: "rouge" },
          { nom: "Effets secondaires corticoïdes", gravite: "orange" },
        ]}
        timeline={[
          { time: "J1", event: "Crise légère : Ventoline suffit. Identification du déclencheur possible." },
          { time: "Sem", event: "Asthme persistant : instauration traitement de fond par corticoïdes inhalés." },
          { time: "Mois", event: "Suivi spirométrique trimestriel. Ajustement du palier thérapeutique." },
          { time: "An", event: "Asthme bien contrôlé : diminution possible du traitement, qualité de vie normale." },
        ]}
        urgenceMessage="Appelez le 15 (SAMU) si : crise ne cédant pas à la Ventoline en 5 minutes, essoufflement au repos, lèvres bleutées, impossibilité de parler ou marcher."
        autresMaladies={[
          { titre: "Bronchite", href: "/poumons/maladies/bronchite", desc: "Inflammation des bronches, souvent virale ou liée au tabagisme." },
          { titre: "Pneumonie", href: "/poumons/maladies/pneumonie", desc: "Infection des alvéoles pulmonaires, première cause de mortalité infectieuse." },
          { titre: "Tuberculose", href: "/poumons/maladies/tuberculose", desc: "Infection bactérienne par le bacille de Koch. 10M de cas/an." },
        ]}
      />
    </div>
  );
}
