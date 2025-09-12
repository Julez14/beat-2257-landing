"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";

// Extend the Window interface to include Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function WaitlistSignupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
        // Give a small delay to ensure the form is rendered
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    // If Tally already loaded, init immediately
    if (window.Tally) {
      init();
      return;
    }

    // If the script already exists, attach a one-time listener
    const existingScript = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", init, { once: true });
      return () => existingScript.removeEventListener("load", init);
    }

    // Otherwise, inject the script once
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.addEventListener("load", init, { once: true });
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", init);
      // Intentionally do not remove the script to allow re-use across navigations
    };
  }, []);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIframeLoaded(true);
    // Hide loading after both script and iframe are loaded
    if (window.Tally) {
      setTimeout(() => setIsLoading(false), 300);
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full"
      style={{
        margin: 0,
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Back Navigation */}
      <Link
        href="/"
        className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-primary/20"></div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Loading Waitlist Form
              </h3>
            </div>
          </div>
        </div>
      )}

      <iframe
        data-tally-src="https://tally.so/r/n04aQ0?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Beat2257 Waitlist"
        className="absolute top-0 right-0 bottom-0 left-0 border-0"
        loading="eager"
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
