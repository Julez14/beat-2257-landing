import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const icons = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-844151-chat-right.png?",
    alt: "ChatGPT",
    className:
      "hidden sm:block absolute top-[20%] left-[10%] drop-shadow-lg w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 -rotate-12 transition-all hover:scale-105 hover:-rotate-6",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-418510-claude-left.png?",
    alt: "Claude",
    className:
      "hidden sm:block absolute bottom-[20%] left-[15%] drop-shadow-lg w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rotate-12 transition-all hover:scale-105 hover:rotate-6",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-679793-pplx-right.png?",
    alt: "Perplexity",
    className:
      "hidden sm:block absolute top-[20%] right-[10%] drop-shadow-lg w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rotate-12 transition-all hover:scale-105 hover:rotate-6",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-543997-gemini.png?",
    alt: "Gemini",
    className:
      "hidden sm:block absolute bottom-[20%] right-[15%] drop-shadow-lg w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 -rotate-12 transition-all hover:scale-105 hover:-rotate-6",
  },
];

const AllAiSection = () => {
  return (
    <section className="container">
      <div className="relative bg-secondary rounded-2xl my-8 sm:my-12 p-8 sm:p-12 border border-border">
        {/* {icons.map((icon) => (
          <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            width={100}
            height={100}
            className={icon.className}
            loading="lazy"
          />
        ))} */}

        <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6">
          <h2 className="font-display text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Optimized for{" "}
            <mark className="relative bg-accent inline-block px-2 py-1 sm:px-2.5 sm:py-1.5 -rotate-1 rounded-lg font-serif italic shadow-sm [font-size:1.02em]">
              accounting cases.
            </mark>
          </h2>
          <p className="text-center font-sans max-w-2xl text-muted-foreground text-lg sm:text-xl font-medium leading-relaxed">
            Beat2257 is trained on real cases. That means you don’t just get
            generic answers—you get reliable, case‑ready guidance.
          </p>
          <div className="h-12 w-fit">
            <Button
              asChild
              className="h-full w-fit text-base sm:text-lg font-bold rounded-lg bg-primary text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] hover:bg-primary/90 hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] active:translate-y-[4px] active:shadow-[0_2px_0_0_var(--color-primary-shadow)] transition-all duration-200 px-6 sm:px-7"
            >
              <Link href="/waitlist-signup" className="flex items-center gap-2">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllAiSection;
