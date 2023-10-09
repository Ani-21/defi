import { Box } from "@mui/material";
import { useMetaMask } from "src/shared/hooks/use-meta-mask";

const Header = () => {
  const { connectMetaMask } = useMetaMask();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box display="flex">
        <p>tg</p>
        <p>ds</p>
        <p>medium</p>
      </Box>
      <button onClick={connectMetaMask}>Connect to wallet</button>
    </Box>
  );
};

export default Header;
