import logo from './logo.svg';
import {useState, useRef} from 'react';
import axios from "axios";
import './App.css';

function App() {
  // states
  const [cityName, setCityName] = useState("");

  // Ref
  const inputRef = useRef(null);

  // use this state to print API data
  const [getData, setData] = useState(null);

  const getWeather = async (event) => {
    event.preventDefault();
    // console.log("Data get from from");
    // const inpVal = document.querySelector("#cityname").value;
    // console.log(`Data get from from: ${inpVal}`);

    // console.log(`Getting Data from Ref: ${inputRef.current.value}`);

    try{
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0da8645d90584c068f3101721230907&q=${inputRef.current.value}&aqi=no`);
      console.log("Respose ",response.data);
      setData(response.data);
    }
    catch(e){
      console.log(e);
    }
  }

  // Data Handler run on every input
  const changeHandler = (event) => {
    setCityName(event.target.value);
    // console.log("Change Handler: ",event.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>

      <form onSubmit={getWeather}>
        <label htmlFor="cityname">City: </label>
        <input
          type="text"
          id="cityname"
          maxLength={20}
          minLength={2}
          onChange={changeHandler}
          required
          ref={inputRef}
        />
        <br />
        <button type="submit">Get Weather</button>
      </form>

      <br />
      <hr />
      <br />

      <div>
        City Name: {getData?.location?.name}, {getData?.location?.region} {getData?.location?.country}
        <br />
        Temperature in C: {getData?.current?.temp_c}
        <br />
        Humidity: {getData?.current?.humidity}
        <br />
        Wind: {getData?.current?.wind_kph}
        <br />
        Condition: {getData?.current?.condition?.text}
        <br />
        Time: {getData?.location?.localtime}
      </div>
    </div>
  );
}

export default App;
