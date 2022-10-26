import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SingleCourse from '../components/SingleCourse';
import '../styles/courses.css'

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses)
  return (
    <div className='md:grid grid-cols-4 shadow-lg  mt-10'>
      <div className='bg-yellow-300 rounded-3xl h-64 ml-10 p-10 shadow-layer'>
        {
         courses.map(course => <Sidebar course = {course} key ={course._id}></Sidebar>) 
        }
      </div>
     <div className='col-span-3'> {
        courses.map(course => <SingleCourse course = {course} key ={course._id}></SingleCourse>)
      }</div>
    </div>
  );
};

export default Courses;