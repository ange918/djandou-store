"use client";

import { motion, type Variants } from "framer-motion";
import { EyeIcon, ShieldCheckIcon, HeartIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cards = [
  {
    icon: EyeIcon,
    title: "Comprendre",
    text: "Des explications médicales claires, vulgarisées, accessibles à tous. Sans jargon inutile.",
    direction: -1,
  },
  {
    icon: ShieldCheckIcon,
    title: "Prévenir",
    text: "La prévention sauve des vies. Chaque section offre des conseils concrets adaptés à votre profil.",
    direction: 0,
  },
  {
    icon: HeartIcon,
    title: "Agir",
    text: "Reconnaître les symptômes à temps peut faire la différence. MediSens vous guide vers les bons gestes.",
    direction: 1,
  },
];

export default function Pourquoi() {
  return (
    <section className="py-32 px-6" style={{ background: "#080D18" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="NOTRE MISSION"
          title="Pourquoi MediSens existe"
          subtitle="Des millions de personnes ignorent les signaux d'alerte de leur corps. MediSens change ça."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            const cardVariant: Variants = {
              hidden: {
                opacity: 0,
                y: card.direction === 0 ? 60 : 40,
                x: card.direction !== 0 ? card.direction * 40 : 0,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.7, ease: "easeOut" },
              },
            };

            return (
              <motion.div
                key={card.title}
                variants={cardVariant}
                whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.25 } }}
                className="p-10 rounded-2xl flex flex-col relative overflow-hidden cursor-default"
                style={{
                  background: "#0D1526",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "radial-gradient(circle at 10% 10%, rgba(0,201,255,0.06) 0%, transparent 65%)" }}
                />
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0"
                  style={{ background: "rgba(0,201,255,0.08)" }}
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                >
                  <Icon className="w-8 h-8" style={{ color: "#00C9FF" }} />
                </motion.div>
                <h3
                  className="text-xl font-bold mb-5"
                  style={{
                    fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                    fontWeight: 700,
                    color: "#F8FAFC",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="max-w-xs"
                  style={{
                    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "#64748B",
                  }}
                >
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
