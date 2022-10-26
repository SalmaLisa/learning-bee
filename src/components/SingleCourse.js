import React from 'react';

const SingleCourse = ({ course }) => {
  const { img } = course;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default SingleCourse;