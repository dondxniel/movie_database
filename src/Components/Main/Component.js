import React, { Component } from 'react';
import "./main.css";
import Search from './Search/Component';
import Results from './Results/Component';
import Details from './Details/Component';
import axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      inputData: "",
      data : [],
      activeMovie: {},
      boolValState: true,
      showLoader: false
    }
  }


  search = () => {
    this.setState({
      ...this.state,
      showLoader: true
    })
    let query = this.state.inputData;
    axios(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt3896198&apikey=6a62533f&s=${query}`).then(({data}) => {
        var res = data.Search;
        this.setState({
          ...this.state,
          data: res,
          showLoader: false
        })
    })

  }

  showLoader = (boolVal) => {
    if(boolVal){
      return <img className = "loadingImg" src = {require("./loading.png")} />
    }else{
      return <Results data = {this.state.data} setActiveMovie = {this.setActiveMovie}/>
    }
  }

  setActiveMovie = (movie) => {
    this.setState({
      ...this.state,
      activeMovie: movie,
      boolValState: false
    })
  }


  saveInput = (e) => {
    // alert(e.key)
    if(e.key == "Enter"){
      this.search()
    }else{
      var input = e.target.value;
      this.setState({
        ...this.state,
        inputData: input
      });
    }
  }


  closeDetails = () => {
    this.setState({
      ...this.state,
      activeMovie: {},
      boolValState: true
    })
  }

  toggleDisplay = (boolVal) => {
    if(boolVal){
      return <MainView showLoader = {this.showLoader(this.state.showLoader)} search = {this.search} saveInput = {this.saveInput} data = {this.state.data} setActiveMovie = {this.setActiveMovie} />
    }else{
      return <Details closeDetails = {this.closeDetails} movie = {this.state.activeMovie}/>
    }
  }

  render(){
    return(
      this.toggleDisplay(this.state.boolValState)
    )
  }
}


const MainView = (props) => {

  return(
    <>
      <div>
        <Search search = {props.search} saveInput = {props.saveInput} />
      </div>
      <div>
        {props.showLoader}
      </div>
    </>
  )
}
export default App;
