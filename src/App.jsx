import logo from './logo.svg';
import { HiOutlineSearch } from 'react-icons/hi';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="weather__header">
            <form className="weather__search">
                <HiOutlineSearch />
                <input type="text" placeholder="Search for a city..." className="weather__searchform" />         
                <i className="fa-solid fa-magnifying-glass"></i>
            </form> 
            <div className="weather__units">
                <span className="weather_unit_celsius">°C</span>
                <span className="weather_unit_farenheit">°F</span>
            </div>
        </div>
        <div className="weather__body">
            <h1 className="weather__city">London, United Kingdom</h1>
            <div className="weather__datetime">
            Saturday, August 26, 2023 at 12:28 PM
            </div>
            <div className="weather__forecast">Clouds</div>
            <div className="weather__icon">
            </div>
            <p className="weather__temperature">19°
            </p>
            <div className="weather__minmax">
                <p>Min: 16°</p>
                <p>Max: 21°</p>
            </div>
        </div>

        <div className="weather__info">
            <div className="weather__card">
                <i className="fa-solid fa-temperature-full"></i>
                <div>
                    <p>Real Feel</p>
                    <p className="weather__realfeel">18°</p>
                </div>
            </div>
            <div className="weather__card">
                <i className="fa-solid fa-droplet"></i>
                <div>
                    <p>Humidity</p>
                    <p className="weather__humidity">66%</p>
                </div>
            </div>
            <div className="weather__card">
                <i className="fa-solid fa-wind"></i>
                <div>
                    <p>Wind</p>
                    <p className="weather__wind">4.63 m/s</p>
                </div>
            </div>
            <div className="weather__card">
                <i className="fa-solid fa-gauge-high"></i>
                <div>
                    <p>Pressure</p>
                    <p className="weather__pressure">1006 hPa</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
