import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

class App extends Component {

  state = {
    sushis: [],
    emptyPlates: []
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/sushis")
    .then(response => response.json())
    .then(sushis => this.setState({sushis: sushis}))
  }

  moreSushiClickHandler = (e) => {
    // newArray = [...this.state.sushis]
    // newArray.splice(0,4)
    this.setState({sushis: this.state.sushis})

  }

  addEmptyPlate = (e) => {
    let id = e.target.id 
    let foundObj = this.state.sushis.find(sushiObj => sushiObj.id === id)
    // this.state.emptyPlates
    console.log(foundObj)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer addEmptyPlate={this.addEmptyPlate} moreSushiClickHandler={this.moreSushiClickHandler} sushis={this.state.sushis}/>
        <Table emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;