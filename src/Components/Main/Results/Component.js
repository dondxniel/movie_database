import React from 'react';
import "./results.css";
import Movie from "./Movie/Component";

const Results = ({data, setActiveMovie}) => {
    let displayImages = (data, setActive) => {
        if(data){
          return data.map((data) => {
              return(
                  <Movie key = {data.imdbID} data = {data} setActiveMovie = {setActive}/>
              )
          })
        }else{
          return(
            <div className= "no_results">
              No results for your search
            </div>
          )
        }

    }
    return (
        <div className = "results">
            {displayImages(data, setActiveMovie)}
        </div>
    )
}

export default Results;
