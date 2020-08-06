import React from "react";
import ForecastBox from "./ForecastBox";
import "./Weather.css";
export default function Weather() {
  return (
    <div class="container">
      <div class="row">
        <div className="col-8">
          <form>
            <input type="search" autofocus="on" placeholder="Type a City..." />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="col-3 NameApp">
          <h3>SunOrRain</h3>
        </div>
      </div>
      <header>
        <h2 className="showed-city">Firenze</h2>
        <h4>Today 02:34</h4>
      </header>
      <div className="row">
        <div class="col-7">
          <p class="weatherNow">
            <span className="TemperatureNow"> 12 </span>
            C°|F°
          </p>
          <p className="RangeTemperatureNow">
            <span id="maxTemperatureNow">12</span>C°/
            <span id="minTemperatureNow">14</span>C°
          </p>
        </div>
        <div class=" col-4 WeatherDataNow">
          <p id="weatherDescription"> Clear Sky </p>
          <p class="dataToday">
            Feels like: <span id="feelsLike">15</span> C°
          </p>
          <p class="dataToday">
            Humidity: <span id="humidity">56</span> %
          </p>
          <p class="dataToday">
            Wind Speed: <span id="windSpeed">15</span> Km/h
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
