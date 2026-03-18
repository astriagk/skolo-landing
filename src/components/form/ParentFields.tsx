"use client";

import CityDropdown from "./CityDropdown";

interface ParentData {
  name: string;
  phone: string;
  email: string;
  schoolName: string;
  city: string;
}

interface ParentFieldsProps {
  data: ParentData;
  onChange: (data: ParentData) => void;
  phoneError?: string;
}

export default function ParentFields({ data, onChange, phoneError }: ParentFieldsProps) {
  const update = (field: keyof ParentData, value: string) =>
    onChange({ ...data, [field]: value });

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <div className="flex">
          <span className="inline-flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-600">
            +91
          </span>
          <input
            type="tel"
            required
            value={data.phone}
            onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="10-digit mobile number"
            className={`w-full rounded-r-xl border px-4 py-3 text-sm focus:ring-2 outline-none transition-all ${phoneError ? "border-danger-400 focus:border-danger-500 focus:ring-danger-500/20" : "border-gray-300 focus:border-primary-500 focus:ring-primary-500/20"}`}
          />
        </div>
        {phoneError && (
          <div className="flex items-center gap-1.5 mt-1.5">
            <svg className="h-3.5 w-3.5 text-danger-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <p className="text-xs text-danger-600">{phoneError}</p>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email (optional)
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="your@email.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Child&apos;s School Name (optional)
        </label>
        <input
          type="text"
          value={data.schoolName}
          onChange={(e) => update("schoolName", e.target.value)}
          placeholder="e.g., Delhi Public School"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
        />
      </div>

      <CityDropdown value={data.city} onChange={(city) => update("city", city)} />
    </div>
  );
}
