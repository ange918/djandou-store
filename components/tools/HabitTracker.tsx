"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const habits = [
  { id: "eau", label: "Boire 2L d'eau", icon: "💧" },
  { id: "sel", label: "Limiter le sel", icon: "🧂" },
  { id: "sport", label: "30 min activité physique", icon: "🏃" },
  { id: "medicament", label: "Prendre mes médicaments", icon: "💊" },
];

const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export default function HabitTracker() {
  const [tracker, setTracker] = useState<Record<string, boolean[]>>(
    Object.fromEntries(habits.map((h) => [h.id, Array(7).fill(false)]))
  );

  const toggle = (habit: string, day: number) => {
    setTracker((prev) => ({
      ...prev,
      [habit]: prev[habit].map((v, i) => (i === day ? !v : v)),
    }));
  };

  const totalChecks = Object.values(tracker).flat().filter(Boolean).length;
  const maxChecks = habits.length * 7;
  const pct = Math.round((totalChecks / maxChecks) * 100);

  return (
    <div
      className="rounded-[24px] p-10"
      style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <h3
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
      >
        Suivi des habitudes
      </h3>
      <p className="mb-4 text-sm" style={{ color: "#64748B" }}>
        Cochez chaque habitude accomplie au fil de la semaine.
      </p>

      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
          <motion.div
            className="h-2 rounded-full"
            style={{ background: "linear-gradient(90deg, #00C9FF, #0066FF)" }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="text-sm font-medium" style={{ color: "#00C9FF" }}>{pct}%</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr>
              <th className="text-left pb-4 text-xs" style={{ color: "#64748B", fontWeight: 400 }}>Habitude</th>
              {days.map((d) => (
                <th key={d} className="pb-4 text-xs text-center" style={{ color: "#64748B", fontWeight: 400, width: "40px" }}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <tr key={habit.id}>
                <td className="py-3 pr-6">
                  <div className="flex items-center gap-2">
                    <span>{habit.icon}</span>
                    <span className="text-sm" style={{ color: "#94A3B8", fontWeight: 300 }}>{habit.label}</span>
                  </div>
                </td>
                {tracker[habit.id].map((checked, day) => (
                  <td key={day} className="py-3 text-center">
                    <button
                      onClick={() => toggle(habit.id, day)}
                      className="w-7 h-7 rounded-lg mx-auto flex items-center justify-center transition-all duration-200"
                      style={{
                        background: checked ? "rgba(0,201,255,0.15)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${checked ? "rgba(0,201,255,0.4)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {checked && (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#00C9FF" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-center" style={{ color: "#64748B" }}>
        {totalChecks} habitude{totalChecks > 1 ? "s" : ""} accomplie{totalChecks > 1 ? "s" : ""} sur {maxChecks} cette semaine
      </p>
    </div>
  );
}
