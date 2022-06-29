import React from "react";

const Dropdown = (data) => {
  const { cities } = data;
  const { selectedCity, setSelectedCity } = data;

  const renderCities = cities.map((city) => {
    return (
      <div
        className="dropdown-item"
        key={city.id}
        onClick={(e) => {
          setSelectedCity(city);
        }}
      >
        {city.name}
      </div>
    );
  });

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
        {selectedCity ? selectedCity.name : "Select a city"}
      </button>
      <div className="dropdown-menu">{renderCities}</div>
    </div>
  );
};

export default Dropdown;
