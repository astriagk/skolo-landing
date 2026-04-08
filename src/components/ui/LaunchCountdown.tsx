"use client";

import { useState, useEffect } from "react";

const LAUNCH_DATE = new Date("2026-06-10T00:00:00+05:30");

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Small inline pill for the Navbar */
export function CountdownPill() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-primary-50 border border-primary-200 px-3 py-1 text-xs font-semibold text-primary-700">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
      </span>
      Launching May 1 &bull; {time.days}d {pad(time.hours)}h {pad(time.minutes)}
      m
    </span>
  );
}

/** Big countdown for the Hero section */
export function CountdownHero() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="mt-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
        </span>
        Launching May 1, 2026
      </p>
      <div className="flex items-end gap-1">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-end gap-1">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-4xl font-bold tabular-nums leading-none tracking-tight text-gray-900">
                {pad(u.value)}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="text-2xl font-light text-gray-300 mb-5 mx-1">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Rocket launch style final countdown (T-3, 2, 1...) */
export function RocketCountdown() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setIsLaunched(true);
        setTimeLeft(0);
      } else {
        setTimeLeft(Math.ceil(diff / 1000)); // Round up to nearest second
      }
    };

    updateCountdown();
    const id = setInterval(updateCountdown, 100); // Update more frequently for smooth countdown
    return () => clearInterval(id);
  }, []);

  if (isLaunched) {
    return (
      <div className="text-center">
        <div className="text-6xl font-black text-primary-600 animate-pulse">
          🚀 LIFTOFF! 🚀
        </div>
      </div>
    );
  }

  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Show rocket countdown with T - format
  return (
    <div className="text-center py-8 mt-12 mb-8">
      <div
        className="text-3xl md:text-5xl mb-4 animate-bounce"
        style={{ animationDuration: "1.5s" }}
      >
        🚀
      </div>
      <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary-500 mb-6">
        Launching May 1, 2026
      </p>
      <div className="text-3xl md:text-6xl font-black text-primary-600 font-mono tracking-wider animate-pulse mb-4">
        T - {pad(days)}:{pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </div>
      <p className="text-[10px] md:text-xs text-primary-500 mt-4 mb-2 font-semibold uppercase tracking-widest">
        Days : Hours : Minutes : Seconds
      </p>
      <p className="text-xs md:text-sm text-primary-500 mt-3 font-semibold">
        Ignition Sequence
      </p>
    </div>
  );
}
