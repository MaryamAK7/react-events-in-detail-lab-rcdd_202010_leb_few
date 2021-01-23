// Code DelayedButton Component Here
import React, {component} from 'react'

export default class DelayedButton extends React.Component {
 
 handleClick = (e) =>{
   window.setTimout(this.props.onDelayedClick(e), this.props.delay)
 }
 
 render(){
   return (
     <div>
     <button onClick={handleClick}>click </button>
     </div>
     )
 }
}
  