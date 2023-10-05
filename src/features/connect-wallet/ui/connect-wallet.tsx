import { useMetaMask } from "../../../shared/hooks/use-meta-mask";

const ConnectWallet = () => {
  const { connectMetaMask } = useMetaMask();

  return <button onClick={connectMetaMask}>Connect MetaMask</button>;
};

export default ConnectWallet;
