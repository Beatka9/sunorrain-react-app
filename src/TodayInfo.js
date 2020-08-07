import React from "react";
export default function TodayInfo(data) {
  return (
    <div>
      <div className="row">
        <div className="col-7">
          <p className="weatherNow">
            <span className="TemperatureNow"> {data.temperature} </span>
            C°|F°
          </p>
          <p className="RangeTemperatureNow">
            <span id="maxTemperatureNow">{data.tempMax}</span>C°/
            <span id="minTemperatureNow">{data.tempMin}</span>C°
          </p>
        </div>
        <div className=" col-4 WeatherDataNow">
          <p id="weatherDescription"> {data.description} </p>
          <p className="dataToday">
            Feels like: <span id="feelsLike">{data.feelsLike}</span> C°
          </p>
          <p className="dataToday">
            Humidity: <span id="humidity">{data.humidity}</span> %
          </p>
          <p className="dataToday">
            Wind Speed: <span id="windSpeed">{data.windSpeed}</span> Km/h
          </p>
        </div>
      </div>
    </div>
  );
}
