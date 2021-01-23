// // Code DelayedButton Component Here
// import React, {component} from 'react'

// export default class DelayedButton extends React.Component {
 
// handleClick = (e) =>{
//   e.persist();
//   window.setTimout(()=>{this.props.onDelayedClick(e)}, this.props.delay);
// };
 
// render(){
//   return (
//     <button onClick={this.handleClick}>click </button>
   
//     )
// }
// }
    
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = event => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

export default DelayedButton;