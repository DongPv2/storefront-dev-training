import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ModalProps {
  children: ReactNode;
}

export default function Modal(props: ModalProps) {
  const { children } = props;

  return (
    <div className={styles.modal_root}>
      <div className={styles.modal_backdrop}></div>
      <div className={styles.modal_box}>{children}</div>
    </div>
  );
}
