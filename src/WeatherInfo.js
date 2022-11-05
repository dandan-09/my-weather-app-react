import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <div className="row">
          <div className="col-4 mt-3">
            <span>{props.data.city}</span>
          </div>
          <div className="col-3">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="WeatherInfo-icon"
            />
          </div>
          <div className="col-5 date mt-4">
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </div>
        </div>
      </h1>
      <h2>
        <div className="row">
          <div className="col-9">
            <WeatherTemperature celsius={props.data.temperature} />
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
    </div>
  );
}
