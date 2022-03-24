import React from "react";
import { useState, useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../context/GlobalState";

export default function Search({ getQuery }) {
  //context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  //states
  const [text, setText] = useState("");

  const handleChange = (q) => {
    setText(q);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuery(text);
  };

  return (
    <div className="form row ">
      <form onSubmit={handleSubmit} className="col container-25 padding-lg">
        <label className="padding-small">Insert your location</label>
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          name="location"
          value={text}
          className="padding-small"
        ></input>
        <Button
          text={"Search Location"}
          className={`btn ${darkMode ? "btn-dark" : "btn-light"} margin-small `}
        />
      </form>
    </div>
  );
}
