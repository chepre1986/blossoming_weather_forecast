import React from "react";
import "./SearchEngine.css";

export default function SearchEngine(){
   return(
    <form >
    <div className="row searching-line">
      <div className="col-9">
        <input
          type="search"
          placeholder="Enter a city.."
          className="form-control"
          autoFocus="on"
          
        />
      </div>
      <div className="col-3">
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-secondary "
        />
      </div>
    </div>
  </form>
   ) 
}

