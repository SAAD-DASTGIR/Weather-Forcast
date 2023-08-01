import React from "react";
export default function WeatherData(props){
    return(
        <div className="weather-box">
            {(typeof props.temperature !== "undefined") ? (
            <div className="temp">
                {`${props.temperature}°C`}
            </div>
            ) : ('')}
             {(typeof props.type !== "undefined") ? (
            <div className="weather">
                {props.type}
            </div>
            ) : ('')}
            {(typeof props.how !== "undefined") ? (
                <div className="weather-more-info">
                    {props.how}
                </div>
                ) : ('')}
             {/* {(typeof props.i !== "undefined") ? (
                <div className="weather==f=">
                   {`${props.i}km/hr`}
                </div>
                ) : ('')} */}
            {/* {(typeof props.how !== "undefined") ? (
                <div className="weather===">
                   {`${props.sunset}km/hr`}
                </div>
                ) : ('')} */}


        </div>
)
}
// {(typeof props.city !== "undefined") ? (
//     <div className="location">
//       {props.city}, {props.country}
//     </div>
//   ) : ('')}