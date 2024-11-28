import React, { useEffect, useState } from "react";

const RealTimeMetrics = () => {
  const [metrics, setMetrics] = useState({
    slippage: 0,
    priceImpact: 0,
    fees: 0,
    percentageChange: 0,
  });

  const fetchRealTimeMetrics = async () => {
    try {
      // Mock API response for metrics
      const mockResponse = {
        slippage: Math.random() * 1, // Mock slippage percentage
        priceImpact: Math.random() * 2, // Mock price impact percentage
        fees: Math.random() * 5, // Mock fees in USD
        percentageChange: (Math.random() - 0.5) * 2, // Mock percentage change
      };

      // Simulate API response delay
      setTimeout(() => {
        setMetrics(mockResponse);
      }, 1000);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchRealTimeMetrics();
    }, 2000); // Poll every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-gray-800 p-4 mt-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Real-Time Metrics</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Slippage:</span>
          <span>{metrics.slippage.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between">
          <span>Price Impact:</span>
          <span>{metrics.priceImpact.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between">
          <span>Fees:</span>
          <span>${metrics.fees.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>24h Change:</span>
          <span
            className={
              metrics.percentageChange >= 0
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {metrics.percentageChange.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMetrics;
