"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/ui/SectionHeader";

interface CheckItem {
  label: string;
}

interface MaladiePreventionProps {
  items: CheckItem[];
  populations: string[];
  maladie: string;
}

export default function MaladiePrevention({ items, populations, maladie }: MaladiePreventionProps) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const score = checked.filter(Boolean).length;

  return (
    <section className="py-16 md:py-32 px-6" style={{ background: "#080D18" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="PRÉVENTION"
          title={`Prévenir ${maladie}`}
          subtitle="Évaluez vos habitudes de prévention et identifiez les points à améliorer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3
                className="text-lg sm:text-xl font-bold"
                style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
              >
                Ma checklist prévention
              </h3>
              <span className="text-sm font-medium" style={{ color: "#00C9FF" }}>
                {score}/{items.length}
              </span>
            </div>

            <div
              className="w-full h-2 rounded-full mb-8"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <motion.div
                className="h-2 rounded-full"
                style={{ background: "linear-gradient(90deg, #00C9FF, #0066FF)" }}
                animate={{ width: `${(score / items.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: checked[i] ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${checked[i] ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.06)"}`,
                  }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      borderColor: checked[i] ? "#10B981" : "rgba(255,255,255,0.2)",
                      background: checked[i] ? "#10B981" : "transparent",
                    }}
                  >
                    {checked[i] && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span
                    style={{
                      color: checked[i] ? "#10B981" : "#94A3B8",
                      fontWeight: 300,
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div
            className="rounded-[20px] p-5 sm:p-10"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <ShieldExclamationIcon className="w-7 h-7" style={{ color: "#EF4444" }} />
              <h3
                className="text-lg sm:text-xl font-bold"
                style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
              >
                Populations à risque
              </h3>
            </div>
            <ul className="space-y-4">
              {populations.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#EF4444" }} />
                  <span style={{ color: "#94A3B8", fontWeight: 300, lineHeight: 1.7 }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
