import {useState, useRef, useEffect} from 'react';
import axios from "axios";
import logo from './logo.svg';
import loaderImg from './loader.webp';
import { HiOutlineSearch } from 'react-icons/hi';
import WeatherCard from "./components/WeatherCard";


import './App.css';


function App() {
    // Ref
    const inputRef = useRef(null);

    // use this state to print API data
    const [getData, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentWeather, setCurrentWeather] = useState(null);

    const getWeather = async (event) => {
        event.preventDefault();
        try{
            setIsLoading(true);
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=0da8645d90584c068f3101721230907&q=${inputRef.current.value}&aqi=no`);
            // console.log("Respose ",response.data);
            setIsLoading(false);
            // setData(response.data);
            // setData([response.data, ...getData]);

            setData((prev) => [response.data, ...prev]);
            event.target.reset();
          }
          catch(e){
            console.log(e);
          }
    }

    useEffect(() => {
    navigator.geolocation.getCurrentPosition( async(position) => {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        setIsLoading(true);
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=0da8645d90584c068f3101721230907&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`);
        // console.log("Respose ",response.data);
        setCurrentWeather(response.data);
        setIsLoading(false);
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
            {isLoading ? <div className='loaderBox'><img src={loaderImg} alt='Loading...'></img></div> : null}
            {getData.length || currentWeather ? null : <div>No Data</div>}
        </div>

        <div className='showContent'>
            {(getData.length) ? (
            getData.map((eachWeatherData, index) =>
                <WeatherCard key={index} data={eachWeatherData} />
            )) : null}
            
            { currentWeather && <WeatherCard data={currentWeather} />}
        </div>
    </div>
  );
}

export default App;
