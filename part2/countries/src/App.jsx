import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Country from "./components/Country";
import Countries from "./components/Countries";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setCountriesToShow(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div>
        find countries:
        <input value={query} onChange={handleQueryChange} />
        <div>
          {countriesToShow.length === 1 ? (
            <Country country={countriesToShow[0]} />
          ) : null}
          {countriesToShow.length > 10 ? (
            <div>Too many matches, specify anither filter</div>
          ) : (
            <Countries
              countriesToShow={countriesToShow}
              setCountriesToShow={setCountriesToShow}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
