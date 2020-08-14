import React from "react";
import "./TemperatureNow.css";

export default function TemperatureNow(props) {
  let temperature = props.celsius;

  function farTemperature(event) {
    event.preventDefault();
    temperature = (props.celsius * 9) / 5 + 32;
  }
  function celsiusTemp(event) {
    event.preventDefault();
    temperature = props.celsius;
  }
  return (
    <p>
      <span className="TemperatureNow">{Math.round(temperature)} </span>
      <span className="streched-link" onClick={celsiusTemp}>
        C°
      </span>
      <span className="streched-link" onClick={farTemperature}>
        |F°
      </span>
    </p>
  );
}
