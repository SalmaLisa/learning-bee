import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/courses.css";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AuthContext } from "../Contexts/UserContext";
import toast from "react-hot-toast";
import { useTitle } from "../Hooks/useTitle";

const Login = () => {
  const [email,setEmail]=useState('')
  const { handleLogin, googleSignIn, gitHubSignIn ,resetPassword} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";
  useTitle('Login')
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //handle User Login
    handleLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Successfully logged in");
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    gitHubSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleResetPassword = () => {
    resetPassword(email)
      .then(() => {
      toast.success('Password reset link has been sent to your email.')
      })
    .catch(err=>toast.error(err.message))
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="card-body lg:w-1/3 md:mx-auto px-30 bg-base-300 shadow-layer rounded my-20 mx-5"
    >
      <h1
        style={{ fontFamily: "'Oswald', sans-serif" }}
        className="text-3xl font-semibold text-center"
      >
        Please <span className="text-yellow-500">Login</span>
      </h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          onBlur={(e)=>setEmail(e.target.value)}
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
          <Link onClick={handleResetPassword} className="label-text-alt link link-hover">
            Forgot password?
          </Link>
        </label>
        <label className="label">
          <Link to="/register" className="label-text-alt link link-hover">
            New to this site ? Create an account
          </Link>
        </label>
      </div>

      <div className="form-control mt-6">
        <button className="btn btn-warning">Login</button>
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
  );
};

export default Login;
