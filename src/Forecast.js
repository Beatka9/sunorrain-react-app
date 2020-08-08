import React from "react";
import ForecastBox from "./ForecastBox";

export default function Forcast(props) {
  return (
    <div className="row">
      <div className="col-6">
        <ForecastBox list="0" city={props.city} />
        <ForecastBox list="1" city={props.city} />
        <ForecastBox list="2" city={props.city} />
      </div>
      <div className="col-6">
        <ForecastBox list="3" city={props.city} />
        <ForecastBox list="4" city={props.city} />
        <ForecastBox list="5" city={props.ciy} />
      </div>
    </div>
  );
}
