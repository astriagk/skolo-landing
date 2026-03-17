"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

export default function Tabs({ tabs, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className={className}>
      <div className="flex justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
              activeTab === tab.id
                ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "transition-opacity duration-300",
              activeTab === tab.id
                ? "opacity-100"
                : "hidden opacity-0"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
