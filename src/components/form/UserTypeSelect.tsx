"use client";

import { cn } from "@/lib/utils";

export type UserType = "parent" | "school" | "driver";

interface UserTypeSelectProps {
  value: UserType | null;
  onChange: (type: UserType) => void;
  onSelect?: (type: UserType) => void;
}

const options = [
  {
    type: "parent" as UserType,
    emoji: "👥",
    title: "Parent",
    description: "Track your child's commute in real time",
    iconBg: "from-blue-100 to-primary-100",
    activeBorder: "border-primary-500",
    activeBg: "bg-primary-50",
    activeText: "text-primary-700",
    activeBadge: "from-primary-500 to-blue-600",
    activeShadow: "shadow-primary-100",
  },
  {
    type: "school" as UserType,
    emoji: "🏫",
    title: "School",
    description: "Manage routes, fleets & drivers easily",
    iconBg: "from-violet-100 to-purple-100",
    activeBorder: "border-violet-500",
    activeBg: "bg-violet-50",
    activeText: "text-violet-700",
    activeBadge: "from-violet-500 to-purple-600",
    activeShadow: "shadow-violet-100",
  },
  {
    type: "driver" as UserType,
    emoji: "🚌",
    title: "Driver",
    description: "Join as a bus driver or operator",
    iconBg: "from-amber-100 to-orange-100",
    activeBorder: "border-amber-500",
    activeBg: "bg-amber-50",
    activeText: "text-amber-700",
    activeBadge: "from-amber-500 to-orange-500",
    activeShadow: "shadow-amber-100",
  },
];

export default function UserTypeSelect({
  value,
  onChange,
  onSelect,
}: UserTypeSelectProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {options.map((opt) => {
        const selected = value === opt.type;
        return (
          <button
            key={opt.type}
            type="button"
            onClick={() => {
              onChange(opt.type);
              onSelect?.(opt.type);
            }}
            className={cn(
              "group relative flex flex-col items-center gap-3 rounded-2xl border-2 p-5 text-center transition-all duration-200 cursor-pointer outline-none",
              "hover:scale-[1.03] hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary-400",
              selected
                ? `${opt.activeBorder} ${opt.activeBg} scale-[1.03] shadow-lg ${opt.activeShadow}`
                : "border-gray-200 bg-white hover:border-gray-300 shadow-sm",
            )}
          >
            {/* Selected badge */}
            {selected && (
              <span
                className={cn(
                  "absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br shadow-md",
                  opt.activeBadge,
                )}
              >
                <svg
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            )}

            {/* Icon */}
            <span
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-3xl shadow-sm transition-transform duration-200 group-hover:scale-110",
                opt.iconBg,
              )}
            >
              {opt.emoji}
            </span>

            {/* Text */}
            <span className="space-y-0.5">
              <span
                className={cn(
                  "block font-bold text-sm",
                  selected ? opt.activeText : "text-gray-900",
                )}
              >
                {opt.title}
              </span>
              <span className="block text-xs text-gray-500 leading-snug">
                {opt.description}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
