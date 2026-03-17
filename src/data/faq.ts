export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "How accurate is the GPS tracking?",
    answer:
      "Skolo uses TomTom's enterprise-grade GPS technology, providing real-time tracking accurate to within 5-10 meters. The location updates every few seconds, giving you a smooth and reliable tracking experience even in congested city areas.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Absolutely. We use industry-standard encryption for all data in transit and at rest. Your personal information and your child's location data are never shared with third parties. All data is stored securely on encrypted servers, complying with global data protection standards.",
  },
  {
    question: "How does the OTP verification work?",
    answer:
      "When the bus arrives at the pickup or drop-off point, the driver's app generates a one-time password (OTP). The parent or authorized guardian must provide this OTP to complete the handoff. This ensures only verified adults can pick up or receive your child.",
  },
  {
    question: "How much does Skolo cost?",
    answer:
      "Skolo offers affordable plans for schools and families. Schools can subscribe to our plans or use redeem codes. Parents will always have a free basic tier. Register your interest to learn more about pricing.",
  },
  {
    question: "How does a school get onboarded?",
    answer:
      "It's simple! A school administrator signs up, adds their bus fleet and routes, and invites parents to join using a unique school code. Our team provides hands-on support during setup to ensure a smooth transition. The entire process typically takes less than a week.",
  },
  {
    question: "Where is Skolo available?",
    answer:
      "We're launching in select regions first with plans to expand globally based on demand. Register your interest to bring Skolo to your region — the more interest we see, the sooner we expand.",
  },
  {
    question: "What devices does Skolo support?",
    answer:
      "Skolo works on any modern smartphone — both Android and iOS. Parents can track through the mobile app or a web browser. Drivers use our lightweight Android app that works well even on budget smartphones.",
  },
  {
    question: "What happens if there's no internet connection?",
    answer:
      "The driver's app caches location data locally and syncs when connectivity is restored. For parents, the last known location is always displayed with a timestamp. The OTP system also works offline with pre-generated codes.",
  },
  {
    question: "Can I track multiple children?",
    answer:
      "Yes! Parents can add multiple children to their account, even if they're in different schools or on different buses. You'll see each child's live location and receive separate notifications for each one.",
  },
  {
    question: "How is Skolo different from other tracking apps?",
    answer:
      "Skolo is purpose-built for school commutes. Unlike generic trackers, we offer OTP-based secure handoffs, school fleet management, driver route optimization, and a connected ecosystem where parents, schools, and drivers work together — all powered by Astria GK's technology.",
  },
];
