import React from "react";
import './Weather.css';
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";



export default function Weather(){

function handleResponse(response){
    console.log(response.data);
}
const apiKey = "c58deb31cab08568b138a3d93fb29c29";
let city = "London";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
axios.get(apiUrl).then(handleResponse);


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
               <li className='date'>May 21st 2021</li> 
               <li className='weekday'>Monday</li> 
              
        </ul>
       </div>
       <div className='col-6'>
        <ul className='main-info right'>
        <li className='description'>description: sunny</li>
        <li className='precipitation'>precipitation: 35%</li>
            <li className='humidity'>humidity: 35%</li>
            <li className='wind'>wind: 10km/h</li>
        </ul>
       </div>
        </div>
    </div>)
    }