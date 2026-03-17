"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SelectDropdownProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
}

export default function SelectDropdown({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required,
}: SelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && " *"}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full rounded-xl border px-4 py-3 text-sm text-left flex items-center justify-between transition-all outline-none",
          isOpen
            ? "border-primary-500 ring-2 ring-primary-500/20"
            : "border-gray-300 hover:border-gray-400",
          !value && "text-gray-400"
        )}
      >
        <span>{selectedLabel ?? placeholder}</span>
        <svg
          className={cn("h-4 w-4 text-gray-400 shrink-0 transition-transform", isOpen && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50 transition-colors cursor-pointer",
                opt.value === value && "bg-primary-50 text-primary-700 font-medium"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
