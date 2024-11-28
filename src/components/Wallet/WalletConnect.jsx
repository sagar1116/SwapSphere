import React, { useContext } from "react";
import { WalletContext } from "../../contexts/WalletContext";


const WalletConnect = () => {
  const { connectWallet, disconnectWallet, walletAddress } = useContext(WalletContext);

  return (
    <div>
      {walletAddress ? (
        <div>
          <p>Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
          <button className="btn btn-secondary" onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
