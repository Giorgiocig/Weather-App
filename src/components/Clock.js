import React, { useEffect, useState } from "react";

export default function Clock() {
  const now = new Date();
  const date = `${now.getDate()}`.padStart(2, 0);
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const day = now.getDay();

  const [clock, setClock] = useState("");
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setClock(now.toLocaleTimeString());
    }, 1000);
  });
  return (
    <div className="container-25 row-sb padding-lg">
      <div className="margin-right">
        <h3>Date</h3>
        <p>
          {day}/{month}/{year}
        </p>
      </div>
      <div>
        <h3>Clock</h3>
        <p>{clock}</p>
      </div>
    </div>
  );
}
