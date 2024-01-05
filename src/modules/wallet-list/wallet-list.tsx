import React from "react";
import { useMetaMask } from "src/shared/hooks/use-meta-mask";
import { Card } from "src/ui/card";
import { Modal } from "src/ui/modal";

const wallets = [
  {
    title: "MetaMask",
  },
  {
    title: "BNB Smart Chain",
  },
  {
    title: "Portis",
  },
];

interface WalletListProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalletList = (props: WalletListProps) => {
  const { open, setOpen } = props;
  const { connectMetaMask } = useMetaMask();
  return (
    <Modal open={open} onClose={() => setOpen(false)} title="Connect Wallet">
      {wallets.map((wallet) => (
        <Card key={wallet.title}>
          <button onClick={connectMetaMask}>{wallet.title}</button>
        </Card>
      ))}
    </Modal>
  );
};
export default WalletList;
