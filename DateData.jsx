import React from "react";
export default function DateData(){

    const datebuilder = (d)=>{
        let months=["Januray","Febuary","March","April","May"
        ,"June","July","August","September","October"
        ,"November","December"];

        let days=["Sunday","Monday","Tuesday","Wednesday"
        ,"Thrusday","Friday","Saturday","Sunday"];

        let day=days[d.getDay()];
        let date=d.getDate();
        let month=months[d.getMonth()]
        let year=d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }
    return(
        <div className="date">
            
            
            {datebuilder(new Date())}

            
        </div>
    )
}