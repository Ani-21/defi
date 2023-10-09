import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ padding: 2, display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <Box marginRight={4}>
            <Sidebar />
          </Box>
          <Stack padding={3}>
            <Header />
            <main>
              <Box>
                <Outlet />
              </Box>
            </main>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
