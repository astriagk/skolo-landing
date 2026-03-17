"use client";

import { useEffect, useRef, useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { testimonials } from "@/data/testimonials";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Parents Registered", gradient: "from-primary-600 to-blue-600" },
  { value: 12, suffix: "+", label: "Schools Interested", gradient: "from-violet-600 to-purple-600" },
  { value: 7, suffix: "+", label: "Regions Targeted", gradient: "from-secondary-600 to-emerald-600" },
];

export default function SocialProof() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute -top-20 right-0 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl" />

      <div className="relative">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/50 px-4 py-1.5 text-sm font-semibold text-amber-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Early Traction
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Trusted by <span className="text-gradient">Early Adopters</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Stats */}
        <AnimateOnScroll>
          <div className="grid grid-cols-3 gap-4 mb-14">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm">
                <p className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i}>
              <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-violet-100 text-primary-700 font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t.role} &bull; {t.school}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex gap-0.5 mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-4 w-4 text-warning-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* School logos - marquee */}
        <AnimateOnScroll>
          <div className="mt-14">
            <p className="text-sm font-semibold text-gray-400 mb-6 text-center tracking-widest uppercase">
              Schools Exploring Skolo
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, di) => (
                  <div key={di} className="flex items-center gap-4 pr-4">
                    {[
                      { name: "DPS", color: "bg-blue-50 border-blue-200 text-blue-700", dot: "bg-blue-400" },
                      { name: "Ryan International", color: "bg-purple-50 border-purple-200 text-purple-700", dot: "bg-purple-400" },
                      { name: "Kendriya Vidyalaya", color: "bg-orange-50 border-orange-200 text-orange-700", dot: "bg-orange-400" },
                      { name: "National Public", color: "bg-green-50 border-green-200 text-green-700", dot: "bg-green-400" },
                      { name: "Greenwood High", color: "bg-teal-50 border-teal-200 text-teal-700", dot: "bg-teal-400" },
                      { name: "The Frank Anthony", color: "bg-rose-50 border-rose-200 text-rose-700", dot: "bg-rose-400" },
                      { name: "Bishops School", color: "bg-indigo-50 border-indigo-200 text-indigo-700", dot: "bg-indigo-400" },
                      { name: "Deens Academy", color: "bg-amber-50 border-amber-200 text-amber-700", dot: "bg-amber-400" },
                    ].map((school) => (
                      <span
                        key={school.name}
                        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide ${school.color} shadow-sm`}
                      >
                        <span className={`h-2 w-2 rounded-full ${school.dot}`} />
                        {school.name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
