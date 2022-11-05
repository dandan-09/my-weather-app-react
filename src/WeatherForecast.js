import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div>
            <img
              className="WeatherForecast-icon"
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Cloudy"
            />
          </div>
          <div className="WeatherForecast-temperatures mb-3">
            <span className="WeatherForecast-temperatures-max">19°</span>
            <span className="WeatherForecast-temperatures-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
