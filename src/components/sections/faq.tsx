"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is VibeGrade?",
    answer:
      "VibeGrade is the AI essay grader that works directly in Google Docs, Canvas, and other LMS platforms with your own customized rubric criteria to deliver personalized feedback and a final grade breakdown while checking for plagiarism and AI writing on essays.",
  },
  {
    question: "How is it different from ChatGPT?",
    answer:
      "VibeGrade is an AI essay grader specially designed to help educators grade essays with responsible and secure use of AI, whereas ChatGPT is a general purpose chatbot. Although ChatGPT can provide general feedback on essays, it makes it hard to pinpoint specific areas for improvement. ChatGPT's performance is inconsistent and often requires tweaking prompts, leading to varied results. VibeGrade offers consistent outcomes instantly without any complicated setup and annotations so teachers can instantly see successes and issues, saving hours of time. Unlike ChatGPT, which lacks built-in plagiarism and AI writing detection, VibeGrade includes these features to ensure academic integrity so teachers don't have to pay for other expensive tools.",
  },
  {
    question: "How does it know the criteria?",
    answer:
      "VibeGrade adapts to your unique rubric, analyzing student work solely based on the criteria you provide, ensuring accurate, personalized grading. Simply provide the level 4 section of your rubric, and VibeGrade will take care of the rest!",
  },
  {
    question: "How accurate is the grade estimate?",
    answer:
      "Our grade estimates are designed for precision, typically within ±3% of the final grade.",
  },
  {
    question: "Doesn't AI introduce more bias?",
    answer:
      "We take pride in VibeGrade being the most fair and objective grading tool available. We believe that the professional judgement of teachers is key to fair grading, which is why our tools only use the criteria and grade level provided by the teacher to evaluate work. We acknowledge the biases that generative AI technology may introduce, which is why we rigourously test our systems, and always remind our users that teachers are in the driver's seat.",
  },
  {
    question: "Will VibeGrade replace teachers?",
    answer:
      "Absolutely not. VibeGrade enhances your ability to provide fair and efficient grading, reinforcing the essential role of teachers in education.",
  },
  {
    question: "Can I buy for my school or district?",
    answer: (
      <>
        Yes! We offer special pricing and packages for schools and districts.{" "}
        <a
          href="https://vibegrade.com/contact-sales"
          className="text-primary hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact our team
        </a>{" "}
        to discuss volume pricing, implementation support, and custom solutions
        tailored to your institution's needs.
      </>
    ),
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
