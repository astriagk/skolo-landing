import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary-100/30 via-violet-100/20 to-secondary-100/30 rounded-full blur-3xl" />

      <div className="relative">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200/50 px-4 py-1.5 text-sm font-semibold text-primary-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              Pricing
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable plans designed for every school and family.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="mx-auto max-w-3xl grid gap-6 md:grid-cols-2">
          {/* Early Access Card */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-violet-500 to-secondary-500 p-0.5 rounded-2xl">
                <div className="absolute inset-0.5 bg-white rounded-2xl" />
              </div>
              <div className="relative bg-white rounded-2xl p-8">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  CURRENT
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Early Access</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">Free</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">For first 500 families</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Real-time GPS tracking",
                    "Smart notifications",
                    "OTP verification",
                    "Unlimited tracking",
                    "WhatsApp alerts",
                    "Priority support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary-100 shrink-0">
                        <svg className="h-3 w-3 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Scarcity progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>327 spots claimed</span>
                    <span>500 total</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-primary-500 via-violet-500 to-secondary-400" style={{ width: "65%" }} />
                  </div>
                  <p className="text-xs text-warning-600 font-semibold mt-1.5 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-warning-500 animate-pulse" />
                    Only 173 spots remaining!
                  </p>
                </div>

                <Button href="#interest-form" className="w-full justify-center shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30">
                  Join Us — It&apos;s Free
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* After Launch Card */}
          <AnimateOnScroll delay={150}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 h-full flex flex-col hover:shadow-xl hover:border-gray-300 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">After Launch</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-gray-900">&#8377;99</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Per student, billed via school</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Early Access",
                  "School fleet dashboard",
                  "Analytics & reports",
                  "Route optimization",
                  "Multi-child support",
                  "API access",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 shrink-0">
                      <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-400 text-center mb-4">
                Schools can subscribe or use redeem codes
              </p>

              <Button href="#interest-form" variant="outline" className="w-full justify-center">
                Register Interest
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
