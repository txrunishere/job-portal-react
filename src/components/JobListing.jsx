import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showMore, setShowMore] = useState(false);

  let description = job.description;

  if (!showMore) {
    description = description.substring(0, 89) + "...";
  }

  const handleReadMore = () => {
    setShowMore(x => !x)
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">
          {description}
          <span
            onClick={handleReadMore}
            className="text-blue-600 ml-2 cursor-pointer hover:underline"
          >
            {showMore ? "Show Less" : "Show More"}
          </span>
        </div>
        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 flex items-center gap-[5px] mb-3">
            <FaMapMarker />
            {job.location}
          </div>
          <a
            href="#"
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
