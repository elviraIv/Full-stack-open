import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumebr, setNewNumebr] = useState("");
  const [search, setSearch] = useState("");

  const nameChangeHandler = (e) => {
    setNewName(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setNewNumebr(e.target.value);
  };

  const submitNameHandler = (e) => {
    e.preventDefault();
    const newNameObj = {
      name: newName,
      number: newNumebr,
    };

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(newNameObj));
    setNewName("");
    setNewNumebr("");
  };
  console.log(search);
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="enter your filter parameter..."
        />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={nameChangeHandler} />
        </div>
        <div>
          number: <input value={newNumebr} onChange={numberChangeHandler} />
        </div>
        <div>
          <button type="submit" onClick={submitNameHandler}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
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
    </div>
  );
};

export default App;
