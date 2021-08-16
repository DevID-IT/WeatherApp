import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    err,
    city,
    temp,
    sunrise,
    sunset,
    humidity,
    wind,
    date,
    sky,
    skyicon,
  } = props.weather;
  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h2 className="weather-result__title">Actual weather in {city}</h2>
        <main className="data">
          <div className="wheather-result__weather">
            <div className="wheather-result__temp">
              {temp.toFixed()} &#176;C
            </div>
            <div className="wheather-result__sky">
              <img
                src={`http://openweathermap.org/img/wn/${skyicon}@2x.png`}
                alt="weather-icon"
                className="wheather-result__icon"
              />
              <p className="weather-result__sky-description">{sky}</p>
            </div>
          </div>
          <div className="wheather-result__humidity">Humidity: {humidity}%</div>
          <div className="wheather-result__wind">
            Wind speed: {(wind * 3.6).toFixed()} km/h
          </div>
          <div className="weather-result__sun">
            <div className="sun-rise">
              <img
                src="./pictures/sunrise.png"
                alt=""
                className="sun-rise__picture"
              />
              {sunriseTime}
            </div>
            <div className="sun-down">
              {sunsetTime}
              <img
                src="./pictures/sunset.png"
                alt=""
                className="sun-set__picture"
              />
            </div>
          </div>
        </main>
        <div className="wheather-result__actualization">{date}</div>
      </>
    );
  }
  return (
    <div className="wheather-result">
      {err ? `There is no city named ${city}` : content}
    </div>
  );
};

export default Result;
