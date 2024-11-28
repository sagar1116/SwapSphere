import React, { useEffect, useState } from "react";
import OrderBookRow from "./OrderBookRow";
import { connectWebSocket, closeWebSocket } from "../../utils/api";

const OrderBookTable = () => {
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });

  useEffect(() => {
    const handleOrderBookUpdate = (data) => {
      if (data.bids && data.asks) {
        setOrderBook({
          bids: data.bids.slice(0, 5), // Top 5 bids
          asks: data.asks.slice(0, 5), // Top 5 asks
        });
      }
    };

    const ws = connectWebSocket(
      "wss://your-websocket-url/orderbook", // Replace with your WebSocket URL
      handleOrderBookUpdate,
      (error) => console.error("OrderBook WebSocket Error:", error),
      () => console.log("OrderBook WebSocket closed.")
    );

    return () => {
      closeWebSocket(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Order Book</h2>
      <table className="table-auto w-full text-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderBook.bids.map((bid, index) => (
            <OrderBookRow key={`bid-${index}`} type="Bid" data={bid} />
          ))}
          {orderBook.asks.map((ask, index) => (
            <OrderBookRow key={`ask-${index}`} type="Ask" data={ask} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookTable;
