import React from "react";
import "./SearchEngine.css";

export default function SearchEngine(){
   return(
       <form className="search-form">
 <div className="row">
   <div className="col one"> <input type="text" className="form-control" placeholder="Enter city name..." /></div>
 <div className="col two"> <input type="button" className="btn btn-outline-secondary" value="Search" /></div>
  </div> 
  </form>
   ) 
}

