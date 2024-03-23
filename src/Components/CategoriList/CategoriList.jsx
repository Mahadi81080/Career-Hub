import { useEffect, useState } from "react";
import CategoriJob from "../CategoriJob/CategoriJob";

const CategoriList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="px-12 py-5">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Job Category List</h1>
            <p className="py-6 text-xs">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {jobs.map((job) => (
          <CategoriJob key={job.id} job={job}></CategoriJob>
        ))}
      </div>
    </div>
  );
};

export default CategoriList;
