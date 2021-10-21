import React from "react";
import './Temperature.css';

export default function Temperature(){
    return(
        <span className='temperature'>
                                
        <span id="temp">
                       16
                       </span> {" "}
               <span id='unit'>
               <a href="/">
               °C
                   </a>
                   {" / "}
                   <a href="/">
               °F
                   </a>
                   </span>
      </span>       
    )
}