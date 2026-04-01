"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
  SparklesIcon,
  ArrowPathIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const maladies = [
  {
    href: "/maladies/insuffisance-renale-aigue",
    icon: <ExclamationTriangleIcon className="w-7 h-7" />,
    titre: "Insuffisance rénale aiguë",
    desc: "Perte soudaine de la fonction rénale nécessitant une prise en charge immédiate.",
    badge: "Aiguë",
    badgeColor: "#EF4444",
  },
  {
    href: "/maladies/insuffisance-renale-chronique",
    icon: <ClockIcon className="w-7 h-7" />,
    titre: "Insuffisance rénale chronique",
    desc: "Dégradation progressive et irréversible de la fonction rénale sur plusieurs années.",
    badge: "Chronique",
    badgeColor: "#F97316",
  },
  {
    href: "/maladies/calculs-renaux",
    icon: <SparklesIcon className="w-7 h-7" />,
    titre: "Calculs rénaux",
    desc: "Dépôts minéraux formés dans les reins, pouvant obstruer les voies urinaires.",
    badge: "Aiguë",
    badgeColor: "#EF4444",
  },
  {
    href: "/maladies/glomerulonephrite",
    icon: <BeakerIcon className="w-7 h-7" />,
    titre: "Glomérulonéphrite",
    desc: "Inflammation des glomérules, affectant la capacité de filtration du sang.",
    badge: "Chronique",
    badgeColor: "#F97316",
  },
  {
    href: "/maladies/nephropathie-diabetique",
    icon: <HeartIcon className="w-7 h-7" />,
    titre: "Néphropathie diabétique",
    desc: "Atteinte rénale causée par le diabète, première cause d'IRC terminale.",
    badge: "Chronique",
    badgeColor: "#F97316",
  },
  {
    href: "/maladies/nephropathie-hypertensive",
    icon: <ExclamationTriangleIcon className="w-7 h-7" />,
    titre: "Néphropathie hypertensive",
    desc: "Lésions rénales induites par une hypertension artérielle mal contrôlée.",
    badge: "Chronique",
    badgeColor: "#F97316",
  },
  {
    href: "/maladies/infections-urinaires",
    icon: <ShieldCheckIcon className="w-7 h-7" />,
    titre: "Infections urinaires",
    desc: "Infections bactériennes pouvant atteindre les reins si non traitées rapidement.",
    badge: "Infectieuse",
    badgeColor: "#10B981",
  },
  {
    href: "/maladies/polykystose-renale",
    icon: <EyeIcon className="w-7 h-7" />,
    titre: "Polykystose rénale",
    desc: "Maladie génétique caractérisée par la formation de kystes dans les reins.",
    badge: "Héréditaire",
    badgeColor: "#8B5CF6",
  },
  {
    href: "/maladies/syndrome-alport",
    icon: <UserGroupIcon className="w-7 h-7" />,
    titre: "Syndrome d'Alport",
    desc: "Néphropathie héréditaire touchant le collagène IV de la membrane basale.",
    badge: "Héréditaire",
    badgeColor: "#8B5CF6",
  },
  {
    href: "/maladies/tubulopathies",
    icon: <BeakerIcon className="w-7 h-7" />,
    titre: "Tubulopathies",
    desc: "Dysfonctionnements des tubules rénaux perturbant l'équilibre hydroélectrolytique.",
    badge: "Chronique",
    badgeColor: "#F97316",
  },
];

const stats = [
  { chiffre: "850M", label: "personnes atteintes de maladie rénale dans le monde" },
  { chiffre: "50%", label: "des cas liés au diabète et à l'hypertension" },
  { chiffre: "1/1000", label: "personnes atteintes de polykystose rénale" },
];

const gestes = [
  {
    icon: <ShieldCheckIcon className="w-12 h-12" style={{ color: "#00C9FF" }} />,
    titre: "Contrôle tensionnel",
    desc: "Maintenir une pression artérielle inférieure à 130/80 mmHg protège les glomérules et prévient la dégradation rénale.",
  },
  {
    icon: <BeakerIcon className="w-12 h-12" style={{ color: "#00C9FF" }} />,
    titre: "Hydratation suffisante",
    desc: "Boire 1,5 à 2 litres d'eau par jour favorise l'élimination des déchets et réduit le risque de calculs rénaux.",
  },
  {
    icon: <HeartIcon className="w-12 h-12" style={{ color: "#00C9FF" }} />,
    titre: "Surveillance glycémique",
    desc: "Un diabète bien équilibré (HbA1c < 7%) réduit considérablement le risque de néphropathie diabétique.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, #001A3A 0%, #0A0F1E 60%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-28 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block mb-8 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
              style={{
                color: "#00C9FF",
                background: "rgba(0,201,255,0.08)",
                border: "1px solid rgba(0,201,255,0.2)",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              }}
            >
              SANTÉ RÉNALE
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              style={{
                fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#F8FAFC",
              }}
            >
              Protégez vos reins.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Protégez votre vie.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-md"
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 300,
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#94A3B8",
              }}
            >
              Les reins filtrent 1 700 litres de sang chaque jour. Découvrez comment les comprendre,
              les protéger et détecter les signaux d&apos;alerte.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-12">
              <Link
                href="/outils"
                className="px-8 py-4 rounded-full font-medium text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  fontWeight: 500,
                }}
              >
                Tester mon risque
              </Link>
              <Link
                href="/comprendre"
                className="px-8 py-4 rounded-full font-medium transition-all duration-200 hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#F8FAFC",
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  fontWeight: 500,
                }}
              >
                Comprendre les reins
              </Link>
            </motion.div>
          </motion.div>

          {/* Kidney function icon cluster — visible on all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center items-center mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(0,201,255,0.08) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Center badge */}
              <div className="flex justify-center mb-5">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,201,255,0.2), rgba(0,102,255,0.15))",
                    border: "1px solid rgba(0,201,255,0.35)",
                  }}
                >
                  <BeakerIcon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "#00C9FF" }} />
                </div>
              </div>

              {/* 2×3 function grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: <ArrowPathIcon className="w-5 h-5" />, label: "Filtration" },
                  { icon: <HeartIcon className="w-5 h-5" />, label: "Pression" },
                  { icon: <ShieldCheckIcon className="w-5 h-5" />, label: "Protection" },
                  { icon: <ScaleIcon className="w-5 h-5" />, label: "Équilibre" },
                  { icon: <SparklesIcon className="w-5 h-5" />, label: "Hormones" },
                  { icon: <EyeIcon className="w-5 h-5" />, label: "Détection" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex flex-col items-center gap-2 py-4 px-2 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(0,201,255,0.12)",
                    }}
                  >
                    <span style={{ color: "#00C9FF" }}>{item.icon}</span>
                    <span
                      className="text-xs text-center"
                      style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 md:py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-0"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`text-center px-6 py-8 md:px-12 ${i < stats.length - 1 ? "sm:border-r border-b sm:border-b-0 border-white/[0.06]" : ""}`}
              >
                <p
                  className="text-4xl sm:text-5xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                    background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.chiffre}
                </p>
                <p
                  className="text-sm max-w-[180px] mx-auto"
                  style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MALADIES ─── */}
      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="PATHOLOGIES"
            title="Les maladies rénales"
            subtitle="Dix affections majeures pouvant toucher les reins, de l'aigu au chronique, en passant par les maladies génétiques."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maladies.map((m, i) => (
              <GlowCard key={i} href={m.href}>
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,201,255,0.08)", color: "#00C9FF" }}
                  >
                    {m.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3
                        className="text-base sm:text-lg font-bold leading-tight"
                        style={{
                          fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                          color: "#F8FAFC",
                          fontWeight: 700,
                        }}
                      >
                        {m.titre}
                      </h3>
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          color: m.badgeColor,
                          background: `${m.badgeColor}15`,
                          border: `1px solid ${m.badgeColor}33`,
                        }}
                      >
                        {m.badge}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mb-5" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.925rem" }}>
                  {m.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#00C9FF" }}>
                  Découvrir <ArrowRightIcon className="w-4 h-4" />
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUIZ CTA ─── */}
      <section className="py-16 md:py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
              style={{
                color: "#00C9FF",
                background: "rgba(0,201,255,0.08)",
                border: "1px solid rgba(0,201,255,0.2)",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              }}
            >
              DÉPISTAGE
            </span>

            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                color: "#F8FAFC",
              }}
            >
              Êtes-vous à risque ?
            </h2>

            <p
              className="mb-12 max-w-xl mx-auto"
              style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}
            >
              En 10 questions, évaluez votre profil de risque de développer une maladie rénale.
              Un outil d&apos;orientation, pas de diagnostic médical.
            </p>

            <Link
              href="/outils"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full font-medium text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 500,
                fontSize: "1rem",
              }}
            >
              Commencer le quiz gratuit
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 3 GESTES ESSENTIELS ─── */}
      <section className="py-16 md:py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="PRÉVENTION"
            title="3 gestes essentiels"
            subtitle="Des habitudes simples à adopter dès aujourd'hui pour préserver la santé de vos reins sur le long terme."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {gestes.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`px-6 py-10 md:px-12 md:py-12 text-center ${i < gestes.length - 1 ? "md:border-r border-b md:border-b-0 border-white/[0.06]" : ""}`}
              >
                <div className="flex justify-center mb-8">{g.icon}</div>
                <h3
                  className="text-lg sm:text-xl font-bold mb-6"
                  style={{
                    fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                    color: "#F8FAFC",
                  }}
                >
                  {g.titre}
                </h3>
                <p
                  className="max-w-xs mx-auto"
                  style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8, fontSize: "0.925rem" }}
                >
                  {g.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
