"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ExclamationTriangleIcon,
  ClockIcon,
  SparklesIcon,
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon,
  EyeIcon,
  UserGroupIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const maladies = [
  {
    href: "/maladies/insuffisance-renale-aigue",
    icon: <ExclamationTriangleIcon className="w-8 h-8" />,
    titre: "Insuffisance rénale aiguë",
    desc: "Perte soudaine de la fonction rénale nécessitant une prise en charge immédiate.",
    badge: "Aiguë",
    badgeColor: "#EF4444",
    prevalence: "5-10% des hospitalisations",
    categorie: "aigue",
    svgColor: "#EF4444",
  },
  {
    href: "/maladies/insuffisance-renale-chronique",
    icon: <ClockIcon className="w-8 h-8" />,
    titre: "Insuffisance rénale chronique",
    desc: "Dégradation progressive et irréversible de la fonction rénale sur plusieurs années.",
    badge: "Chronique",
    badgeColor: "#F97316",
    prevalence: "3 millions de patients en France",
    categorie: "chronique",
    svgColor: "#F97316",
  },
  {
    href: "/maladies/calculs-renaux",
    icon: <SparklesIcon className="w-8 h-8" />,
    titre: "Calculs rénaux",
    desc: "Dépôts minéraux formés dans les reins, pouvant obstruer les voies urinaires.",
    badge: "Aiguë",
    badgeColor: "#EF4444",
    prevalence: "10% de la population touchée",
    categorie: "aigue",
    svgColor: "#8B5CF6",
  },
  {
    href: "/maladies/glomerulonephrite",
    icon: <BeakerIcon className="w-8 h-8" />,
    titre: "Glomérulonéphrite",
    desc: "Inflammation des glomérules affectant la capacité de filtration du sang.",
    badge: "Chronique",
    badgeColor: "#F97316",
    prevalence: "1/10 000 habitants/an",
    categorie: "chronique",
    svgColor: "#EC4899",
  },
  {
    href: "/maladies/nephropathie-diabetique",
    icon: <HeartIcon className="w-8 h-8" />,
    titre: "Néphropathie diabétique",
    desc: "Atteinte rénale causée par le diabète, première cause d'IRC terminale.",
    badge: "Chronique",
    badgeColor: "#F97316",
    prevalence: "30-40% des diabétiques",
    categorie: "chronique",
    svgColor: "#F59E0B",
  },
  {
    href: "/maladies/nephropathie-hypertensive",
    icon: <ExclamationTriangleIcon className="w-8 h-8" />,
    titre: "Néphropathie hypertensive",
    desc: "Lésions rénales induites par une hypertension artérielle mal contrôlée.",
    badge: "Chronique",
    badgeColor: "#F97316",
    prevalence: "2e cause d'IRC terminale",
    categorie: "chronique",
    svgColor: "#EF4444",
  },
  {
    href: "/maladies/infections-urinaires",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    titre: "Infections urinaires",
    desc: "Infections bactériennes pouvant atteindre les reins si non traitées rapidement.",
    badge: "Infectieuse",
    badgeColor: "#10B981",
    prevalence: "1 femme sur 3 avant 24 ans",
    categorie: "infectieuse",
    svgColor: "#10B981",
  },
  {
    href: "/maladies/polykystose-renale",
    icon: <EyeIcon className="w-8 h-8" />,
    titre: "Polykystose rénale",
    desc: "Maladie génétique caractérisée par la formation de kystes dans les deux reins.",
    badge: "Héréditaire",
    badgeColor: "#8B5CF6",
    prevalence: "1/1000 personnes",
    categorie: "hereditaire",
    svgColor: "#06B6D4",
  },
  {
    href: "/maladies/syndrome-alport",
    icon: <UserGroupIcon className="w-8 h-8" />,
    titre: "Syndrome d'Alport",
    desc: "Néphropathie héréditaire touchant le collagène IV de la membrane basale glomérulaire.",
    badge: "Héréditaire",
    badgeColor: "#8B5CF6",
    prevalence: "1/5000 à 1/10 000",
    categorie: "hereditaire",
    svgColor: "#6366F1",
  },
  {
    href: "/maladies/tubulopathies",
    icon: <BeakerIcon className="w-8 h-8" />,
    titre: "Tubulopathies",
    desc: "Dysfonctionnements des tubules rénaux perturbant l'équilibre hydroélectrolytique.",
    badge: "Chronique",
    badgeColor: "#F97316",
    prevalence: "Prévalence variable selon le type",
    categorie: "chronique",
    svgColor: "#3B82F6",
  },
];

const categories = [
  { id: "all", label: "Toutes" },
  { id: "aigue", label: "Aiguë" },
  { id: "chronique", label: "Chronique" },
  { id: "infectieuse", label: "Infectieuse" },
  { id: "hereditaire", label: "Héréditaire" },
];

export default function MaladiesHub() {
  const [filtre, setFiltre] = useState("all");
  const [recherche, setRecherche] = useState("");

  const filtered = maladies.filter((m) => {
    const matchCat = filtre === "all" || m.categorie === filtre;
    const matchSearch = m.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      m.desc.toLowerCase().includes(recherche.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.06) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}
          >
            ENCYCLOPÉDIE
          </span>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
              color: "#F8FAFC",
            }}
          >
            Maladies rénales
          </h1>
          <p className="max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Retrouvez des informations complètes sur les 10 principales pathologies rénales : causes, symptômes, traitements et prévention.
          </p>

          <div className="grid grid-cols-3 gap-0 max-w-xs sm:max-w-lg mx-auto mt-12 sm:mt-16">
            {[["10", "maladies couvertes"], ["50+", "symptômes décrits"], ["100%", "sources médicales"]].map(([n, l], i) => (
              <div key={i} className={`px-4 sm:px-8 py-4 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}>
                <p className="text-2xl sm:text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)" }}>{n}</p>
                <p className="text-xs mt-1" style={{ color: "#64748B" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          {/* Search + filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 md:mb-16">
            <div className="relative flex-1 max-w-full md:max-w-md">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#64748B" }} />
              <input
                type="text"
                placeholder="Rechercher une maladie..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: "#0F172A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#F8FAFC",
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFiltre(cat.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    background: filtre === cat.id ? "rgba(0,201,255,0.12)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${filtre === cat.id ? "rgba(0,201,255,0.4)" : "rgba(255,255,255,0.06)"}`,
                    color: filtre === cat.id ? "#00C9FF" : "#64748B",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${filtre}-${recherche}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filtered.map((m, i) => (
                <motion.div
                  key={m.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={m.href}
                    className="block rounded-[20px] p-6 sm:p-10 transition-all duration-300 group"
                    style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,255,0.25)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,201,255,0.08)", color: "#00C9FF" }}>
                        {m.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ color: m.badgeColor, background: `${m.badgeColor}15`, border: `1px solid ${m.badgeColor}30` }}>
                          {m.badge}
                        </span>
                        <h3 className="mt-2 text-base sm:text-lg font-bold" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>{m.titre}</h3>
                      </div>
                    </div>
                    <p className="mb-5 text-sm" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7 }}>{m.desc}</p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs" style={{ color: "#475569" }}>📊 {m.prevalence}</span>
                      <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#00C9FF" }}>
                        Découvrir <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: "#64748B" }}>Aucune maladie trouvée pour cette recherche.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
