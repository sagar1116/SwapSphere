import React, { useEffect, useState } from "react";
import { connectWebSocket, closeWebSocket } from "../../utils/api";

const RealTimeMetrics = () => {
  const [metrics, setMetrics] = useState({
    slippage: 0,
    priceImpact: 0,
    fees: 0,
    percentageChange: 0,
  });

  useEffect(() => {
    const handleMetricsUpdate = (data) => {
      setMetrics({
        slippage: data.slippage || 0,
        priceImpact: data.priceImpact || 0,
        fees: data.fees || 0,
        percentageChange: data.percentageChange || 0,
      });
    };

    const ws = connectWebSocket(
      "wss://your-websocket-url/metrics", // Replace with WebSocket URL
      handleMetricsUpdate,
      (error) => console.error("Metrics WebSocket Error:", error),
      () => console.log("Metrics WebSocket closed.")
    );

    return () => {
      closeWebSocket(); // Cleanup on component unmount
    };
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
