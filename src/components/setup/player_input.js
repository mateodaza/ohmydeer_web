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
      <li>
        <div className="player-input-container">
          <input type="email" name="email" placeholder="email" 
            onChange={this.handleChange} value={this.state.email}/>
          <input type="text" name="name" placeholder="name" 
            onChange={this.handleChange} value={this.state.name}/>
          <div onClick={()=>this.props.addPlayer(this.state.name, this.state.email)}> + </div>
        </div>
      </li>
    );
  }
}

export default PlayerInput;