import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import WorksWhereYouWork from "@/components/sections/works-where-you-work";
import ResearchFeature from "@/components/sections/research-feature";
import QuickEditsFeature from "@/components/sections/quick-edits-feature";
import AllAiSection from "@/components/sections/all-ai-section";
import Footer from "@/components/sections/footer";
import Faq from "@/components/sections/faq";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <WorksWhereYouWork />
        <section className="container">
          <div className="bg-secondary rounded-xl lg:rounded-2xl my-6 lg:my-12 py-8 lg:py-16 px-8 sm:px-12 md:px-16 lg:px-24">
            <ResearchFeature />
            <QuickEditsFeature />
          </div>
        </section>
        <Faq />
        <AllAiSection />
      </div>
      <Footer />
    </main>
  );
}
