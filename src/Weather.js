import React from "react";
import './Weather.css';


export default function Weather(){
return(<div className='weather'>
    <div className='row'>
        <div className='col-5'>
        <ul className='main-info left'>
               <li className='icon'>🌤️</li> 
               <li className='hour'>20:45</li> 
               <li className='date'>May 21st 2021</li> 
               <li className='weekday'>Monday</li> 
               <li className='city-name'>PARIS</li>
        </ul>
       </div>
       <div className='col-7'>
        <ul className='main-info right'>
            <li className='temperature'>temperature: 16C</li>
            <li className='humidity'>humidity: 35%</li>
            <li className='wind'>wind: 10km/h</li>
        </ul>
       </div>
        </div>
    </div>)
    }