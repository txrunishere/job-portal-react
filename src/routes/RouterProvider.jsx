import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import JobsPage from "../pages/JobsPage";
import NotFound from "../pages/NotFound";

const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RouterProvider;
