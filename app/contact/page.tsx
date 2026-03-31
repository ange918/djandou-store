"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    setError("");
  };

  const handleSubmit = () => {
    if (!form.nom || !form.email || !form.message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Adresse email invalide.");
      return;
    }
    setSent(true);
  };

  return (
    <>
      <section
        className="relative pt-40 pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.05) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}>
            CONTACT
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Nous écrire
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Pour toute question sur nos contenus, signalement d'erreur médicale ou collaboration. Réponse sous 48h en jours ouvrés.
          </p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {!sent ? (
              <div
                className="rounded-[24px] p-10"
                style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h2 className="text-2xl font-bold mb-10" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>
                  Envoyer un message
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: "#94A3B8" }}>Nom complet *</label>
                      <input
                        value={form.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        placeholder="Jean Martin"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F8FAFC" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: "#94A3B8" }}>Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="jean.martin@email.fr"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F8FAFC" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: "#94A3B8" }}>Sujet</label>
                    <select
                      value={form.sujet}
                      onChange={(e) => handleChange("sujet", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: form.sujet ? "#F8FAFC" : "#64748B" }}
                    >
                      <option value="">Choisir un sujet</option>
                      <option>Question médicale générale</option>
                      <option>Signalement d'erreur médicale</option>
                      <option>Collaboration / Partenariat</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: "#94A3B8" }}>Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Votre message..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F8FAFC" }}
                    />
                  </div>

                  {error && (
                    <p className="text-sm" style={{ color: "#EF4444" }}>{error}</p>
                  )}

                  <div
                    className="p-4 rounded-xl text-xs"
                    style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", color: "#94A3B8" }}
                  >
                    ⚠️ <strong style={{ color: "#EF4444" }}>Urgence médicale</strong> : Ne nous contactez pas en cas d'urgence. Appelez le <strong>15 (SAMU)</strong>, le <strong>112</strong> ou le <strong>3624 (SOS Médecins)</strong>.
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-full font-medium text-white transition-all duration-200 hover:scale-[1.01]"
                    style={{ background: "linear-gradient(135deg, #00C9FF, #0066FF)", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 500 }}
                  >
                    Envoyer le message
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[24px] p-16 text-center"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.25)" }}
              >
                <p className="text-5xl mb-8">✓</p>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#10B981" }}>Message envoyé !</h3>
                <p style={{ color: "#64748B", fontWeight: 300 }}>Nous vous répondrons dans les 48 heures ouvrées.</p>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <div
              className="rounded-[20px] p-8"
              style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h4 className="font-bold mb-6" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>Urgences médicales</h4>
              <div className="space-y-4">
                {[
                  { n: "15", label: "SAMU", icon: "🚑" },
                  { n: "112", label: "Numéro européen", icon: "🆘" },
                  { n: "3624", label: "SOS Médecins", icon: "👨‍⚕️" },
                  { n: "3114", label: "Numéro national prévention suicide", icon: "💙" },
                ].map((u) => (
                  <div key={u.n} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.1)" }}>
                    <span className="text-xl">{u.icon}</span>
                    <div>
                      <p className="text-lg font-bold" style={{ color: "#EF4444", fontFamily: "var(--font-unbounded, Unbounded, sans-serif)" }}>{u.n}</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>{u.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] p-8" style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}>Associations patients</h4>
              <ul className="space-y-3 text-sm" style={{ color: "#64748B" }}>
                <li>• France Rein — francerein.org</li>
                <li>• AIRG France — airg-france.org</li>
                <li>• Renaloo — renaloo.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
