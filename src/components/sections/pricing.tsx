import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";

const inclusions: { title: string; description: string }[] = [
  {
    title: "Unlimited Case Solving",
    description:
      "Run every accounting case through Beat2257—no limits, no throttling. Prepare for every class discussion.",
  },
  {
    title: "Beautifully Crafted Super-Ts",
    description:
      "Get results displayed directly on super-Ts with journal entries, calculations, and rationale ready to review.",
  },
  {
    title: "Casey AI Assistant",
    description:
      "Ask specific questions about any case and get detailed explanations to help you understand the concepts behind each entry.",
  },
  {
    title: "Transaction Breakdowns",
    description:
      "See detailed explanations and rationale for each journal entry—trained on real accounting cases.",
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-4 sm:pb-28 sm:pt-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#BCF3FF]/70 blur-[140px]" />
        <div className="absolute bottom-[-10rem] left-1/4 h-[22rem] w-[22rem] rounded-full bg-[#4341FF]/25 blur-[140px]" />
        <div className="absolute bottom-[-14rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#BCF3FF]/50 blur-[160px]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#4341FF] shadow-[0_18px_56px_rgba(67,65,255,0.18)]">
            Fall 2025 plan
            <Sparkles className="size-3" aria-hidden />
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            Master every case this semester
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#7A8DBA] sm:text-xl">
            Built by students, for students. Never walk into class unprepared or
            miss contribution marks again.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div
            className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#4341FF]/14 via-white/70 to-white opacity-90 blur-2xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0_45px_120px_-40px_rgba(67,65,255,0.55)]">
            <div
              className="pointer-events-none absolute -top-24 right-10 hidden h-60 w-60 rounded-full bg-[#BCF3FF]/55 blur-[120px] sm:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-28 left-12 hidden h-52 w-52 rounded-full bg-[#4341FF]/25 blur-[140px] sm:block"
              aria-hidden
            />

            <div className="relative grid gap-12 p-10 sm:p-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:p-16">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-6xl font-black tracking-tight text-[#111111] sm:text-6xl sm:leading-none">
                      $95
                    </p>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7F91BD]">
                      Per Semester
                    </p>
                  </div>
                  <p className="text-xl leading-relaxed text-[#4B5D87]">
                    Get unlimited access to the AI case solver trained
                    specifically on accounting cases. Work smarter with fully
                    completed super-Ts, detailed transaction breakdowns, and
                    Casey—your 24/7 case prep assistant.
                  </p>
                </div>

                <div className="flex w-full flex-col items-start gap-6 sm:w-fit">
                  <div className="h-12 w-fit sm:h-14">
                    <Link
                      href="/waitlist-signup"
                      className="group flex h-full w-fit items-center justify-center"
                    >
                      <button className="inline-flex h-full w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-6 text-base font-bold text-primary-foreground shadow-[0_6px_0_0_var(--color-primary-shadow)] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 group-hover:translate-y-[2px] group-hover:shadow-[0_4px_0_0_var(--color-primary-shadow)] group-active:translate-y-[4px] group-active:shadow-[0_2px_0_0_var(--color-primary-shadow)]">
                        <div className="flex items-center justify-center gap-2">
                          Get Access
                        </div>
                      </button>
                    </Link>
                  </div>

                  <div className="space-y-1 text-sm text-[#7A8DBA]">
                    <p>Instant access · Valid through December 31, 2025</p>
                    <p>3-day money-back guarantee, no questions asked</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-10 rounded-3xl bg-[#FDFDFD] p-10 shadow-[inset_0_1px_0_rgba(67,65,255,0.08)]">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#111111]">
                    What you unlock
                  </h3>
                  <ul className="space-y-5">
                    {inclusions.map((item) => (
                      <li key={item.title} className="flex gap-4">
                        <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#BCF3FF]/40 text-[#4341FF] shadow-[0_10px_24px_rgba(188,243,255,0.4)]">
                          <CheckCircle2 className="size-5" aria-hidden />
                        </div>
                        <div className="text-left">
                          <p className="text-base font-semibold text-[#111111]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-[#4B5D87]">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
