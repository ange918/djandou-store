"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  BeakerIcon,
  HeartIcon,
  CloudIcon,
  CircleStackIcon,
  CpuChipIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const organes = [
  {
    icon: BeakerIcon,
    title: "Reins",
    text: "IRC, IRA, calculs, glomérulonéphrites, infections urinaires et plus.",
    available: true,
    href: "/reins",
  },
  {
    icon: HeartIcon,
    title: "Cœur",
    text: "HTA, infarctus, insuffisance cardiaque, AVC et maladies cardiovasculaires.",
    available: true,
    href: "/coeur",
  },
  {
    icon: CloudIcon,
    title: "Poumons",
    text: "Asthme, BPCO, pneumonie, cancer du poumon, insuffisance respiratoire.",
    available: false,
    href: "/poumons",
  },
  {
    icon: CircleStackIcon,
    title: "Foie",
    text: "Hépatites, cirrhose, stéatose, cancer du foie, insuffisance hépatique.",
    available: false,
    href: "/foie",
  },
  {
    icon: CpuChipIcon,
    title: "Cerveau",
    text: "Alzheimer, Parkinson, épilepsie, migraine, sclérose en plaques.",
    available: false,
    href: "/cerveau",
  },
  {
    icon: ChartBarIcon,
    title: "Diabète",
    text: "Diabète type 1 et 2, complications, glycémie, insuline, prévention.",
    available: false,
    href: "/diabete",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Os & Articulations",
    text: "Arthrose, ostéoporose, polyarthrite, fractures, rhumatismes.",
    available: false,
    href: "/os",
  },
  {
    icon: SparklesIcon,
    title: "Peau",
    text: "Eczéma, psoriasis, mélanome, acné, dermatoses chroniques.",
    available: false,
    href: "/peau",
  },
];

export default function OrganesGrid() {
  return (
    <section id="organes" className="py-32 px-6" style={{ background: "#080D18" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="NOS VOLETS"
          title="Choisissez un organe"
          subtitle="Chaque volet est un site complet dédié aux maladies d'un organe ou système."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {organes.map((organe) => {
            const Icon = organe.icon;
            const CardWrapper = organe.available ? Link : "div";
            return (
              <motion.div
                key={organe.title}
                variants={cardVariants}
                whileHover={organe.available ? { scale: 1.04, y: -6 } : { scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <CardWrapper
                  href={organe.available ? organe.href : undefined as never}
                  className={`group block p-10 rounded-2xl h-full transition-all duration-300 relative overflow-hidden ${organe.available ? "hover:border-[#00C9FF]/40 cursor-pointer" : "cursor-default"}`}
                  style={{
                    background: "#0D1526",
                    border: `1px solid ${organe.available ? "rgba(0,201,255,0.15)" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  {organe.available && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ background: "radial-gradient(circle at 20% 20%, rgba(0,201,255,0.07) 0%, transparent 70%)" }}
                    />
                  )}
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(0,201,255,0.08)" }}
                        whileHover={{ rotate: organe.available ? [0, -10, 10, 0] : 0, transition: { duration: 0.4 } }}
                      >
                        <Icon className="w-7 h-7" style={{ color: "#00C9FF" }} />
                      </motion.div>
                      {organe.available ? (
                        <span
                          className="text-[10px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 mt-1"
                          style={{ color: "#10B981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}
                        >
                          DISPONIBLE
                        </span>
                      ) : (
                        <span
                          className="text-[10px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 mt-1"
                          style={{ color: "#F97316", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}
                        >
                          BIENTÔT
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-lg font-bold"
                      style={{
                        fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                        fontWeight: 700,
                        color: "#F8FAFC",
                      }}
                    >
                      {organe.title}
                    </h3>

                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: "#64748B",
                      }}
                    >
                      {organe.text}
                    </p>

                    {organe.available ? (
                      <div
                        className="flex items-center gap-2 text-sm font-medium mt-2 group-hover:gap-3 transition-all duration-200"
                        style={{ color: "#00C9FF", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                      >
                        Explorer <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    ) : (
                      <p
                        className="text-sm mt-2"
                        style={{ color: "#475569", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}
                      >
                        En préparation
                      </p>
                    )}
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
