import type { Metadata } from "next";
import AsthmeContent from "./AsthmeContent";

export const metadata: Metadata = {
  title: "Asthme — Crises, Traitement et Contrôle | MediSens",
  description: "Comprendre l'asthme : inflammation bronchique, déclencheurs, bronchodilatateurs (Ventoline), corticoïdes inhalés et contrôle au quotidien.",
};

export default function AsthmePage() {
  return <AsthmeContent />;
}
