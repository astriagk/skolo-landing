"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const form = document.getElementById("interest-form");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const formTop = form?.getBoundingClientRect().top ?? Infinity;

      setIsVisible(heroBottom < 0 && formTop > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#interest-form"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-primary-500/30 transition-all duration-300 hover:shadow-primary-500/50 hover:-translate-y-0.5 md:bottom-8 md:right-8",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <svg
        className="h-4 w-4"
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
  );
}
