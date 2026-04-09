import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ROADMAP_DATES } from "@/lib/constants";

const milestones = [
  {
    date: ROADMAP_DATES.PILOT_LAUNCH,
    title: "Pilot Launch",
    description:
      "Launch with select schools. Real-time tracking, smart notifications, and OTP-verified handoffs live.",
    status: "in-progress" as const,
    icon: "🚀",
    gradient: "from-primary-500 to-violet-600",
  },
  {
    date: ROADMAP_DATES.ANDROID_IOS_APPS,
    title: "Android & iOS Apps",
    description:
      "Native mobile apps for parents and drivers shipping at launch. Enhanced performance and push notifications.",
    status: "planned" as const,
    icon: "📱",
    gradient: "from-gray-400 to-gray-500",
  },
  {
    date: ROADMAP_DATES.WIDER_EXPANSION,
    title: "Wider Expansion",
    description:
      "Expanding to more regions based on demand. The more interest we see, the sooner we grow.",
    status: "planned" as const,
    icon: "🌍",
    gradient: "from-gray-400 to-gray-500",
  },
  {
    date: ROADMAP_DATES.SMART_FEATURES,
    title: "Smart Features",
    description:
      "Advanced route optimization, school events & holidays integration, exam schedules, and parent-school communication hub.",
    status: "planned" as const,
    icon: "✨",
    gradient: "from-gray-400 to-gray-500",
  },
];

export default function Roadmap() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100/15 rounded-full blur-3xl" />

      <div className="relative">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200/50 px-4 py-1.5 text-sm font-semibold text-violet-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Roadmap
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              What&apos;s <span className="text-gradient">Coming Next</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re building the future of school commute safety.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between gap-4">
            <div className="absolute top-6 left-8 right-8 h-0.5 bg-gradient-to-r from-primary-500 via-violet-400 to-gray-200" />

            {milestones.map((m, i) => (
              <AnimateOnScroll
                key={i}
                delay={i * 120}
                className="flex-1 relative"
              >
                {/* Dot */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 text-xl shadow-lg ${
                      m.status === "in-progress"
                        ? "border-primary-500 bg-gradient-to-br from-primary-500 to-violet-600 text-white shadow-primary-500/30"
                        : "border-gray-200 bg-white text-gray-400 shadow-gray-100"
                    }`}
                  >
                    {m.icon}
                    {m.status === "in-progress" && (
                      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-primary-500" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    m.status === "in-progress"
                      ? "border-primary-200 bg-gradient-to-b from-primary-50 to-white"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        m.status === "in-progress"
                          ? "text-primary-700 bg-primary-100"
                          : "text-gray-500 bg-gray-100"
                      }`}
                    >
                      {m.date}
                    </span>
                    {m.status === "in-progress" && (
                      <span className="text-xs font-medium text-primary-700 bg-gradient-to-r from-primary-100 to-violet-100 border border-primary-200 px-2 py-0.5 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-violet-400 to-gray-200" />
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="relative flex gap-4 pl-12">
                  {/* Dot */}
                  <div
                    className={`absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 text-sm ${
                      m.status === "in-progress"
                        ? "border-primary-500 bg-gradient-to-br from-primary-500 to-violet-600 text-white shadow-md shadow-primary-500/25"
                        : "border-gray-300 bg-white text-gray-400"
                    }`}
                  >
                    {m.icon}
                  </div>

                  <div
                    className={`w-full rounded-2xl border p-4 ${
                      m.status === "in-progress"
                        ? "border-primary-200 bg-gradient-to-b from-primary-50 to-white"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-xs font-bold ${
                          m.status === "in-progress"
                            ? "text-primary-600"
                            : "text-gray-500"
                        }`}
                      >
                        {m.date}
                      </span>
                      {m.status === "in-progress" && (
                        <span className="text-xs font-medium text-primary-700 bg-primary-100 border border-primary-200 px-1.5 py-0.5 rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
