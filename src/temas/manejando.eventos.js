import React from 'react';

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true}
    console.log(this);
    this.handleClick = this.handleClick.bind(this);

  }
handleClick(){
  this.setState(state=>({
    isToggleOn: !state.isToggleOn
  })
  )
}
render(){
  return(
    <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn?"On":"Off"}
      </button>
    </div>
  )
}

}


export default Toggle;