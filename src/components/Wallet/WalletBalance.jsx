import React, { useEffect, useState } from "react";
import { useWallet } from "../../context/WalletContext";
import { getTokenBalance } from "../../utils/web3";
import CONFIG from "../../config";

const WalletBalance = ({ selectedToken }) => {
  const { walletAddress, provider } = useWallet();
  const [balance, setBalance] = useState(null);

  const fetchTokenBalance = async () => {
    if (!walletAddress || !provider || !selectedToken) return;

    try {
      const tokenDetails = CONFIG.TOKENS[selectedToken];
      const tokenBalance = await getTokenBalance(
        provider,
        walletAddress,
        tokenDetails.address
      );
      setBalance(tokenBalance);
    } catch (error) {
      console.error("Error fetching token balance:", error);
      setBalance(null);
    }
  };

  useEffect(() => {
    fetchTokenBalance();
  }, [walletAddress, provider, selectedToken]);

  if (!walletAddress) {
    return <p className="text-sm text-gray-500">Connect your wallet to see balances.</p>;
  }

  if (!selectedToken) {
    return <p className="text-sm text-gray-500">Select a token to view its balance.</p>;
  }

  return (
    <div className="flex items-center space-x-2">
      <p className="text-sm text-gray-700 font-medium">Balance:</p>
      {balance !== null ? (
        <p className="text-sm text-gray-900">
          {balance} {selectedToken}
        </p>
      ) : (
        <p className="text-sm text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default WalletBalance;
