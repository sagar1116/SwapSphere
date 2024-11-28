// Format token amount with a fixed number of decimals
export const formatTokenAmount = (amount, decimals = 2) => {
    return parseFloat(amount).toFixed(decimals);
  };
  
  // Format wallet address (shortened for display)
  export const formatWalletAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  
  // Format price with currency symbol
  export const formatPrice = (price, symbol = "$") => {
    return `${symbol}${parseFloat(price).toFixed(2)}`;
  };
  
  // Format percentage with a % symbol
  export const formatPercentage = (percentage) => {
    return `${parseFloat(percentage).toFixed(2)}%`;
  };
  