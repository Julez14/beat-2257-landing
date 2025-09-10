import Image from "next/image";

const logos = [
  {
    name: "MIT",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-892460-mit.png",
    invert: false,
  },
  {
    name: "Duke University",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-714268-duke.png",
    invert: false,
  },
  {
    name: "Brown University",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-076332-brown.png",
    invert: false,
  },
  {
    name: "University of Texas at Dallas",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-739666-utd.png",
    invert: false,
  },
  {
    name: "University of California, Riverside",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-583621-UCR.png",
    invert: true,
  },
  {
    name: "University of California, Davis",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-048270-ucd2.png",
    invert: false,
  },
  {
    name: "University of Michigan",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d215e5e9-5987-48bd-a544-f00fa4600032-vibelearn-com/assets/images/next-749178-umich.png",
    invert: false,
  },
];

const LogosContent = () => (
  <>
    {logos.map((logo, index) => (
      <div key={index} className="flex-shrink-0 mx-3 sm:mx-6 lg:mx-8">
        <Image
          src={logo.src}
          alt={logo.name}
          width={144}
          height={80}
          className={`object-contain grayscale brightness-150 mix-blend-multiply w-20 h-12 sm:w-32 sm:h-16 lg:w-36 lg:h-20 ${
            logo.invert ? "invert" : ""
          }`}
        />
      </div>
    ))}
  </>
);

const TrustedBy = () => {
  return (
    <section className="mt-16 sm:mt-8 mb-4 sm:mb-4">
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee-scroll {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
      <div className="container mx-auto">
        <div className="sm:hidden mb-3 pt-2">
          <p className="font-bold text-center text-base text-foreground px-4">
            TRUSTED BY STUDENTS AT TOP SCHOOLS
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0 py-2 sm:py-4 min-h-[80px] sm:min-h-[100px]">
          <p className="hidden sm:block font-bold text-center text-lg lg:text-2xl text-muted-foreground whitespace-nowrap">
            TRUSTED BY STUDENTS AT TOP SCHOOLS
          </p>
          <div className="flex-1 relative w-full overflow-hidden flex items-center min-h-[60px] sm:min-h-[80px]">
            <div className="hidden sm:block absolute left-0 top-0 w-12 lg:w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="hidden sm:block absolute right-0 top-0 w-12 lg:w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="w-full flex">
              <div className="flex-shrink-0 flex items-center animate-marquee-scroll">
                <LogosContent />
              </div>
              <div
                className="flex-shrink-0 flex items-center animate-marquee-scroll"
                aria-hidden="true"
              >
                <LogosContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
