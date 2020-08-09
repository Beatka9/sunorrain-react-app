import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FriendlyDate from "./FriendlyDate";
import TodayInfo from "./TodayInfo";
import Forecast from "./Forecast.js";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState({ ready: false });
  function search(city) {
    const apiKey = "b502e3f5d51eafa682fcf63b13086eef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelsLike: response.data.main.feels_like,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
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
        <h2 className="showed-city">{weather.name}</h2>

        <FriendlyDate date={weather.date} />
        <TodayInfo data={weather} />
        <br />
        <Forecast city={weather.name} />
      </div>
    );
  } else {
    search(city);
    return "Loading...";
  }
}
