import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Component';
// import Details from './Components/Details/Component';

class App extends Component {

  render(){
    return (
        <div >
          <div>
            <h1>Movie Database</h1>
          </div>
          <Main />
        </div>
    );
  }
}

export default App;
