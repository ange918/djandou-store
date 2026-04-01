import type { Metadata } from "next";
import AVCContent from "./AVCContent";

export const metadata: Metadata = {
  title: "AVC — Reconnaître, Agir, Prévenir | MediSens",
  description: "Tout sur l'AVC : test FAST, symptômes d'urgence, thrombolyse, prévention. 190 000 AVC par an en France. Chaque minute compte.",
};

export default function AVCPage() {
  return <AVCContent />;
}
