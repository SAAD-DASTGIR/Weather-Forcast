import React from "react";

export default function Location(props) {
  return (
    <div className="location-box">
      {(typeof props.city !== "undefined") ? (
        <div className="location">
          {props.city}, {props.country}
        </div>
      ) : ('')}
    </div>
  );
}
