import { useMetaMask } from "src/shared/hooks/use-meta-mask";
import { Button } from "src/ui/button";
import styles from "./header.module.scss";
import { useState } from "react";
import { WalletList } from "src/modules/wallet-list";

const Header = () => {
  const [openWalletPopup, setOpenWalletPopup] = useState(false);

  const showWalletList = () => setOpenWalletPopup(true);

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
      <Button onClick={showWalletList}>Connect Wallet</Button>
      <WalletList open={openWalletPopup} setOpen={setOpenWalletPopup} />
    </header>
  );
};

export default Header;
