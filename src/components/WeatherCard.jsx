import { TbTemperature, TbWind } from 'react-icons/tb';
import { ImDroplet } from 'react-icons/im';
import { PiGaugeBold } from 'react-icons/pi';
import styles from "./WeatherCard.module.css";

const WeatherCard = ({ data }) => {
    return (
        <div className='mainContent'>
        <div className="weather__body">
            <h1 className="weather__city">{data?.location?.name}, {data?.location?.country}</h1>
            <div className="weather__datetime">
            {data?.current?.last_updated}
            {/* Saturday, August 26, 2023 at 12:28 PM */}
            </div>
            <div className="weather__forecast">{data?.current?.condition?.text}</div>
            <div className="weather__icon">
                <img src={data?.current?.condition?.icon} />
            </div>
            <p className="weather__temperature">{data?.current?.temp_c}°C
            </p>
            <div className="weather__minmax">
                <p>{data?.current?.temp_f}°F</p>
                {/* <p>Max: 21°</p> */}
            </div>
        </div>

        <div className="weather__info">
            <div className="weather__card">
                <TbTemperature />
                <div>
                    <p>Real Feel</p>
                    <p className="weather__realfeel">{data?.current?.feelslike_c}°C</p>
                </div>
            </div>
            <div className="weather__card">
                <ImDroplet />
                <div>
                    <p>Humidity</p>
                    <p className="weather__humidity">{data?.current?.humidity}%</p>
                </div>
            </div>
            <div className="weather__card">
                <TbWind />
                <div>
                    <p>Wind</p>
                    <p className="weather__wind">{data?.current?.wind_kph} km/h</p>
                </div>
            </div>
            <div className="weather__card">
                <PiGaugeBold />
                <div>
                    <p>Pressure</p>
                    <p className="weather__pressure">{data?.current?.pressure_mb} hPa</p>
                </div>
            </div>
        </div>
        </div>
    );
  };
  
  export default WeatherCard;