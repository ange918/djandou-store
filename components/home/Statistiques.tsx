"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const statsData = [
  { value: "1,28 Md", label: "Hypertendus dans le monde", desc: "soit 1 adulte sur 4 concerné par l'hypertension artérielle" },
  { value: "17 M", label: "Décès cardiovasculaires / an", desc: "première cause de mortalité mondiale selon l'OMS" },
  { value: "15 M", label: "AVC par an dans le monde", desc: "accidents vasculaires cérébraux, dont 5 millions mortels" },
  { value: "850 M", label: "Atteints de maladie rénale", desc: "personnes souffrant de maladie rénale chronique dans le monde" },
  { value: "64 M", label: "Insuffisances cardiaques mondiales", desc: "personnes vivant avec une insuffisance cardiaque chronique" },
  { value: "540 M", label: "Diabétiques dans le monde", desc: "dont plus de 90 % atteints de diabète de type 2" },
];

function StatCard({ stat, index }: { stat: typeof statsData[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="p-10 rounded-2xl flex flex-col gap-3 relative overflow-hidden"
      style={{
        background: "#0D1526",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{ background: "radial-gradient(circle at 20% 20%, rgba(0,201,255,0.04) 0%, transparent 70%)" }}
      />
      <motion.p
        className="text-4xl sm:text-5xl font-bold leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
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
      </motion.p>
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
          badge="CHIFFRES CLÉS MONDIAUX"
          title="Des millions de vies concernées"
          subtitle="Ces maladies touchent des centaines de millions de personnes à travers le monde. La sensibilisation est une urgence globale."
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
