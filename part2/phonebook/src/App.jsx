import { useEffect, useState } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumebr, setNewNumebr] = useState("");
  const [search, setSearch] = useState("");

  useEffect(()=> {
    axios 
          .get(' http://localhost:3000/persons')
          .then(response => {
            setPersons(response.data)
          })
  },[])

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
