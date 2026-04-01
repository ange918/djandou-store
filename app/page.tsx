import Hero from "@/components/home/Hero";
import Pourquoi from "@/components/home/Pourquoi";
import Statistiques from "@/components/home/Statistiques";
import OrganesGrid from "@/components/home/OrganesGrid";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Pourquoi />
      <Statistiques />
      <OrganesGrid />
      <Newsletter />
    </>
  );
}
