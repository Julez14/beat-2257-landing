import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarChartHorizontalBig, Chrome } from 'lucide-react';

const QuickEditsFeature = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-full rounded-xl border bg-gray-100 shadow-lg aspect-[4/3] max-w-xl">
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
              <p className="font-bold text-sm text-primary tracking-wider">EDIT</p>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Quick Edits
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Make any edit fast.
            </p>
            
            <div className="mt-4">
              <Link
                  href="https://vibelearn.com/extension"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-auto px-6 py-3 bg-white text-foreground hover:bg-secondary font-medium shadow-md border border-input"
              >
                  Add to Chrome for Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickEditsFeature;