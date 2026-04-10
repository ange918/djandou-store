"use client";

import { usePathname } from "next/navigation";
import NavbarMediSens from "@/components/layout/NavbarMediSens";
import CoeurNav from "@/components/coeur/CoeurNav";
import PoumonNav from "@/components/poumons/PoumonNav";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/coeur")) {
    return <CoeurNav />;
  }

  if (pathname.startsWith("/poumons")) {
    return <PoumonNav />;
  }

  return <NavbarMediSens />;
}
