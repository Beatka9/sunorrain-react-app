import React from "react";

export default function FriendlyDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${props.date.getMinutes()}`;
  }
  return (
    <p>
      {day} {hours}:{minutes}
    </p>
  );
}
