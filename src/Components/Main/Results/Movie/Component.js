import React from 'react';
import "./movie.css";

const Movie = (props) => {
    return (
        <span onClick = {() => props.setActiveMovie(props.data)}>
            <div className = "movie">
                <img src= {props.data.Poster} alt= {`${props.data.Title} image`} className = "image"/>
                <div className = "title">
                    {props.data.Title}
                </div>
            </div>
        </span>
    )
}

export default Movie;
