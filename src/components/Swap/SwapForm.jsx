import React, { useState } from "react";
import SwapConfirmationModal from "./SwapConfirmationModal";

const SwapForm = () => {
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const swapDetails = {
    fromToken: "ETH",
    toToken: "DAI",
    fromAmount: inputAmount,
    toAmount: outputAmount,
    estimatedFees: 2.5, // Mock data
    slippage: 0.5, // Mock data
  };

  const handleSwap = () => {
    setModalOpen(true);
  };

  const confirmSwap = () => {
    console.log("Swap confirmed:", swapDetails);
    setModalOpen(false);
    // Perform the swap transaction here
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Swap Tokens</h2>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Amount to Swap"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          className="input-field"
        />
        <select className="select-field">
          <option value="ETH">ETH</option>
          <option value="DAI">DAI</option>
        </select>
        <select className="select-field">
          <option value="DAI">DAI</option>
          <option value="ETH">ETH</option>
        </select>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleSwap}>
        Swap
      </button>
      <SwapConfirmationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmSwap}
        details={swapDetails}
      />
    </div>
  );
};

export default SwapForm;
