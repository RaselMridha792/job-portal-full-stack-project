import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { motion } from "motion/react";

const JobCard = ({ singleJob }) => {
  console.log(singleJob);
  const {
    company_logo,
    title,
    _id,
    location,
    jobType,
    salaryRange,
    requirements,
    description,
    company,
    status,
  } = singleJob;
  return (
    <>
      <motion.div
        whileHover={{ y: -5, background: "white" }}
        className="card card-compact border rounded-lg p-2 font-Roboto bg-blue-50"
      >
        <div className="flex items-center gap-2">
          <img className="w-16" src={company_logo} alt="company" />
          <div>
            <h1 className="text-xl font-bold capitalize">{company}</h1>
            <p className="text-gray-400 flex items-center gap-1">
              <CiLocationOn />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl">{title}</h2>
          <div>
            <p className="flex items-center gap-1">
              <PiShoppingBagOpenThin />
              {jobType}
            </p>
          </div>
          <p className="py-5">{description}</p>
          <div className="flex items-center flex-wrap gap-2">
            {requirements.map((requirement) => (
              <p className="border rounded-lg px-2 py-1 bg-blue-100 flex items-center justify-center">
                {requirement}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="font-bold">Salary: {salaryRange.min} - {salaryRange.max} <span className="uppercase">{salaryRange.currency}</span></p>
            <div className="card-actions justify-end">
              <button className="btn border-blue-100 bg-blue-50 text-blue-500 hover:bg-blue-400 hover:text-black">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default JobCard;

// {
//     "_id": "675ecb01fbb4f0fae03867c5",
//     "title": "Marketing Specialist",
//     "location": "Banani, Dhaka",
//     "jobType": "Remote",
//     "category": "Marketing",
//     "applicationDeadline": "2024-12-15",
//     "salaryRange": {
//         "min": 30000,
//         "max": 50000,
//         "currency": "bdt"
//     },
//     "description": "Join our marketing team to strategize and implement innovative campaigns for our products and services.",
//     "company": "GoatMark Inc",
//     "requirements": [
//         "Google Analytics",
//         "SEO",
//         "Content Management Systems",
//         "Excel"
//     ],
//     "responsibilities": [
//         "Develop marketing strategies",
//         "Manage ad campaigns",
//         "Analyze campaign performance"
//     ],
//     "status": "active",
//     "hr_email": "recruitment@brightmark.com",
//     "hr_name": "Tasnia Ahmed",
//     "company_logo": "https://i.ibb.co/TvvzXfq/google.png"
// }
