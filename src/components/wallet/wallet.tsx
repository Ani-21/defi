import { useMetaMask } from "src/shared/hooks/use-meta-mask";
import styles from "./wallet.module.scss";
import { formatChainAsNum } from "src/shared/utils/format-digits";

const Wallet = () => {
  const { wallet } = useMetaMask();

  const { accounts, balance, chainId } = wallet;

  return (
    <div className={styles.display}>
      {wallet.accounts.length > 0 && (
        <>
          <h1>Account: {accounts[0]}</h1>
          <h1>Balance: {balance}</h1>
          <h1>Balance:{formatChainAsNum(chainId)}</h1>
        </>
      )}
    </div>
  );
};

export default Wallet;
