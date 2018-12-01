import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import GameActions from '../../actions/game_actions'
import Layout from '../layout'
import Loading from '../loading'
import './game_room.css'

class GameRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loading: true
    }
  }

  componentDidMount() {
    let key = this.props.match.params.userKey
    if(key) {
      GameActions.getRoom(key).then((resp)=>{
        if(resp.status<300){
          console.log("EHEYYEYE, ", resp)
          setTimeout( ()=> this.setState({loading: false, userData: resp.data} ), 1000);
        }
      })
    }
  }

  render() {
    let isLoading = this.state.loading
    let data = this.state.userData
    if (isLoading){
      return <Loading />
    }
    return (
      <Layout>
        <div className="game-header"> <img src={'https://i.imgur.com/j1GLqcy.png'} /></div>
        <div style={{padding: '2% 0'}} className="w3-container w3-center infobox w3-border w3-round-large">
          <h1>{data.title}</h1>
          <div className="w3-row-padding">
            <div className="w3-half"><label>Name: {data.player.name}</label></div>
            <div className="w3-half"><label>Score: {data.player.score}</label></div>
          </div>
          <div className="w3-row-padding">
            <div className="w3-half"><label>Address: {data.name}</label></div>
            <div className="w3-half"><label>Date: {data.time}</label></div>
          </div>
        </div>

          <div className="w3-container w3-center formbox w3-border w3-round-large">
            <h3>Send hint to {data.friend.name} </h3>
            <div className="row">
              <input className="w3-input " type="text" placeholder="Text" />
              <input className="w3-input " type="text" placeholder="VideoLink" />
            </div>
            <button style={{margin: '5% 0'}}className="w3-button w3-square w3-red w3-border-red w3-round-large w3-right-align">Send</button>
          </div>
      </Layout>
    );
  }
}

export default withRouter(GameRoom);