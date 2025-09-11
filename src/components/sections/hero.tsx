import Image from "next/image";
import Link from "next/link";
import { Chrome } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="absolute top-0 z-0 h-[800px] w-full bg-gradient-to-b from-white via-[#BCF3FF]/30 to-transparent bg-top bg-no-repeat sm:h-[900px] sm:bg-center xl:h-[867px]" />
      <div className="container relative">
        <div className="z-0 hidden w-full sm:block">
          {/* Removed Floating Image Icons */}
        </div>
        <div className="relative mt-8">
          <div className="mb-2 flex flex-col items-center gap-2 text-center sm:mt-4 sm:mb-10 sm:gap-4">
            <div className="flex flex-col items-center gap-3 px-6 sm:gap-4 sm:px-0">
              <div className="flex w-full flex-col gap-3 pt-6 sm:gap-5 sm:pt-0">
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:hidden">
                  {/* Removed Floating Image Icons */}
                </div>
                <div className="hidden sm:block sm:mb-4" />
                <h1 className="font-sans text-center text-3xl font-bold leading-tight text-primary transition-all sm:text-5xl sm:leading-tight md:text-5xl lg:text-7xl">
                  The AI Business Case Solver
                  <br />
                  <span className="font-black text-[#111111] underline decoration-primary decoration-4 underline-offset-8">
                    that just works
                  </span>
                </h1>
              </div>
              <p className="my-0 max-w-sm text-base font-semibold text-[#2D2BCA] animate-in fade-in slide-in-from-bottom-6 duration-100 sm:my-2 sm:max-w-xl sm:text-lg md:max-w-3xl md:text-2xl">
                Beat2257 is the only case-solving tool that prepares you for
                class. <br />
                <span className="font-serif text-base font-bold italic text-[#111111] underline sm:text-xl md:text-2xl">
                  Never miss contribution marks again.
                </span>
              </p>
              <div className="flex w-full flex-col gap-3 sm:flex-col-reverse sm:items-center sm:justify-center sm:gap-5">
                <div className="flex w-full flex-col items-center justify-center gap-2 sm:w-fit">
                  <div className="flex w-full flex-col items-center gap-2 sm:w-fit sm:flex-row sm:items-start">
                    <div className="flex w-full flex-col items-center sm:w-fit">
                      <div className="flex w-fit flex-col items-center">
                        <div className="h-12 w-fit sm:h-14">
                          <Link
                            href="/extension"
                            className="group flex h-full w-fit items-center justify-center"
                          >
                            <button className="inline-flex h-full w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-6 text-base font-bold text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 group-hover:translate-y-[2px] group-hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] group-active:translate-y-[4px] group-active:shadow-[0_2px_0_0_var(--color-primary-shadow)]">
                              <div className="flex items-center justify-center gap-2">
                                Sign Up
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-6 px-2 sm:mt-0 sm:px-8">
        <div className="relative translate-y-0 overflow-hidden rounded-xl border border-white/50 bg-white/20 p-3 shadow-lg opacity-100 transition-all duration-1000">
          <div className="relative aspect-video w-full overflow-hidden">
            <iframe
              id="video"
              className="pointer-events-none h-[110%] w-[110%] rounded-lg scale-110 -translate-x-[5%] -translate-y-[5%]"
              src="https://www.youtube.com/embed/ck1TQhSzOUY?autoplay=1&mute=1&vq=hd&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&playsinline=1&loop=1&playlist=ck1TQhSzOUY&origin=https://beat2257.com"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Beat2257"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
