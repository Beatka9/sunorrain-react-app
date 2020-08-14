import React, { useState } from "react";
import ForecastBox from "./ForecastBox";
import axios from "axios";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [ready, setReady] = useState(false);

  function dataForecast(response) {
    setForecast({
      data: response.data,
    });
    setReady(true);
  }
  if (ready && forecast.data.city.name === props.city) {
    return (
      <div className="row">
        <div className="col-6">
          <ForecastBox list={forecast.data.list[0]} />
          <ForecastBox list={forecast.data.list[1]} />
          <ForecastBox list={forecast.data.list[2]} />
        </div>
        <div className="col-6">
          <ForecastBox list={forecast.data.list[3]} />
          <ForecastBox list={forecast.data.list[4]} />
          <ForecastBox list={forecast.data.list[5]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "b502e3f5d51eafa682fcf63b13086eef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dataForecast);
    return "wait for it...";
  }
}
