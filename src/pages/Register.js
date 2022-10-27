import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/courses.css";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AuthContext } from "../Contexts/UserContext";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserInfo, googleSignIn ,gitHubSignIn } = useContext(AuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    } else {
      setError("");
    }

    //create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User is successfully created");
        console.log(user);
        updateUserNameAndPhoto();
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
    
    //update users name and photo
    const updateUserNameAndPhoto = () => {
      updateUserInfo(name, photoURL)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  //google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => { })
    .catch(error=>console.log(error))
  }

  //github sign in
  const handleGithubSignIn = () => {
    gitHubSignIn()
      .then(() => {})
    .catch(error=>console.log(error))
  }
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="card-body lg:w-1/3 md:mx-auto px-30 bg-base-300 shadow-layer rounded my-20 mx-5"
      >
        <h1
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className="text-3xl font-semibold text-center"
        >
          Please <span className="text-yellow-500">Register</span>
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
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
            type="text"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            {error && <small className="text-red-600">{error}</small>}
          </label>
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">
              Already have an account? Login
            </Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-warning">Register</button>
        </div>
        <div className="flex text-3xl justify-center mt-5">
          <button onClick={handleGoogleSignIn}>
            <BsGoogle />
          </button>
          <button onClick={handleGithubSignIn}>
            <BsGithub className="ml-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
