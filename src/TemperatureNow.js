import React, { useState } from "react";

export default function TemperatureNow(props) {
  let [temperature, setTemperature] = useState(props.celsius);
  function farTemperature(event) {
    event.preventDefault();
    setTemperature((props.celsius * 9) / 5 + 32);
  }
  function celsiusTemp(event) {
    event.preventDefault();
    setTemperature(props.celsius);
  }
  return (
    <p>
      <span className="TemperatureNow">{Math.round(temperature)} </span>
      <span className="streched-link" onClick={celsiusTemp}>
        C°
      </span>
      <span className="steched-link" onClick={farTemperature}>
        |F°
      </span>
    </p>
  );
}
