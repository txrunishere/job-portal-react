import { Link } from "react-router";
import { FaTriangleExclamation } from "react-icons/fa6";

const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaTriangleExclamation className="text-yellow-400 mb-4" size={70} />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
