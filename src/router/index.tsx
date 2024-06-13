import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import Layout from "@/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" Component={HomePage} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
