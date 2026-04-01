"use client";

import { usePathname } from "next/navigation";
import NavbarMediSens from "@/components/layout/NavbarMediSens";
import CoeurNav from "@/components/coeur/CoeurNav";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/coeur")) {
    return <CoeurNav />;
  }

  return <NavbarMediSens />;
}
