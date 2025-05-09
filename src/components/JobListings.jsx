import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import axios from "axios";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const apiUrl = isHome ? 'api/jobs?_limit=3' : "api/jobs"
        const fetchData = await axios({
          method: "get",
          url: apiUrl,
          responseType: "json",
        });
        setJobs(fetchData.data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const jobListings = isHome ? jobs.splice(0, 3) : jobs;

  return (
    <section className="bg-blue-100 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map(
              ({ description, id, location, salary, title, type }) => (
                <JobListing
                  key={id}
                  job={{
                    location,
                    salary,
                    title,
                    type,
                    description,
                  }}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
