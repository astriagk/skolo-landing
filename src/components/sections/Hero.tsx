"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { RocketCountdown } from "@/components/ui/LaunchCountdown";
import InterestCounter from "@/components/ui/InterestCounter";
import ClickButton from "@/components/ui/ClickButton";
import { openInterestModal } from "@/lib/modalController";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary-400/20 to-purple-400/20 blur-3xl animate-blob" />
        <div
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-secondary-400/20 to-cyan-400/20 blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 left-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-violet-400/10 to-primary-400/10 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1a2e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Content */}
          <div>
            <AnimateOnScroll>
              <Badge
                variant="success"
                className="mb-6 shadow-lg shadow-secondary-500/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-500"></span>
                </span>
                Now Accepting Registrations
              </Badge>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Know Your Child Is <span className="shimmer-text">Safe</span>
                .
                <br />
                <span className="text-gradient">Every Trip.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
                Track your child&apos;s school bus in real-time with GPS
                tracking, get smart alerts when they&apos;re near, and verify
                every pickup with OTP security.{" "}
                <span className="font-semibold text-gray-800">
                  No more worrying. No more calling the driver.
                </span>
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-shadow"
                  onClick={openInterestModal}
                >
                  Join Us
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
                <Button
                  href="#how-it-works"
                  variant="secondary"
                  size="lg"
                  className="glass"
                >
                  See How It Works
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <svg
                    className="h-3.5 w-3.5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-sm font-bold text-gray-900">
                    Secure & Private
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold tracking-wide text-primary-700 uppercase">
                    Powered by
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary-600 to-primary-700" />
                  <span className="text-sm font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                    Astria GK
                  </span>
                </div>
                <InterestCounter />
                <ClickButton />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={450}>
              <RocketCountdown />
            </AnimateOnScroll>

            {/* Audience-specific CTAs */}
            <AnimateOnScroll delay={500}>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Parents", icon: "👥" },
                  { label: "Schools", icon: "🏫" },
                  { label: "Drivers", icon: "🚌" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={openInterestModal}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary-200/60 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm hover:border-primary-400 hover:bg-primary-50 hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Phone Mockup */}
          <AnimateOnScroll delay={300}>
            <div className="relative flex justify-center">
              {/* Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-br from-primary-400/30 via-violet-400/20 to-secondary-400/30 blur-3xl animate-glow-pulse" />

              <div className="relative w-72 md:w-80 animate-float">
                {/* Phone frame */}
                <div className="rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 p-1 shadow-2xl shadow-primary-900/20">
                  <div className="rounded-[2rem] bg-gradient-to-b from-primary-50 to-white overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                        </svg>
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2 22h20V2z" />
                        </svg>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 pb-4 pt-2">
                      <p className="text-white font-semibold text-sm">Skolo</p>
                      <p className="text-primary-100 text-xs mt-0.5">
                        Tracking Aarav&apos;s Bus
                      </p>
                    </div>

                    {/* Map area */}
                    <div className="relative bg-gradient-to-b from-primary-50 to-blue-50 h-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Route line */}
                          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-primary-500 to-secondary-400 rounded-full" />
                          {/* Bus icon */}
                          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white text-lg shadow-lg shadow-primary-500/40 mx-auto">
                            🚌
                          </div>
                          {/* Pulse */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-primary-400/20 animate-ping" />
                        </div>
                      </div>
                      {/* Map dots */}
                      <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                        <span className="h-2 w-2 rounded-full bg-secondary-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-700">
                          500m away &bull; 3 min
                        </span>
                      </div>
                    </div>

                    {/* Notification cards */}
                    <div className="p-3 space-y-2">
                      <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-secondary-50 to-emerald-50 p-3 shadow-sm">
                        <span className="text-lg">🔔</span>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">
                            Bus is approaching!
                          </p>
                          <p className="text-xs text-gray-500">
                            500m from pickup point
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary-50 to-violet-50 p-3 shadow-sm">
                        <span className="text-lg">🔐</span>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">
                            OTP for pickup: 4829
                          </p>
                          <p className="text-xs text-gray-500">
                            Share with driver
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges around phone */}
                <div className="absolute -left-10 top-20 rounded-xl bg-white/90 backdrop-blur-sm px-3 py-2 shadow-lg border border-white/50 hidden md:flex items-center gap-2 animate-float-slow">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-100 text-secondary-600 text-sm">
                    ✓
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    Picked up safely
                  </span>
                </div>
                <div className="absolute -right-8 bottom-32 rounded-xl bg-white/90 backdrop-blur-sm px-3 py-2 shadow-lg border border-white/50 hidden md:flex items-center gap-2 animate-float-delayed">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm">
                    📍
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    Live tracking
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 70C1200 73.3 1320 66.7 1380 63.3L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
