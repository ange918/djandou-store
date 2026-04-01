"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const urgences = [
  { titre: "SAMU", num: "15", desc: "Urgence vitale", color: "#EF4444" },
  { titre: "Médecin de garde", num: "116 117", desc: "Urgence non vitale", color: "#F97316" },
  { titre: "France Rein", num: "0800 066 066", desc: "Association patients rénaux", color: "#00C9FF" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,201,255,0.05) 0%, #0A0F1E 60%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ color: "#00C9FF", background: "rgba(0,201,255,0.08)", border: "1px solid rgba(0,201,255,0.2)" }}>
            CONTACT
          </span>
          <h1 style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, color: "#F8FAFC" }}>
            Contactez-nous
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ color: "#64748B", fontWeight: 300, lineHeight: 1.8 }}>
            Une question sur les informations du site ? Envoyez-nous un message. Nous ne fournissons pas de conseils médicaux personnalisés.
          </p>
        </div>
      </section>

      {/* Numéros d'urgence */}
      <section className="py-12 px-6" style={{ background: "#080D18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ExclamationTriangleIcon className="w-6 h-6" style={{ color: "#EF4444" }} />
            <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#EF4444" }}>
              Numéros d'urgence
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {urgences.map((u, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-xl" style={{ background: `${u.color}08`, border: `1px solid ${u.color}25` }}>
                <PhoneIcon className="w-6 h-6 flex-shrink-0" style={{ color: u.color }} />
                <div>
                  <p className="text-lg font-bold" style={{ color: u.color, fontFamily: "var(--font-unbounded, Unbounded, sans-serif)" }}>{u.num}</p>
                  <p className="text-sm font-medium" style={{ color: "#F8FAFC" }}>{u.titre}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 md:py-24 px-6" style={{ background: "#0A0F1E" }}>
        <div className="max-w-2xl mx-auto">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-[20px]"
              style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <div className="text-5xl mb-6">✅</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#10B981" }}>
                Message envoyé !
              </h3>
              <p style={{ color: "#64748B", lineHeight: 1.7 }}>
                Nous avons bien reçu votre message. Nous vous répondrons dans les plus brefs délais.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.08)", color: "#F8FAFC" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@exemple.fr"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.08)", color: "#F8FAFC" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Sujet</label>
                <select
                  name="sujet"
                  value={form.sujet}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.08)", color: form.sujet ? "#F8FAFC" : "#64748B" }}
                >
                  <option value="">Choisir un sujet...</option>
                  <option value="information">Question sur une maladie</option>
                  <option value="contenu">Erreur ou inexactitude</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.08)", color: "#F8FAFC" }}
                />
              </div>

              <div
                className="p-4 rounded-xl flex items-start gap-3"
                style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
              >
                <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                <p className="text-xs" style={{ color: "#94A3B8", lineHeight: 1.6 }}>
                  ReinSanté ne fournit pas de conseils médicaux personnalisés. En cas d'urgence, appelez le 15 (SAMU) ou le 116 117 (médecin de garde).
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-medium text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #00C9FF, #0066FF)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
              >
                Envoyer le message
              </button>
            </form>
          )}

          <div className="mt-12 flex items-center gap-3 justify-center" style={{ color: "#64748B" }}>
            <EnvelopeIcon className="w-5 h-5" />
            <span className="text-sm">contact@reinsante.fr</span>
          </div>
        </div>
      </section>
    </>
  );
}
