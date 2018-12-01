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
      loading: true
    }
  }

  componentDidMount() {
    let key = this.props.match.params.userKey
    if(key) {
      GameActions.getRoom(key).then((resp)=>{
        console.log("EHEYYEYE, ", resp)
        setTimeout( ()=> this.setState({loading: false} ), 1000);
      })
    }
  }

  render() {
    let isLoading = this.state.loading
    return (
      <Layout>
        { isLoading && (<Loading />) }
        <div className="game-header"> <img src={'https://i.imgur.com/j1GLqcy.png'} /></div>
        <p>GAMEROOM</p>
      </Layout>
    );
  }
}

export default withRouter(GameRoom);