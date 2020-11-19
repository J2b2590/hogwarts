import React, { Component } from 'react'

export default class PigFilter extends Component {


    render(){
        return(
            <div className="pig-form">
            <h3>Pig Filter</h3>
            <div className="field">
                <select name="greasy" id="greasy" onChange={(e) => this.props.handleFormChange(e)}>
                    <option value="all">All</option>
                    <option value="greasy">Greased</option>
                    <option value="not-greasy">This boi is NOT greased!!</option>
                </select>
            </div>

            <div className="field">
                <button className="ui secondary button" onClick={this.props.onFindPigsClick}>Find pigs</button>
            </div>
        </div>
        )
    }
}