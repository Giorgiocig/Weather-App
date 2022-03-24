import React from "react";

export default function City({ name }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Weekly Weather</h3>
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
    </div>
  );
}
