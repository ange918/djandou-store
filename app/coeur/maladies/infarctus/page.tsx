import type { Metadata } from "next";
import InfarctusContent from "./InfarctusContent";

export const metadata: Metadata = {
  title: "Infarctus du Myocarde — Urgence, Symptômes et Prise en Charge | MediSens",
  description: "Comprendre l'infarctus du myocarde : symptômes d'alerte, conduite à tenir, traitements et prévention. 80 000 cas par an en France.",
};

export default function InfarctusPage() {
  return <InfarctusContent />;
}
