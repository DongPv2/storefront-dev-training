import React from "react";
import Box from "../component/box/box";
import styles from "./layout.module.scss";
export default function Header() {
  return (
    <div>
      <Box width="100%" background="#ffd400" height={44}>
        banner
      </Box>
      <Box width="100%" background="#ffd400" height={50}>
        header
      </Box>
      <Box width="100%" background="#ffd400" height={64}>
        menu
      </Box>
    </div>
  );
}
