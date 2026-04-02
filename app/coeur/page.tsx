"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  HeartIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  UsersIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  FireIcon,
  ShieldCheckIcon,
  BeakerIcon,
  PhoneIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const maladies = [
  {
    href: "/coeur/maladies/hypertension",
    icon: ArrowTrendingUpIcon,
    titre: "Hypertension artérielle",
    desc: "Élévation persistante de la pression sanguine ≥140/90 mmHg. Touche 17M de Français. Souvent silencieuse.",
    badge: "CHRONIQUE",
    badgeColor: "#F97316",
  },
  {
    href: "/coeur/maladies/infarctus",
    icon: BoltIcon,
    titre: "Infarctus du myocarde",
    desc: "Obstruction aiguë d'une artère coronaire. 80 000 cas par an en France. Urgence absolue.",
    badge: "URGENCE",
    badgeColor: "#EF4444",
  },
  {
    href: "/coeur/maladies/insuffisance-cardiaque",
    icon: HeartIcon,
    titre: "Insuffisance cardiaque",
    desc: "Incapacité du cœur à pomper suffisamment. 1,38M de Français. Évolution progressive.",
    badge: "CHRONIQUE",
    badgeColor: "#F97316",
  },
  {
    href: "/coeur/maladies/avc",
    icon: ExclamationTriangleIcon,
    titre: "AVC",
    desc: "Interruption brutale de la circulation cérébrale. 190 000 cas par an. Chaque minute compte.",
    badge: "URGENCE",
    badgeColor: "#EF4444",
  },
];

const essentiels = [
  {
    icon: ArrowTrendingUpIcon,
    titre: "Contrôlez votre tension",
    desc: "Mesurez votre pression artérielle régulièrement. Objectif : moins de 140/90 mmHg. En cas d'HTA, surveillez-la quotidiennement.",
    color: "#EF4444",
  },
  {
    icon: FireIcon,
    titre: "Bougez chaque jour",
    desc: "30 minutes d'activité modérée par jour suffisent pour réduire de 35 % le risque d'événement cardiovasculaire.",
    color: "#F97316",
  },
  {
    icon: BeakerIcon,
    titre: "Alimentation cardio-protectrice",
    desc: "Moins de sel, moins de graisses saturées, plus de légumes, fruits, légumineuses et oméga-3. Le régime méditerranéen est le mieux documenté.",
    color: "#10B981",
  },
  {
    icon: ShieldCheckIcon,
    titre: "Stoppez le tabac",
    desc: "Fumer double le risque d'infarctus. Après 1 an d'arrêt, le risque cardiovasculaire est déjà divisé par deux.",
    color: "#8B5CF6",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    titre: "Suivez vos traitements",
    desc: "Ne jamais interrompre un antihypertenseur ou un anticoagulant sans avis médical. L'observance est essentielle à l'efficacité.",
    color: "#00C9FF",
  },
  {
    icon: SunIcon,
    titre: "Gérez le stress",
    desc: "Le stress chronique élève durablement la tension artérielle. Sommeil, respiration, activité physique : des solutions simples et efficaces.",
    color: "#F59E0B",
  },
];

const globalStats = [
  { value: "1,4 milliard", label: "Hypertendus dans le monde", icon: UsersIcon },
  { value: "64 millions", label: "Personnes atteintes d'IC dans le monde", icon: GlobeAltIcon },
  { value: "2e cause", label: "De mortalité mondiale (AVC)", icon: ChartBarIcon },
];

export default function CoeurPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 30% 50%, #2D0A0A 0%, #050810 65%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        <motion.div
          className="absolute pointer-events-none"
          style={{ width: 600, height: 600, top: "0%", left: "-5%", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            <motion.span
              variants={fadeInUp}
              className="inline-block mb-8 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
            >
              VOLET CŒUR
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              style={{
                fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#F8FAFC",
              }}
            >
              Maladies{" "}
              <span style={{ background: "linear-gradient(135deg, #EF4444, #B91C1C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                cardiovasculaires
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-xl"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "#64748B" }}
            >
              Le cœur et les vaisseaux sont au centre de nombreuses pathologies graves. Comprendre pour prévenir.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#475569", lineHeight: 1.7 }}
            >
              17M d&apos;hypertendus en France · 80 000 infarctus par an · 190 000 AVC par an
            </motion.p>
          </motion.div>

          {/* Beating heart SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <svg
              viewBox="0 0 200 180"
              className="w-64 h-64 animate-heartbeat"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 0 40px rgba(239,68,68,0.3))" }}
            >
              <path
                d="M100 155 C40 115 10 85 10 58 C10 35 28 18 50 18 C65 18 80 27 100 45 C120 27 135 18 150 18 C172 18 190 35 190 58 C190 85 160 115 100 155Z"
                fill="rgba(239,68,68,0.15)"
                stroke="#EF4444"
                strokeWidth="2"
              />
              <path
                d="M100 140 C50 108 25 80 25 58 C25 42 36 30 50 30 C65 30 80 40 100 58 C120 40 135 30 150 30 C164 30 175 42 175 58 C175 80 150 108 100 140Z"
                fill="rgba(239,68,68,0.25)"
              />
              <polyline
                points="20,95 40,95 50,70 60,120 70,40 80,95 100,95 120,95"
                stroke="#EF4444"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS GLOBALES ─── */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {globalStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.04, y: -6, transition: { duration: 0.2 } }}
                  className="p-10 rounded-2xl text-center relative overflow-hidden"
                  style={{ background: "#0D1526", border: "1px solid rgba(239,68,68,0.1)" }}
                >
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(239,68,68,0.07) 0%, transparent 70%)" }}
                  />
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(239,68,68,0.08)" }}>
                      <Icon className="w-7 h-7" style={{ color: "#EF4444" }} />
                    </div>
                  </div>
                  <p
                    className="text-3xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, background: "linear-gradient(135deg, #EF4444, #B91C1C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── GRID MALADIES ─── */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="NOS PATHOLOGIES"
            title="4 maladies cardiovasculaires"
            subtitle="Choisissez une pathologie pour tout comprendre."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {maladies.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={i} variants={fadeInUp}>
                  <Link href={m.href} className="block group">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="p-10 rounded-2xl h-full relative overflow-hidden"
                      style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ background: "radial-gradient(circle at 15% 15%, rgba(239,68,68,0.06) 0%, transparent 65%)" }}
                      />
                      <div className="flex items-start gap-5 mb-6 relative z-10">
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(239,68,68,0.08)" }}
                          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                        >
                          <Icon className="w-7 h-7" style={{ color: "#EF4444" }} />
                        </motion.div>
                        <span
                          className="mt-1 text-[10px] font-medium px-2.5 py-1 rounded-full"
                          style={{ color: m.badgeColor, background: `${m.badgeColor}18`, border: `1px solid ${m.badgeColor}40`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                        >
                          {m.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC" }}>
                        {m.titre}
                      </h3>
                      <p className="mb-6 relative z-10" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, lineHeight: 1.7, fontSize: "0.92rem" }}>
                        {m.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200 relative z-10" style={{ color: "#EF4444", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                        Découvrir <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* ─── GESTION ESSENTIELS ─── */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="GESTION ESSENTIELS"
            title="Les fondamentaux au quotidien"
            subtitle="Des gestes simples, validés scientifiquement, pour prendre soin de votre cœur chaque jour."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {essentiels.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.2 } }}
                  className="p-10 rounded-2xl flex flex-col gap-5 relative overflow-hidden"
                  style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ background: `radial-gradient(circle at 15% 15%, ${e.color}10 0%, transparent 70%)` }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${e.color}12` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: e.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                        fontWeight: 700,
                        color: "#F8FAFC",
                      }}
                    >
                      {e.titre}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: "#64748B",
                      }}
                    >
                      {e.desc}
                    </p>
                  </div>
                  <div
                    className="h-0.5 rounded-full mt-auto"
                    style={{ background: `linear-gradient(90deg, ${e.color}40, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Urgence banner */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(239,68,68,0.1)" }}>
              <PhoneIcon className="w-7 h-7" style={{ color: "#EF4444" }} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p
                className="font-bold mb-1"
                style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#EF4444", fontSize: "0.9rem" }}
              >
                En cas de douleur thoracique, essoufflement brutal ou paralysie soudaine
              </p>
              <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Appelez immédiatement le <strong style={{ color: "#F8FAFC" }}>15 (SAMU)</strong>. Chaque minute compte. Ne conduisez pas vous-même.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
