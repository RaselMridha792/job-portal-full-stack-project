import React, { useContext } from "react";
import loginAnimation from "../../assets/lottieFiles/loginAnimation.json";
import Lottie from "lottie-react";
import { UserContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
    const {handleSignIn} = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    handleSignIn(email, password)
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error.message)
    })
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content gap-10 flex-col-reverse shrink-0 lg:flex-row-reverse">
            <div className="lg:w-1/3 hidden md:flex">
              <Lottie animationData={loginAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 rounded-none shrink-0 w-full max-w-md">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl capitalize text-center">
                  Member Login
                </h1>
                <p className="text-gray-500 py-3 text-center">
                  Access to all features. No credit card required.
                </p>
                <button className="btn">Sign In With Google</button>
              </div>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-gray-800 text-white">Login</button>
                  <p className="text-center">don't have any account? <Link to='/register'>sign up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
