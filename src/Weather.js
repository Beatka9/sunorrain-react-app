import React, { useState } from "react";
import ForecastBox from "./ForecastBox";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
    setWeather = {
      temperature: response.data.main.temp,
      description: "yes",
      feelsLike: "cold",
      windSpeed: 12,
      ready: true,
    };
  }
  const apiKey = "b502e3f5d51eafa682fcf63b13086eef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let city = props.city;
  let [weather, setWeather] = useState({ ready: false });
  axios.get(apiUrl).then(handleResponse);
  return (
    <div class="container">
      <div class="row">
        <div className="col-8">
          <form>
            <input type="search" placeholder="Type a City..." />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="col-3 NameApp">
          <h3>SunOrRain</h3>
        </div>
      </div>
      <header>
        s<h2 className="showed-city">{props.city}</h2>
        <h4>Today 02:34</h4>
      </header>
      <div className="row">
        <div class="col-7">
          <p class="weatherNow">
            <span className="TemperatureNow"> {weather.temperature} </span>
            C°|F°
          </p>
          <p className="RangeTemperatureNow">
            <span id="maxTemperatureNow">12</span>C°/
            <span id="minTemperatureNow">14</span>C°
          </p>
        </div>
        <div class=" col-4 WeatherDataNow">
          <p id="weatherDescription"> {weather.description} </p>
          <p class="dataToday">
            Feels like: <span id="feelsLike">{weather.feelsLike}</span> C°
          </p>
          <p class="dataToday">
            Humidity: <span id="humidity">56</span> %
          </p>
          <p class="dataToday">
            Wind Speed: <span id="windSpeed">{weather.windSpeed}</span> Km/h
          </p>
        </div>
      </div>
      <br />
      <div className="row">
        <div class="col-6">
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
}
