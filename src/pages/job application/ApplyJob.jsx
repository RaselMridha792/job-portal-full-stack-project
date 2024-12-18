import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";

const ApplyJob = () => {
    const jobId = useParams();
    console.log(jobId.id);
    const {user} = useContext(UserContext)

    const handleUserApplication = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const letter = form.letter.value;
        const linkedIn = form.linkedIn.value;
        const cv = form.cv.value;
        const certification = form.certification.value;
        const experience = form.experience.value;
        const userEmail = user.email;
        const applicationJob = jobId.id;
        const userApplication = {
            name, date, letter, linkedIn, cv, certification, experience, userEmail, applicationJob
        }
        fetch('http://localhost:5000/job/application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userApplication)
        })
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            if(data.acknowledged == true){
                console.log('application submited successfully')
            }
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
  return (
    <>
      <div className="my-20 max-w-screen-2xl mx-auto">
        <div className="py-5">
          <h1 className="text-4xl font-bold capitalize text-center">
            job application form
          </h1>
          <p className="text-center py-3 text-lg text-gray-500">please fill all the information to apply this job</p>
        </div>
        <hr />
        <div className="py-10 w-11/12 mx-auto">
          <form onSubmit={handleUserApplication} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">your full name<span className="text-red-600">*</span></span>
              </div>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered rounded-sm w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
              <span className="label-text">Prefered Interview Date<span className="text-red-600">*</span></span>
              </div>
              <input
                type="date"
                name="date"
                placeholder="Type here"
                className="input input-bordered rounded-sm  w-full"
                required
              />
            </label>
            <label className="form-control col-span-2 h-40 w-full">
              <div className="label">
              <span className="label-text">cover letter<span className="text-red-600">*</span></span>
              </div>
              <textarea
                type="text"
                name='letter'
                placeholder="write about you something"
                className="input input-bordered rounded-sm h-full col-span-2 w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
              <span className="label-text">enter your linkedIn profile Url<span className="text-red-600">*</span></span>
              </div>
              <input
                type="url"
                name="linkedIn"
                placeholder="enter your linkedIn Url"
                className="input input-bordered rounded-sm w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
              <span className="label-text">enter your cv url<span className="text-red-600">*</span></span>
              </div>
              <input
                type="url"
                name="cv"
                placeholder="enter your cv url"
                className="input input-bordered rounded-sm w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
              <span className="label-text">enter your certification url<span className="text-red-600">*</span></span>
              </div>
              <input
                type="url"
                name="certification"
                placeholder="enter your certification url"
                className="input input-bordered rounded-sm w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
              <span className="label-text">enter your experience level<span className="text-red-600">*</span></span>
              </div>
              <input
                type="text"
                name="experience"
                placeholder="enter your experience level"
                className="input input-bordered rounded-sm w-full"
                required
              />
            </label>
            <hr className="w-full col-span-2 my-5" />
            <button className="btn btn-primary text-lg uppercase w-1/4 mx-auto col-span-2">apply now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyJob;
