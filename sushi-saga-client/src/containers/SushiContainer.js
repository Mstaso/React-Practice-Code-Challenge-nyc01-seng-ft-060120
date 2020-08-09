import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {



  render() {
    let sushis = this.props.sushis.splice(0,4).map(sushiObj => <Sushi sushi={sushiObj} key={sushiObj.id} addEmptyPlate={this.props.addEmptyPlate}/>)
    
    return (
      <Fragment>
        <div className="belt">
          {sushis}
          <MoreButton moreSushiClickHandler={this.props.moreSushiClickHandler}/>
        </div>
      </Fragment>)
  }

  
}


export default SushiContainer