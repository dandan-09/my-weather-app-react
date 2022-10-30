import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <div className="row">
          <div className="col-3 mt-3">
            <span>{props.data.city}</span>
          </div>
          <div className="col-3">
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <div className="col-6 date mt-4">
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </div>
        </div>
      </h1>
      <h2>
        <div className="row">
          <div className="col-9">
            <span>{Math.round(props.data.temperature)}</span>{" "}
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
                {props.data.description}
              </span>
            </div>
            <div className="col-4">
              <span className="wind-speed-element">Wind speed: </span>
              <span>
                <span className="wind">{Math.round(props.data.wind)} km/h</span>
              </span>
            </div>
            <div className="col-4">
              <span className="humidity-element">Humidity: </span>
              <span className="humidity">{props.data.humidity}%</span>
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
}
