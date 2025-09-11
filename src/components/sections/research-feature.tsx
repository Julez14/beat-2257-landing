import React from "react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

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
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-accent rounded-lg">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>

          <h3 className="mt-4 text-[36px] leading-[1.2] font-semibold text-foreground">
            Understand Transactions
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-md">
            See the rationale behind each journal entry.
          </p>

          <div className="mt-8">
            <div className="h-12 w-fit">
              <Button
                asChild
                className="h-full w-fit px-6 text-base font-bold rounded-lg bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] hover:bg-primary/90 hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)] transition-all duration-200"
              >
                <Link href="" className="flex items-center gap-2">
                  Sign Up
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
