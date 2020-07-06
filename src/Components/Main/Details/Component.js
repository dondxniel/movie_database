import React, { Component } from 'react';
import Movie from "../Results/Movie/Component.js"
import "./details.css";

class App extends Component{
    render(){
        return(
            <div className = "container">
               <Movie data = {this.props.movie}/>
                <div className = "right_side">
                    <b>Title:</b> {this.props.movie.Title} <br /><br /><br /><br /><br /><br />
                    <b>Year:</b> {this.props.movie.Year} <br /><br /><br /><br /><br /><br />
                    <b>imdbID:</b> {this.props.movie.imdbID} <br /><br /><br /><br /><br /><br />
                    <b>Type:</b> {this.props.movie.Type} <br /><br /><br /><br /><br /><br />
                </div>
                <div className = "closeButtonContainer">
                  <button className = "closeButton" onClick = {this.props.closeDetails}>Close</button>
                </div>
            </div>
        )
    }
}

export default App;
