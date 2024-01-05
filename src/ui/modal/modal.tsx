import React from "react";
import { Card } from "../card";
import styles from "./modal.module.scss";

interface ModalProps {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { open, setOpen, onClose, title, children } = props;

  return (
    open && (
      <div className={styles.wrapper}>
        <Card>
          <div className={styles.content}>
            <div className={styles.header}>
              <div>{title}</div>
              <button onClick={onClose}>x</button>
            </div>
            {children}
          </div>
        </Card>
      </div>
    )
  );
};

export default Modal;
