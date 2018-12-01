import React, { Component } from 'react';
import GameActions from '../../actions/game_actions'
import Layout from '../layout'
import Loading from '../loading'

class GameRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    GameActions.getRoom(10).then((resp)=>{
      console.log("EHEYYEYE, ", resp)
      setTimeout( ()=> this.setState({loading: false} ), 1000);
    })
  }

  render() {
    let isLoading = this.state.loading
    return (
      <Layout>
        { isLoading && (<Loading />) }
        <p>GAMEROOM</p>
      </Layout>
    );
  }
}

export default GameRoom;