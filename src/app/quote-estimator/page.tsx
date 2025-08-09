"use client";

import { useState } from 'react';

const QuoteEstimatorPage = () => {
  const [service, setService] = useState('tiling');
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0);

  const calculateCost = () => {
    const area = length * width;
    let price = 0;

    switch (service) {
      case 'tiling':
        price = 50;
        break;
      case 'painting':
        price = 20;
        break;
      case 'flooring':
        price = 40;
        break;
      default:
        price = 0;
    }

    setEstimatedCost(area * price);
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Quote Estimator</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-600 mb-2">Service</label>
          <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className="w-full px-4 py-2 border rounded-lg">
            <option value="tiling">Tiling</option>
            <option value="painting">Painting</option>
            <option value="flooring">Flooring</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="length" className="block text-gray-600 mb-2">Length (in meters)</label>
          <input type="number" id="length" name="length" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="width" className="block text-gray-600 mb-2">Width (in meters)</label>
          <input type="number" id="width" name="width" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button onClick={calculateCost} className="bg-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600">Calculate</button>
        {estimatedCost > 0 && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold">Estimated Cost</h2>
            <p className="text-4xl font-bold text-yellow-500">${estimatedCost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteEstimatorPage;
