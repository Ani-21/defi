import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Button from "./shared/ui/button/button";

function App() {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);

  const { ethereum } = window;

  const updateWallet = async (accounts: any) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    updateWallet(accounts);
  };

  const refreshChain = (chainId: any) => {
    setWallet((wallet) => ({ ...wallet, chainId }));
  };

  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider();
      console.log("provider: ", provider);
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        refreshAccounts(accounts);
        ethereum.on("accountsChanged", refreshAccounts);
        ethereum.on("chainChanged", refreshChain);
      }
    };

    getProvider();

    return () => {
      ethereum.removeListener("accountChanged", refreshAccounts);
      ethereum.removeListener("chainChanged", refreshChain);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to DeFi app</h1>
      {hasProvider ? (
        <Button text="Connect wallet" onClick={handleConnect} />
      ) : (
        <h2>You need to install MetaMask.</h2>
      )}
      <div>
        {wallet.accounts.length > 0 && (
          <p> Wallet accounts {wallet.accounts[0]}</p>
        )}
      </div>
    </div>
  );
}

export default App;
