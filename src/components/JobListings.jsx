import { useEffect, useState } from "react";
// import { jobs } from "../data/jobs.json";
import JobListing from "./JobListing";
import axios from 'axios'

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    (
      async () => {
        const fetchData = await fetch('http://localhost:3000/jobs')
        const jsonData = await fetchData.json();
        setJobs(jsonData)
      }
    )()
  }, [])

  const jobListings = isHome ? jobs.splice(0, 3) : jobs

  return (
    <section className="bg-blue-100 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListings.map(
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
      </div>
    </section>
  );
};

export default JobListings;
