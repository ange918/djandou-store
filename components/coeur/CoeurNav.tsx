"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HeartIcon, Bars3Icon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Vue d'ensemble", href: "/coeur" },
  { label: "HTA", href: "/coeur/maladies/hypertension" },
  { label: "Infarctus", href: "/coeur/maladies/infarctus" },
  { label: "Insuffisance cardiaque", href: "/coeur/maladies/insuffisance-cardiaque" },
  { label: "AVC", href: "/coeur/maladies/avc" },
];

export default function CoeurNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,8,16,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(239,68,68,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/coeur" className="flex items-center gap-2.5 group flex-shrink-0">
            <HeartIcon
              className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
              style={{ color: "#EF4444" }}
            />
            <span
              style={{
                fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#F8FAFC",
              }}
            >
              MediSens{" "}
              <span style={{ color: "#EF4444" }}>/</span>{" "}
              <span style={{ color: "#EF4444" }}>Cœur</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm transition-colors duration-200 whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                    fontWeight: 500,
                    color: isActive ? "#F8FAFC" : "#64748B",
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#F8FAFC"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#64748B"; }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="coeur-nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, #EF4444, #B91C1C)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Back to MediSens */}
          <Link
            href="/"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-white/5 flex-shrink-0"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94A3B8",
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              fontWeight: 400,
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            MediSens
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen
              ? <XMarkIcon className="w-6 h-6" style={{ color: "#F8FAFC" }} />
              : <Bars3Icon className="w-6 h-6" style={{ color: "#F8FAFC" }} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
            style={{ background: "rgba(5,8,16,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(239,68,68,0.1)" }}
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      href={link.href}
                      className="flex items-center py-3 px-4 rounded-xl transition-colors duration-200"
                      style={{
                        color: isActive ? "#EF4444" : "#94A3B8",
                        background: isActive ? "rgba(239,68,68,0.06)" : "transparent",
                        fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Link href="/" className="flex items-center gap-2 py-3 px-4 rounded-xl" style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 400, fontSize: "0.9rem" }}>
                  <ArrowLeftIcon className="w-4 h-4" />
                  Retour à MediSens
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
