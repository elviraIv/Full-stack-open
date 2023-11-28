import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  console.log({ course });
  return (
    <>
      <Header title={course.name} />
      <Content key={course.id} course={course} />
    </>
  );
};

export default Course;
