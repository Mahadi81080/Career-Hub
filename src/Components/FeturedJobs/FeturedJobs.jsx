import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setdataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-12 px-12">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Featured Jobs: {jobs.length}</h1>
            <p className="py-6 text-xs">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={
          dataLength === jobs.length ? "hidden" : "text-center mt-8 mb-14"
        }
      >
        <button
          onClick={() => setdataLength(jobs.length)}
          className="btn btn-primary"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeturedJobs;
