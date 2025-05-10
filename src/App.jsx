import axios from "axios";
import RouterProvider from "./routes/RouterProvider";

const App = () => {

  const addJob = async (job) => {
    await axios.post(
      "/api/jobs",
      job,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return
  };

  const deleteJob = async (jobId) => {
    await axios.delete(`/api/jobs/${jobId}`)
    return;
  }

  return (
    <div>
      <>
        <RouterProvider addJob={addJob} deleteJob={deleteJob} />
      </>
    </div>
  );
};

export default App;
