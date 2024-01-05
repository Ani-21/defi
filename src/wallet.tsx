import React, { useEffect, useState } from 'react'

const wallet = () => {
   const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [], balance: "", chainId: "" };
  const [wallet, setWallet] = useState(initialState);

  const [isConnecting, setIsConnecting] = useState<boolean | null>(null);
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const { ethereum } = window;

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

  const updateWallet = async (accounts: any) => {
    const balance = formatBalance(
      await ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );

    const chainId = await ethereum.request({
      method: "eth_chainId",
    });

    setWallet({ accounts, balance, chainId });
  };

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      updateWallet(accounts);
    } catch (err: any) {
      setError(true);
      setErrMessage(err.message);
    } finally {
      setIsConnecting(false);
    }
  };

  const refreshChain = (chainId: any) => {
    setWallet((wallet) => ({ ...wallet, chainId }));
  };

  return (
    <div>
      <h1>Welcome to DeFi app</h1>
      {isConnecting && <h1>Loading ...</h1>}
      {hasProvider ? (
        <Button text="Connect wallet" onClick={handleConnect} />
      ) : (
        <h2>You need to install MetaMask.</h2>
      )}
      <div>
        {wallet.accounts.length > 0 && (
          <>
            <p> Wallet accounts {wallet.accounts[0]}</p>
            <p>Wallet balance: {wallet.balance}</p>
            <p>HEX chainId: {wallet.chainId}</p>
            <p>Numeric chainId: {formatChain(wallet.chainId)}</p>
          </>
        )}
      </div>
      {error && (
        <div onClick={() => setError(false)}>
          <strong>Error:</strong>
          {errMessage}
        </div>
      )}
    </div>
}

export default wallet