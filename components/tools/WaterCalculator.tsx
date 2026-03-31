"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WaterCalculator() {
  const [poids, setPoids] = useState<number>(70);
  const [activite, setActivite] = useState<"faible" | "moderee" | "intense">("moderee");
  const [chaleur, setChaleur] = useState(false);

  const base = poids * 35;
  const activityBonus = activite === "moderee" ? 300 : activite === "intense" ? 600 : 0;
  const chaleurBonus = chaleur ? 200 : 0;
  const total = Math.round((base + activityBonus + chaleurBonus) / 100) * 100;
  const glasses = Math.round(total / 250);

  return (
    <div
      className="rounded-[24px] p-10"
      style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <h3
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
      >
        Calculateur d'hydratation
      </h3>
      <p className="mb-10 text-sm" style={{ color: "#64748B" }}>
        Estimez votre besoin quotidien en eau selon votre profil.
      </p>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium mb-4" style={{ color: "#94A3B8" }}>
            Poids corporel : <span style={{ color: "#00C9FF" }}>{poids} kg</span>
          </label>
          <input
            type="range"
            min={30}
            max={150}
            value={poids}
            onChange={(e) => setPoids(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: "#00C9FF", background: "rgba(255,255,255,0.06)" }}
          />
          <div className="flex justify-between text-xs mt-2" style={{ color: "#64748B" }}>
            <span>30 kg</span><span>150 kg</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-4" style={{ color: "#94A3B8" }}>
            Niveau d'activité physique
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(["faible", "moderee", "intense"] as const).map((level) => (
              <button
                key={level}
                onClick={() => setActivite(level)}
                className="py-3 rounded-xl text-sm font-medium transition-all duration-200 capitalize"
                style={{
                  background: activite === level ? "rgba(0,201,255,0.12)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activite === level ? "rgba(0,201,255,0.4)" : "rgba(255,255,255,0.06)"}`,
                  color: activite === level ? "#00C9FF" : "#64748B",
                }}
              >
                {level === "faible" ? "Faible" : level === "moderee" ? "Modérée" : "Intense"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => setChaleur(!chaleur)}
            className="flex items-center gap-3 w-full p-4 rounded-xl transition-all duration-200"
            style={{
              background: chaleur ? "rgba(0,201,255,0.08)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${chaleur ? "rgba(0,201,255,0.3)" : "rgba(255,255,255,0.06)"}`,
            }}
          >
            <div
              className="w-5 h-5 rounded border-2 flex items-center justify-center"
              style={{ borderColor: chaleur ? "#00C9FF" : "rgba(255,255,255,0.2)", background: chaleur ? "#00C9FF" : "transparent" }}
            >
              {chaleur && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
            </div>
            <span className="text-sm" style={{ color: chaleur ? "#00C9FF" : "#94A3B8" }}>
              Environnement chaud ou forte chaleur (+200 mL)
            </span>
          </button>
        </div>
      </div>

      <motion.div
        className="mt-10 rounded-2xl p-8 text-center"
        style={{ background: "rgba(0,201,255,0.06)", border: "1px solid rgba(0,201,255,0.2)" }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm mb-3" style={{ color: "#64748B" }}>Votre besoin quotidien estimé</p>
        <p
          className="text-5xl font-bold mb-2"
          style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#00C9FF" }}
        >
          {(total / 1000).toFixed(1)} L
        </p>
        <p className="text-sm" style={{ color: "#64748B" }}>
          soit environ <span style={{ color: "#00C9FF" }}>{glasses} verres</span> de 250 mL par jour
        </p>
      </motion.div>

      <p className="mt-6 text-xs text-center" style={{ color: "#64748B" }}>
        Estimation indicative basée sur la formule ≈ 35 mL/kg. Consultez un médecin pour un bilan personnalisé.
      </p>
    </div>
  );
}
