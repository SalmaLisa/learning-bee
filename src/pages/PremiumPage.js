import React from "react";
import { useLoaderData } from "react-router-dom";

const PremiumPage = () => {
  const course = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-20 mb-80">
        Congratulations !!! <br /> You got Premium Access to the course{" "}
        <span className="text-yellow-500">{course.title}</span>
      </h1>
    </div>
  );
};

export default PremiumPage;
