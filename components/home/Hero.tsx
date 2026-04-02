"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const organs = [
  { id: "brain",   label: "Cerveau",  cx: 260, cy: 80,  r: 38,  href: "/cerveau" },
  { id: "heart",   label: "Cœur",     cx: 260, cy: 185, r: 30,  href: "/coeur" },
  { id: "lungs",   label: "Poumons",  cx: 200, cy: 210, r: 22,  href: "/poumons" },
  { id: "kidneys", label: "Reins",    cx: 260, cy: 310, r: 26,  href: "/reins" },
  { id: "liver",   label: "Foie",     cx: 310, cy: 260, r: 24,  href: "/foie" },
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #001833 0%, #050810 65%)",
      }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 600, height: 600, top: "10%", left: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,255,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-40 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text column */}
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeInUp}
            className="hero-gsap inline-block mb-8 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
            style={{
              color: "#00C9FF",
              background: "rgba(0,201,255,0.08)",
              border: "1px solid rgba(0,201,255,0.2)",
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            }}
          >
            PLATEFORME MÉDICALE
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="hero-gsap"
            style={{
              fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              color: "#F8FAFC",
            }}
          >
            La santé expliquée.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Simplement.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="hero-gsap mt-8 max-w-lg"
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#64748B",
            }}
          >
            MediSens est une plateforme de sensibilisation médicale gratuite. Comprendre les maladies, reconnaître les symptômes, agir pour prévenir. Pour les patients, les familles et les professionnels de santé en France et en Afrique francophone.
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-gsap flex flex-wrap gap-4 mt-12">
            <motion.a
              href="#organes"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm text-white font-medium transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              }}
            >
              Explorer les organes
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#F8FAFC",
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                }}
              >
                Demander conseil
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Illustration column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm">
            <svg viewBox="0 0 520 560" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Body silhouette */}
              <path
                d="M260 20 C230 20 210 40 210 65 C210 85 220 100 235 108 C225 115 215 125 210 140 L195 200 L185 340 L190 480 L210 480 L220 380 L260 360 L300 380 L310 480 L330 480 L335 340 L325 200 L310 140 C305 125 295 115 285 108 C300 100 310 85 310 65 C310 40 290 20 260 20Z"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
                fill="rgba(255,255,255,0.02)"
              />

              {organs.map((organ, i) => (
                <motion.g
                  key={organ.id}
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: `${organ.cx}px ${organ.cy}px`, cursor: "pointer" }}
                  onClick={() => { window.location.href = organ.href; }}
                >
                  <circle
                    cx={organ.cx}
                    cy={organ.cy}
                    r={organ.r}
                    fill="rgba(0,201,255,0.08)"
                    stroke="#00C9FF"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={organ.cx}
                    cy={organ.cy}
                    r={organ.r * 0.5}
                    fill="rgba(0,201,255,0.15)"
                  />
                </motion.g>
              ))}

              {/* Floating labels */}
              {organs.map((organ, i) => (
                <motion.g
                  key={`label-${organ.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <rect
                    x={organ.cx + organ.r + 8}
                    y={organ.cy - 11}
                    width={organ.label.length * 7.5 + 16}
                    height={22}
                    rx="11"
                    fill="rgba(0,201,255,0.1)"
                    stroke="rgba(0,201,255,0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x={organ.cx + organ.r + 16 + (organ.label.length * 7.5) / 2}
                    y={organ.cy + 4.5}
                    textAnchor="middle"
                    fill="#00C9FF"
                    fontSize="10"
                    fontFamily="Poppins, sans-serif"
                  >
                    {organ.label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
