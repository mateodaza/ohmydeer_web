import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import GameActions from '../../actions/game_actions'
import Layout from '../layout'
import PlayerInput from './player_input'
import Loading from '../loading'

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      players_qty: 0,
      title: '',
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.setupGame = this.setupGame.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
  }


  setupGame() {
    if(this.state.title){

      if(this.state.players && this.state.players >= 3){
        GameActions.setupGame(this.state.title, this.state.players).then(()=>{
          this.props.history.push('/game_room/111')
        })
      }else{
        alert("No hay suficientes jugadores")
      }
    }else{
      alert("Campos incompletos")
    }
  }

  addPlayer(name, email, pos) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let players = this.state.players
    console.log("POS:",pos)
    if(re.test(String(email).toLowerCase())){
      let found = players.find((element)=> {
        return element.email == email;
      });
      if(!found) {
        players.push({name, email})
        this.setState({players, players_qty: players.length, loading: true})
      }else{
        alert("Usuario ya ingresado")
      }
    }else{
      alert("Email no valido")
    }
    console.log(JSON.stringify(this.state.players))

    //update list
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
        <input type="text" name="title" placeholder="title"
            onChange={this.handleChange} value={this.state.email}/>
        <PlayerInput addPlayer={this.addPlayer}/>
        {
          players && (
            players.map((i,index)=>{
              return <div style={{display: 'flex'}}>
                <p>{i.email}</p>
                <p>{i.name}</p>
              </div>
            })
          )
        }
        <button onClick={this.setupGame}>Play!</button>
        <Link to="/">Let's go back!</Link>
      </Layout>
    );
  }
}

export default withRouter(Setup);