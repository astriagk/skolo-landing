"use client";

import CityDropdown from "./CityDropdown";
import SelectDropdown from "./SelectDropdown";

interface SchoolData {
  schoolName: string;
  contactName: string;
  designation: string;
  phone: string;
  email: string;
  city: string;
  busCount: string;
  studentCount: string;
}

interface SchoolFieldsProps {
  data: SchoolData;
  onChange: (data: SchoolData) => void;
  phoneError?: string;
}

const designationOptions = [
  { value: "Principal", label: "Principal" },
  { value: "Admin", label: "Administrator" },
  { value: "Transport Head", label: "Transport Head" },
  { value: "Other", label: "Other" },
];

const studentCountOptions = [
  { value: "<100", label: "Less than 100" },
  { value: "100-500", label: "100 – 500" },
  { value: "500-1000", label: "500 – 1,000" },
  { value: "1000+", label: "1,000+" },
];

export default function SchoolFields({ data, onChange, phoneError }: SchoolFieldsProps) {
  const update = (field: keyof SchoolData, value: string) =>
    onChange({ ...data, [field]: value });

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          School Name *
        </label>
        <input
          type="text"
          required
          value={data.schoolName}
          onChange={(e) => update("schoolName", e.target.value)}
          placeholder="Your school name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Person *
          </label>
          <input
            type="text"
            required
            value={data.contactName}
            onChange={(e) => update("contactName", e.target.value)}
            placeholder="Full name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <SelectDropdown
          label="Designation"
          required
          value={data.designation}
          onChange={(v) => update("designation", v)}
          options={designationOptions}
          placeholder="Select role"
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
          Email *
        </label>
        <input
          type="email"
          required
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="school@email.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
        />
      </div>

      <CityDropdown value={data.city} onChange={(city) => update("city", city)} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Buses
          </label>
          <input
            type="number"
            min="1"
            value={data.busCount}
            onChange={(e) => update("busCount", e.target.value)}
            placeholder="e.g., 15"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <SelectDropdown
          label="Students Using Transport"
          value={data.studentCount}
          onChange={(v) => update("studentCount", v)}
          options={studentCountOptions}
          placeholder="Select range"
        />
      </div>
    </div>
  );
}
