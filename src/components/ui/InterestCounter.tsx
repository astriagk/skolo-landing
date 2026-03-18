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

  // Hide the entire section if total is 0
  if (counts.total === 0) {
    return null;
  }

  const categories = [];
  if (counts.parent > 0) categories.push(`${counts.parent} parents`);
  if (counts.school > 0) categories.push(`${counts.school} schools`);
  if (counts.driver > 0) categories.push(`${counts.driver} drivers`);

  const categoriesString = categories.join(", ");

  return (
    <p className="text-sm text-gray-500">
      <span className="font-semibold text-gray-700">{totalFormatted}</span>{" "}
      interested overall
      {categoriesString && (
        <>
          <span className="mx-2">•</span>
          <span className="font-semibold text-gray-700">
            {categoriesString}
          </span>
        </>
      )}
    </p>
  );
}
