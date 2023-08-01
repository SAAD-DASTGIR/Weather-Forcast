import React from "react";
export default function Airspeed(props){
    return(
        <div>
        {(typeof props.windspeed !== "undefined") ? (
                <div className="wind-speed">
                   {`Wind Speed: ${props.windspeed}km/hr`}
                </div>
                ) : ('')}
        </div>
    )
}