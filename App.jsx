import React, { useState } from 'react';
import SearchBox from '../Components/SearchBox';
import Location from '../Components/Location';
import WeatherData from '../Components/WeatherData';
import DateData from '../Components/DateData';
import Airspeed from '../Components/Airspeed';
import Timings from '../Components/Timings';
import Head from '../Components/Head';
import Footer from '../Components/Footer';

const api = {
  key: "",
  base: ""
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
          setWeather({});
          setQuery('');
        });
        
    }
  }
  const convertToLocalTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString(); // Returns local time in HH:mm:ss format
  };
  
  return (
    <div className={(typeof weather.main != "undefined") ? (

      (weather.main.temp > 16) ? 'body-warm' : 'body') : 'app'}
      >
        <Head/>
      <main>
        <div className="search-box">
          <SearchBox
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
            value={query}
          />
        </div>
        {(typeof weather.main !== "undefined") ? (
          <div>
            <Location 
                city={weather.name} 
                country={weather.sys.country} 
            />
            <DateData />
            <WeatherData 
                temperature={Math.round(weather.main.temp)}
                type={weather.weather[0].main}
                how={weather.weather[0].description}
                sunset={convertToLocalTime(weather.sys.sunset)}
            />
            <Airspeed 
                windspeed={weather.wind.speed}
            />
            <Timings 
                sunset={convertToLocalTime(weather.sys.sunset)}
                sunrise={convertToLocalTime(weather.sys.sunrise)}
              />
              <Footer/>
           
            
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
