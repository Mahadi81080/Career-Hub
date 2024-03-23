import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplicaton } from "../../Utility/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayjobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remotejobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remotejobs);
    } else if (filter === "onsite") {
      const onsitejobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsitejobs);
    }
  };
  useEffect(() => {
    const storedJobIds = getStoredJobApplicaton();
    if (jobs.length > 0) {
      // const jobsApplied =jobs.filter(job=> storedJobIds.includes(job.id))
      const jobApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
      //   console.log(jobs, storedJobIds, jobApplied);
    }
  }, [jobs]);

  return (
    <div className="px-12 my-10">
      <div className="dropdown dropdown-end flex justify-end">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleJobsFilter("all")}>
            <a>all</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>onsite</a>
          </li>
        </ul>
      </div>
      {displayjobs.map((job) => (
        <AppliedJob key={jobs.id} job={job}></AppliedJob>
      ))}
      <Link to='/' className="flex justify-center">
        <button className="btn btn-primary">Back To Home</button>
      </Link>
    </div>
  );
};

export default AppliedJobs;
