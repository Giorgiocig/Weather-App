import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import Card from "./Card";

export default function () {
  const [data, setData] = useState({
    name: null,
    code: null,
  });
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locations, setLocations] = useState([]);

  let controller;
  //api call for coordinates
  useEffect(() => {
    setIsLoading(true);
    const fetchItems = async function () {
      try {
        controller = new AbortController();
        const signal = controller.signal;
        //data for long and lat
        const resPosition = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
          { signal }
        );

        if (!resPosition.ok) throw new Error("Error");

        const dataPosition = await resPosition.json();

        const {
          latitude: lat,
          longitude: long,
          name,
        } = dataPosition.results[0];
        setError(false);
        //data for city
        const resCity = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&daily=weathercode&timezone=Europe%2FLondon`
        );

        if (!resCity.ok)
          throw new Error("It was not possible to find a location");

        const dataCity = await resCity.json();
        const { weathercode: code } = dataCity.daily;
        // set data obj
        setData((prevData) => {
          return { ...prevData, name: name, code: code };
        });

        // set array locations
        setLocations((prevLocations) => {
          const newId = Math.floor(Math.random() * 1000) + 1;
          return [
            ...prevLocations,
            { ...prevLocations, id: newId, name: name, code: code },
          ];
        });
        setError(null);
        setIsLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          setError(err.name);
        } else if (query === "") {
          setError(false);
        } else {
          setError("Could not fetch the data");
          setIsLoading(false);
        }
      }
    };
    fetchItems();
    //CLEANUP FUNCTION
    return () => {
      controller.abort();
    };
  }, [query]);

  console.log();

  const remove = (id) => {
    setLocations(locations.filter((el) => el.id !== id));
  };

  return (
    <div>
      <Search getQuery={(q) => setQuery(q)} />
      {isLoading && <p>Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      <div className="grid">
        {data.code &&
          locations.map((el) => (
            <Card
              key={el.id}
              code={el.code}
              name={el.name}
              handleRemove={remove}
              id={el.id}
            />
          ))}
      </div>
    </div>
  );
}
