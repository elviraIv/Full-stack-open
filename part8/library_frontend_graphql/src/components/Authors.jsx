import {  useMutation, useQuery } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";
import { useState } from "react";

const Authors = (props) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const result = useQuery(ALL_AUTHORS);

  const [editAuthor] = useMutation(EDIT_AUTHOR)

  if (result.loading) {
    return <div>loading...</div>;
  }

  if (!props.show) {
    return null;
  }
  const authors = result.data.allAuthors;

  const changeYearHandler = (e) => {
    e.preventDefault();

    editAuthor({variables: { name, born }})

    setName('')
    setBorn('')
    
  }

console.log(name);
console.log(born);

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Set birthday</h2>
      <form onSubmit={changeYearHandler}>

            <div>
              name <input 
              value={name}
              onChange={({target}) => setName(target.value)}
              />
            </div>
            <div>
              born <input 
              value={born}
              onChange={({target}) => setBorn(target.value)}
              />
            </div>
            <button type="submit">update author</button>


        
      </form>
    </div>
  );
};

export default Authors;
