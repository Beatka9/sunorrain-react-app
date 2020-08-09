import React, { useState } from "react";
import axios from "axios";

export default function ForecastBox(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setReady(true);
    setForecast = {
      temperature: response.data.list[props.list].main.temp,
      date: new Date(response.data.list[props.list].dt * 1000),
      icon: `http://openweathermap.org/img/wn/${
        response.data.list[props.list].weather[0].icon
      }@2x.png`,
    };
  }
  if (ready.true) {
    return (
      <div className="ForecastBox">
        {forecast.date.getHours()}:00
        <img src={forecast.icon} />
        <span className="ForecastTemperature">
          {Math.round(forecast.temperature)}
        </span>
      </div>
    );
  } else {
    const apiKey = "b502e3f5d51eafa682fcf63b13086eef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},us& mode=xml&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
