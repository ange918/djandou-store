"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BiPhone, BiSearch, BiMeh, BiErrorAlt } from "react-icons/bi";
import SectionReveal from "@/components/ui/SectionReveal";
import PaysCard from "@/components/urgences/PaysCard";
import RegionSection from "@/components/urgences/RegionSection";
import { URGENCES_DATA, REGIONS, type Region } from "@/lib/urgences-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function UrgencesContent() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region>("Tous");

  const filtered = useMemo(() => {
    return URGENCES_DATA.filter((p) =>
      p.pays.toLowerCase().includes(search.toLowerCase()) &&
      (region === "Tous" || p.region === region)
    );
  }, [search, region]);

  const byRegion = useMemo(() => {
    const regions = ["Afrique", "Europe", "Amériques", "Asie", "Océanie"] as const;
    return regions.map((r) => ({
      region: r,
      pays: URGENCES_DATA.filter((p) => p.region === r),
    }));
  }, []);

  const showFlat = search.trim().length > 0;

  return (
    <div style={{ background: "#050810", minHeight: "100vh" }}>
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" style={{ background: "radial-gradient(ellipse at 30% 50%, #1A0506 0%, #050810 65%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        <motion.div className="absolute pointer-events-none" style={{ width: 600, height: 600, top: "0%", left: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)" }} animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" as const }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase" style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
              <BiPhone size={14} className="animate-pulse" />
              URGENCES MONDIALES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2.2rem, 5.5vw, 4rem)", lineHeight: 1.1, color: "#F8FAFC" }}
          >
            Numéros d'urgence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl"
            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "#94A3B8" }}
          >
            Trouvez en quelques secondes le numéro d'urgence du pays où vous vous trouvez.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 p-4 rounded-2xl flex items-center gap-3 max-w-lg"
            style={{ background: "rgba(239,68,68,0.08)", border: "2px solid rgba(239,68,68,0.25)" }}
          >
            <BiErrorAlt size={24} style={{ color: "#EF4444", flexShrink: 0 }} />
            <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 400, color: "#F8FAFC", fontSize: "0.9rem", lineHeight: 1.6 }}>
              ⚠️ En cas d'urgence vitale, appelez immédiatement les secours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BARRE DE RECHERCHE STICKY */}
      <div className="sticky top-20 z-30 px-6 py-4" style={{ background: "rgba(5,8,16,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <BiSearch size={20} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#64748B" }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un pays..."
              className="w-full pl-12 pr-4 py-3 rounded-xl outline-none transition-all duration-200"
              style={{ background: "#0D1526", border: "1px solid rgba(255,255,255,0.08)", color: "#F8FAFC", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "0.95rem" }}
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: region === r ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${region === r ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.08)"}`,
                  color: region === r ? "#EF4444" : "#64748B",
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENU */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <SectionReveal>
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <BiMeh size={64} style={{ color: "#64748B" }} />
              <p style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 700, color: "#64748B", fontSize: "1rem" }}>
                Aucun pays trouvé
              </p>
              <p style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, color: "#475569", fontSize: "0.9rem" }}>
                Essayez un autre terme de recherche.
              </p>
            </div>
          </SectionReveal>
        ) : showFlat ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <motion.div
                key={p.pays}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
              >
                <PaysCard pays={p} />
              </motion.div>
            ))}
          </div>
        ) : (
          byRegion
            .filter((r) => region === "Tous" || r.region === region)
            .map(({ region: r, pays }) => (
              <RegionSection key={r} region={r} pays={pays} />
            ))
        )}
      </div>
    </div>
  );
}
