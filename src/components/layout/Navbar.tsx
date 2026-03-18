"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { CountdownPill } from "@/components/ui/LaunchCountdown";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-200/50"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/main-logo.png"
            alt={SITE_NAME}
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-primary-700 bg-primary-50/80"
                    : "text-gray-600 hover:text-primary-600 hover:bg-gray-50/80",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <CountdownPill />
          <Button
            href="#interest-form"
            size="sm"
            className="shadow-lg shadow-primary-500/20"
          >
            Join Us
          </Button>
        </div>

        {/* Mobile CTA + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            href="#interest-form"
            size="sm"
            className="shadow-lg shadow-primary-500/20"
          >
            Join Us
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200/60 bg-white/80 backdrop-blur-sm cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-gray-100",
          isMobileMenuOpen ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Button
              href="#interest-form"
              size="sm"
              className="w-full justify-center shadow-lg shadow-primary-500/20"
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
