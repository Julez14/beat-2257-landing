import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import WorksWhereYouWork from "@/components/sections/works-where-you-work";
import ResearchFeature from "@/components/sections/research-feature";
import QuickEditsFeature from "@/components/sections/quick-edits-feature";
import AllAiSection from "@/components/sections/all-ai-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <TrustedBy />
        <WorksWhereYouWork />
        <ResearchFeature />
        <QuickEditsFeature />
        <AllAiSection />
      </div>
      <Footer />
    </main>
  );
}