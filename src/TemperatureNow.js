import React, { useState } from "react";
import "./TemperatureNow.css";

export default function TemperatureNow(props) {
  let celsiusTemperature = props.celsius;
  let farenheitTemperature = (props.celsius * 9) / 5 + 32;
  let [units, setUnits] = useState("celsius");

  function setFarenheit(event) {
    event.preventDefault();
    setUnits("farenheit");
  }
  function setCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <p>
        <span className="TemperatureNow">
          {Math.round(celsiusTemperature)}{" "}
        </span>
        <span className="streched-link">C°</span>
        <span className="streched-link" onClick={setFarenheit}>
          |F°
        </span>
      </p>
    );
  } else {
    return (
      <p>
        <span className="TemperatureNow">
          {Math.round(farenheitTemperature)}
        </span>
        <span className="streched-link" onClick={setCelsius}>
          C°
        </span>
        <span className="streched-link">|F°</span>
      </p>
    );
  }
}
