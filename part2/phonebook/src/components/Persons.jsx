const Persons = ({ persons, search }) => {
  return (
    <div>
      {persons
        .filter((person) => {
          return search.toLowerCase() === ""
            ? person
            : person.name.toLowerCase().includes(search);
        })
        .map((person) => (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  );
};

export default Persons;
