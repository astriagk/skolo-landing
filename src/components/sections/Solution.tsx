import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const pillars = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Real-Time GPS Tracking",
    description:
      "See your child's bus on a live map, powered by TomTom's enterprise-grade technology. Know exactly where they are, every second.",
    gradient: "from-primary-500 to-blue-600",
    lightGradient: "from-primary-50 to-blue-50",
    shadowColor: "shadow-primary-500/20",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Smart Notifications",
    description:
      "Get alerts when the bus is 500m away, at pickup, and at drop. Plan your time perfectly — no more guessing or waiting at the stop.",
    gradient: "from-amber-500 to-orange-500",
    lightGradient: "from-amber-50 to-orange-50",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "OTP-Based Secure Handoff",
    description:
      "Every pickup and drop is verified with a one-time password. Only authorized adults can receive your child. No exceptions.",
    gradient: "from-secondary-500 to-emerald-600",
    lightGradient: "from-secondary-50 to-emerald-50",
    shadowColor: "shadow-secondary-500/20",
  },
];

export default function Solution() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-100/30 via-transparent to-secondary-100/30 rounded-full blur-3xl" />

      <div className="relative">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200/50 px-4 py-1.5 text-sm font-semibold text-primary-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              The Solution
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Skolo Makes School Commutes{" "}
              <span className="text-gradient">
                Stress-Free
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A connected ecosystem where parents, schools, and drivers work
              together to keep every child safe.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-8 md:grid-cols-3 stagger-children">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={i}>
              <div className="group relative text-center">
                {/* Card with gradient border on hover */}
                <div className={`relative rounded-2xl bg-gradient-to-b ${pillar.lightGradient} border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl ${pillar.shadowColor} hover:-translate-y-2`}>
                  <div
                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white transition-transform duration-300 group-hover:scale-110 shadow-lg ${pillar.shadowColor}`}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Connecting line */}
        <div className="hidden md:flex items-center justify-center mt-10">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary-300 to-primary-300" />
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 bg-gray-50 rounded-full px-4 py-1.5 border border-gray-100">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              Connected Ecosystem
            </span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-primary-300 to-primary-300" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
