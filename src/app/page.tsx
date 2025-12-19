import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { CommunitySection } from "@/components/home/CommunitySection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <IntroSection />
      <ProjectShowcase />
      <CommunitySection />
    </div>
  );
}
