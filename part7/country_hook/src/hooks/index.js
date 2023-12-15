import axios from "axios";
import { useEffect, useState } from "react";

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (name) {
      axios
        .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then((response) => {
          setCountry(response.data);
        })
        .catch((error) => {
          setCountry(null);
        });
    }
  }, [name]);

  return country;
};

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
