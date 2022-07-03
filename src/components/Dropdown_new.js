import React from "react";

import data from "../data/openWeather/cities2.json";
// const {cities}=data

const Dropdown = () => {
  const { cities } = data;
  const { selectedCity, setSelectedCity } = data;

  let states = [];
  cities.forEach((city) => states.push(city.state));
  states = [...new Set(states)];

  // console.log(cities);

  let sortedCities = {};
  cities.forEach((city) => {
    let stateName = city.state;
    if (!(city.state in sortedCities)) {
      sortedCities[stateName] = [];
    }
    sortedCities[stateName].push(city);
  });
  // for (const sortedCity in sortedCities) {
  //   console.log(sortedCity);
  // }

  // console.log("cities" in data);

  const renderCities = (cities) => {
    cities.map((city) => {
      // console.log(city);
      return (
        <div
          className=""
          key={city.id}
          onClick={(e) => {
            setSelectedCity(city);
          }}
        >
          {city.name}
        </div>
      );
    });
  };

  const renderStates = (sortedCities) => {
    return Object.keys(sortedCities).map((state) => {
      // console.log(sortedCities[state]);
      return (
        <li className="" key={sortedCities[state][0].id}>
          <a tabIndex="-1" href="#">
            {state}
          </a>
          {renderCities(sortedCities[state])}
        </li>
      );
    });
  };

  return (
    <div className="dropdown py-2">
      <button
        className="btn btn-sm btn-secondary dropdown-toggle py-1"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select a state
      </button>
      <ul className="dropdown-menu">{renderStates(sortedCities)}</ul>
    </div>
  );
};

export default Dropdown;
