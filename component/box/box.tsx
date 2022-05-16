import React, { CSSProperties } from "react";
import styles from "./box.module.scss";
interface Props {
  width?: number | string;
  height?: number | string;
  children?: string;
  background?: string;
  fluid?: boolean;
}
export default function Box(props: Props) {
  const { children, width, height, background, fluid } = props;
  const style: CSSProperties = {
    width: width,
    height: height,
    background: background
  };
  const styleFluid: CSSProperties = {
    maxWidth: 1200,
    width: "100%",
    minWidth: 980,
    position: "relative"
  };
  return (
    <div className={styles.box}>
      <section style={fluid ? {...style, ...styleFluid} : style} className={styles.section}>
        {children}
      </section>
    </div>
  );
}
