import SectionWrapper from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const items = faqData.map((item, i) => ({
    id: `faq-${i}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <SectionWrapper id="faq" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-100/15 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/50 px-4 py-1.5 text-sm font-semibold text-amber-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              FAQ
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Skolo.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl">
            <Accordion items={items} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p className="text-center text-sm text-gray-500 mt-8">
            Have more questions?{" "}
            <a href="#contact" className="text-primary-600 font-semibold hover:text-primary-700 hover:underline transition-colors">
              Get in touch
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
