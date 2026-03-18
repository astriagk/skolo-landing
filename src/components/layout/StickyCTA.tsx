"use client";

export default function StickyCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Animated glow background */}
      <div className="fixed bottom-6 right-6 z-30 md:bottom-8 md:right-8">
        <div className="h-16 w-16 rounded-full bg-primary-600 opacity-60 animate-glow-pulse blur-xl" />
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-2xl shadow-primary-500/40 transition-all duration-300 hover:shadow-primary-500/60 hover:-translate-y-1 hover:scale-105 md:bottom-28 md:right-8"
        aria-label="Scroll to top"
      >
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
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* Main button */}
      <a
        href="#interest-form"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-primary-500/40 transition-all duration-300 hover:shadow-primary-500/60 hover:-translate-y-1 hover:scale-105 animate-bounce-subtle md:bottom-8 md:right-8"
      >
        <svg
          className="h-4 w-4 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Join Us
      </a>
    </>
  );
}
