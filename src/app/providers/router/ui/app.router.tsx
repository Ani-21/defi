import { Route, Routes } from "react-router-dom";
import Layout from "../../../layout/main-layout/layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default AppRouter;
