import { Box } from "@mui/material";
import Wallet from "../../../entities/wallet/ui/wallet";
import Header from "../header/header";

const Layout = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <Header />
      <main>
        <Box>
          <Wallet />
        </Box>
      </main>
    </Box>
  );
};

export default Layout;
