import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SingleCourse from "../components/SingleCourse";
import "../styles/courses.css";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="md:grid grid-cols-4 shadow-lg  mt-10">
      <div className="bg-yellow-300 rounded-3xl h-64  md:ml-10 mx-8  p-10 shadow-layer">
        {courses.map((course) => (
          <Sidebar course={course} key={course._id}></Sidebar>
        ))}
      </div>
      <div className="col-span-3 px-8 md:px-20 mb-20">
        {" "}
        {
          <div className="md:grid grid-cols-3 gap-10">
            {courses.map((course) => (
              <SingleCourse course={course} key={course._id}></SingleCourse>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Courses;
