import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/GlobalState";
import Button from "./Button";

export default function Card({ name, code, handleRemove, id }) {
  //state
  const [check, setCheck] = useState(false);
  //context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  //weather code
  const showMeteo = function (arr) {
    let output = [];
    const arrWeather = [
      "Clear sky",
      "Mainly clear",
      "Fog",
      "Drizzle",
      "Freezing Drizzle",
      "Rain",
      "Freezing Rain",
      "Snow fall",
      "Snow grains",
      "Rain showers",
      "Snow showers",
      "Thunderstorm",
      "Heavy Thunderstorm",
    ];

    arr.forEach((el) => {
      if (el === 0) {
        output.push(arrWeather[0]);
      }
      if (el === 1 || el === 2 || el === 3) {
        output.push(arrWeather[1]);
      }
      if (el === 45 || el === 48) {
        output.push(arrWeather[2]);
      }
      if (el === 51 || el === 53 || el === 55) {
        output.push(arrWeather[3]);
      }
      if (el === 56 || el === 57) {
        output.push(arrWeather[4]);
      }
      if (el === 61 || el === 63 || el === 65) {
        output.push(arrWeather[5]);
      }
      if (el === 66 || el === 67) {
        output.push(arrWeather[6]);
      }
      if (el === 71 || el === 73 || el === 75) {
        output.push(arrWeather[7]);
      }
      if (el === 77) {
        output.push(arrWeather[8]);
      }
      if (el === 80 || el === 81 || el === 82) {
        output.push(arrWeather[9]);
      }
      if (el === 85 || el === 86) {
        output.push(arrWeather[10]);
      }
      if (el === 95) {
        output.push(arrWeather[11]);
      }
      if (el === 96 || el === 97) {
        output.push(arrWeather[12]);
      }
    });
    return output;
  };

  const weather = showMeteo(code);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>Weekly Weather</h3>

      <Button
        text="Display"
        handleClick={handleCheck}
        className={`btn ${darkMode ? "btn-dark" : "btn-light"} margin-right`}
      />
      <Button
        text="Remove"
        handleClick={() => handleRemove(id)}
        className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
      />
      {check && (
        <div className="row">
          <ul className="col padding-right ">
            <li> Monday:</li>
            <li> Tuesday:</li>
            <li> Wednesday:</li>
            <li> Thursday:</li>
            <li> Friday:</li>
            <li> Saturday:</li>
            <li> Sunday:</li>
          </ul>
          <ul className="col ">
            <li>{weather[0]}</li>
            <li>{weather[1]}</li>
            <li>{weather[2]}</li>
            <li>{weather[3]}</li>
            <li>{weather[4]}</li>
            <li>{weather[5]}</li>
            <li> {weather[6]}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
