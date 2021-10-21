import React from "react";
import './Weather.css';


export default function Weather(){
return(<div className='weather'>
    <div className='row'>
        <div className='col-4'>
        <ul className='main-info left'>
               <li className='icon'>🌤️</li> 
               <li className='hour'>20:45</li> 
               <li className='city-name'>PARIS</li>
        </ul>
       </div>
       <div className='col-8'>
        <ul className='main-info right'>
            <li className='temperature'>temperature: 16C</li>
            <li className='humidity'>humidity: 35%</li>
            <li className='wind'>wind: 10km/h</li>
        </ul>
       </div>
        </div>
    </div>)
    }