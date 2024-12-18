import React, { useContext, useState } from "react";
import regAnimation from "../../assets/lottieFiles/registerAnimation.json";
import Lottie from "lottie-react";
import { UserContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";


const Register = () => {
  const provider = new GoogleAuthProvider();
  const { handleSignUp } = useContext(UserContext);
  const location = useLocation()
  const from = location.state || '/';
  console.log(location.state)
  const navigate = useNavigate();
  const [passValid, setPassValid] = useState("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  // handle signUp with google 
  const handleSignUpGoogle = ()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
      console.log('sign up successfull');
      navigate(from)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (!passwordRegex.test(password)) {
      setPassValid(
        "password should be at least one Uppercase One LowerCase and Must be 6 caracter or longer"
      );
      return;
    }
    setPassValid("");

    handleSignUp(email, password)
      .then((result) => {
        console.log(result);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content gap-10 flex-col-reverse shrink-0 lg:flex-row-reverse">
            <div className="w-96 hidden md:flex">
              <Lottie animationData={regAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 rounded-none shrink-0 w-full max-w-md">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl capitalize text-center">
                  Start for free today
                </h1>
                <p className="text-gray-500 py-3 text-center">
                  Access to all features. No credit card required.
                </p>
                <motion.button
                onClick={handleSignUpGoogle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="border gap-2 flex items-center justify-center px-10 py-3 rounded-2xl hover:text-red-500"
                >
                  {" "}
                  <img className="w-8"
                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                    alt=""
                  />
                  Sign Up With Google
                </motion.button>
              </div>
              <form className="card-body" onSubmit={handleRegister}>
                <div className="divider">OR</div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
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
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-gray-800 text-white">
                    Register
                  </button>
                  <p className="text-center">
                    have an account? <Link to="/login">sign In</Link>
                  </p>
                </div>
                <span className="text-red-500">{passValid}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
