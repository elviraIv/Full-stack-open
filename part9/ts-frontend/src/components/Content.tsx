import React from "react";
import { CoursePartProp } from "../types";


const Content = ({ courseParts }: CoursePartProp[]) => {
  return (
    <div>
      {courseParts.map((course) => (
        <div key={course.name}>
          <span>{course.name}</span>
          <span>{course.exerciseCount}</span>
        </div>
      ))}
    </div>
  );
};

export default Content;
