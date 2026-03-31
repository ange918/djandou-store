"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BeakerIcon,
  ArrowPathIcon,
  BoltIcon,
  ShieldCheckIcon,
  HeartIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const fonctions = [
  { icon: <BeakerIcon className="w-8 h-8" />, titre: "Filtration du sang", desc: "Les reins filtrent environ 180 litres de plasma par jour, éliminant déchets et toxines via 1 million de néphrons chacun." },
  { icon: <ArrowPathIcon className="w-8 h-8" />, titre: "Régulation hydrique", desc: "Ils contrôlent précisément la quantité d'eau dans l'organisme en ajustant le volume urinaire selon l'hydratation." },
  { icon: <BoltIcon className="w-8 h-8" />, titre: "Équilibre électrolytique", desc: "Sodium, potassium, calcium, phosphore : les reins maintiennent des concentrations optimales pour le bon fonctionnement cellulaire." },
  { icon: <HeartIcon className="w-8 h-8" />, titre: "Pression artérielle", desc: "Via le système rénine-angiotensine-aldostérone, les reins régulent la pression artérielle en adaptant la volémie." },
  { icon: <ShieldCheckIcon className="w-8 h-8" />, titre: "Production d'hormones", desc: "Érythropoïétine (globules rouges), rénine (PA) et calcitriol (vitamine D active) sont sécrétés par les reins." },
  { icon: <ScaleIcon className="w-8 h-8" />, titre: "Équilibre acido-basique", desc: "En excrétant des ions H⁺ et en régénérant le bicarbonate, les reins maintiennent un pH sanguin entre 7,35 et 7,45." },
];

const tooltips: Record<string, string> = {
  cortex: "Couche externe contenant les glomérules et les tubules contournés. Siège de la filtration et de la réabsorption.",
  medulla: "Zone interne formée de pyramides de Malpighi. Contient les anses de Henlé et les tubes collecteurs.",
  glomerule: "Peloton de capillaires filtrant 180 L de plasma/jour. Taux de filtration normal : 90-120 mL/min.",
  bassin: "Cavité collectant l'urine formée. Donne naissance à l'uretère qui mène l'urine vers la vessie.",
  artere: "L'artère rénale apporte 20-25% du débit cardiaque aux reins (environ 1 à 1,2 L/min).",
  ureter: "Canal de 25-30 cm acheminant l'urine du bassinet vers la vessie par des contractions péristaltiques.",
};

export default function ComprendrePage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countersRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".counter-value", {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: countersRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, countersRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        className="relative pt-40 pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.06) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}>
            ANATOMIE & PHYSIOLOGIE
          </span>
          <h1 style={{
            fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.15,
            color: "#F8FAFC",
          }}>
            Comprendre les reins
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Organes vitaux discrets, les reins accomplissent en permanence des tâches essentielles à notre survie. Découvrez leur anatomie et leurs fonctions.
          </p>
        </div>
      </section>

      {/* Compteurs */}
      <section ref={countersRef} className="py-24 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { n: 1700, unit: "L", label: "de sang filtré par jour" },
            { n: 2, unit: "M", label: "de néphrons au total" },
            { n: 180, unit: "L", label: "de filtrat glomérulaire/jour" },
            { n: 25, unit: "%", label: "du débit cardiaque reçu" },
          ].map((item, i) => (
            <div key={i} className={`text-center px-8 py-6 ${i < 3 ? "border-r border-white/[0.06]" : ""}`}>
              <p className="text-4xl font-bold gradient-text counter-value" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)" }}>
                {item.n}{item.unit}
              </p>
              <p className="text-xs mt-2" style={{ color: "#64748B", lineHeight: 1.6 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SVG Anatomique interactif */}
      <section className="py-32 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="ANATOMIE" title="Structure anatomique" subtitle="Survolez les différentes zones pour découvrir le rôle de chaque structure rénale." />

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="relative flex-shrink-0">
              <svg width="380" height="480" viewBox="0 0 380 480" fill="none">
                {/* Kidney outline */}
                <path d="M160 60 C100 60 50 110 50 175 C50 310 110 420 165 420 C195 420 205 385 200 345 C198 325 182 310 177 285 C170 250 185 225 180 195 C172 160 175 60 160 60Z"
                  fill="rgba(0,201,255,0.03)" stroke="#00C9FF" strokeWidth="2" />
                <path d="M170 60 C210 58 240 85 240 120 C238 155 218 175 222 210 C228 240 242 258 242 295 C244 340 232 422 205 424 C230 430 268 400 268 335 C268 255 240 180 218 145 C204 118 195 60 170 60Z"
                  fill="rgba(0,201,255,0.02)" stroke="rgba(0,201,255,0.25)" strokeWidth="1.5" />

                {/* Cortex zone */}
                <path d="M80 180 C100 168 135 162 165 165 C195 162 225 168 240 180" stroke="rgba(0,201,255,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <path d="M78 200 C100 186 136 180 165 183 C194 180 226 186 242 200" stroke="rgba(0,201,255,0.15)" strokeWidth="1" strokeDasharray="4 3" />

                {/* Médulla pyramids */}
                <path d="M130 250 L155 300 L105 300 Z" fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.2)" strokeWidth="1" />
                <path d="M165 260 L190 305 L140 305 Z" fill="rgba(0,201,255,0.06)" stroke="rgba(0,201,255,0.2)" strokeWidth="1" />
                <path d="M198 250 L220 295 L176 295 Z" fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.2)" strokeWidth="1" />

                {/* Bassinet */}
                <ellipse cx="165" cy="310" rx="30" ry="40" fill="rgba(0,201,255,0.06)" stroke="rgba(0,201,255,0.5)" strokeWidth="2" />

                {/* Ureter */}
                <path d="M175 350 C177 380 180 410 183 440" stroke="rgba(0,201,255,0.5)" strokeWidth="2" strokeDasharray="5 3" />

                {/* Artere renale */}
                <path d="M280 200 C250 198 220 208 195 215" stroke="rgba(0,201,255,0.6)" strokeWidth="2.5" />
                <text x="285" y="196" fill="rgba(0,201,255,0.6)" fontSize="8" fontFamily="Poppins,sans-serif">Artère rénale</text>

                {/* Hotspots */}
                {[
                  { id: "cortex", x: 60, y: 170, label: "Cortex" },
                  { id: "medulla", x: 160, y: 275, label: "Médulla" },
                  { id: "glomerule", x: 100, y: 130, label: "Glomérule" },
                  { id: "bassin", x: 165, y: 310, label: "Bassinet" },
                  { id: "ureter", x: 185, y: 420, label: "Uretère" },
                ].map((spot) => (
                  <g key={spot.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveTooltip(spot.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <circle cx={spot.x} cy={spot.y} r="14" fill={activeTooltip === spot.id ? "rgba(0,201,255,0.2)" : "rgba(0,201,255,0.08)"} stroke="#00C9FF" strokeWidth="1.5" />
                    <circle cx={spot.x} cy={spot.y} r="4" fill="#00C9FF" />
                    <text x={spot.x} y={spot.y + 26} textAnchor="middle" fill="#00C9FF" fontSize="8" fontFamily="Poppins,sans-serif">{spot.label}</text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="flex-1 space-y-4">
              {Object.entries(tooltips).map(([key, desc]) => (
                <motion.div
                  key={key}
                  className="p-6 rounded-xl transition-all duration-200"
                  style={{
                    background: activeTooltip === key ? "rgba(0,201,255,0.08)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${activeTooltip === key ? "rgba(0,201,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                  }}
                  onMouseEnter={() => setActiveTooltip(key)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <h4 className="text-sm font-bold mb-2 capitalize" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: activeTooltip === key ? "#00C9FF" : "#94A3B8" }}>
                    {key === "bassin" ? "Bassinet" : key === "artere" ? "Artère rénale" : key === "ureter" ? "Uretère" : key.charAt(0).toUpperCase() + key.slice(1)}
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fonctions */}
      <section className="py-32 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="PHYSIOLOGIE" title="6 fonctions vitales" subtitle="Les reins sont des organes multifonctions essentiels à l'homéostasie de l'organisme." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fonctions.map((f, i) => (
              <GlowCard key={i}>
                <div className="mb-6" style={{ color: "#00C9FF" }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>{f.titre}</h3>
                <p style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7, fontSize: "0.9rem" }}>{f.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
