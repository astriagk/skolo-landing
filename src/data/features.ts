export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const parentFeatures: Feature[] = [
  {
    icon: "📍",
    title: "Live GPS Tracking",
    description:
      "See your child's school bus on a real-time map. Know exactly where they are at every moment.",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    description:
      "Get alerts when the bus is 500m away, at pickup, and at drop. Never miss a moment.",
  },
  {
    icon: "🔐",
    title: "OTP Verification",
    description:
      "Secure pickup and drop with one-time passwords. Only verified adults can receive your child.",
  },
  {
    icon: "📊",
    title: "Route History",
    description:
      "View past trips, timings, and routes. Stay informed about your child's daily commute patterns.",
  },
  {
    icon: "⏱️",
    title: "ETA Updates",
    description:
      "Know the exact estimated arrival time so you can plan your morning and evening routine.",
  },
  {
    icon: "👥",
    title: "Family Access",
    description:
      "Share tracking access with family members. Grandparents, guardians — everyone stays connected.",
  },
];

export const schoolFeatures: Feature[] = [
  {
    icon: "🖥️",
    title: "Fleet Dashboard",
    description:
      "Monitor all buses in real-time from a single dashboard. Complete visibility of your transport operations.",
  },
  {
    icon: "👨‍🎓",
    title: "Student Monitoring",
    description:
      "Track student boarding and drop-off with digital attendance. Know every child's status instantly.",
  },
  {
    icon: "🎫",
    title: "Subscription Management",
    description:
      "Manage transport subscriptions or issue redeem codes for parents. Flexible billing options.",
  },
  {
    icon: "📈",
    title: "Analytics & Reports",
    description:
      "Get insights on route efficiency, driver performance, and student attendance patterns.",
  },
  {
    icon: "📱",
    title: "Parent Communication",
    description:
      "Send updates and announcements directly to parents through the app. Reduce phone calls.",
  },
  {
    icon: "🛡️",
    title: "Safety Compliance",
    description:
      "Maintain safety records, track incidents, and ensure compliance with transport regulations.",
  },
];

export const driverFeatures: Feature[] = [
  {
    icon: "🗺️",
    title: "Route Optimization",
    description:
      "Get the most efficient routes calculated automatically. Save time and fuel on every trip.",
  },
  {
    icon: "📋",
    title: "Pickup Sequencing",
    description:
      "Structured pickup and drop-off flow. Know exactly which stop is next and who to expect.",
  },
  {
    icon: "🧭",
    title: "Navigation Assistance",
    description:
      "Turn-by-turn navigation built-in. Never get lost, even on unfamiliar routes.",
  },
  {
    icon: "✅",
    title: "Digital Attendance",
    description:
      "Mark student pickups and drops with a tap. No more paper registers or manual tracking.",
  },
  {
    icon: "📞",
    title: "Parent Connect",
    description:
      "Quick one-tap communication with parents when needed, without sharing personal numbers.",
  },
  {
    icon: "🚨",
    title: "Emergency Alerts",
    description:
      "One-tap SOS button for emergencies. Instantly notify school administration and parents.",
  },
];
