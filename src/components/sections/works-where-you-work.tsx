import Image from "next/image";
import Link from "next/link";
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
      <div className="relative bg-sky-50 rounded-2xl p-8 sm:p-12 border border-sky-100">
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
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="font-display text-4xl font-bold text-sky-900">
            Get into{" "}
            <mark className="relative bg-sky-200/70 inline-block px-2 py-1 -rotate-1 rounded-lg">
              Ivey
            </mark>
          </h2>
          <p className="text-lg max-w-2xl text-sky-800 font-medium">
            Vibe is a Chrome extension that fits into your existing workflows.
            Create, Research and Edit in Google Docs, PDFs, Web pages, YouTube
            and more.
          </p>
          <div className="h-12 w-fit">
            <Link
              href="/extension"
              className="h-full w-fit flex items-center justify-center group"
            >
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none bg-sky-600 font-bold text-white !rounded-lg shadow-[0_6px_0_0_rgb(3,105,161)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgb(3,105,161)] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgb(3,105,161)] transition-all duration-200 rounded-md h-full w-fit text-base px-6">
                <div className="flex justify-center items-center gap-2">
                  Get Started
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksWhereYouWork;
