import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
