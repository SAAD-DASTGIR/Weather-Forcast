import React from "react";
export default function Timings(props){
    return(
        <div>
            {(typeof props.sunrise !== "undefined") ? (
               <div className="sunrise">
                  {`Sunrise: ${props.sunrise}`}
               </div>
               ) : ('')}
             {(typeof props.sunset !== "undefined") ? (
                <div className="sunset">
                   {`Sunset: ${props.sunset}`}
                </div>
                ) : ('')}


        </div>
    )
}