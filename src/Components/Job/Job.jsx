import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {id,logo, job_title, company_name, remote_or_onsite, job_type,salary,location } = job;
  return (
    <div className=" border p-4">
      <figure className="pl-7">
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title font-extrabold">{job_title}</h2>
        <p>{company_name}</p>
        <div className="card-actions text-primary">
          <div className="border border-primary px-3 py-1 rounded-md">{remote_or_onsite}</div>
          <div className="border border-primary px-3 py-1 rounded-md">{job_type}</div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-2 justify-center items-center">
            <CiLocationOn />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
          <CiDollar />
          <p>Salary :{salary}</p>
          </div>
        </div>
       <Link to={`/job/${id}`}><button className="btn btn-primary w-1/3">View Details</button></Link>
      </div>
    </div>
  );
};

export default Job;
