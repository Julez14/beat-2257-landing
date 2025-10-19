"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
/*
- Will this cost money?
- Will I get in trouble for using this?
- How is this different from ChatGPT?
- How accurate is it?
- What if I am not satisfied?
- Why are you building this?
*/

const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT was designed for general use. Beat2257 has been fine-tuned specifically to solve business cases. This means that Beat2257 has a much better solution accuracy and has been engineered to display results directly on a super-T.",
  },
  {
    question: "Will I get in trouble for using this?",
    answer:
      "Ivey material is copyright-protected so you should NEVER directly upload cases to any third-party platform. Follow this and you'll be good :)",
  },
  {
    question: "How accurate is it?",
    answer:
      "Beat2257 is not perfect. It will sometimes get calculations wrong. But, it offers an excellent way to check your work and coming into class with a Beat2257-generated solution is significantly better than coming to class unprepared.",
  },
  {
    question: "Why did you build this?",
    answer:
      "Being a student can be tough and I know how easy it is to fall behind. As a computer science student coming from a non-business background, I understand how difficult this course is and how stressful it can be to manage its workload. I built Beat2257 to make getting into Ivey more manageable.",
  },
  {
    question: "Does this cost money?",
    answer:
      "Short Answer: Yes. Long Answer: I put a lot of time and effort into this. Building Beat2257 while managing schoolwork, internship recruiting, extracurriculars, part-time jobs, etc is tough. I think its fair that I make a little bit of money off of this. Plus, I am already paying for web hosting and AI tokens.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "Send me an email at julian.laxman@gmail.com within three days of purchase and I will give you a full refund.",
  },
];

export default function Faq() {
  return (
    <section className="bg-background py-8">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            FAQs
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-lg border border-gray-200 bg-gray-50 shadow-[0_6px_0_0_rgb(229,231,235)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgb(229,231,235)] transition-all duration-200"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-gray-800 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
