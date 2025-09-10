import React from "react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Since no specific image asset is provided for this section,
// a placeholder component is created to represent the visual content.
const ImagePlaceholder = () => (
  <div className="aspect-[520/322] w-full rounded-md bg-muted flex items-center justify-center">
    <p className="text-sm text-muted-foreground p-4 text-center">
      Image: Google Docs with research sidebar feature
    </p>
  </div>
);

const ResearchFeature = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary">
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            <span>EDIT</span>
          </div>

          <h3 className="mt-4 text-[36px] leading-[1.2] font-semibold text-foreground">
            Research
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-md">
            Quickly research any topic with AI-powered insights
          </p>

          <div className="mt-8">
            <div className="h-12 w-fit">
              <Button
                asChild
                className="h-full w-fit px-6 text-base font-bold !rounded-lg bg-sky-600 text-primary-foreground shadow-[0_6px_0_0_rgb(3,105,161)] hover:bg-sky-600/90 hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgb(3,105,161)] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgb(3,105,161)] transition-all duration-200"
              >
                <Link
                  href="https://vibelearn.com/extension"
                  className="flex items-center gap-2"
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative overflow-hidden rounded-xl border p-2 shadow-lg">
          <ImagePlaceholder />
        </div>
      </div>
    </section>
  );
};

export default ResearchFeature;
