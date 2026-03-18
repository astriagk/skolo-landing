"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import InterestFormContent from "@/components/form/InterestFormContent";

type VisualState = "open" | "closing";

export default function InterestModal() {
  const [visible, setVisible] = useState(false);
  const [visualState, setVisualState] = useState<VisualState>("open");
  const shownRef = useRef(false);

  const tryOpen = () => {
    if (shownRef.current) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("modal_shown")) return;
    if (localStorage.getItem("skolo_registered")) return;
    shownRef.current = true;
    sessionStorage.setItem("modal_shown", "1");
    setVisualState("open");
    setVisible(true);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      if (scrolled / document.documentElement.scrollHeight >= 0.5) {
        tryOpen();
        window.removeEventListener("scroll", onScroll);
      }
    };
    const onMouseLeave = (e: MouseEvent) => { if (e.clientY <= 0) tryOpen(); };
    const onVisibility = () => { if (document.visibilityState === "hidden") tryOpen(); };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const close = () => {
    setVisualState("closing");
    setTimeout(() => setVisible(false), 250);
  };

  if (!visible) return null;

  const isOpen = visualState === "open";

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-250",
        isOpen ? "bg-black/40 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none pointer-events-none"
      )}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        className={cn(
          "relative w-full max-w-xl rounded-2xl bg-white shadow-2xl transition-all duration-250 flex flex-col max-h-[90vh]",
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 mb-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
              </span>
              Now Accepting Registrations
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Join <span className="text-gradient">Us</span>
            </h3>
          </div>
          <button
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto p-6">
          <InterestFormContent compact />
        </div>
      </div>
    </div>
  );
}
