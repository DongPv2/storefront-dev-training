import React, { ReactNode } from "react";
import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}

export default function Main(props: Props) {
  const {children} = props;
  return <main>{children}</main>;
}
