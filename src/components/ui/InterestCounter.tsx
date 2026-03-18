"use client";

import { useState, useEffect } from "react";

export default function InterestCounter() {
  const [counts, setCounts] = useState({
    total: 0,
    parent: 0,
    school: 0,
    driver: 0,
  });

  useEffect(() => {
    fetch("/api/interest/counts")
      .then((res) => res.json())
      .then((data) => setCounts(data));
  }, []);

  const totalFormatted = counts.total === 0 ? "..." : counts.total + "+";

  return (
    <p className="text-sm text-gray-500">
      <span className="font-semibold text-gray-700">{totalFormatted}</span>{" "}
      interested overall
      <span className="mx-2">•</span>
      <span className="font-semibold text-gray-700">{counts.parent}</span>{" "}
      parents,{" "}
      <span className="font-semibold text-gray-700">{counts.school}</span>{" "}
      schools,{" "}
      <span className="font-semibold text-gray-700">{counts.driver}</span>{" "}
      drivers
    </p>
  );
}
