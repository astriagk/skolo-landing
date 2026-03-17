import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const benefits = [
  {
    icon: "😌",
    title: "Never Call the Driver Again",
    description:
      "See the bus on a live map. Know exactly when it will arrive at your stop.",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    border: "border-blue-200/50",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-50",
  },
  {
    icon: "⏰",
    title: "Know the Exact ETA",
    description:
      "Plan your mornings and evenings perfectly. No more standing at the bus stop for 20 minutes.",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    border: "border-emerald-200/50",
    iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-50",
  },
  {
    icon: "🔒",
    title: "Verified Handoffs Only",
    description:
      "OTP ensures only authorized people pick up your child. Safety you can count on.",
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    border: "border-amber-200/50",
    iconBg: "bg-gradient-to-br from-amber-100 to-amber-50",
  },
  {
    icon: "🏫",
    title: "Schools Prove Duty of Care",
    description:
      "Complete transport visibility builds parent trust and reduces complaints by up to 80%.",
    gradient: "from-violet-500/10 via-violet-500/5 to-transparent",
    border: "border-violet-200/50",
    iconBg: "bg-gradient-to-br from-violet-100 to-violet-50",
  },
  {
    icon: "🚌",
    title: "Drivers Focus on Driving",
    description:
      "No more phone calls while driving. Parents can see everything in the app.",
    gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    border: "border-cyan-200/50",
    iconBg: "bg-gradient-to-br from-cyan-100 to-cyan-50",
  },
  {
    icon: "💰",
    title: "Save Time and Fuel",
    description:
      "Optimized routes mean shorter trips, lower fuel costs, and happier everyone.",
    gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
    border: "border-rose-200/50",
    iconBg: "bg-gradient-to-br from-rose-100 to-rose-50",
  },
];

export default function Benefits() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-gray-50 via-gray-50/80 to-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-100/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary-100/20 rounded-full blur-3xl" />

      <div className="relative">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 border border-secondary-200/50 px-4 py-1.5 text-sm font-semibold text-secondary-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
              Benefits
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Why Families <span className="text-gradient">Love Skolo</span>
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll key={i}>
              <div
                className={`group relative rounded-2xl border ${benefit.border} bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${benefit.iconBg} text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
