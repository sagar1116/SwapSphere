import React from "react";
import OrderBookRow from "./OrderBookRow";

const OrderBookTable = () => {
  const mockData = [
    { price: "1000.50", amount: "1.2 ETH", type: "bid", trend: "up" },
    { price: "1001.00", amount: "0.8 ETH", type: "ask", trend: "down" },
    { price: "999.75", amount: "2.5 ETH", type: "bid", trend: "neutral" },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Order Book</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((order, index) => (
            <OrderBookRow
              key={index}
              price={order.price}
              amount={order.amount}
              type={order.type}
              trend={order.trend}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookTable;
