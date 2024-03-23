import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
const AppliedJob = ({ job }) => {
  console.log(job);
  const { id, job_title, company_name, remote_or_onsite, job_type, salary, location,logo } = job;

  return (
    <div>
      <div className="flex flex-col max-w-2xl mx-auto p-4  text-black mb-5 border-2">
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col sm:flex-row sm:justify-between ">
            <div className="flex justify-center items-center w-full space-x-2 sm:space-x-4">
              <img
                className="bg-gray-200 p-8 w-32 h-24 rounded-lg"
                src={logo}
                alt="Polaroid camera"
              />
              <div className="card-body">
                  <h2 className="card-title font-extrabold">{job_title}</h2>
                  <p>{company_name}</p>
                  <div className="card-actions text-primary">
                    <div className="border border-primary px-3 py-1 rounded-md">
                      {remote_or_onsite}
                    </div>
                    <div className="border border-primary px-3 py-1 rounded-md">
                      {job_type}
                    </div>
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
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppliedJob;
