import React, { Component } from 'react';
import './player_input.css'

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="column4">
         <input className="w3-input " type="email" name="email" placeholder="email" 
            onChange={this.handleChange} value={this.state.email}/>
        </div>
        <div className="column4">
          <input className="w3-input" type="text" name="name" placeholder="name" 
            onChange={this.handleChange} value={this.state.name}/>
        </div>
        <div className="column1">
          <button  style={{margin: '2% 0'}} onClick={()=>this.props.addPlayer(this.state.name, this.state.email)}
            className="w3-button w3-circle w3-teal">+</button>
        </div>
      </div>
    );
  }
}

export default PlayerInput;