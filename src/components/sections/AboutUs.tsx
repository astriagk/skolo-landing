import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const values = [
  {
    icon: "🛡️",
    title: "Safety First",
    description: "Every feature we build starts with one question: does this make children safer?",
    gradient: "from-blue-50 to-indigo-50",
    border: "border-blue-200/50",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description: "Your family's data belongs to you. We will never sell it or share it with third parties.",
    gradient: "from-violet-50 to-purple-50",
    border: "border-violet-200/50",
  },
  {
    icon: "🌍",
    title: "Built for Everyone",
    description: "Designed for real roads, traffic, and school systems worldwide. Works on budget smartphones.",
    gradient: "from-emerald-50 to-green-50",
    border: "border-emerald-200/50",
  },
];

export default function AboutUs() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100/10 rounded-full blur-3xl" />

      <div className="relative grid gap-12 md:grid-cols-2 items-center">
        {/* Story */}
        <div>
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 border border-secondary-200/50 px-4 py-1.5 text-sm font-semibold text-secondary-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
              About Us
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Built with Purpose,{" "}
              <span className="text-gradient">
                For Every Family
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Skolo was born from a simple frustration — as parents ourselves,
                we spent every morning and evening worrying about our
                children&apos;s commute. Are they on the bus? Is the bus stuck?
                Did they reach safely?
              </p>
              <p>
                We realized millions of parents worldwide share this anxiety. So we
                built Skolo — a platform that uses technology to bring
                transparency, safety, and peace of mind to school commutes.
              </p>
              <p>
                Our mission is simple:{" "}
                <span className="font-semibold text-gray-800">
                  every child deserves a safe commute, and every parent deserves
                  peace of mind.
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 shadow-sm">
              <Image
                src="/astria-gk-logo.png"
                alt="Astria GK"
                width={72}
                height={72}
                className="h-14 w-14 rounded-full"
              />
              <div>
                <p className="text-xs text-gray-400">A product by</p>
                <p className="text-base font-bold text-gray-800">Astria GK</p>
                <p className="text-xs text-gray-500">Bangalore, India</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Values */}
        <div className="space-y-4 stagger-children">
          {values.map((value, i) => (
            <AnimateOnScroll key={i}>
              <div className={`group flex gap-4 rounded-2xl border ${value.border} bg-gradient-to-br ${value.gradient} p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm text-2xl group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
