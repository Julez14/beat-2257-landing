import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BarChartHorizontalBig, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickEditsFeature = () => {
  return (
    <section className="py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative w-full rounded-xl border shadow-lg aspect-[4/3] max-w-xl">
            <Image
              src="https://vibelearn.com/_next/image?url=%2Fimages%2Ffeatures%2Fquick-edits.png&w=1920&q=75"
              alt="A mockup of Google Docs showing VibeLearn's quick edit suggestions in a sidebar, with red and blue highlights on the text."
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col gap-4 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-accent rounded-lg">
              <BarChartHorizontalBig className="h-6 w-6 text-primary" />
            </div>
            <p className="font-bold text-sm text-primary tracking-wider">
              EDIT
            </p>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Quick Edits
          </h3>

          <p className="text-lg text-muted-foreground">Make any edit fast.</p>

          <div className="mt-4">
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
      </div>
    </section>
  );
};

export default QuickEditsFeature;
