import AboutMeSection from "@/sections/AboutMeSection/AboutMeSection";
import HabilitySection from "@/sections/HabilitySection/HabilitySection";
import HomeSection from "@/sections/HomeSection/HomeSection";
import ProjectsSection from "@/sections/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProjectsSection />
      <HabilitySection />
      <AboutMeSection />
    </main>
  );
}
