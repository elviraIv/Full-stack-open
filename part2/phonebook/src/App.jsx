import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
      <Filter onChange={(e) => setSearch(e.target.value)} />
      <h3>Add a new</h3>
      <PersonForm
        nameValue={newName}
        onChangeName={nameChangeHandler}
        numberValue={newNumebr}
        onChangeNumber={numberChangeHandler}
        onClick={submitNameHandler}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  );
};

{
  /* <div>











</div> */
}

export default App;
