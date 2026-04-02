import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Reins", href: "/reins" },
  { label: "Cœur", href: "/coeur" },
  { label: "Poumons", href: "/poumons" },
  { label: "Foie", href: "/foie" },
  { label: "Cerveau", href: "/cerveau" },
  { label: "Diabète", href: "/diabete" },
  { label: "Os & Articulations", href: "/os" },
  { label: "Peau", href: "/peau" },
  { label: "À propos", href: "/a-propos" },
];

const sources = [
  { label: "HAS", href: "https://www.has-sante.fr" },
  { label: "Ameli", href: "https://www.ameli.fr" },
  { label: "INSERM", href: "https://www.inserm.fr" },
  { label: "OMS", href: "https://www.who.int/fr" },
  { label: "France Rein", href: "https://www.france-rein.org" },
];

export default function FooterMediSens() {
  return (
    <footer
      style={{
        background: "#050810",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <HeartIcon className="w-5 h-5" style={{ color: "#00C9FF" }} />
              <span
                style={{
                  fontFamily: "var(--font-unbounded, Unbounded, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#F8FAFC",
                }}
              >
                MediSens
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "#64748B",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 300,
              }}
            >
              Comprendre pour mieux vivre
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-medium mb-5 tracking-wider uppercase"
              style={{
                color: "#F8FAFC",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 500,
                letterSpacing: "0.1em",
              }}
            >
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200 hover:text-[#00C9FF]"
                    style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h4
              className="text-sm font-medium mb-5 tracking-wider uppercase"
              style={{
                color: "#F8FAFC",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 500,
                letterSpacing: "0.1em",
              }}
            >
              Sources
            </h4>
            <ul className="space-y-3">
              {sources.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200 hover:text-[#00C9FF]"
                    style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-medium mb-5 tracking-wider uppercase"
              style={{
                color: "#F8FAFC",
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontWeight: 500,
                letterSpacing: "0.1em",
              }}
            >
              Contact
            </h4>
            <a
              href="mailto:contact@medisens.fr"
              className="text-sm transition-colors duration-200 hover:text-[#00C9FF]"
              style={{ color: "#64748B", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}
            >
              contact@medisens.fr
            </a>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs text-center md:text-left max-w-lg"
            style={{ color: "#475569", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300, lineHeight: 1.7 }}
          >
            MediSens est un site d&apos;information. Il ne remplace pas un avis médical professionnel. Consultez toujours un médecin pour tout problème de santé.
          </p>
          <p
            className="text-xs flex-shrink-0"
            style={{ color: "#475569", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontWeight: 300 }}
          >
            © 2025 MediSens. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
