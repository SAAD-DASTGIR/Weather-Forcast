import React from "react";

export default function SearchBox(props) {
  return (
    <input
      className="input-field"
      placeholder="Enter City Name..."
      type="text"
      onChange={props.onChange}
      value={props.value}
      onKeyUp={props.onKeyPress}
    />
  );
}
