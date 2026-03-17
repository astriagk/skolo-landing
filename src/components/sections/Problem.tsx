import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const painPoints = [
  {
    icon: "😰",
    title: "Is the bus late... or lost?",
    description:
      "No way to know if the bus is stuck in traffic, took a wrong turn, or broke down. You're left guessing every single day.",
    gradient: "from-red-500/10 to-orange-500/10",
    border: "border-red-200/60",
    iconBg: "bg-red-100",
  },
  {
    icon: "📵",
    title: "Zero visibility during commute",
    description:
      "Once your child boards the bus, you have no idea where they are for the next 30-60 minutes. Complete blackout.",
    gradient: "from-amber-500/10 to-yellow-500/10",
    border: "border-amber-200/60",
    iconBg: "bg-amber-100",
  },
  {
    icon: "📞",
    title: "Calling the driver... again",
    description:
      "Every morning and evening, dozens of parents calling the same driver asking 'Where are you?' Frustrating for everyone.",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-200/60",
    iconBg: "bg-violet-100",
  },
  {
    icon: "⚠️",
    title: "No secure handoff verification",
    description:
      "Anyone could claim to pick up your child. There's no system to verify that the right person is at the right stop.",
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-200/60",
    iconBg: "bg-rose-100",
  },
];

export default function Problem() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-danger-100/20 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-danger-50 border border-danger-200/50 px-4 py-1.5 text-sm font-semibold text-danger-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-danger-500 animate-pulse" />
              The Problem
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Every Parent&apos;s <span className="text-danger-500">Daily Worry</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Millions of parents send their children to school every day
              with zero visibility into their commute. It shouldn&apos;t be this way.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 stagger-children">
          {painPoints.map((point, i) => (
            <AnimateOnScroll key={i}>
              <div className={`group relative rounded-2xl border ${point.border} bg-gradient-to-br ${point.gradient} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${point.iconBg} text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
