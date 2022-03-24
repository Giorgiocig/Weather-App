import React from "react";

export default function Button({ text, handleClick, className }) {
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}
