import type { Metadata } from "next";
import TuberculoseContent from "./TuberculoseContent";

export const metadata: Metadata = {
  title: "Tuberculose — Contagion, Symptômes et Traitement | MediSens",
  description: "La tuberculose : bacille de Koch, transmission aérienne, toux persistante, traitement 6 mois minimum. 10M de nouveaux cas par an dans le monde.",
};

export default function TuberculosePage() {
  return <TuberculoseContent />;
}
