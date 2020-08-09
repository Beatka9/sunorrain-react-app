import React from "react";
import TemperatureNow from "./TemperatureNow";
import Icon from "./Icon";
import "./TodayInfo.css";

export default function TodayInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-7 TempNow">
          <span className="IconNow">
            <Icon code={props.data.iconCode} />
          </span>
          <span>
            <TemperatureNow celsius={props.data.temperature} />
          </span>

          <p className="RangeTemperatureNow">
            <span id="maxTemperatureNow">{Math.round(props.data.tempMax)}</span>
            °/
            <span id="minTemperatureNow">{Math.round(props.data.tempMin)}</span>
            °
          </p>
        </div>
        <div className=" col-4 WeatherDataNow">
          <p id="weatherDescription" className="text-capitalize">
            {" "}
            {props.data.description}{" "}
          </p>
          <p className="dataToday">
            Feels like:{" "}
            <span id="feelsLike">{Math.round(props.data.feelsLike)}</span> C°
          </p>
          <p className="dataToday">
            Humidity:{" "}
            <span id="humidity">{Math.round(props.data.humidity)}</span> %
          </p>
          <p className="dataToday">
            Wind Speed:{" "}
            <span id="windSpeed">{Math.round(props.data.windSpeed)}</span> Km/h
          </p>
        </div>
      </div>
    </div>
  );
}
