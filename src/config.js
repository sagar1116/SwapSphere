const CONFIG = {
    // Environment
    ENVIRONMENT: process.env.NODE_ENV || "development",
  
    // API Settings
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "https://api.mockexchange.com",
  
    // Supported Tokens (Replace with real testnet/mock addresses)
    TOKENS: {
      ETH: {
        symbol: "ETH",
        address: "0xMockEthAddress",
        decimals: 18,
      },
      DAI: {
        symbol: "DAI",
        address: "0xMockDaiAddress",
        decimals: 18,
      },
      USDC: {
        symbol: "USDC",
        address: "0xMockUsdcAddress",
        decimals: 6,
      },
      WBTC: {
        symbol: "WBTC",
        address: "0xMockWbtcAddress",
        decimals: 8,
      },
    },
  
    // DEX Router Configuration
    ROUTER: {
      address: "0xMockRouterAddress", // Replace with the actual router address on the testnet
      abi: [
        "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] path, address to, uint deadline) returns (uint[] memory amounts)",
      ],
    },
  
    // Polling Intervals
    POLLING_INTERVALS: {
      PRICES: 5000, // 5 seconds
      ORDER_BOOK: 2000, // 2 seconds
    },
  
    // Default Slippage and Fee Settings
    SLIPPAGE: 1, // Default slippage percentage
    GAS_LIMIT: 250000, // Estimated gas limit for swaps
  
    // Default User Configuration
    DEFAULT_USER_SETTINGS: {
      darkMode: true, // Default to dark mode
      preferredTokens: ["ETH", "DAI", "USDC"], // Tokens shown in quick-select
    },
  };
  
  export default CONFIG;
  