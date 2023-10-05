import { useMetaMask } from "../../../shared/hooks/use-meta-mask";

const Wallet = () => {
  const { wallet } = useMetaMask();

  const { accounts, balance, chainId } = wallet;

  return (
    <div>
      <h1>Account: {accounts[0]}</h1>
      <h1>Balance: {balance}</h1>
      <h1>Balance: {chainId}</h1>
    </div>
  );
};

export default Wallet;
