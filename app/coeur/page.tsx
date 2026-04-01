"use client";

import { useEffect, useRef } from "react";
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
} from "@heroicons/react/24/outline";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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

const globalStats = [
  { value: "1,4 milliard", label: "Hypertendus dans le monde", icon: UsersIcon },
  { value: "64 millions", label: "Personnes atteintes d'IC dans le monde", icon: GlobeAltIcon },
  { value: "2e cause", label: "De mortalité mondiale (AVC)", icon: ChartBarIcon },
];

export default function CoeurPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-coeur", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 30% 50%, #2D0A0A 0%, #050810 65%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="hero-coeur inline-block mb-8 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
            >
              VOLET CŒUR
            </span>

            <h1
              className="hero-coeur"
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
            </h1>

            <p
              className="hero-coeur mt-8 max-w-xl"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "#64748B" }}
            >
              Le cœur et les vaisseaux sont au centre de nombreuses pathologies graves. Comprendre pour prévenir.
            </p>

            <p
              className="hero-coeur mt-8 text-sm"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#475569", lineHeight: 1.7 }}
            >
              17M d&apos;hypertendus en France · 80 000 infarctus par an · 190 000 AVC par an
            </p>
          </div>

          {/* Beating heart SVG */}
          <div className="flex justify-center items-center">
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
              {/* ECG line */}
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
          </div>
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
                  className="p-10 rounded-2xl text-center"
                  style={{ background: "#0D1526", border: "1px solid rgba(239,68,68,0.1)" }}
                >
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
                      whileHover={{ y: -4, borderColor: "rgba(239,68,68,0.3)" }}
                      transition={{ duration: 0.25 }}
                      className="p-10 rounded-2xl h-full"
                      style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex items-start gap-5 mb-6">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,68,68,0.08)" }}>
                          <Icon className="w-7 h-7" style={{ color: "#EF4444" }} />
                        </div>
                        <span
                          className="mt-1 text-[10px] font-medium px-2.5 py-1 rounded-full"
                          style={{ color: m.badgeColor, background: `${m.badgeColor}18`, border: `1px solid ${m.badgeColor}40`, fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                        >
                          {m.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#F8FAFC" }}>
                        {m.titre}
                      </h3>
                      <p className="mb-6" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, lineHeight: 1.7, fontSize: "0.92rem" }}>
                        {m.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200" style={{ color: "#EF4444", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
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
    </>
  );
}
