import React from "react";
import regAnimation from "../../assets/lottieFiles/registerAnimation.json";
import Lottie from "lottie-react";

const Register = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <div className="w-96">
              <Lottie animationData={regAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 rounded-none">
                <div>
                    <h1 className="text-4xl capitalize text-center">Start for free today</h1>
                    <p className="text-gray-500 py-3">Access to all features. No credit card required.</p>
                    <button className="btn">Sign Up With Google</button>
                </div>
              <form className="my-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-gray-800 text-white">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
