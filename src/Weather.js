import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London, UK",
    temperature: 17,
    date: "Fri, 23 September 2022",
    description: "Cloudy",
    imageUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    windSpeed: 10,
    humidity: 30,
  };
  return (
    <div className="Weather">
      <p className="clock">22:00</p>
      <div className="row">
        <div className="col-md-6">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
              autofocus="on"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="col-md-3">
          <form className="search-button">
            <input type="submit" value="🔍" />
          </form>
        </div>
        <div className="col-md-3">
          <form className="current-location-button">
            <input type="submit" value="Current Location" />
          </form>
        </div>
      </div>
      <h1>
        <div className="row">
          <div className="col-4">
            <span>{weatherData.city}</span>
          </div>
          <div className="col-2">
            <img src={weatherData.imageUrl} alt={weatherData.description} />
          </div>
          <div className="col-6">
            <span>{weatherData.date}</span>
          </div>
        </div>
      </h1>
      <h2>
        <div className="row">
          <div className="col-9">
            <span>{weatherData.temperature}</span>{" "}
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
              <span className="description">{weatherData.description}</span>
            </div>
            <div className="col-4">
              <span className="wind-speed-element">Wind speed: </span>
              <span>
                <span className="wind">{weatherData.windSpeed} km/h</span>
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
    </div>
  );
}
