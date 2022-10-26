import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Ratings from "../components/Ratings";
import { MdDownload } from 'react-icons/md';

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { _id,title, img, desc,Price, rating } = courseDetails;
  console.log(courseDetails);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="mask mask-parallelogram" alt="" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{desc}</p>
            <div className="flex mb-10">
              <Ratings rating={rating}></Ratings>
              <p className="font-bold ml-20">Price : {Price}</p>
            </div>
            <div className="flex items-center">
            <button className="btn btn-warning font-bold mr-5 hover:bg-yellow-500">Get Premium Access</button>
            <button className="btn btn-warning font-bold mr-5 hover:bg-yellow-500"><MdDownload className="text-2xl" /><span> Download pdf</span></button>
            <Link to='/courses'><button className="btn  font-bold">Not now</button></Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
