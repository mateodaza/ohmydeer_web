import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import GameActions from '../../actions/game_actions'
import Layout from '../layout'
import PlayerInput from './player_input'
import Loading from '../loading'
import './player_input.css'

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      players_qty: 0,
      title: '',
      address: '',
      time: '',
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.setupGame = this.setupGame.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
  }


  setupGame() {
    if(this.state.title && this.state.address && this.state.time){
      if(this.state.players && this.state.players.length >=3){
        this.setState({loading: true})
        GameActions.setupGame(this.state.title, this.state.players,
          this.state.address, this.state.time).then((resp)=>{
          if(resp.status < 300){
            console.log("QUIEN TE TOCO", resp)
            this.setState({loading: false})
            this.props.history.push('/game_room/'+resp.data.player)
          }
        })
      }else{
        alert("Not enough players")
      }
    }else{
      alert("Fill all params")
    }
  }

  addPlayer(name, email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let players = this.state.players
    if(re.test(String(email).toLowerCase())){
      let found = players.find((element)=> {
        return element.email == email;
      });
      if(!found) {
        let user = {name, email}
        if(players.length == 0){
          user.owner = true
        }
        console.log("USER", user)
        players.push(user)
        this.setState({players, players_qty: players.length})
      }else{
        alert("User already exists")
      }
    }else{
      alert("Not valid email")
    }
    // players.push({name, email})
    // this.setState({players, players_qty: players.length})

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    let players = this.state.players
    let isLoading = this.state.loading
    return (
      <Layout>
        { isLoading && (<Loading />) }
        <div className="w3-container w3-center formbox centered-box w3-border w3-round-large">
          <Link to="/"><div className="row">
            <img className="titleimage" src="https://i.imgur.com/j1GLqcy.png" />
          </div></Link>
          <div className="row">
            <div className="column1">
              <input className="w3-input " type="text" placeholder="Title" name="title"
                onChange={this.handleChange} value={this.state.email}/>
            </div>
            <div className="column3">
              <input className="w3-input " type="text" placeholder="Address" name="address"
                onChange={this.handleChange} value={this.state.address}/>
            </div>
            <div className="column3">
              <input className="w3-input " type="text" placeholder="Time" name="time"
                onChange={this.handleChange} value={this.state.time}/>
            </div>
            <div className="column1">
              <PlayerInput addPlayer={this.addPlayer}/>
            </div>
          </div>

          <div style={{maxHeight: '20vh', overflow: 'auto'}}className="row">
            <p>List</p>
            {
              (players && players.lendth>0)?(
                players.reverse().map((i,index)=>{
                  return <div className="players-input-list">
                    <p>{i.email}</p>
                    <p>{i.name}</p>
                  </div>
                })
              ):(
                <p>Add some people to the party! The first one will be the owner.</p>
              )
            }
          </div>
          <div className="row">
            <button onClick={this.setupGame} style={{margin: '2% 0'}}
            className="w3-button w3-square w3-red w3-border-red w3-round-large">Play</button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Setup);