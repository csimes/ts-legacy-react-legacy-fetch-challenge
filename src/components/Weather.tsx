import React, {useEffect, useState} from "react";

type Coords = {
    lat: number,
    lon: number
}
const Weather = (props: Coords) => {
    const [results, setResults] = useState([]);
    const [temp, setTemp] = useState([]);
    const [feels_like, setFeels] = useState([]);
    const [overall, setOverall] = useState([]);

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setResults(data)
        setTemp(data.main.temp)
        setFeels(data.main.feels_like)
        setOverall(data.weather[0].description)
      })
  

  }
  

  useEffect(() => {
    fetchWeather()
  }, [])

  return(
    <div>
      <h1>Hello, here's the local weather:</h1>
        <p>Temp: {temp}°F</p>
        <p>Feels-like: {feels_like}°F</p>
        <p>Overall: {overall}</p>
        <p></p>
    </div>
  )

}






export default Weather; 