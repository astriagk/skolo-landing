"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { INDIAN_CITIES } from "@/data/cities";
import { cn } from "@/lib/utils";

interface CityDropdownProps {
  value: string;
  onChange: (city: string) => void;
}

export default function CityDropdown({ value, onChange }: CityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Sync search display when value changes externally (e.g. form reset)
  useEffect(() => {
    if (!isOpen) setSearch("");
  }, [value, isOpen]);

  const filtered = INDIAN_CITIES.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const select = useCallback(
    (city: string) => {
      onChange(city);
      setSearch("");
      setIsOpen(false);
      setHighlightedIndex(0);
    },
    [onChange]
  );

  const close = useCallback(() => {
    setSearch("");
    setIsOpen(false);
    setHighlightedIndex(0);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (!listRef.current) return;
    const item = listRef.current.children[highlightedIndex] as HTMLElement;
    item?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[highlightedIndex]) select(filtered[highlightedIndex]);
    } else if (e.key === "Escape") {
      close();
    }
  };

  const displayValue = isOpen ? search : value;

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        City *
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={displayValue}
          onChange={(e) => {
            setSearch(e.target.value);
            setHighlightedIndex(0);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={value ? value : "Select your city..."}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          // Prevent browser from showing saved suggestions
          name={`city-${Math.random()}`}
          readOnly={false}
          className={cn(
            "w-full rounded-xl border px-4 py-3 pr-10 text-sm outline-none transition-all cursor-pointer",
            value && !isOpen
              ? "border-primary-300 bg-primary-50/40 text-gray-900 font-medium"
              : "border-gray-300 text-gray-900",
            isOpen
              ? "border-primary-500 ring-2 ring-primary-500/20"
              : "hover:border-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
          )}
        />

        {/* Right icons: clear button when selected, chevron always */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {value && !isOpen && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
                setSearch("");
              }}
              className="flex h-5 w-5 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Clear selection"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <span className="pointer-events-none text-gray-400">
            <svg
              className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div
          ref={listRef}
          className="absolute z-30 mt-1 w-full max-h-52 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl"
        >
          {filtered.length > 0 ? (
            filtered.map((city, i) => (
              <button
                key={city}
                type="button"
                onMouseDown={(e) => e.preventDefault()} // prevent input blur before click
                onClick={() => select(city)}
                onMouseEnter={() => setHighlightedIndex(i)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2.5 text-left text-sm transition-colors",
                  i === highlightedIndex && "bg-primary-50",
                  city === value ? "text-primary-700 font-semibold" : "text-gray-700"
                )}
              >
                {city}
                {city === value && (
                  <svg className="h-4 w-4 text-primary-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-sm text-gray-400">
              No cities found for &ldquo;{search}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
