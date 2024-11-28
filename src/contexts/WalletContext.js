// Inside your WalletContext.js file

import { createContext, useContext, useState } from 'react';
import { ethers } from 'ethers';

export const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  // Connect Wallet function
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        // Request wallet connection
        const { ethereum } = window;

        // Create an ethers provider using MetaMask's window.ethereum
        const ethersProvider = new ethers.providers.Web3Provider(ethereum);

        // Request account access if necessary
        await ethereum.request({ method: 'eth_requestAccounts' });

        // Get the wallet address of the first account
        const signer = ethersProvider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);

        // Set the provider in state for later use
        setProvider(ethersProvider);
      } else {
        throw new Error('MetaMask is not installed.');
      }
    } catch (err) {
      console.error('Error connecting wallet:', err);
    }
  };

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, provider }}>
      {children}
    </WalletContext.Provider>
  );
};
