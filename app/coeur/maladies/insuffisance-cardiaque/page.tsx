import type { Metadata } from "next";
import ICContent from "./ICContent";

export const metadata: Metadata = {
  title: "Insuffisance Cardiaque — Stades, Symptômes et Traitements | MediSens",
  description: "Comprendre l'insuffisance cardiaque : stades NYHA, causes, traitements (SGLT2, IEC, bêtabloquants) et suivi. 1,38 million de Français touchés.",
};

export default function ICPage() {
  return <ICContent />;
}
