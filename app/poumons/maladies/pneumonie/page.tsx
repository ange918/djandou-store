import type { Metadata } from "next";
import PneumonieContent from "./PneumonieContent";

export const metadata: Metadata = {
  title: "Pneumonie — Urgence, Symptômes et Antibiotiques | MediSens",
  description: "La pneumonie : infection des alvéoles pulmonaires. Fièvre élevée, douleur thoracique, antibiotiques. Urgence médicale potentielle.",
};

export default function PneumoniePage() {
  return <PneumonieContent />;
}
