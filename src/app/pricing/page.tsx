import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PricingSection from "@/components/sections/pricing";
import Faq from "@/components/sections/faq";

export const metadata = {
  title: "Pricing | Beat2257",
  description:
    "Unlock unlimited Beat2257 access for the Fall 2025 semester and get answers to the most common questions.",
};

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
