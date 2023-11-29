import { useEffect, useState } from "react";
import contactService from "./services/contactService";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumebr, setNewNumebr] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    contactService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const nameChangeHandler = (e) => {
    setNewName(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setNewNumebr(e.target.value);
  };

  const submitNameHandler = (e) => {
    e.preventDefault();
    const noteObj = {
      name: newName,
      number: newNumebr,
    };

    const existingEntry = persons.find((person) => person.name === newName);

    console.log(existingEntry);
    if (existingEntry) {
      window.confirm(
        `${newName} is already added to phonebookreplace the old number with a new one?`
      );
      contactService
        .update(existingEntry.id, noteObj)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== returnedPerson.id ? person : returnedPerson
            )
          );
        });

      setNewName("");
      setNewNumebr("");
      return;
    }

    contactService.create(noteObj).then((returnedObj) => {
      setPersons(persons.concat(returnedObj));
    });

    setNewName("");
    setNewNumebr("");
  };

  const deleteHandler = (id) => {
    const person = persons.find((p) => p.id === id);

    if (window.confirm(`Delete ${person.name}?`))
      contactService.deleteContact(id).then(() => {
        contactService.getAll().then((persons) => {
          setPersons(persons);
        });
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm
        nameValue={newName}
        onChangeName={nameChangeHandler}
        numberValue={newNumebr}
        onChangeNumber={numberChangeHandler}
        onClick={submitNameHandler}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filter={filter}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

{
  /* <div>











</div> */
}

export default App;
