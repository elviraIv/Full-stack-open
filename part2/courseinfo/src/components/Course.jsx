import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  let allExercises = course.parts.reduce(
    (sum, current) => sum + current.exercises,
    0
  );

  return (
    <>
      <Header title={course.name} />
      <Content key={course.id} course={course} />
      <p>total of {allExercises} exercises</p>
    </>
  );
};

export default Course;
