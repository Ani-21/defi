import { useMetaMask } from "src/shared/hooks/use-meta-mask";
import { formatChainAsNum } from "src/shared/utils/format-digits";
import { Card } from "src/ui/card";
import styles from "./wallet.module.scss";

const Wallet = () => {
  const { wallet } = useMetaMask();

  const { accounts, balance, chainId } = wallet;

  return (
    <Card>
      <h1>
        {wallet.accounts.length
          ? "My Wallet"
          : "Connect to wallet to see transactions"}
      </h1>
      {wallet.accounts.length > 0 && (
        <div className={styles.content}>
          <p>Account: {accounts[0]}</p>
          <p>Balance: {balance}</p>
          <p>Balance:{formatChainAsNum(chainId)}</p>
        </div>
      )}
    </Card>
  );
};

export default Wallet;
