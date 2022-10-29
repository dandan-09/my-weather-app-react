import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: "Fri, 23 September 2022",
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <p className="clock">22:00</p>
        <div className="row">
          <div className="col-sm-6">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
              />
            </form>
          </div>
          <div className="col-sm-3">
            <form className="search-button">
              <input type="submit" value="🔍" className="btn btn-light" />
            </form>
          </div>
          <div className="col-sm-3">
            <form className="current-location-button">
              <input
                type="submit"
                value="Current Location"
                className="btn btn-light"
              />
            </form>
          </div>
        </div>
        <h1>
          <div className="row">
            <div className="col-4">
              <span>{weatherData.city}</span>
            </div>
            <div className="col-2">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
            <div className="col-6">
              <span>{weatherData.date}</span>
            </div>
          </div>
        </h1>
        <h2>
          <div className="row">
            <div className="col-9">
              <span>{Math.round(weatherData.temperature)}</span>{" "}
              <a href="/" className="active">
                °C
              </a>{" "}
              | <a href="/">°F</a>
            </div>
          </div>
        </h2>
        <ul>
          <li>
            <div className="row weather-descriptions">
              <div className="col-4">
                <span className="currently">Currently: </span>
                <span className="description text-capitalize">
                  {weatherData.description}
                </span>
              </div>
              <div className="col-4">
                <span className="wind-speed-element">Wind speed: </span>
                <span>
                  <span className="wind">
                    {Math.round(weatherData.wind)} km/h
                  </span>
                </span>
              </div>
              <div className="col-4">
                <span className="humidity-element">Humidity: </span>
                <span className="humidity">{weatherData.humidity}%</span>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="weather-forecast"></div>
          </li>
        </ul>
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
    const apiKey = "39a3b847777o61f5b2409t63bab55fc7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
