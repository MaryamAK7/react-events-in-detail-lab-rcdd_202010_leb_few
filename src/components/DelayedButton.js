// Code DelayedButton Component Here
import React, {component} from 'react'

export default class DelayedButton extends React.Component {
 
 handleClick = (e) =>{
   e.persist();
  window.setTimout(()=>{this.props.onDelayedClick(e)}, this.props.delay);
 };
 
 render(){
   return (
     <button onClick={this.handleClick}>click </button>
   
     )
 }
}
  