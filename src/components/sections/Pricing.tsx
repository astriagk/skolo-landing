import SectionWrapper from "@/components/ui/SectionWrapper";
import OpenModalButton from "@/components/ui/OpenModalButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const schoolFeatures = [
  "Real-time GPS tracking",
  "Smart notifications",
  "OTP verification",
  "Unlimited tracking",
  "Priority support",
];

const privateFeatures = [
  "Everything in School Plan",
  "Direct parent subscription",
  "Multi-child support",
  "Flexible billing cycles",
  "Premium support",
];

const subscriptionTiers = [
  { label: "Monthly", icon: "📅", desc: "Pay month to month", badge: null },
  { label: "Quarterly", icon: "📆", desc: "Pay every 3 months", badge: null },
  { label: "Yearly", icon: "🗓️", desc: "Best value", badge: "Best Value" },
];

export default function Pricing() {
  return (
    <SectionWrapper
      id="pricing"
      className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
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
              Access through your school, or subscribe directly — your choice.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="mx-auto max-w-3xl grid gap-6 md:grid-cols-2">
          {/* Via School Card */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10 h-full">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-violet-500 to-secondary-500 p-0.5 rounded-2xl">
                <div className="absolute inset-0.5 bg-white rounded-2xl" />
              </div>
              <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  AVAILABLE NOW
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Via School
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
                      Redeem Code
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Provided by your school — no direct payment
                  </p>
                </div>

                <div className="flex items-start gap-3 mb-6 p-3 rounded-xl bg-primary-50 border border-primary-100">
                  <span className="text-xl mt-0.5">🏫</span>
                  <p className="text-sm text-primary-800 leading-relaxed">
                    Your school subscribes to Skolo and gives each parent a{" "}
                    <strong>redeem code</strong> to activate their account. No
                    billing required on your end.
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {schoolFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary-100 shrink-0">
                        <svg
                          className="h-3 w-3 text-secondary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <OpenModalButton className="w-full justify-center inline-flex items-center font-semibold rounded-xl transition-all duration-200 cursor-pointer px-6 py-3 text-base gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5">
                  Register Interest
                </OpenModalButton>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Private Plan Card */}
          <AnimateOnScroll delay={150}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 h-full flex flex-col hover:shadow-xl hover:border-gray-300 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Private Plan
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Subscribe directly
                  </p>
                </div>
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 shrink-0">
                  COMING SOON
                </span>
              </div>

              {/* Subscription tiers */}
              <div className="space-y-2 mb-6">
                {subscriptionTiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{tier.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {tier.label}
                        </p>
                        <p className="text-xs text-gray-500">{tier.desc}</p>
                      </div>
                    </div>
                    {tier.badge && (
                      <span className="text-xs font-semibold text-secondary-600 bg-secondary-50 border border-secondary-200 px-2 py-0.5 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 mb-4 text-center flex items-center justify-center gap-1">
                <span>💡</span>
                Pricing based on number of children — minimal monthly fee.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {privateFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 shrink-0">
                      <svg
                        className="h-3 w-3 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <OpenModalButton className="w-full justify-center inline-flex items-center font-semibold rounded-xl transition-all duration-200 cursor-pointer px-6 py-3 text-base gap-2 bg-transparent text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50">
                Notify Me When Available
              </OpenModalButton>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
