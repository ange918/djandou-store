import type { Metadata } from "next";
import PoumonHubContent from "./PoumonHubContent";

export const metadata: Metadata = {
  title: "Maladies des Poumons — Asthme, Bronchite, Pneumonie, Tuberculose | MediSens",
  description: "Tout sur les maladies pulmonaires : asthme, bronchite, pneumonie, tuberculose. Symptômes, traitements et prévention.",
};

export default function PoulmonPage() {
  return <PoumonHubContent />;
}
