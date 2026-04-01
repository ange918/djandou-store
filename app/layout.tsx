import type { Metadata } from "next";
import { Unbounded, Poppins } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import FooterMediSens from "@/components/layout/FooterMediSens";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediSens — La santé expliquée simplement",
  description:
    "Plateforme de sensibilisation médicale gratuite en français. Comprendre les maladies, reconnaître les symptômes, agir pour prévenir. Pour les patients, les familles et les professionnels de santé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${unbounded.variable} ${poppins.variable}`}>
      <body className="bg-[#050810] text-[#F8FAFC] font-poppins antialiased">
        <NavbarWrapper />
        <main className="pt-20">{children}</main>
        <FooterMediSens />
      </body>
    </html>
  );
}
