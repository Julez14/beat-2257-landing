import Image from "next/image";
import Link from "next/link";
import { Chrome } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="absolute top-0 z-0 h-[800px] w-full bg-gradient-to-b from-white via-sky-400/20 to-sky-400/70 bg-top bg-no-repeat sm:h-[900px] sm:bg-center xl:h-[867px]" />
      <div className="container relative">
        <div className="z-0 hidden w-full sm:block">
          <Image
            alt="Google Docs"
            width={120}
            height={120}
            className="absolute left-0 top-[200px] -translate-x-10 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all lg:-translate-x-1/2"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-398666-docs-thiings.png?"
          />
          <Image
            alt="Web"
            width={120}
            height={120}
            className="absolute left-0 top-[400px] -translate-x-10 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all lg:-translate-x-1/2"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-248588-web.png?"
          />
          <Image
            alt="PDF"
            width={140}
            height={140}
            className="absolute right-0 top-[200px] translate-x-10 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all lg:translate-x-1/2"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-122986-pdf-thiings.png?"
          />
          <Image
            alt="YouTube"
            width={140}
            height={140}
            className="absolute right-0 top-[400px] translate-x-10 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all lg:translate-x-1/2"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-534281-yt-thiings.png?"
          />
        </div>
        <div className="relative mt-8">
          <div className="mb-2 flex flex-col items-center gap-2 text-center sm:mt-4 sm:mb-10 sm:gap-4">
            <div className="flex flex-col items-center gap-3 px-6 sm:gap-4 sm:px-0">
              <div className="flex w-full flex-col gap-3 pt-6 sm:gap-5 sm:pt-0">
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:hidden">
                  <Image alt="Google Docs" width={48} height={48} className="h-12 w-12 object-contain transform transition-transform hover:scale-105" src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-398666-docs-thiings.png?" />
                  <Image alt="Web" width={48} height={48} className="h-12 w-12 object-contain transform transition-transform hover:scale-105" src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-248588-web.png?" />
                  <Image alt="PDF" width={48} height={48} className="h-12 w-12 object-contain transform transition-transform hover:scale-105" src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-122986-pdf-thiings.png?" />
                  <Image alt="YouTube" width={48} height={48} className="h-12 w-12 object-contain transform transition-transform hover:scale-105" src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-534281-yt-thiings.png?" />
                </div>
                <div className="hidden sm:block sm:mb-4" />
                <h1 className="font-sans text-center text-3xl font-bold leading-tight text-sky-600 transition-all sm:text-5xl sm:leading-tight md:text-5xl lg:text-7xl">
                  The AI Co-Pilot
                  <br />
                  <span className="font-black text-sky-900 underline decoration-sky-500 decoration-4 underline-offset-8">
                    that works in Google Docs
                  </span>
                </h1>
              </div>
              <p className="my-0 max-w-sm text-base font-semibold text-sky-800 animate-in fade-in slide-in-from-bottom-6 duration-100 sm:my-2 sm:max-w-xl sm:text-lg md:max-w-3xl md:text-2xl">
                Vibe is the only AI Productivity Tool that{" "}
                <span className="font-serif text-base font-bold italic text-sky-900 underline sm:text-xl md:text-2xl">
                  meets you where you already are
                </span>
                . In Google Docs, PDFs, or anywhere on the Web.
              </p>
              <div className="flex w-full flex-col gap-3 sm:flex-col-reverse sm:items-center sm:justify-center sm:gap-5">
                <div className="flex w-full flex-col items-center justify-center gap-2 sm:w-fit">
                  <div className="flex w-full flex-col items-center gap-2 sm:w-fit sm:flex-row sm:items-start">
                    <div className="flex w-full flex-col items-center sm:w-fit">
                      <div className="flex w-fit flex-col items-center">
                        <div className="h-12 w-fit sm:h-14">
                          <Link href="/extension" className="group flex h-full w-fit items-center justify-center">
                            <button className="inline-flex h-full w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-sky-600 px-6 text-base font-bold text-white shadow-[0_6px_0_0_rgb(3,105,161)] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 group-hover:translate-y-[2px] group-hover:shadow-[0_4px_0_0_rgb(3,105,161)] group-active:translate-y-[4px] group-active:shadow-[0_2px_0_0_rgb(3,105,161)]">
                              <div className="flex items-center justify-center gap-2">
                                Add to Chrome for Free
                                <Chrome className="h-8 w-8 transition-all group-hover:translate-x-0.5" />
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
          <div className="relative aspect-video w-full">
            <iframe
              id="video"
              className="pointer-events-none h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/nRBj-OZeLec?autoplay=1&mute=1&vq=hd&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&playsinline=1&loop=1&playlist=nRBj-OZeLec&origin=https://vibegrade.com"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="VibeLearn | AI for Students"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;