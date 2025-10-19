import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PricingSection from "@/components/sections/pricing";
import Faq from "@/components/sections/faq";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative flex flex-col pb-16">
        <PricingSection />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
