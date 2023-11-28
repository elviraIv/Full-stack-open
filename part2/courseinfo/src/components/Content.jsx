import Header from "./Header";
import Part from "./Part";

const Content = ({ course }) => {
  let allExercises = course.parts.reduce(
    (sum, current) => sum + current.exercises,
    0
  );
  return (
    <>
      <Header title={course.name} />
      <div>
        {course.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
      <p style={{ fontWeight: "bold" }}>total of {allExercises} exercises </p>
    </>
  );
};

export default Content;
