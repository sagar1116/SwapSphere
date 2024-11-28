import React from "react";
import PropTypes from "prop-types";

const OrderBookRow = ({ price, amount, type, trend }) => {
  const trendIndicator = () => {
    if (trend === "up") return "▲"; // Price going up
    if (trend === "down") return "▼"; // Price going down
    return "-"; // No change
  };

  return (
    <tr
      className={`${
        type === "bid" ? "text-green-500" : "text-red-500"
      } hover:bg-gray-700 transition-all`}
    >
      <td className="px-4 py-2">
        {price} <span className="text-gray-400 text-sm">{trendIndicator()}</span>
      </td>
      <td className="px-4 py-2">{amount}</td>
    </tr>
  );
};

// Prop type validation
OrderBookRow.propTypes = {
  price: PropTypes.string.isRequired, // The price value (formatted as a string)
  amount: PropTypes.string.isRequired, // The token amount (formatted as a string)
  type: PropTypes.oneOf(["bid", "ask"]).isRequired, // Whether it's a bid or ask order
  trend: PropTypes.oneOf(["up", "down", "neutral"]), // Price trend direction
};

// Default props
OrderBookRow.defaultProps = {
  trend: "neutral",
};

export default OrderBookRow;
