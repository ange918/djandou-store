"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const articles = [
  {
    titre: "Les 5 signes avant-coureurs de l'insuffisance rénale chronique",
    extrait: "L'IRC progresse souvent silencieusement pendant des années. Voici comment la détecter tôt grâce à des signaux simples à repérer.",
    categorie: "Clinique",
    date: "15 mars 2025",
    lecture: "6 min",
    color: "#F97316",
  },
  {
    titre: "Dialyse vs greffe rénale : quelle suppléance choisir ?",
    extrait: "Deux options majeures existent pour remplacer la fonction rénale défaillante. Comparaison des avantages, contraintes et résultats de chacune.",
    categorie: "Traitement",
    date: "8 mars 2025",
    lecture: "9 min",
    color: "#00C9FF",
  },
  {
    titre: "Alimentation rénale : les 10 erreurs les plus fréquentes",
    extrait: "Des idées reçues persistent sur l'alimentation des patients rénaux. Notre néphrologue-conseil décortique les 10 erreurs les plus répandues.",
    categorie: "Nutrition",
    date: "1 mars 2025",
    lecture: "7 min",
    color: "#10B981",
  },
  {
    titre: "Médicaments et néphrotoxicité : ce que vous devez savoir",
    extrait: "Ibuprofène, aminosides, produits de contraste... De nombreux médicaments peuvent endommager les reins. Guide pratique pour les patients.",
    categorie: "Prévention",
    date: "22 février 2025",
    lecture: "8 min",
    color: "#8B5CF6",
  },
  {
    titre: "Polykystose rénale : la recherche en 2025",
    extrait: "Les avancées thérapeutiques récentes, dont le tolvaptan, offrent de nouveaux espoirs aux patients atteints de PKD. Point sur l'état de la recherche.",
    categorie: "Recherche",
    date: "14 février 2025",
    lecture: "10 min",
    color: "#06B6D4",
  },
  {
    titre: "HTA et reins : un cercle vicieux à briser",
    extrait: "L'hypertension artérielle détruit progressivement les reins, qui à leur tour aggravent l'HTA. Comment sortir de cette spirale délétère ?",
    categorie: "Clinique",
    date: "5 février 2025",
    lecture: "7 min",
    color: "#EF4444",
  },
];

const categories = ["Toutes", "Clinique", "Traitement", "Nutrition", "Prévention", "Recherche"];

export default function BlogPage() {
  const [filtre, setFiltre] = useState("Toutes");
  const filtered = filtre === "Toutes" ? articles : articles.filter((a) => a.categorie === filtre);

  return (
    <>
      <section
        className="relative pt-40 pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.05) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}>
            ACTUALITÉS
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Le blog rénale
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Actualités médicales, conseils pratiques et décryptages sur la santé rénale, rédigés par des spécialistes.
          </p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: filtre === cat ? "rgba(0,201,255,0.1)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${filtre === cat ? "rgba(0,201,255,0.4)" : "rgba(255,255,255,0.06)"}`,
                  color: filtre === cat ? "#00C9FF" : "#64748B",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filtre}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[20px] p-8 group cursor-pointer transition-all duration-300"
                  style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,255,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: article.color, background: `${article.color}15` }}>
                      {article.categorie}
                    </span>
                    <span className="text-xs" style={{ color: "#475569" }}>{article.lecture} de lecture</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4 leading-snug" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>{article.titre}</h3>
                  <p className="text-sm mb-6" style={{ color: "#64748B", lineHeight: 1.7, fontWeight: 300 }}>{article.extrait}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#475569" }}>{article.date}</span>
                    <span className="flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#00C9FF" }}>
                      Lire <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
