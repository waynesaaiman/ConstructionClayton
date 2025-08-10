"use client";
import { useState } from "react";

const COST_PER_M2 = 7500; // Example cost per m² in ZAR

export default function QuoteEstimator() {
  const [area, setArea] = useState(0);
  const [estimate, setEstimate] = useState<number | null>(null);

  function handleEstimate(e: React.FormEvent) {
    e.preventDefault();
    setEstimate(area * COST_PER_M2);
  }

  return (
    <form onSubmit={handleEstimate} className="bg-white shadow rounded p-8 max-w-md mx-auto flex flex-col gap-6">
      <label className="font-semibold text-lg text-blue-800">Project Area (m²)</label>
      <input
        type="number"
        min={1}
        value={area}
        onChange={(e) => setArea(Number(e.target.value))}
        className="border border-gray-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter area in m²"
        required
      />
      <button type="submit" className="bg-blue-600 text-white font-bold py-2 rounded shadow hover:bg-blue-700 transition">Get Estimate</button>
      {estimate !== null && (
        <div className="mt-4 text-xl font-bold text-green-700">Estimated Cost: R{estimate.toLocaleString()}</div>
      )}
    </form>
  );
}
