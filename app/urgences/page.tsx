import type { Metadata } from "next";
import UrgencesContent from "./UrgencesContent";

export const metadata: Metadata = {
  title: "Numéros d'urgence dans le monde | MediSens",
  description: "Trouvez rapidement le numéro d'urgence médicale de n'importe quel pays. SAMU, ambulance, pompiers. Tous les pays du monde.",
};

export default function UrgencesPage() {
  return <UrgencesContent />;
}
