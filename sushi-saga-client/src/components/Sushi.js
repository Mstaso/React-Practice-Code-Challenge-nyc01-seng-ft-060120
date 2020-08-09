import React, { Fragment } from 'react'

const Sushi = (props) => {
  let clickHandler = (e) => {
    e.target.src=''
    props.addEmptyPlate(e)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={clickHandler} >
        { 
          // /* Tell me if this sushi has been eaten! */ 
          // false ?
          //   null
          // :
            <img src={props.sushi.img_url} width="100%" id={props.sushi.id}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi