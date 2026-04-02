"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HeartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Reins", href: "/reins", active: true },
  { label: "Cœur", href: "/coeur", active: true },
  { label: "Poumons", href: "/poumons", soon: true },
  { label: "Foie", href: "/foie", soon: true },
  { label: "Cerveau", href: "/cerveau", soon: true },
  { label: "Diabète", href: "/diabete", soon: true },
  { label: "Os", href: "/os", soon: true },
  { label: "Peau", href: "/peau", soon: true },
];

export default function NavbarMediSens() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,8,16,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <HeartIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" style={{ color: "#00C9FF" }} />
            <span
              style={{
                fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#F8FAFC",
                letterSpacing: "-0.01em",
              }}
            >
              MediSens
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                    fontWeight: 500,
                    color: isActive ? "#F8FAFC" : "#64748B",
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#F8FAFC"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#64748B"; }}
                >
                  {link.label}
                  {link.soon && (
                    <span
                      className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full align-middle"
                      style={{ color: "#F97316", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                    >
                      BIENTÔT
                    </span>
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, #00C9FF, #0066FF)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" style={{ color: "#F8FAFC" }} />
            ) : (
              <Bars3Icon className="w-6 h-6" style={{ color: "#F8FAFC" }} />
            )}
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
            style={{
              background: "rgba(5,8,16,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-3 px-4 rounded-xl transition-colors duration-200"
                      style={{
                        color: isActive ? "#00C9FF" : "#94A3B8",
                        background: isActive ? "rgba(0,201,255,0.06)" : "transparent",
                        fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      {link.label}
                      {link.soon && (
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded-full"
                          style={{ color: "#F97316", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                        >
                          BIENTÔT
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
