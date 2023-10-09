import { Route, Routes } from "react-router-dom";
import MainPage from "../main/main-page";
import { Layout } from "src/components/layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
