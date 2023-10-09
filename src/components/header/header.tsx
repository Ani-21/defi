import { useMetaMask } from "src/shared/hooks/use-meta-mask";
import { Button } from "src/ui/button";
import styles from "./header.module.scss";

const Header = () => {
  const { connectMetaMask } = useMetaMask();
  return (
    <header className={styles.header}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100px",
        }}
      >
        <p>tg</p>
        <p>ds</p>
        <p>medium</p>
      </div>
      <Button onClick={connectMetaMask}>Connect to wallet</Button>
    </header>
  );
};

export default Header;
