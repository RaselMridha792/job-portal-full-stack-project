import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import thumbnail from "../../assets/bannerImage/thumb.png";
import { LuBadgeCheck } from "react-icons/lu";
import { motion } from "motion/react";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    company,
    jobType,
    location,
    salaryRange,
    applicationDeadline,
    category,
    _id,
  } = job;
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5">
        <img className="w-full my-10 rounded-3xl" src={thumbnail} alt="" />
        <div className="mt-10 flex justify-between items-center">
          <h1 className="md:text-4xl text-xl font-bold">
            {title} at {company}
          </h1>
          <Link to={`/job/application/${_id}`}>
            <motion.button
              whileHover={{ y: -5 }}
              className="btn bg-blue-600 rounded-lg md:text-lg text-white hover:bg-gray-800"
            >
              <LuBadgeCheck /> Apply Now
            </motion.button>
          </Link>
        </div>
        <div className="flex items-center text-lg pt-2 mb-10 text-gray-500">
          <p className="flex items-center gap-1">
            <PiShoppingBagOpenThin />
            {jobType}
          </p>
          <p className="flex items-center gap-1">
            <CiLocationOn />
            {location}
          </p>
        </div>
        <hr />
        <div className="my-20 flex flex-col md:flex-row gap-5">
          <div className="border px-5 py-5 w-3/5 rounded-xl">
            <h1 className="text-3xl font-bold pb-5">Employment Information</h1>
            <hr />
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-xl pt-5 flex items-center gap-10">
                <div className="space-y-5 text-gray-500">
                  <p>industry</p>
                  <p>salary</p>
                  <p>job type</p>
                  <p>dateline</p>
                </div>
                <div className="space-y-5">
                  <p>{title}</p>
                  <p>
                    {salaryRange.min}-{salaryRange.max}{" "}
                    <span className="uppercase">{salaryRange.currency}</span>
                  </p>
                  <p>{jobType}</p>
                  <p>{applicationDeadline}</p>
                </div>
              </div>
              <div className="text-xl pt-5 flex items-center gap-10">
                <div className="space-y-5 text-gray-500">
                  <p>category</p>
                  <p>location</p>
                  <p>job level</p>
                  <p>Experience</p>
                </div>
                <div className="space-y-5">
                  <p>{category}</p>
                  <p>{location}</p>
                  <p>Experienced</p>
                  <p>1-2 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;

// {
//     "_id": "675ecb01fbb4f0fae03867c4",
//     "title": "Software Engineer",
//     "location": "Halishohor, Chittagong",
//     "jobType": "Hybrid",
//     "category": "Engineering",
//     "applicationDeadline": "2024-12-31",
//     "salaryRange": {
//         "min": 40000,
//         "max": 60000,
//         "currency": "bdt"
//     },
//     "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
//     "company": "Favorite IT",
//     "requirements": [
//         "JavaScript",
//         "React",
//         "Node.js",
//         "MongoDB"
//     ],
//     "responsibilities": [
//         "Develop and maintain software",
//         "Collaborate with the team",
//         "Participate in code reviews"
//     ],
//     "status": "active",
//     "hr_email": "hr@techsolutions.com",
//     "hr_name": "Farhan Rahman",
//     "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
// }
