import React, { Component } from "react";

// fix if img/p/h3 gets clicked on
// only show info for single card, not on all cards

class PigContainer extends Component {

  constructor(){
    super()

    this.state = ({
      thePig: []
    })
  }


  handleClick = (event) => {
    const e = event
    
    const myPig = this.props.hogs.find(hog => {
      return hog.name === e.target.id
      
    })


    this.setState({
      thePig: myPig
    })
  }
  

renderPigs = () => {
  const newArr = this.props.hogs.map(hog => {
    const newName = hog.name.toLowerCase().split(" ").join("_")
    const pigImage = require('../hog-imgs/'+ newName +'.jpg') 

   return <div onClick={this.handleClick} id={hog.name} key={this.props.hogs.indexOf(hog)} className="pigTile ui eight wide column">
            <h3>{hog.name}</h3>
            <img width="50%" src={pigImage} />
<<<<<<< HEAD
            <p>{this.state.pigInfo}</p>        
=======
            {
              this.state.thePig.name === hog.name ?                 
              <ul>
                <li><b>Specialty:</b> {this.state.thePig.specialty}, </li>
                <li><b>Greasy Boi?:</b> {this.state.thePig.greased ? 'true' : 'false'}, </li>
                <li><b>Weight:</b> {this.state.thePig.weight}, </li>
                <li><b>Honors:</b> {this.state.thePig['highest medal achieved']}</li>
              </ul>
              
              :
              ''
            }

            
>>>>>>> 87e66b7bd3f63750678d337e94520db4ad798ad3
          </div>
  })

  
  return newArr
}

// renderThePig = () => {
//   return <div><p>{this.state.thePig['highest medal achieved']}</p></div>
// }


  render() {

    return (
      <div className="ui grid container">
        {this.renderPigs()}
      </div>
    );
  }
}

export default PigContainer;
