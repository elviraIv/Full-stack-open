import { useState, useEffect } from "react";

import axios from "axios";

const Weather = ({ capital }) => {
  const OPENWHEATER_API_KEY = import.meta.env.VITE_OPENWHEATER_API_KEY;
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${OPENWHEATER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div>
      {weather.main && (
        <>
          <h1>Weather in {capital}</h1>
          <div>temperature {weather.main.temp} °C</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <div>wind {weather.wind.speed} m/s</div>
        </>
      )}
    </div>
  );
};

export default Weather;
