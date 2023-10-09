import { Route, Routes } from "react-router-dom";
import MainPage from "../main/main-page";
import DashboardPage from "../dashboard/dashboard";
import AccountPage from "../account/account";
import { Layout } from "src/components/layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
