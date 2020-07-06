import React, { Component } from 'react';
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
      boolValState: true
    }
  }


  search = () => {
    let query = this.state.inputData;
    axios(`http://www.omdbapi.com/?i=tt3896198&apikey=6a62533f&s=${query}`).then(({data}) => {
        var res = data.Search;
        this.setState({
          ...this.state,
          data: res
        })
    })
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
      return <MainView search = {this.search} saveInput = {this.saveInput} data = {this.state.data} setActiveMovie = {this.setActiveMovie} />
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
        <Results data = {props.data} setActiveMovie = {props.setActiveMovie}/>
      </div>
    </>
  )
}
export default App;
