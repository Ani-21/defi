import { Box, Stack, Typography } from "@mui/material";
import { ConnectWallet } from "../../../features/connect-wallet";

import styles from "./header.module.scss";
const Header = () => {
  return (
    <Stack
      direction="row"
      className={styles.navigation}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box className={styles.flexContainer}>
        <Typography className={styles.leftNav}>
          Vite + React & MetaMask
        </Typography>
        <Box className={styles.rightNav}>
          <ConnectWallet />
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;
