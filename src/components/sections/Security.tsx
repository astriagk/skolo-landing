import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const securityFeatures = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "OTP-Based Verification",
    description: "Every pickup and drop requires a unique one-time password for verification.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Encrypted Data",
    description: "All data encrypted in transit and at rest using industry-standard protocols.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Secure Data Storage",
    description: "All user data stored on secure, encrypted servers complying with global data protection standards.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "No Third-Party Sharing",
    description: "Your family's data is never sold or shared with advertisers or third parties.",
  },
];

export default function Security() {
  return (
    <SectionWrapper>
      <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 p-8 md:p-12 text-white overflow-hidden relative noise">
        {/* Animated background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-glow-pulse" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative">
          <div className="text-center mb-10">
            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 text-sm font-medium mb-4">
                <svg className="h-4 w-4 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Security & Trust
              </div>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Your Family&apos;s Data Is{" "}
                <span className="bg-gradient-to-r from-secondary-400 via-emerald-400 to-secondary-400 bg-clip-text text-transparent">
                  Safe With Us
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Built with security at its core. Every feature is designed with
                your family&apos;s privacy and safety in mind.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 stagger-children">
            {securityFeatures.map((feature, i) => (
              <AnimateOnScroll key={i}>
                <div className="group flex gap-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-violet-500/20 text-primary-300 border border-primary-500/20 group-hover:border-primary-400/40 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {["Powered by Astria GK", "Privacy Focused", "GDPR Ready"].map((label) => (
                <span key={label} className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/5">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-secondary-400 to-emerald-400" />
                  {label}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
