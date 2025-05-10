import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import JobsPage from "../pages/JobsPage";
import NotFound from "../pages/NotFound";
import JobPage from "../pages/JobPage";
import AddJobPage from "../pages/AddJobPage";

const RouterProvider = ({ addJob, deleteJob }) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:jobId"
          element={<JobPage deleteJob={deleteJob} />}
        />
        <Route path="/add-job" element={<AddJobPage addJob={addJob} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RouterProvider;
