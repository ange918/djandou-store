import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | MediSens Poumons",
    default: "Maladies Pulmonaires — MediSens",
  },
  description:
    "Comprendre les maladies pulmonaires : asthme, bronchite, pneumonie, tuberculose. Informations médicales complètes et accessibles.",
};

export default function PoumonLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
