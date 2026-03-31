"use client";

import Link from "next/link";
import { BeakerIcon } from "@heroicons/react/24/outline";

const cols = [
  {
    title: "Maladies",
    links: [
      { href: "/maladies/insuffisance-renale-aigue", label: "Insuffisance rénale aiguë" },
      { href: "/maladies/insuffisance-renale-chronique", label: "Insuffisance rénale chronique" },
      { href: "/maladies/calculs-renaux", label: "Calculs rénaux" },
      { href: "/maladies/glomerulonephrite", label: "Glomérulonéphrite" },
      { href: "/maladies/nephropathie-diabetique", label: "Néphropathie diabétique" },
    ],
  },
  {
    title: "Explorer",
    links: [
      { href: "/comprendre", label: "Comprendre les reins" },
      { href: "/symptomes", label: "Symptômes" },
      { href: "/prevention", label: "Prévention" },
      { href: "/alimentation", label: "Alimentation" },
      { href: "/outils", label: "Outils" },
    ],
  },
  {
    title: "À propos",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/a-propos", label: "À propos" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10 px-6"
      style={{
        background: "#080D18",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg mb-6"
              style={{ fontFamily: "var(--font-unbounded, Unbounded, sans-serif)", color: "#F8FAFC" }}
            >
              <BeakerIcon className="w-5 h-5" style={{ color: "#00C9FF" }} />
              Rein<span style={{ color: "#00C9FF" }}>Santé</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#64748B" }}>
              Informations médicales sur la santé rénale à des fins éducatives. Ne remplace pas un avis médical.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs font-medium tracking-widest uppercase mb-6"
                style={{ color: "#00C9FF", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#64748B" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#64748B" }}>
            © {new Date().getFullYear()} ReinSanté — À titre informatif uniquement. Consultez un médecin.
          </p>
          <div className="flex items-center gap-2 text-xs" style={{ color: "#64748B" }}>
            <span>Urgences :</span>
            <span className="font-medium" style={{ color: "#EF4444" }}>SAMU 15</span>
            <span>|</span>
            <span className="font-medium" style={{ color: "#EF4444" }}>112</span>
            <span>|</span>
            <span className="font-medium" style={{ color: "#EF4444" }}>SOS Médecins 3624</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
