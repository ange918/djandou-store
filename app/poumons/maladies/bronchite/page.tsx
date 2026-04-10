import type { Metadata } from "next";
import BronchiteContent from "./BronchiteContent";

export const metadata: Metadata = {
  title: "Bronchite Aiguë et Chronique — Symptômes et Traitement | MediSens",
  description: "Bronchite aiguë (virale) et chronique (tabac/BPCO) : toux, expectorations, traitements et prévention. Antibiotiques rarement utiles.",
};

export default function BronchitePage() {
  return <BronchiteContent />;
}
