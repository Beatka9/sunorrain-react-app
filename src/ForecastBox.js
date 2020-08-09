import React from "react";
import Icon from "./Icon";
import "./ForecastBox.css";

export default function ForecastBox(props) {
  if (props.list === undefined) {
    return "Wait! ";
  } else {
    return (
      <div className="ForecastBox">
        <span className="ForecastHours">
          {new Date(props.list.dt * 1000).getHours()}:00
        </span>
        <span className="Icon">
          <Icon code={props.list.weather[0].icon} />
        </span>
        <span className="ForecastTemperature">
          {Math.round(props.list.main.temp)}°
        </span>
      </div>
    );
  }
}
