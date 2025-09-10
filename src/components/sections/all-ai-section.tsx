import Image from "next/image";
import Link from "next/link";
import { Chrome } from "lucide-react";
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
      <div className="relative bg-secondary rounded-xl lg:rounded-2xl my-6 lg:my-12 py-8 lg:py-16 px-8 sm:px-12 md:px-16 lg:px-24">
        {icons.map((icon) => (
          <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            width={100}
            height={100}
            className={icon.className}
            loading="lazy"
          />
        ))}

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-sans text-center text-2xl sm:text-4xl font-bold text-sky-900 transition-all leading-snug">
            Optimized for{" "}
            <mark className="bg-sky-200/50 text-sky-900 px-2 rounded-lg py-1">
              accounting cases.
            </mark>
          </h2>
          <p className="text-center font-sans lg:max-w-xl max-w-sm sm:max-w-lg text-sky-800 text-sm sm:text-base md:text-lg font-medium">
            VibeLearn Agent brings together ChatGPT, Gemini, Claude, Perplexity
            and more in a single Chrome extension, giving you the power of all
            AI models with one click.
          </p>
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
    </section>
  );
};

export default AllAiSection;
