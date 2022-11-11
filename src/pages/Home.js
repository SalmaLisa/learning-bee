import React from "react";
import bannerImg from "../assets/images/image.png";
import { useTitle } from "../Hooks/useTitle";
import "../styles/Home.css";
const Home = () => {
  useTitle('Home')
  return (
    <div>
      <div className="relative">
        <img className="w-full banner-img" src={bannerImg} alt="" />
        <div className="w-full absolute top-0 bg-black opacity-50 overlay"></div>
        <div className="absolute md:top-44 md:left-20 left-9 top-20 text-white">
          <h1
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-5xl text-white mb-4"
          >
            Welcome to <span className="text-yellow-300">Learning Bee</span>
          </h1>
          <p style={{ fontFamily: "'Courgette', cursive" }} className="text-xl">
            Gain applicable skills, build capabilities, and tap into the <br />{" "}
            confidence you need to improve yourself and advance your career.
          </p>
          <button className="btn btn-outline hover:text-white btn-warning mt-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
