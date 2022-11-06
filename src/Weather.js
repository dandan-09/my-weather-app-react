import React, { useState } from "react";
import "./Weather.css";
import FormattedClock from "./FormattedClock";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
      iconUrl: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "39a3b847777o61f5b2409t63bab55fc7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div>
        <div className="Weather mt-2">
          <p className="clock mt-2 mb-2">
            <FormattedClock date={weatherData.date} />
          </p>
          <div className="row">
            <div className="col-sm-6">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </form>
            </div>
            <div className="col-sm-3">
              <form className="search-button">
                <input
                  type="submit"
                  value="🔍"
                  className="btn btn-light"
                  onClick={handleSubmit}
                />
              </form>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <p>
          <a
            href="https://github.com/dandan-09/my-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Daniella Gombor
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
