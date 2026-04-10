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

const BronchiteIllustration = () => (
  <svg viewBox="0 0 300 220" className="w-full max-w-md" style={{ filter: "drop-shadow(0 0 30px rgba(56,189,248,0.12))" }}>
    <defs>
      <linearGradient id="broncheNorm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#0284C7" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    {/* Trachée */}
    <rect x="138" y="15" width="12" height="35" rx="6" fill="none" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6" />
    {/* Bronche principale G */}
    <path d="M138 48 Q110 60 95 75" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.6" />
    {/* Bronche principale D */}
    <path d="M150 48 Q175 60 185 75" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.6" />
    {/* Poumon gauche — bronche enflammée rouge */}
    <path d="M95 75 Q60 95 55 135 Q52 165 65 180 Q80 196 100 198 Q118 200 130 188 L138 130 Z" fill="rgba(239,68,68,0.08)" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.4" />
    {/* Poumon droit — bronche enflammée */}
    <path d="M185 75 Q220 95 225 135 Q228 165 215 180 Q200 196 180 198 Q162 200 152 188 L150 130 Z" fill="rgba(239,68,68,0.08)" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.4" />
    {/* Muqueuse rouge gauche */}
    <path d="M100 90 Q80 110 75 140" fill="none" stroke="#EF4444" strokeWidth="4" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M100 90 Q98 115 95 145" fill="none" stroke="#EF4444" strokeWidth="4" strokeOpacity="0.5" strokeLinecap="round" />
    {/* Mucus gauche */}
    <ellipse cx="78" cy="155" rx="9" ry="7" fill="#F97316" fillOpacity="0.45" />
    {/* Muqueuse rouge droite */}
    <path d="M185 90 Q205 110 208 140" fill="none" stroke="#EF4444" strokeWidth="4" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M185 90 Q185 115 183 145" fill="none" stroke="#EF4444" strokeWidth="4" strokeOpacity="0.5" strokeLinecap="round" />
    {/* Mucus droit */}
    <ellipse cx="205" cy="155" rx="9" ry="7" fill="#F97316" fillOpacity="0.45" />
    <text x="150" y="215" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Poppins, sans-serif">Inflammation des bronches — Expectorations</text>
  </svg>
);

export default function BronchiteContent() {
  return (
    <div style={{ background: "#050810" }}>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #0C1A2E 0%, #050810 65%)"
        badge="AIGUË / CHRONIQUE"
        badgeType="AIGUË / CHRONIQUE"
        title="Bronchite"
        description="Inflammation des bronches, virale dans 90% des cas pour la forme aiguë. La forme chronique est intimement liée au tabagisme et peut évoluer vers une BPCO."
        illustration={<BronchiteIllustration />}
      />

      {/* VUE D'ENSEMBLE */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="Comprendre la bronchite" subtitle="Deux formes distinctes aux causes et pronostics très différents." />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { label: "Forme aiguë", value: "Très fréquente", detail: "Virale dans 90% des cas", color: "#38BDF8" },
              { label: "Forme chronique", value: "Liée au tabac", detail: "Souvent associée à la BPCO", color: "#F97316" },
              { label: "Pronostic", value: "Excellent (aiguë)", detail: "Évolutif si chronique non traitée", color: "#10B981" },
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
        title="L'arbre bronchique enflammé"
        subtitle="La bronchite touche la muqueuse des bronches, provoquant inflammation et sécrétions. Survolez pour explorer."
        svg={<BronchiteIllustration />}
        zones={[
          { id: "mucus", label: "Expectorations grasses", detail: "Mucus épais de couleur jaune-vert en cas de surinfection bactérienne.", x: 28, y: 72 },
          { id: "muqueuse", label: "Inflammation virale", detail: "La muqueuse bronchique rouge et enflée produit toux et expectorations.", x: 38, y: 52 },
          { id: "trachee", label: "Trachée-bronchite", detail: "L'inflammation remonte parfois jusqu'à la trachée : trachéite douloureuse.", x: 50, y: 18 },
        ]}
        legende={["Bronches enflammées (rouge) : muqueuse irritée, sécrétions", "Mucus orange : expectorations grasses caractéristiques", "Virus (rhinovirus, grippe) : cause principale dans 90% des cas"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "Fièvre élevée >39°C", detail: "Peut indiquer une surinfection bactérienne ou une pneumonie associée." },
          { nom: "Dyspnée sévère", detail: "Essoufflement important au repos : risque de pneumonie ou BPCO décompensée." },
          { nom: "Crachats sanglants", detail: "Hémoptysie : nécessite une consultation urgente pour éliminer une cause grave." },
        ]}
        moderes={[
          { nom: "Toux grasse avec expectorations", detail: "Toux productive jaunâtre ou verdâtre, persistant plus de 5-7 jours." },
          { nom: "Fièvre légère (<38.5°C)", detail: "Fièvre modérée habituelle dans la bronchite aiguë virale bénigne." },
          { nom: "Brûlures thoraciques", detail: "Douleur rétrosternale liée à l'irritation de la trachée et des grosses bronches." },
        ]}
        surveillance={[
          { nom: "Toux sèche initiale", detail: "Première phase de la bronchite aiguë : toux irritative avant les expectorations." },
          { nom: "Fatigue générale", detail: "Asthénie habituelle lors des infections virales respiratoires." },
          { nom: "Légère fièvre <38.5°C", detail: "Fébricule durant 2-5 jours, puis disparition spontanée." },
        ]}
        note="💡 90% des bronchites aiguës sont virales : les antibiotiques ne sont pas utiles et peuvent favoriser les résistances."
      />

      {/* CAUSES */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="CAUSES" title="Causes et facteurs de risque" subtitle="Distinguer bronchite aiguë et chronique pour adapter la prise en charge." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { titre: "Bronchite aiguë — causes", items: ["Rhinovirus (virus du rhume)", "Virus influenza (grippe)", "VRS (Virus Respiratoire Syncytial)", "Coronavirus, adénovirus", "Bactéries rares (Mycoplasme, Bordetella)"], color: "#38BDF8" },
              { titre: "Bronchite chronique — causes", items: ["Tabagisme actif (cause principale)", "Tabagisme passif prolongé", "Pollution atmosphérique chronique", "Poussières professionnelles (mines, BTP)", "Expositions chimiques répétées"], color: "#EF4444" },
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
          <SectionHeader badge="DIAGNOSTIC" title="Démarche diagnostique" subtitle="Le diagnostic de bronchite aiguë est clinique. Examens complémentaires si doute." />
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, #38BDF8, rgba(56,189,248,0.1))" }} />
            {[
              { step: "1", titre: "Examen clinique", detail: "Auscultation : râles bronchiques bilatéraux. Percussion normale (différencie de la pneumonie)." },
              { step: "2", titre: "Radiographie thorax", detail: "Si doute avec pneumonie ou forme grave. Normale en cas de bronchite simple." },
              { step: "3", titre: "NFS", detail: "Numération si surinfection bactérienne suspectée : hyperleucocytose à polynucléaires." },
              { step: "4", titre: "Spirométrie", detail: "Si bronchite chronique : recherche d'un syndrome obstructif, dépistage BPCO." },
              { step: "5", titre: "ECBC", detail: "Examen cytobactériologique des crachats si bronchite chronique infectée récidivante." },
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
          { step: 1, titre: "Repos + hydratation abondante", description: "La bronchite aiguë guérit spontanément en 7-14 jours. Repos et 2L d'eau/jour facilitent la guérison.", type: "Hygiène de vie" },
          { step: 2, titre: "Paracétamol 1g × 3/j", description: "En cas de fièvre ou douleurs thoraciques. Jamais d'aspirine chez l'enfant.", type: "Médicament", detail: "Ibuprofène à éviter si asthme associé" },
          { step: 3, titre: "Carbocistéine (fluidifiant)", description: "Facilite l'expectoration si toux grasse et expectorations épaisses. Utilité modeste.", type: "Médicament" },
          { step: 4, titre: "Antibiotiques — seulement si surinfection prouvée", description: "Amoxicilline si surinfection bactérienne documentée. Rarement nécessaires (90% viral).", type: "Médicament", detail: "Ne jamais prendre d'antibiotiques sans avis médical" },
          { step: 5, titre: "Arrêt tabac absolu + kinésithérapie", description: "Pour la bronchite chronique : seul traitement modifiant l'évolution. Drainage bronchique régulier.", type: "Hygiène de vie", detail: "Incontournable pour stopper la progression vers la BPCO" },
        ]}
      />

      <MaladiePrevention
        maladie="la bronchite"
        checklist={[
          "Arrêt total du tabac (bronchite chronique)",
          "Lavage des mains fréquent (éviter contagion virale)",
          "Vaccination antigrippale annuelle",
          "Vaccination antipneumococcique si >65 ans",
          "Aérer son logement quotidiennement",
          "Éviter les espaces confinés en période épidémique",
          "Port du masque si exposé professionnellement",
          "Hydratation suffisante (1,5L/jour minimum)",
        ]}
        populationsRisque={[
          "Fumeurs actifs ou anciens fumeurs (bronchite chronique)",
          "Personnes âgées de plus de 65 ans (surinfection bactérienne fréquente)",
          "Enfants de moins de 2 ans (VRS, formes graves possibles)",
          "Personnes immunodéprimées (cancer, VIH, corticothérapie prolongée)",
          "Travailleurs exposés aux poussières, mines, agriculture, BTP",
        ]}
      />

      <MaladiePronostic
        pronostic="Bon"
        pronosticDetail="La bronchite aiguë guérit toujours spontanément. La bronchite chronique peut évoluer vers la BPCO."
        complications={[
          { nom: "Pneumonie", gravite: "rouge" },
          { nom: "BPCO (bronchite chronique)", gravite: "rouge" },
          { nom: "Insuffisance respiratoire chronique", gravite: "rouge" },
          { nom: "Surinfection bactérienne", gravite: "orange" },
        ]}
        timeline={[
          { time: "J3", event: "Bronchite aiguë : pic des symptômes. Toux grasse, fièvre modérée." },
          { time: "J7", event: "Amélioration progressive. Fièvre disparaît. Toux persistante encore 2-3 semaines." },
          { time: "J14", event: "Guérison complète dans la plupart des cas. Toux résiduelle possible." },
          { time: "Ans", event: "Bronchite chronique non traitée : évolution vers BPCO (obstruction permanente)." },
        ]}
        urgenceMessage="Appelez le 15 si : fièvre >39.5°C résistante aux antipyrétiques, dyspnée sévère au repos, crachats sanglants, signes de sepsis (confusion, hypotension)."
        autresMaladies={[
          { titre: "Asthme", href: "/poumons/maladies/asthme", desc: "Inflammation chronique bronchique avec obstruction réversible. 235M de cas." },
          { titre: "Pneumonie", href: "/poumons/maladies/pneumonie", desc: "Infection des alvéoles. Urgence médicale potentielle." },
          { titre: "Tuberculose", href: "/poumons/maladies/tuberculose", desc: "Infection par le bacille de Koch. Toux >3 semaines." },
        ]}
      />
    </div>
  );
}
