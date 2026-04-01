"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const statsData = [
  { value: "17M", label: "Hypertendus en France", desc: "personnes souffrant d'hypertension artérielle" },
  { value: "80 000", label: "Infarctus par an en France", desc: "hospitalisations pour syndrome coronarien aigu" },
  { value: "190 000", label: "AVC par an en France", desc: "accidents vasculaires cérébraux annuels" },
  { value: "91 875", label: "Patients IRC terminale en France", desc: "en dialyse ou transplantés rénaux" },
  { value: "1,4Md", label: "Hypertendus dans le monde", desc: "soit 1 adulte sur 4 concerné" },
  { value: "64M", label: "Personnes atteintes d'IC dans le monde", desc: "souffrant d'insuffisance cardiaque" },
];

function StatCard({ stat, index }: { stat: typeof statsData[0]; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-10 rounded-2xl flex flex-col gap-3"
      style={{
        background: "#0D1526",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <p
        className="text-4xl sm:text-5xl font-bold leading-none"
        style={{
          fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #00C9FF, #0066FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {stat.value}
      </p>
      <p
        className="text-base font-semibold"
        style={{
          fontFamily: "var(--font-poppins, Poppins, sans-serif)",
          fontWeight: 500,
          color: "#F8FAFC",
        }}
      >
        {stat.label}
      </p>
      <p
        className="text-sm"
        style={{
          fontFamily: "var(--font-poppins, Poppins, sans-serif)",
          fontWeight: 300,
          color: "#64748B",
          lineHeight: 1.7,
        }}
      >
        {stat.desc}
      </p>
    </motion.div>
  );
}

export default function Statistiques() {
  return (
    <section className="py-32 px-6" style={{ background: "#050810" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="CHIFFRES CLÉS"
          title="Des millions de vies concernées"
          subtitle="Ces maladies touchent des centaines de millions de personnes. La sensibilisation est une urgence."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {statsData.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
