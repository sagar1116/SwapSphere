import { ethers } from "ethers";

// Initialize Web3 provider
export const getWeb3Provider = () => {
  if (window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    throw new Error("MetaMask is not installed.");
  }
};

// Get token balance
export const getTokenBalance = async (provider, address, tokenContractAddress) => {
  const erc20ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
  ];
  const contract = new ethers.Contract(tokenContractAddress, erc20ABI, provider);
  const balance = await contract.balanceOf(address);
  const decimals = await contract.decimals();
  return ethers.utils.formatUnits(balance, decimals);
};

// Execute token swap
export const executeTokenSwap = async (
  provider,
  fromTokenAddress,
  toTokenAddress,
  amountIn,
  slippage,
  recipientAddress
) => {
  const routerABI = [
    "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] path, address to, uint deadline) returns (uint[] memory amounts)",
  ];
  const routerAddress = "0xMockRouterAddress"; // Replace with actual testnet or mock address
  const router = new ethers.Contract(routerAddress, routerABI, provider.getSigner());

  const amountOutMin = calculateMinAmount(amountIn, slippage);
  const path = [fromTokenAddress, toTokenAddress];
  const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

  const tx = await router.swapExactTokensForTokens(
    ethers.utils.parseUnits(amountIn.toString(), 18),
    ethers.utils.parseUnits(amountOutMin.toString(), 18),
    path,
    recipientAddress,
    deadline
  );

  return tx.wait();
};

// Utility to calculate minimum amount considering slippage
const calculateMinAmount = (amount, slippage) => {
  return amount * (1 - slippage / 100);
};
