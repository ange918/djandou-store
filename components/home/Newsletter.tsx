"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="py-32 px-6" style={{ background: "#050810" }}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <span
          className="inline-block mb-8 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
          style={{
            color: "#00C9FF",
            background: "rgba(0,201,255,0.08)",
            border: "1px solid rgba(0,201,255,0.2)",
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
          }}
        >
          RESTEZ INFORMÉ
        </span>

        <h2
          className="mb-6"
          style={{
            fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            lineHeight: 1.2,
            color: "#F8FAFC",
          }}
        >
          Soyez alerté à chaque nouveau volet
        </h2>

        <p
          className="mb-12 max-w-xl mx-auto"
          style={{
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#64748B",
          }}
        >
          Chaque mois, un nouvel organe. Inscrivez-vous pour être notifié dès la mise en ligne.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#10B981" }}
          >
            <span
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 500,
              }}
            >
              ✓ Merci ! Vous serez notifié.
            </span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              required
              className="flex-1 px-5 py-4 rounded-full text-sm outline-none transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#F8FAFC",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 300,
              }}
              onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(0,201,255,0.5)"; }}
              onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
            <button
              type="submit"
              className="px-7 py-4 rounded-full text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 500,
              }}
            >
              M&apos;inscrire
            </button>
          </form>
        )}

        <p
          className="mt-6 text-xs"
          style={{
            color: "#475569",
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            fontWeight: 300,
          }}
        >
          Aucun spam. Désabonnement libre.
        </p>
      </motion.div>
    </section>
  );
}
