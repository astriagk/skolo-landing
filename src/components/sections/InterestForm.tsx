"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import InterestFormContent from "@/components/form/InterestFormContent";
import InterestStats from "@/components/ui/InterestStats";

export default function InterestForm() {
  return (
    <SectionWrapper id="interest-form" className="bg-gradient-to-b from-primary-50 via-violet-50/20 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-primary-200/20 via-violet-200/15 to-secondary-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-xl">
        <div className="text-center mb-8">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 border border-primary-200/50 px-4 py-1.5 text-sm font-semibold text-primary-700 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              </span>
              Now Accepting Registrations
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Join <span className="text-gradient">Us</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Be among the first families to use Skolo. Register your interest today.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              No spam &bull; Secure data &bull; Cancel anytime
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <InterestStats />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-gray-200/40">
            <InterestFormContent />
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
