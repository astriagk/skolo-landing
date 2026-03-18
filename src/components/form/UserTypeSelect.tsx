"use client";

import { cn } from "@/lib/utils";

export type UserType = "parent" | "school" | "driver";

interface UserTypeSelectProps {
  value: UserType | null;
  onChange: (type: UserType) => void;
  onSelect?: (type: UserType) => void;
}

const options: {
  type: UserType;
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    type: "parent",
    icon: "👥",
    title: "I'm a Parent",
    description: "Track my child's school commute",
  },
  {
    type: "school",
    icon: "🏫",
    title: "I'm a School",
    description: "Manage school transport operations",
  },
  {
    type: "driver",
    icon: "🚌",
    title: "I'm a Driver",
    description: "Join as a bus driver or operator",
  },
];

export default function UserTypeSelect({
  value,
  onChange,
  onSelect,
}: UserTypeSelectProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {options.map((opt) => (
        <button
          key={opt.type}
          type="button"
          onClick={() => {
            onChange(opt.type);
            onSelect?.(opt.type);
          }}
          className={cn(
            "flex flex-col items-center gap-2 rounded-xl border-2 p-5 text-center transition-all cursor-pointer",
            value === opt.type
              ? "border-primary-500 bg-primary-50 shadow-md"
              : "border-gray-200 bg-white hover:border-primary-200 hover:bg-gray-50",
          )}
        >
          <span className="text-3xl">{opt.icon}</span>
          <span className="font-semibold text-gray-900 text-sm">
            {opt.title}
          </span>
          <span className="text-xs text-gray-500">{opt.description}</span>
        </button>
      ))}
    </div>
  );
}
