"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiTransfer, BiCloud, BiErrorAlt, BiShieldX } from "react-icons/bi";
import MaladieCard from "@/components/poumons/MaladieCard";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

export default function PoumonHubContent() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.85, ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "#050810" }}>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 30% 50%, #0A1A2E 0%, #050810 65%)" }}
        ref={heroRef}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        <motion.div
          className="absolute pointer-events-none"
          style={{ width: 700, height: 700, top: "-10%", left: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-item flex items-center gap-3 mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase" style={{ color: "#38BDF8", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                VOLET POUMONS
              </span>
            </div>

            <h1 className="hero-item" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2.2rem, 5.5vw, 4rem)", lineHeight: 1.1, color: "#F8FAFC" }}>
              Maladies<br />pulmonaires
            </h1>

            <p className="hero-item mt-8 max-w-xl" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "#94A3B8" }}>
              Les poumons assurent chaque respiration. Comprendre leurs maladies, c'est protéger chaque souffle.
            </p>

            <div className="hero-item mt-10 p-5 rounded-2xl" style={{ background: "rgba(56,189,248,0.05)", border: "1px solid rgba(56,189,248,0.12)" }}>
              <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", fontSize: "0.88rem", lineHeight: 1.7 }}>
                235M d'asthmatiques dans le monde · 10M de cas de tuberculose/an
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <motion.svg
              viewBox="0 0 300 260"
              className="w-full max-w-sm"
              style={{ filter: "drop-shadow(0 0 40px rgba(56,189,248,0.15))" }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <defs>
                <linearGradient id="lungGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <rect x="143" y="10" width="14" height="50" rx="7" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.6" />
              <path d="M143 55 Q120 65 110 75" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.6" />
              <path d="M157 55 Q180 65 190 75" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.6" />
              <path d="M110 75 Q70 90 60 130 Q55 165 70 185 Q85 205 110 210 Q130 215 140 200 L143 130 Z" fill="url(#lungGrad)" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.5" />
              <path d="M190 75 Q230 90 240 130 Q245 165 230 185 Q215 205 190 210 Q170 215 160 200 L157 130 Z" fill="url(#lungGrad)" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.5" />
              <path d="M110 100 Q90 115 85 135" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M110 100 Q105 120 100 145" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M110 100 Q115 125 112 155" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M190 100 Q210 115 215 135" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M190 100 Q195 120 200 145" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M190 100 Q185 125 188 155" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              {[{ cx: 80, cy: 155 }, { cx: 97, cy: 170 }, { cx: 78, cy: 178 }, { cx: 215, cy: 155 }, { cx: 200, cy: 170 }, { cx: 218, cy: 178 }].map((c, i) => (
                <circle key={i} cx={c.cx} cy={c.cy} r="8" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.35" />
              ))}
            </motion.svg>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              { value: "235M", label: "Asthmatiques dans le monde", source: "OMS" },
              { value: "10M", label: "Nouveaux cas de tuberculose par an", source: "OMS 2022" },
              { value: "1re", label: "Cause de mortalité infectieuse mondiale", source: "Pneumonie" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="p-10 rounded-2xl text-center" style={{ background: "#0D1526", border: "1px solid rgba(56,189,248,0.1)" }}>
                <p style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "3rem", color: "#38BDF8", lineHeight: 1 }}>
                  {stat.value}
                </p>
                <p className="mt-4" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#94A3B8", lineHeight: 1.6, fontSize: "0.92rem" }}>
                  {stat.label}
                </p>
                <span className="inline-block mt-3 text-[10px] px-2 py-0.5 rounded-full" style={{ color: "#38BDF8", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                  {stat.source}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GRID 4 MALADIES */}
      <section className="py-32 px-6" style={{ background: "#050810" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeader badge="NOS PATHOLOGIES" title="4 maladies pulmonaires" subtitle="Chaque pathologie décryptée : mécanismes, symptômes, traitements et prévention." />
          </SectionReveal>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <MaladieCard
                href="/poumons/maladies/asthme"
                icon={<BiTransfer size={28} style={{ color: "#38BDF8" }} />}
                badge="CHRONIQUE"
                badgeType="CHRONIQUE"
                titre="Asthme"
                description="Inflammation chronique des bronches. 235M de personnes touchées dans le monde."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <MaladieCard
                href="/poumons/maladies/bronchite"
                icon={<BiCloud size={28} style={{ color: "#38BDF8" }} />}
                badge="AIGUË / CHRONIQUE"
                badgeType="AIGUË / CHRONIQUE"
                titre="Bronchite"
                description="Inflammation des bronches. Virale dans 90% des cas. Liée au tabac en forme chronique."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <MaladieCard
                href="/poumons/maladies/pneumonie"
                icon={<BiErrorAlt size={28} style={{ color: "#38BDF8" }} />}
                badge="URGENCE"
                badgeType="URGENCE"
                titre="Pneumonie"
                description="Infection des alvéoles pulmonaires. Première cause de mortalité infectieuse mondiale."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <MaladieCard
                href="/poumons/maladies/tuberculose"
                icon={<BiShieldX size={28} style={{ color: "#38BDF8" }} />}
                badge="CONTAGIEUSE"
                badgeType="CONTAGIEUSE"
                titre="Tuberculose"
                description="Infection bactérienne grave par le bacille de Koch. 10M de nouveaux cas par an."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
