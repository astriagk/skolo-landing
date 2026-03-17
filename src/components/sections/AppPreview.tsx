import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const screens = [
  {
    title: "Live Tracking",
    description: "Real-time bus location on map",
    bg: "from-primary-500 to-primary-600",
    mockContent: (
      <div className="p-3">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-t-lg p-3 text-white text-xs font-semibold">
          Tracking - Bus #12
        </div>
        <div className="bg-gradient-to-b from-primary-50 to-blue-50 h-28 flex items-center justify-center relative">
          <div className="text-3xl">🗺️</div>
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium shadow-md flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-500 animate-pulse" />
            2.3 km away
          </div>
        </div>
        <div className="bg-white p-2 rounded-b-lg space-y-1.5">
          <div className="flex items-center gap-2 text-xs">
            <span className="h-5 w-5 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 text-xs">✓</span>
            <span className="text-gray-600">Picked up &bull; 8:15 AM</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs">&rarr;</span>
            <span className="text-gray-800 font-medium">En route to school</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Notifications",
    description: "Timely alerts for every event",
    bg: "from-warning-400 to-warning-500",
    mockContent: (
      <div className="p-3 space-y-2">
        <div className="text-xs font-semibold text-gray-500 px-1">Today</div>
        {[
          { icon: "🔔", text: "Bus is 500m away!", time: "8:20 AM", bg: "bg-gradient-to-r from-warning-50 to-amber-50" },
          { icon: "✅", text: "Aarav picked up safely", time: "8:22 AM", bg: "bg-gradient-to-r from-secondary-50 to-emerald-50" },
          { icon: "🏫", text: "Arrived at school", time: "8:45 AM", bg: "bg-gradient-to-r from-primary-50 to-blue-50" },
          { icon: "🔐", text: "OTP verified: Drop-off", time: "3:30 PM", bg: "bg-gradient-to-r from-purple-50 to-violet-50" },
          { icon: "🏠", text: "Aarav reached home", time: "4:05 PM", bg: "bg-gradient-to-r from-secondary-50 to-emerald-50" },
        ].map((n, i) => (
          <div key={i} className={`flex items-center gap-2 ${n.bg} rounded-lg p-2 shadow-sm`}>
            <span className="text-sm">{n.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-800 truncate">{n.text}</p>
              <p className="text-xs text-gray-500">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "OTP Security",
    description: "Verified pickup every time",
    bg: "from-secondary-500 to-secondary-600",
    mockContent: (
      <div className="p-4 flex flex-col items-center justify-center h-full">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary-50 to-emerald-50 flex items-center justify-center mb-3 shadow-inner">
          <span className="text-3xl">🔐</span>
        </div>
        <p className="text-xs text-gray-500 mb-2">Pickup OTP</p>
        <div className="flex gap-2 mb-4">
          {["4", "8", "2", "9"].map((d, i) => (
            <div key={i} className="h-10 w-8 rounded-lg bg-gradient-to-b from-primary-50 to-white border-2 border-primary-200 flex items-center justify-center text-lg font-bold text-primary-700 shadow-sm">
              {d}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center">
          Share this code with the driver for verified pickup
        </p>
        <div className="mt-3 w-full bg-gradient-to-r from-secondary-500 to-emerald-500 text-white text-xs font-semibold py-2.5 rounded-xl text-center shadow-lg shadow-secondary-500/25">
          Verify Pickup
        </div>
      </div>
    ),
  },
];

export default function AppPreview() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary-100/30 via-violet-100/20 to-secondary-100/30 rounded-full blur-3xl" />

      <div className="relative">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200/50 px-4 py-1.5 text-sm font-semibold text-violet-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              App Preview
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              See Skolo <span className="text-gradient">In Action</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A beautifully designed app that makes tracking your child&apos;s
              commute effortless.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
          {screens.map((screen, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className="min-w-[260px] snap-center md:min-w-0 group">
                <div className="mx-auto w-56">
                  {/* Phone frame */}
                  <div className="rounded-[1.8rem] border-4 border-gray-800 bg-gray-800 p-0.5 shadow-2xl shadow-gray-900/30 group-hover:shadow-primary-900/20 transition-shadow duration-300">
                    <div className="rounded-[1.5rem] bg-white overflow-hidden">
                      {/* Notch */}
                      <div className="flex justify-center pt-2 pb-1">
                        <div className="h-1 w-12 rounded-full bg-gray-300" />
                      </div>
                      {/* Content */}
                      <div className="min-h-[280px]">{screen.mockContent}</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-gray-900">{screen.title}</h3>
                  <p className="text-sm text-gray-500">{screen.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Video placeholder */}
        <AnimateOnScroll>
          <div className="mt-14 mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 p-8 text-center relative overflow-hidden group cursor-pointer">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 group-hover:via-primary-500/20 transition-all duration-500" />
            <div className="relative">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">Watch Demo Video</p>
              <p className="text-sm text-gray-400 mt-1">
                See how Skolo works in 2 minutes
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
