import React, { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";

const AddJob = () => {
  const {user} = useContext(UserContext);
  console.log(user)


  const handleAddJob = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries())

    const {minCurrency, maxCurrency, currency, ...newJob} = initialData;

    const min = parseInt(minCurrency);
    const max = parseInt(maxCurrency);

    newJob.salaryRange = {min, max, currency}

    newJob.responsibilities = newJob.responsibilities.split('\n')
    newJob.requirements = newJob.requirements.split('\n')

    fetch('http://localhost:5000/add-job', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data)
    })
  }
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5">
        <div className="py-5">
          <h1 className="md:text-4xl text-xl font-bold text-blue-500 capitalize">
            Post a job for hire talent
          </h1>
          <p className="py-3 text-gray-500 md:text-xl">
            find best talents for your company.
          </p>
        </div>
        <div className="py-5">
          <p className="text-2xl uppercase mb-5">tell us about your company</p>
          <div className="flex flex-col lg:flex-row gap-10 mb-20">
            <div className="lg:w-2/3">
              <hr />
              <div>
                <form onSubmit={handleAddJob}>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Job title*</span>
                      </div>
                      <input
                        type="text"
                        name="title"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Job location*</span>
                      </div>
                      <input
                        type="text"
                        name="location"
                        placeholder="job location"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Pick the job type</span>
                      </div>
                      <select name="jobType" className="select select-bordered">
                        <option disabled>
                          Pick job types
                        </option>
                        <option>Hybrid</option>
                        <option>Remote</option>
                        <option>Full time</option>
                      </select>
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Job Category</span>
                      </div>
                      <select name="category" className="select select-bordered">
                        <option disabled>
                          Pick job Category
                        </option>
                        <option>Engineering</option>
                        <option>Digital Marketing</option>
                        <option>Graphics Designer</option>
                      </select>
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">
                          application Dateline*
                        </span>
                      </div>
                      <input
                        type="date"
                        name="applicationDeadline"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Company Name*</span>
                      </div>
                      <input
                        type="text"
                        name="company"
                        placeholder="company name"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <p className="mt-5 text-xl uppercase font-bold">
                    salary range
                  </p>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Min*</span>
                      </div>
                      <input
                        type="number"
                        name="minCurrency"
                        placeholder="minimum salary"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Max*</span>
                      </div>
                      <input
                        type="number"
                        name="maxCurrency"
                        placeholder="Maximum salary"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">currency</span>
                      </div>
                      <select name="currency" className="select select-bordered">
                        <option disabled>
                          Pick A Currency
                        </option>
                        <option>USDT</option>
                        <option>BDT</option>
                        <option>INR</option>
                      </select>
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Description*</span>
                      </div>
                      <textarea
                        type="number"
                        name="description"
                        rows="10"
                        cols="50"
                        placeholder="write a short description about your job"
                        className="input input-bordered w-full h-32"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Job status*</span>
                      </div>
                      <input
                        type="text"
                        name="status"
                        placeholder="active or inactive"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">hr email*</span>
                      </div>
                      <input
                        type="email"
                        name="hr_email"
                        defaultValue={user?.email}
                        placeholder="hr email"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">hr name*</span>
                      </div>
                      <input
                        type="text"
                        name="hr_name"
                        defaultValue={user?.displayName}
                        placeholder="hr name"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">company logo url*</span>
                      </div>
                      <input
                        type="url"
                        name="company_logo"
                        placeholder="type company logo url"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">requirements technology*</span>
                      </div>
                      <textarea
                        type="number"
                        name="requirements"
                        placeholder="write a requirements and press enter"
                        className="input input-bordered w-full h-32"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">responsibility*</span>
                      </div>
                      <textarea
                        type="number"
                        name="responsibilities"
                        placeholder="write a responsibility and press enter"
                        className="input input-bordered w-full h-32"
                        required
                      />
                    </label>
                  </div>
                  <hr className="md:my-10 my-5" />
                  <div className="mt-5">
                    <button className="btn btn-primary w-full text-white">Post Job</button>
                  </div>
                </form>
              </div>
            </div>

            {/* faq section  */}
            <div className="space-y-5 md:w-1/3">
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium">
                  1. How do I post a job on your platform?
                </div>
                <div className="collapse-content">
                  <p>
                    To post a job, create an account, navigate to the "Post a
                    Job" section, fill out the required details such as job
                    title, description, location, and salary range, and submit
                    the form. Once approved, your job posting will be live on
                    the platform.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium">
                  2. Can I edit my job posting after publishing it?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, you can edit your job posting at any time. Go to your
                    account dashboard, select the job post you want to update,
                    make the necessary changes, and save them. The updates will
                    reflect immediately.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium">
                  3. How long will my job posting remain active?
                </div>
                <div className="collapse-content">
                  <p>
                    The default duration for job postings is [insert duration,
                    e.g., 30 days]. You can extend the duration or deactivate
                    the post anytime through your dashboard. Let me know if
                    you’d like me to customize these further!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJob;
