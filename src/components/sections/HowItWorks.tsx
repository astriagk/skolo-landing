import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    number: 1,
    icon: "🏫",
    title: "School Registers",
    description: "School signs up and adds their bus fleet and routes.",
  },
  {
    number: 2,
    icon: "📱",
    title: "Parents Join",
    description: "Parents download the app and join using the school code.",
  },
  {
    number: 3,
    icon: "🚌",
    title: "Driver Starts Trip",
    description: "Driver begins the trip and GPS tracking activates automatically.",
  },
  {
    number: 4,
    icon: "🗺️",
    title: "Route Optimized",
    description: "TomTom calculates the most efficient route for all stops.",
  },
  {
    number: 5,
    icon: "📍",
    title: "Parents Track Live",
    description: "Parents see the bus location in real-time on the map.",
  },
  {
    number: 6,
    icon: "🔔",
    title: "Smart Alerts",
    description: "Notifications sent at 500m away, pickup, and drop-off.",
  },
  {
    number: 7,
    icon: "🔐",
    title: "OTP Verification",
    description: "Secure handoff verified with a one-time password.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="relative">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200/50 px-4 py-1.5 text-sm font-semibold text-primary-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              How It Works
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Get Started in <span className="text-gradient">Minutes</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From signup to safe pickup — here&apos;s how Skolo keeps your child
              protected every step of the way.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="relative">
          {/* Vertical line (mobile) */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-secondary-400 md:hidden" />

          {/* Desktop: Horizontal connector line */}
          <div className="hidden md:block absolute top-7 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-primary-300 via-violet-400 to-secondary-400" />

          <div className="grid gap-8 md:grid-cols-7 md:gap-4">
            {steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                {/* Mobile: Horizontal layout */}
                <div className="flex gap-4 md:hidden">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-violet-600 text-white font-bold shadow-lg shadow-primary-500/25">
                    {step.number}
                  </div>
                  <div className="pb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="font-bold text-gray-900 mt-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop: Vertical card */}
                <div className="hidden md:flex flex-col items-center text-center group relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-violet-600 text-white font-bold text-lg shadow-lg shadow-primary-500/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary-500/40 transition-all duration-300">
                    {step.number}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center text-2xl mt-3 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mt-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
