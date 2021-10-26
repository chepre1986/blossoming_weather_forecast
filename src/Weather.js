import React, { useState } from "react";
import './Weather.css';
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';



export default function Weather(props){
    let ready = false;
    const [weatherData, setWeatherData] = useState({ready:false});

function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        date: "Wednesday 7:00",
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        precipitation: "35",
    })
}




if (ready) {
    return(<div className='weather'>
    <div className=' row icon-and-temp'>
    <div className='col-6 left'><WeatherIcon />
    </div>
    <div className='col-6 right'>
    <Temperature /></div>
    </div>
 <div className='row'>
        <div className='col-6'>
        <ul className='main-info left'>
              
               <li className='hour'>20:45</li> 
               <li className='date'>{weatherData.date}</li> 
               <li className='weekday'>Monday</li> 
              
        </ul>
       </div>
       <div className='col-6'>
        <ul className='main-info right'>
        <li className='description'>description: {weatherData.description}</li>
        <li className='precipitation'>precipitation: {weatherData.precipitation}%</li>
            <li className='humidity'>humidity: {weatherData.humidity}%</li>
            <li className='wind'>wind: {weatherData.wind}km/h</li>
        </ul>
       </div>
        </div>
    </div>)
    }
    else {
        const apiKey = "c58deb31cab08568b138a3d93fb29c29";
let city = props.city;
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    }
}
