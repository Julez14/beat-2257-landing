import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

// Video component for the research feature demonstration
const ResearchVideo = () => (
  <div className="relative aspect-[16/10] w-full overflow-hidden">
    <iframe
      className="pointer-events-none h-full w-full rounded-xl scale-[1.12] transform origin-center"
      src="https://www.youtube.com/embed/ThNNIqy37fM?autoplay=1&mute=1&vq=hd&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&playsinline=1&loop=1&playlist=ThNNIqy37fM&origin=https://beat2257.com"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Beat2257 Research Feature"
    />
  </div>
);

const ResearchFeature = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] items-center gap-10 lg:gap-12 xl:gap-16">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left max-w-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-accent rounded-lg">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>

          <h3 className="mt-3 md:mt-4 text-3xl md:text-[40px] leading-[1.15] font-semibold text-foreground">
            Understand Transactions
          </h3>

          <p className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
            See the rationale behind each journal entry.
          </p>

          <div className="mt-8 md:mt-10">
            <div className="h-12 w-fit">
              <Button
                asChild
                className="h-full w-fit px-6 text-base font-bold rounded-lg bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] hover:bg-primary/90 hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)] transition-all duration-200"
              >
                <Link
                  href="/waitlist-signup"
                  className="flex items-center gap-2"
                >
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Video */}
        <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/30 p-2.5 sm:p-3 md:p-4 shadow-xl lg:-mr-10 xl:-mr-16">
          <ResearchVideo />
        </div>
      </div>
    </section>
  );
};

export default ResearchFeature;
