import type { Metadata } from "next";
import HTAContent from "./HTAContent";

export const metadata: Metadata = {
  title: "Hypertension Artérielle — Causes, Symptômes et Traitements | MediSens",
  description: "Tout comprendre sur l'hypertension artérielle : définition, causes, symptômes, médicaments et prévention. 17 millions de Français touchés.",
};

export default function HTAPage() {
  return <HTAContent />;
}
