import Image from "next/image";
import Link from "next/link";
import { AuthAwareCTA } from "../auth-aware-cta";
import { Chrome } from "lucide-react";

const icons = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-022690-docs-thiings.png?",
    alt: "Google Docs",
    width: 90,
    height: 90,
    containerClasses: "absolute left-2 sm:left-4 -top-8 sm:-top-12",
    imageClasses:
      "w-16 h-16 sm:w-24 sm:h-24 object-contain transform -rotate-12 transition-transform hover:scale-105",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-671324-web.png?",
    alt: "Web",
    width: 90,
    height: 90,
    containerClasses: "absolute right-2 sm:right-12 bottom-12 sm:bottom-0",
    imageClasses:
      "w-16 h-16 sm:w-24 sm:h-24 object-contain transform rotate-12 transition-transform hover:scale-105",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-049137-pdf-thiings.png?",
    alt: "PDF",
    width: 80,
    height: 80,
    containerClasses: "absolute left-16 sm:left-24 -bottom-6 sm:-bottom-12",
    imageClasses:
      "w-14 h-14 sm:w-20 sm:h-20 object-contain transform rotate-[20deg] transition-transform hover:scale-105",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-215407-yt-thiings.png?",
    alt: "YouTube",
    width: 80,
    height: 80,
    containerClasses: "absolute right-2 sm:right-4 -top-6 sm:-top-10",
    imageClasses:
      "w-14 h-14 sm:w-24 sm:h-24 object-contain transform -rotate-12 transition-transform hover:scale-105",
  },
];

const WorksWhereYouWork = () => {
  return (
    <section className="container mt-8 sm:mt-12 mb-8 sm:mb-12">
      <div className="relative rounded-2xl p-8 sm:p-12 border bg-secondary border-border">
        {/* {icons.map((icon) => (
          <div key={icon.alt} className={icon.containerClasses}>
            <Image
              alt={icon.alt}
              src={icon.src}
              width={icon.width}
              height={icon.height}
              className={icon.imageClasses}
            />
          </div>
        ))} */}
        <div className="flex flex-col items-center text-center gap-5 sm:gap-6">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Get into{" "}
            <mark className="relative bg-accent inline-block px-2 py-1 sm:px-2.5 sm:py-1.5 -rotate-1 rounded-lg font-serif italic shadow-sm [font-size:1.02em]">
              Ivey
            </mark>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl text-muted-foreground font-medium leading-relaxed">
            Your peers are already leveraging AI tools to get ahead. This isn’t
            about working <em>harder</em>, it’s about working <em>smarter</em>.
          </p>
          <div className="h-12 w-fit">
            <AuthAwareCTA buttonClassName="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none bg-primary font-bold text-primary-foreground !rounded-lg shadow-[0_6px_0_0_var(--color-primary-shadow)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)] transition-all duration-200 h-full w-fit text-base sm:text-lg px-6 sm:px-7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksWhereYouWork;
