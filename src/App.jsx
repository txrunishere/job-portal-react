import RouterProvider from "./routes/RouterProvider";

const App = () => {
  const addJob = (job) => {
    console.log(job);
  };

  return (
    <div>
      <>
        <RouterProvider addJob={addJob} />
      </>
    </div>
  );
};

export default App;
