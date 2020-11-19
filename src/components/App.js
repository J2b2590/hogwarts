import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";
import PigFilter from "./PigFilter"


//new 
class App extends Component {

  constructor(){
    super()
  
    this.state = {
      currentHogs: hogs,
      filter: {
        isGreasy: 'all'
      } 
    }
  }

  handleFormChange = (e) => {
    let g

    if (e.target.value === 'greasy'){
      g = true
    } else if (e.target.value === 'not-greasy'){
      g = false
    } else (g = 'all')

    this.setState({
      filter: {
        isGreasy: g
      }
    })
  }

  onFindPigsClick = () => {


    const newArray = this.state.filter.isGreasy ? 
    hogs.filter(hog => {
      return hog.greased === true
    })
    :
    hogs.filter(hog => {
      return hog.greased === false
    })

    this.setState({
      currentHogs: newArray
    })

    // if (this.state.filter.isGreasy){
    //   const newArray = hogs.filter(hog => {
    //     return hog.greased === true
    //   })

    //   this.setState({
    //     currentHogs: newArray
    //   })
    // } else if(this.state.filter.isGreasy === false){
    //   const newArray = hogs.filter(hog => {
    //     return hog.greased === false
    //   })

    //   this.setState({
    //     currentHogs: newArray
    //   })
    // }


  }

  render() {
    return (
      <div className="App">
        <Nav />
        <PigFilter handleFormChange={this.handleFormChange} onFindPigsClick={this.onFindPigsClick}/>
        <PigContainer hogs={this.state.currentHogs} />
      </div>
    );
  }
}

export default App;
