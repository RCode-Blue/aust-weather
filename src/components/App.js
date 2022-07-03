import React, { useState, useEffect } from "react";

import "@babel/polyfill";
import "regenerator-runtime/runtime";
import axios from "axios";

import "../styles/styles.css";
const KEY = process.env.OPEN_WEATHER;

import Dropdown from "./Dropdown";
import WeatherData from "./WeatherData";

import locations from "../data/openWeather/cities.json";
const { cities } = locations;

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = (id) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?id=${id}&appId=${KEY}&units=metric`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const renderSelectedCity = () => {
    return selectedCity ? (
      <button className="" onClick={() => getWeather(selectedCity.id)}>
        Submit
      </button>
    ) : null;
  };

  const renderWeatherData = () => {
    return weatherData ? <WeatherData weatherData={weatherData} /> : null;
  };

  useEffect(() => {});

  return (
    <div className="App container-fluid p-4">
      <div className="">
        <p className="h5">Current weather</p>
        <Dropdown
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>
      <div className="mb-3">
        {renderSelectedCity()}
        {renderWeatherData()}
      </div>
    </div>
  );
}

export default App;
