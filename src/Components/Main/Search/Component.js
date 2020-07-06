import React from 'react';
import "./search.css";
import "./fontawesome/css/all.css";

const Search = ({saveInput, search}) => {
  return (
    <div className = "searchbar_container">
      <input type = "text" className = "searchbar" placeholder = "Enter Movie Title" onKeyUp = {saveInput}/>
      <button onClick = {search} className = "fa fa-search search_button"></button>
    </div>
  )
}

export default Search;
