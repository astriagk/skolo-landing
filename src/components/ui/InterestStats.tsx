"use client";

import { useEffect, useState } from "react";

export default function InterestStats() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/interest/counts")
      .then((r) => r.json())
      .then((data) => setTotal(data.total))
      .catch(() => {});
  }, []);

  return (
    <div className="mb-6 rounded-2xl border border-primary-200 bg-primary-50 p-5 text-center">
      <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mb-1">
        People Interested
      </p>
      <div className="text-5xl font-bold tabular-nums text-primary-700">
        {total === null ? (
          <span className="inline-block h-12 w-20 animate-pulse rounded-lg bg-primary-200" />
        ) : (
          total
        )}
      </div>
      <p className="mt-1 text-sm text-gray-500">have registered their interest</p>
    </div>
  );
}
