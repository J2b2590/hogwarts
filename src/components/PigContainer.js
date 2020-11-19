import React, { Component } from "react";

class PigContainer extends Component {

  constructor(props){
    super(props)
    this.state = ({
      pigInfo: ''
    })
  }


  handleClick = (e) => {
    
  const myPig = this.props.hogs.find(hog => {
    // console.log(hog.name)
    console.log(e.target.id)
      hog.name === e.target.id
      
    })
    console.log(myPig)
  }
  

renderPigs = () => {
  const newArr = this.props.hogs.map(hog => {
    const newName = hog.name.toLowerCase().split(" ").join("_")
    const pigImage = require('../hog-imgs/'+ newName +'.jpg') 

   return <div onClick={this.handleClick} id={hog.name} key={this.props.hogs.indexOf(hog)} className="pigTile ui eight wide column">
            <h3>{hog.name}</h3>
            <img width="50%" src={pigImage} />
            <p>{this.state.pigInfo}</p>
            
          </div>
  })
  return newArr
}




  render() {

    return (
      <div className="ui grid container">
        {this.renderPigs()}
      </div>
    );
  }
}

export default PigContainer;
