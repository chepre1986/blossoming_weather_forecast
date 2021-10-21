import React from "react";
import './Forecast.css';

export default function Forecast(){
    return (
        <div className='forecast'>
           <div className='row'>
               <div className='col first'>
               <div className='col day-name first-day'>
                   Tue
                   </div>        
<div className='col'>
🌧   
</div>   
<div className='col forecast-temp'>
    <span className='col-5 max-temp'>
       15C  
    </span>
    <span className='col-2'>
    {" "}/{" "}  
    </span>
<span className='col-5 min-temp'>
      4C 
    </span>    
</div>   
               </div>
               <div className='col second'>
               <div className='col day-name second-day'>
                   Wed
                   </div>        
<div className='col'>
☀️      
</div>   
<div className='col forecast-temp'>
    <span className='col-5 max-temp'>
       15C  
    </span>
    <span className='col-2'>
    {" "}/{" "}  
    </span>
<span className='col-5 min-temp'>
      4C 
    </span>    
</div>  
               </div>
               <div className='col third'>
               <div className='col day-name third-day'>
                   Thu
                   </div>        
<div className='col'>
☁️     
</div>  
<div className='col day-name forecast-temp'>
    
<span className='col-5 max-temp'>
       15C  
    </span>
    <span className='col-2'>
    {" "}/{" "}  
    </span>
<span className='col-5 min-temp'>
      4C 
    </span>     
</div>                    
                   </div>
                   <div className='col fourth'>
                   <div className='col day-name fourth-day'>
                       Fri
                       </div>        
<div className='col'>
❄️     
</div>    
<div className='col forecast-temp'>
    <span className='col-5 max-temp'>
       15C  
    </span>
    <span className='col-2'>
    {" "}/{" "}  
    </span>
<span className='col-5 min-temp'>
      4C 
    </span>    
</div>                
               </div>
               <div className='col fifth'>
<div className='col day-name fifth-day'>
Sat     
</div>        
<div className='col'>
🌈     
</div>       
<div className='col forecast-temp'>
    <span className='col-5 max-temp'>
       15C  
    </span>
    <span className='col-2'>
       {" "}/{" "} 
    </span>
<span className='col-5 min-temp'>
      4C 
    </span>    
</div>   
               </div>
           </div>
        </div>
    )
}