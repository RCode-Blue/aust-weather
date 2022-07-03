import React from "react";

const WeatherData = (data) => {
  const { name, weather, main, wind } = data.weatherData;

  return (
    <div className="py-3">
      <div className="h2">{name}</div>
      <div className="">{weather[0].description}</div>
      <div className="pb-4 h5">
        <span>{main.temp}&#8451; </span>
        <span>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          ></img>
        </span>
      </div>
      <div className="px-3">
        <div className="row">
          <div className="">
            <span className="">Max: {Math.round(main.temp_max)}&#8451;</span>{" "}
            <span className="px-2">
              Min: {Math.round(main.temp_min)}&#8451;
            </span>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="h6 fw-lighter">
        <div className="">Feels like: {Math.round(main.feels_like)}&#8451;</div>
        <div className="">Wind: {Math.round((wind.speed * 18) / 5)} km/hr</div>
      </div>
    </div>
  );
};
export default WeatherData;
