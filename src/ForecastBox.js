import React, { useState } from "react";
import axios from "axios";

export default function ForecastBox(props) {
  let [forecast, setForecast] = useState({ ready: false });
  const apiKey = "b502e3f5d51eafa682fcf63b13086eef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},us& mode=xml&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response);
    setForecast = {
      ready: false,
    };
  }
  if (forecast.ready) {
    return (
      <div className="ForecastBox">
        <span className="ForecastHours">hours</span>{" "}
        <span className="ForecastIcon"> ICON</span>
        <span className="ForecastTemperature">11</span>
      </div>
    );
  } else {
    return "Come back later alligator";
  }
}
