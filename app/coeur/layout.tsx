import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | MediSens Cœur",
    default: "Maladies Cardiovasculaires — MediSens",
  },
  description:
    "Comprendre les maladies cardiovasculaires : hypertension, infarctus, insuffisance cardiaque, AVC. Informations médicales complètes et accessibles.",
};

export default function CoeurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
