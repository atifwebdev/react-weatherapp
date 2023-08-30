import {useState, useRef, useEffect} from 'react';
import axios from "axios";
import logo from './logo.svg';
import { HiOutlineSearch } from 'react-icons/hi';
import { TbTemperature, TbWind } from 'react-icons/tb';
import { ImDroplet } from 'react-icons/im';
import { PiGaugeBold } from 'react-icons/pi';


import './App.css';


function App() {
    // Ref
    const inputRef = useRef(null);

    // use this state to print API data
    const [getData, setData] = useState(null);

    const getWeather = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=0da8645d90584c068f3101721230907&q=${inputRef.current.value}&aqi=no`);
            // console.log("Respose ",response.data);
            setData(response.data);
          }
          catch(e){
            console.log(e);
          }
    }

    useEffect(() => {
    navigator.geolocation.getCurrentPosition( async(position) => {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=0da8645d90584c068f3101721230907&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`);
        // console.log("Respose ",response.data);
        setData(response.data);
    });
    }, []);

  return (
    <div className="container">
        <div className="weather__header">
            <form className="weather__search" onSubmit={getWeather}>
                <input type="text" placeholder="Search for a city..." className="weather__searchform" ref={inputRef} />
                <HiOutlineSearch />
                <button type="submit">Check</button>
            </form> 
            <div className="weather__units">
                <span className="weather_unit_celsius">°C</span>
                {/* <span className="weather_unit_farenheit">°F</span> */}
            </div>
        </div>
        <div className="weather__body">
            <h1 className="weather__city">{getData?.location?.name}, {getData?.location?.country}</h1>
            <div className="weather__datetime">
            {getData?.current?.last_updated}
            {/* Saturday, August 26, 2023 at 12:28 PM */}
            </div>
            <div className="weather__forecast">{getData?.current?.condition?.text}</div>
            <div className="weather__icon">
                <img src={getData?.current?.condition?.icon} />
            </div>
            <p className="weather__temperature">{getData?.current?.temp_c}°C
            </p>
            <div className="weather__minmax">
                <p>{getData?.current?.temp_f}°F</p>
                {/* <p>Max: 21°</p> */}
            </div>
        </div>

        <div className="weather__info">
            <div className="weather__card">
                <TbTemperature />
                <div>
                    <p>Real Feel</p>
                    <p className="weather__realfeel">{getData?.current?.feelslike_c}°C</p>
                </div>
            </div>
            <div className="weather__card">
                <ImDroplet />
                <div>
                    <p>Humidity</p>
                    <p className="weather__humidity">{getData?.current?.humidity}%</p>
                </div>
            </div>
            <div className="weather__card">
                <TbWind />
                <div>
                    <p>Wind</p>
                    <p className="weather__wind">{getData?.current?.wind_kph} km/h</p>
                </div>
            </div>
            <div className="weather__card">
                <PiGaugeBold />
                <div>
                    <p>Pressure</p>
                    <p className="weather__pressure">{getData?.current?.pressure_mb} hPa</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
