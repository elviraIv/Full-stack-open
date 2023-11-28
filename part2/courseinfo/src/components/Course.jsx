import Content from "./Content";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Content key={course.id} course={course} />
      ))}
    </>
  );
};

export default Course;
