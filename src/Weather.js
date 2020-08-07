import React, { useState } from "react";
import ForecastBox from "./ForecastBox";
import "./Weather.css";
import axios from "axios";
import FriendlyDate from "./FriendlyDate";
import TodayInfo from "./TodayInfo";

export default function Weather(props) {
  let [city, setCity] = useState("Rimini");
  let [weather, setWeather] = useState({ ready: false });
  function search(city) {
    const apiKey = "b502e3f5d51eafa682fcf63b13086eef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response);
    setWeather = {
      ready: true,
      temperature: response.data.main.temp,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      timestamp: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      feelsLike: response.data.main.feels_like,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
    };
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a City..."
                onChange={changeCity}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className="col-3 NameApp">
            <h3>SunOrRain</h3>
          </div>
        </div>
        <h2 className="showed-city">{props.city}</h2>
        <FriendlyDate date={weather.timestamp} />
        <TodayInfo data={weather} />
        <br />
        <div className="row">
          <div className="col-6">
            <ForecastBox />
            <ForecastBox />
            <ForecastBox />
          </div>
          <div className="col-6">
            <ForecastBox />
            <ForecastBox />
            <ForecastBox />
          </div>
        </div>
      </div>
    );
  } else {
    search(city);
    return "Loading...";
  }
}
