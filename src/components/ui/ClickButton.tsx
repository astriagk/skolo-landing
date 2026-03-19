"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getClickCount, recordClick } from "@/lib/api";

function getOrCreateAnonymousId(): string {
  let id = localStorage.getItem("skolo_anon_id");
  if (!id) {
    id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("skolo_anon_id", id);
  }
  return id;
}

export default function ClickButton() {
  const [count, setCount] = useState<number | null>(null);
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("skolo_clicked") === "1") setClicked(true);
    getClickCount()
      .then(setCount)
      .catch(() => setCount(0));
  }, []);

  const handleClick = async () => {
    if (clicked || isLoading) return;
    const anonymousId = getOrCreateAnonymousId();
    setClicked(true);
    setCount((c) => (c ?? 0) + 1);
    setIsLoading(true);
    try {
      const { alreadyCounted } = await recordClick(anonymousId);
      if (alreadyCounted) {
        setCount((c) => Math.max(0, (c ?? 1) - 1));
      } else {
        localStorage.setItem("skolo_clicked", "1");
      }
    } catch {
      setClicked(false);
      setCount((c) => Math.max(0, (c ?? 1) - 1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={clicked || isLoading}
      aria-label={clicked ? "You're interested!" : "Mark as interested"}
      className={cn(
        "group relative inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-400",
        clicked
          ? "bg-gradient-to-r from-primary-500 to-emerald-500 text-white shadow-lg shadow-primary-200 cursor-default scale-100"
          : "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-200 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-rose-200",
      )}
    >
      {/* Pulse glow — only when not yet clicked */}
      {!clicked && (
        <span className="btn-pulse absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-600" />
      )}

      {/* Heart icon */}
      <svg
        className={cn(
          "relative h-4 w-4 transition-all duration-300",
          clicked ? "scale-110" : "group-hover:scale-125",
        )}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={clicked ? 0 : 1.5}
        fill={clicked ? "currentColor" : "none"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>

      <span className="relative">
        {clicked ? (
          <>You&apos;re Interested! &nbsp;·&nbsp; {count ?? "..."}</>
        ) : (
          <>
            {isLoading ? "Saving..." : "I'm Interested"}
            {count !== null && count > 0 && (
              <span className="ml-1.5 rounded-full bg-white/20 px-1.5 py-0.5 text-xs font-bold">
                {count}
              </span>
            )}
          </>
        )}
      </span>

      {/* Checkmark badge on clicked */}
      {clicked && (
        <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-white/25">
          <svg
            className="h-2.5 w-2.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
