import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
      </>
    </div>
  );
};

export default App;
