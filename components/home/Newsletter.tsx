"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
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
    <section className="py-32 px-6 relative overflow-hidden" style={{ background: "#050810" }}>
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 700, height: 700, bottom: "-20%", right: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,102,255,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block mb-8 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
          style={{
            color: "#00C9FF",
            background: "rgba(0,201,255,0.08)",
            border: "1px solid rgba(0,201,255,0.2)",
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
          }}
        >
          RESTEZ INFORMÉ
        </motion.span>

        <motion.h2
          variants={fadeInUp}
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
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mb-12 max-w-xl mx-auto"
          style={{
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#64748B",
          }}
        >
          Chaque mois, un nouvel organe. Inscrivez-vous pour être notifié dès la mise en ligne.
        </motion.p>

        <motion.div variants={fadeInUp}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
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
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-4 rounded-full text-sm font-medium text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  fontWeight: 500,
                }}
              >
                M&apos;inscrire
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-xs"
          style={{
            color: "#475569",
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            fontWeight: 300,
          }}
        >
          Aucun spam. Désabonnement libre.
        </motion.p>
      </motion.div>
    </section>
  );
}
