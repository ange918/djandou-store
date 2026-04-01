"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, CalendarIcon, TagIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const articles = [
  {
    titre: "Comprendre le DFG : l'indicateur clé de la santé rénale",
    date: "15 mars 2025",
    categorie: "Biologie",
    extrait: "Le débit de filtration glomérulaire (DFG) est la mesure de référence pour évaluer la fonction rénale. Voici comment l'interpréter.",
    temps: "5 min",
    color: "#00C9FF",
  },
  {
    titre: "Alimentation et reins : les 10 aliments à connaître",
    date: "8 mars 2025",
    categorie: "Nutrition",
    extrait: "Certains aliments protègent vos reins, d'autres les fragilisent. Une revue complète des choix alimentaires essentiels pour les patients rénaux.",
    temps: "7 min",
    color: "#10B981",
  },
  {
    titre: "Dialyse ou greffe ? Comprendre les options de suppléance rénale",
    date: "25 février 2025",
    categorie: "Traitement",
    extrait: "Quand les reins ne fonctionnent plus qu'à moins de 10-15%, deux options s'offrent aux patients : la dialyse et la transplantation rénale.",
    temps: "8 min",
    color: "#8B5CF6",
  },
  {
    titre: "Médicaments et reins : attention aux interactions",
    date: "14 février 2025",
    categorie: "Médicaments",
    extrait: "Ibuprofène, certains antibiotiques, produits de contraste... De nombreux médicaments peuvent aggraver une atteinte rénale existante.",
    temps: "6 min",
    color: "#EF4444",
  },
  {
    titre: "La polykystose rénale autosomique dominante : ce qu'il faut savoir",
    date: "2 février 2025",
    categorie: "Génétique",
    extrait: "Affectant 1 personne sur 1000, la PKRAD est l'une des maladies génétiques rénales les plus fréquentes. Symptômes, diagnostic et perspectives thérapeutiques.",
    temps: "9 min",
    color: "#F97316",
  },
  {
    titre: "L'hypertension artérielle et les reins : un lien bidirectionnel",
    date: "20 janvier 2025",
    categorie: "Cardiovasculaire",
    extrait: "L'HTA abîme les reins, et des reins abîmés aggravent l'HTA. Comprendre ce cercle vicieux est essentiel pour casser la progression de l'IRC.",
    temps: "6 min",
    color: "#EC4899",
  },
];

const categories = ["Toutes", "Biologie", "Nutrition", "Traitement", "Médicaments", "Génétique", "Cardiovasculaire"];

export default function BlogPage() {
  const [cat, setCat] = useState("Toutes");

  const filtered = cat === "Toutes" ? articles : articles.filter((a) => a.categorie === cat);

  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.05) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}>
            RESSOURCES
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Articles & actualités
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Des articles clairs et sourcés pour mieux comprendre les maladies rénales, les traitements et les habitudes protectrices.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: cat === c ? "rgba(0,201,255,0.1)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${cat === c ? "rgba(0,201,255,0.4)" : "rgba(255,255,255,0.06)"}`,
                  color: cat === c ? "#00C9FF" : "#64748B",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((a, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[20px] overflow-hidden"
                  style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="h-2" style={{ background: `linear-gradient(90deg, ${a.color}, ${a.color}66)` }} />
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "#64748B" }}>
                        <CalendarIcon className="w-3.5 h-3.5" /> {a.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: a.color }}>
                        <TagIcon className="w-3.5 h-3.5" /> {a.categorie}
                      </span>
                      <span className="text-xs ml-auto" style={{ color: "#475569" }}>⏱ {a.temps}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 leading-snug" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>
                      {a.titre}
                    </h3>
                    <p className="text-sm mb-6" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.7 }}>{a.extrait}</p>
                    <button className="flex items-center gap-2 text-sm font-medium" style={{ color: a.color }}>
                      Lire l&apos;article <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: "#64748B" }}>Aucun article dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
