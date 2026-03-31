"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BeakerIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { href: "/comprendre", label: "Comprendre" },
  { href: "/maladies", label: "Maladies" },
  { href: "/symptomes", label: "Symptômes" },
  { href: "/prevention", label: "Prévention" },
  { href: "/alimentation", label: "Alimentation" },
  { href: "/outils", label: "Outils" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,15,30,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-unbounded font-bold text-lg"
          style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
        >
          <BeakerIcon className="w-6 h-6" style={{ color: "#00C9FF" }} />
          <span>
            Rein<span style={{ color: "#00C9FF" }}>Santé</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 500,
                color: "#94A3B8",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #00C9FF, #0066FF)",
              color: "#fff",
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              fontWeight: 500,
            }}
          >
            Contact
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" style={{ color: "#F8FAFC" }} />
          ) : (
            <Bars3Icon className="w-6 h-6" style={{ color: "#F8FAFC" }} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 py-6 px-6 flex flex-col gap-4"
            style={{
              background: "rgba(10,15,30,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base py-2"
                style={{
                  color: "#94A3B8",
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-5 py-3 rounded-full text-sm font-medium text-center mt-2"
              style={{
                background: "linear-gradient(135deg, #00C9FF, #0066FF)",
                color: "#fff",
              }}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
