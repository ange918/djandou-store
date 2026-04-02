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

const infarctSvg = (
  <svg viewBox="0 0 500 340" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Heart */}
    <path d="M250 290 C160 238 80 185 80 128 C80 93 105 68 135 68 C162 68 185 84 250 112 C315 84 338 68 365 68 C395 68 420 93 420 128 C420 185 340 238 250 290Z" fill="rgba(239,68,68,0.12)" stroke="#EF4444" strokeWidth="2.5" />
    {/* Normal heart tissue */}
    <path d="M250 265 C175 225 110 182 110 138 C110 113 128 95 148 95 C170 95 190 108 250 130 C310 108 330 95 352 95 C372 95 390 113 390 138 C390 182 325 225 250 265Z" fill="rgba(239,68,68,0.08)" />
    {/* Left coronary artery */}
    <path d="M200 100 C180 120 165 145 160 175" stroke="rgba(239,68,68,0.6)" strokeWidth="3" strokeLinecap="round" />
    {/* Occlusion marker */}
    <circle cx="165" cy="155" r="12" fill="#EF4444" opacity="0.9" />
    <text x="165" y="159" textAnchor="middle" fill="white" fontSize="10" fontFamily="Poppins, sans-serif" fontWeight="700">✕</text>
    {/* Necrosis zone */}
    <ellipse cx="175" cy="200" rx="55" ry="45" fill="rgba(127,0,0,0.35)" stroke="rgba(200,0,0,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
    <text x="175" y="205" textAnchor="middle" fill="rgba(255,150,150,0.9)" fontSize="9" fontFamily="Poppins, sans-serif">Nécrose</text>
    {/* Right coronary */}
    <path d="M300 100 C320 120 335 150 330 185" stroke="rgba(239,68,68,0.4)" strokeWidth="2" strokeLinecap="round" />
    {/* Door-to-balloon timer */}
    <rect x="340" y="240" width="130" height="55" rx="12" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
    <text x="405" y="262" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="Poppins, sans-serif">Door-to-balloon</text>
    <text x="405" y="282" textAnchor="middle" fill="#EF4444" fontSize="13" fontFamily="Poppins, sans-serif" fontWeight="700">≤ 90 min</text>
    {/* Labels */}
    <text x="250" y="30" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Poppins, sans-serif">Infarctus du Myocarde — Occlusion coronaire</text>
  </svg>
);

const diagnosticSteps = [
  { num: 1, examen: "ECG 12 dérivations", valeur: "<10 min. Sus-décalage ST = STEMI · Sans sus-décalage = NSTEMI" },
  { num: 2, examen: "Troponines I ou T", valeur: "Élévation dès 2h, pic à 12-24h. Marqueur de nécrose myocardique." },
  { num: 3, examen: "Coronarographie", valeur: "Confirme l'occlusion coronaire et permet l'angioplastie (STEMI < 90 min)" },
  { num: 4, examen: "Écho cardiaque", valeur: "Hypokinésie segmentaire · Évalue la FEVG post-IDM" },
  { num: 5, examen: "Bilan complet", valeur: "Lipides, HbA1c, NFS, ionogramme, créatinine" },
];

export default function InfarctusContent() {
  return (
    <>
      <MaladieHero
        gradient="radial-gradient(ellipse at 30% 50%, #2D0A0A 0%, #050810 65%)"
        badge="URGENCE"
        badgeType="URGENCE"
        title="Infarctus du Myocarde"
        description="Obstruction aiguë d'une artère coronaire entraînant la mort des cellules cardiaques. 80 000 cas par an en France. Le temps est le muscle : chaque minute compte."
        illustration={infarctSvg}
      />

      {/* Vue d'ensemble */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="VUE D'ENSEMBLE" title="L'infarctus en chiffres" />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: UsersIcon, titre: "Prévalence", texte: "80 000 IDM/an en France · 10% mortels en moins d'une heure · 1ère cause de mort subite" },
              { icon: ExclamationTriangleIcon, titre: "Cause", texte: "Thrombose coronaire sur rupture de plaque athéromateuse. L'artère IVA est la plus souvent touchée." },
              { icon: ArrowTrendingDownIcon, titre: "Pronostic", texte: "Excellent si angioplastie < 90 min. Grave si retard > 3h (nécrose étendue, IC chronique)" },
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
        title="Mécanisme de l'infarctus"
        subtitle="L'occlusion d'une artère coronaire prive le myocarde d'oxygène. La zone nécrosée est irréversible."
        svg={infarctSvg}
        zones={[
          { id: "plaque", label: "Plaque athérome", detail: "Accumulation de lipides dans la paroi artérielle, se fissurant brutalement pour déclencher le thrombus.", x: 38, y: 35 },
          { id: "occlusion", label: "Thrombus coronaire", detail: "Caillot formé sur la plaque rompue, obstruant totalement l'artère en quelques minutes.", x: 38, y: 52 },
          { id: "necrose", label: "Zone de nécrose", detail: "Territoire myocardique privé d'oxygène. Après 6h sans recanalisation, la nécrose est irréversible.", x: 42, y: 68 },
        ]}
        legende={["Croix rouge : site d'occlusion coronaire (IVA)", "Zone bordeaux : myocarde nécrosé (infarci)", "Timer : objectif door-to-balloon ≤ 90 minutes"]}
      />

      <MaladieSymptomes
        urgents={[
          { nom: "Douleur thoracique constrictive > 20 min", detail: "Douleur en étau, oppression, brûlure rétrosternale. Ne cède pas à la trinitrine. Urgence absolue." },
          { nom: "Irradiation bras gauche / mâchoire", detail: "La douleur peut irradier vers le bras gauche, la mâchoire, l'épaule ou le dos (signe très évocateur)." },
          { nom: "Sueurs froides", detail: "Diaphorèse profuse associée à la douleur — signe de choc vagal ou de bas débit cardiaque." },
          { nom: "Sensation de mort imminente", detail: "Angoisse intense, sentiment de fin imminente. Ne jamais minimiser ce symptôme." },
          { nom: "Nausées / vomissements", detail: "Fréquents lors d'IDM inférieur (territoire de la coronaire droite)." },
          { nom: "Dyspnée soudaine", detail: "Essoufflement brutal sans effort, pouvant indiquer un OAP (œdème aigu du poumon) par dysfonction VG." },
        ]}
        moderes={[
          { nom: "Palpitations", detail: "Arythmies ventriculaires fréquentes dans les premières heures de l'IDM." },
          { nom: "Vertiges / syncope", detail: "Hypotension ou bradycardie réflexe, surtout dans les IDM inférieurs." },
          { nom: "Fatigue intense soudaine", detail: "Effondrement brutal de la capacité physique, notamment chez la femme." },
        ]}
        surveillance={[
          { nom: "Douleur épigastrique (formes atypiques)", detail: "Peut mimer une gastrite ou un reflux. Trompeuse chez le diabétique et la femme." },
          { nom: "Fatigue isolée sans douleur", detail: "Présentation fréquente chez la femme et le diabétique, souvent diagnostiquée avec retard." },
          { nom: "Dyspnée sans douleur thoracique", detail: "IDM équivalent chez le patient âgé ou diabétique. Nécessite un ECG urgent." },
        ]}
        note="🔴 URGENCE ABSOLUE : Appeler le 15 (SAMU) immédiatement. Ne pas conduire seul. Ne pas attendre. Chaque minute sans recanalisation = 2 millions de neurones cardiaques perdus."
      />

      {/* Causes */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="ÉTIOLOGIE" title="Causes et facteurs de risque" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 40, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut" }} whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }} className="p-10 rounded-2xl relative overflow-hidden" style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircleIcon className="w-6 h-6" style={{ color: "#EF4444" }} />
                <h3 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC", fontSize: "0.95rem" }}>Mécanisme</h3>
              </div>
              {[
                { cause: "Rupture de plaque athéromateuse", detail: "Déclencheur principal : la plaque instable se fissure, exposant son contenu thrombogène." },
                { cause: "Thrombose coronaire aiguë (STEMI)", detail: "Formation instantanée d'un thrombus occlusif total : l'artère est bouchée à 100%." },
                { cause: "Athérosclérose diffuse (NSTEMI)", detail: "Sténose sub-occlusive : l'artère n'est pas totalement bouchée mais le flux est insuffisant." },
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
                { freq: "Très fréquent", couleur: "#EF4444", items: ["Tabac", "Hypercholestérolémie", "HTA"] },
                { freq: "Fréquent", couleur: "#F97316", items: ["Diabète", "Obésité", "Sédentarité"] },
                { freq: "Non modifiable", couleur: "#64748B", items: ["Âge > 55 ans", "Sexe masculin", "Hérédité coronarienne"] },
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
          <SectionHeader badge="DIAGNOSTIC" title="Protocole d'urgence" subtitle="L'ECG doit être réalisé en moins de 10 minutes. Le diagnostic est une course contre la montre." />
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
          { step: 1, titre: "URGENCE — Appeler le 15 immédiatement", description: "Ne pas attendre, ne pas conduire seul. Le SAMU envoie une équipe et prépare la salle de cathétérisme.", type: "Urgence" },
          { step: 2, titre: "Aspirine 160-300mg PO", description: "Inhibe l'agrégation plaquettaire. À donner le plus tôt possible, même en pré-hospitalier.", type: "Médicament" },
          { step: 3, titre: "Anticoagulant IV (Héparine)", description: "Empêche l'extension du thrombus. Administration par le SAMU ou aux urgences.", type: "Médicament" },
          { step: 4, titre: "STEMI — Angioplastie + Stent < 90 min", description: "Door-to-balloon idéalement < 90 minutes. Recanalisation mécanique de l'artère occluse.", type: "Urgence" },
          { step: 5, titre: "NSTEMI — Stabilisation + Coronarographie 24-72h", description: "Stratification du risque (score GRACE/TIMI). Coronarographie différée selon l'urgence.", type: "Médicament" },
          { step: 6, titre: "Fond : Bêtabloquants + IEC + Statines 80mg + Double antiagrégation 12 mois", description: "Prévention secondaire obligatoire après IDM. Réduction du risque de récidive de 50%.", type: "Médicament" },
        ]}
      />

      <MaladiePrevention
        maladie="l'infarctus"
        checklist={[
          "Arrêt total et définitif du tabac",
          "LDL cholestérol < 1g/L (statines si nécessaire)",
          "HTA contrôlée < 130/80 mmHg",
          "HbA1c < 7% si diabétique",
          "Activité physique régulière adaptée (30 min/j minimum)",
          "Poids normal, alimentation méditerranéenne",
          "Suivi cardiologique après 55 ans",
          "Connaître les symptômes d'alerte",
        ]}
        populationsRisque={[
          "Fumeurs (risque multiplié par 2 à 3)",
          "Antécédent familial d'IDM avant 55 ans (homme) ou 65 ans (femme)",
          "Diabétiques (forme souvent silencieuse)",
          "Hypertendu non contrôlé",
          "Hypercholestérolémie familiale",
        ]}
      />

      <MaladiePronostic
        pronostic="Variable"
        pronosticDetail="Excellent si angioplastie < 90 min (mortalité < 5%). Grave si délai > 3h (mortalité 15-25%)."
        complications={[
          { nom: "Choc cardiogénique", gravite: "rouge" },
          { nom: "Arythmies ventriculaires (FV)", gravite: "rouge" },
          { nom: "Mort subite", gravite: "rouge" },
          { nom: "Insuffisance cardiaque chronique", gravite: "rouge" },
          { nom: "Récidive d'IDM", gravite: "orange" },
          { nom: "Syndrome de Dressler (péricardite)", gravite: "orange" },
        ]}
        timeline={[
          { time: "0 min", event: "Douleur thoracique brutale — Appeler le 15 immédiatement" },
          { time: "10 min", event: "ECG pré-hospitalier par le SAMU, diagnostic STEMI/NSTEMI" },
          { time: "60 min", event: "Aspirine + anticoagulation, préparation salle de cathétérisme" },
          { time: "90 min", event: "Angioplastie coronarienne (objectif door-to-balloon)" },
          { time: "3-7 j", event: "Soins intensifs cardiologiques, surveillance complications" },
          { time: "1 mois", event: "Réadaptation cardiaque (précoce et supervisée)" },
        ]}
        urgenceMessage="Appeler le 15 immédiatement si douleur thoracique constrictive > 5-10 minutes, avec ou sans irradiation. Ne jamais attendre, ne jamais conduire seul. L'ambulance prépare la salle de cathétérisme pendant le transport."
        autresMaladies={[
          { titre: "Hypertension artérielle", href: "/coeur/maladies/hypertension", desc: "Principal facteur de risque de l'IDM." },
          { titre: "Insuffisance cardiaque", href: "/coeur/maladies/insuffisance-cardiaque", desc: "Complication fréquente après un IDM étendu." },
          { titre: "AVC", href: "/coeur/maladies/avc", desc: "Même terrain athérosclérotique que l'IDM." },
        ]}
      />
    </>
  );
}
