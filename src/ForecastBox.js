import React from "react";
import Icon from "./Icon";

export default function ForecastBox(props) {
  if (props.list === undefined) {
    return "Wait! ";
  } else {
    return (
      <div className="ForecastBox">
        {new Date(props.list.dt * 1000).getHours()}:00
        <Icon code={props.list.weather[0].icon} />
        <span className="ForecastTemperature">
          {Math.round(props.list.main.temp)}
        </span>
      </div>
    );
  }
}
