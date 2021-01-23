// Code DelayedButton Component Here
import React, {component} from 'react'

export default class DelayedButton extends React.Component {
 
 handleClick = (e) =>{
   setTimout(this.props.onDelayedClick(),)
 }
 
 render(){
   return (
     <div>
     <button onClick={handleClick}>click </button>
     </div>
     )
 }
}
  