import React from "react";

interface coursePartProp {
  name: string;
  exerciseCount: number;
}
const Content = ({ courseParts }: coursePartProp[]) => {
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
