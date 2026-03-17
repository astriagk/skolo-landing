"use client";

import { useState, useRef, useEffect } from "react";
import { INDIAN_CITIES } from "@/data/cities";
import { cn } from "@/lib/utils";

interface CityDropdownProps {
  value: string;
  onChange: (city: string) => void;
}

export default function CityDropdown({ value, onChange }: CityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = INDIAN_CITIES.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
        if (!INDIAN_CITIES.includes(search)) setSearch(value);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [search, value]);

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        City
      </label>
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search your city..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-10 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      {isOpen && filtered.length > 0 && (
        <div className="absolute z-20 mt-1 w-full max-h-48 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          {filtered.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                onChange(city);
                setSearch(city);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50 transition-colors cursor-pointer",
                city === value && "bg-primary-50 text-primary-700 font-medium"
              )}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
