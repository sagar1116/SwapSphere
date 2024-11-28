import React from "react";
import WalletConnect from "./components/Wallet/WalletConnect";
import SwapForm from "./components/Swap/SwapForm";
import OrderBookTable from "./components/OrderBook/OrderBookTable";
import RealTimeMetrics from "./components/Metrics/RealTimeMetrics";
import {WalletProvider} from "./contexts/WalletContext";


function App() {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Token Swap</h1>
          <WalletConnect />
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <section>
            <SwapForm />
            <RealTimeMetrics />
          </section>
          <section>
            <OrderBookTable />
          </section>
        </main>
      </div>
    </WalletProvider>
  );
}

export default App;


