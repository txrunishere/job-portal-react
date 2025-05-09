import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaMapMarker } from "react-icons/fa";
import Spinner from "../components/Spinner";

const JobPage = ({ deleteJob }) => {
  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { jobId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setIsLoading(false);
        const data = await axios({
          method: "get",
          url: `/api/jobs/${jobId}`,
          responseType: "json",
        });
        setJob(data.data);
      } catch (error) {
        console.log("Error while Fetching Data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJob();
  }, []);


  const deleteJobComfirm = (jobId) => {
    deleteJob(jobId)
    navigate('/jobs')
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to={"/jobs"}
            className="text-indigo-500 hover:underline hover:text-indigo-600 flex items-center"
          >
            <MdOutlineArrowBack className="mr-[7px]" /> Back to Job Listings
          </Link>
        </div>
      </section>

      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <section className="bg-indigo-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
              <main>
                <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                  <div className="text-gray-500 mb-4">{job.type}</div>
                  <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                  <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                    <FaMapMarker className="text-lg text-orange-700 mr-2" />
                    <p className="text-orange-700">{job.location}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Job Description
                  </h3>

                  <p className="mb-4">{job.description}</p>

                  <h3 className="text-indigo-800 text-lg font-bold mb-2">
                    Salary
                  </h3>

                  <p className="mb-4">{job.salary} / Year</p>
                </div>
              </main>

              {/* <!-- Sidebar --> */}
              <aside>
                {/* <!-- Company Info --> */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Company Info</h3>

                  <h2 className="text-2xl">{job.company?.name}</h2>

                  <p className="my-2">{job.company?.description}</p>

                  <hr className="my-4" />

                  <h3 className="text-xl">Contact Email:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company?.contactEmail}
                  </p>

                  <h3 className="text-xl">Contact Phone:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company?.contactPhone}
                  </p>
                </div>

                {/* <!-- Manage --> */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                  <button
                    onClick={() => deleteJobComfirm(jobId)}
                    className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Delete Job
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

// we do same with react router loader

export default JobPage;
