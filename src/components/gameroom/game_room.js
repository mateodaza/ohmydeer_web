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
      imageLink: '',
      msg: '',
      loading: true
    }
    this.sendHint = this.sendHint.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  sendHint() {
    if(this.state.msg, this.state.imageLink){
      let user_id = this.state.userData.player.id
      let friend_id = this.state.userData.friend.id
      let hint = {
        message: this.state.msg,
        link: this.state.imageLink
      }
      GameActions.sendHint(user_id, friend_id, hint).then((resp)=>{
        alert("Hint sent!")
        this.setState({msg: '', imageLink: ''})
      })
    }else{
      alert('Fill all params')
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
        <Link to="/"><div className="game-header"> <img src={'https://i.imgur.com/RpYC49f.png'} /></div></Link>
        <div style={{padding: '2% 0'}} className="w3-container w3-center infobox w3-border w3-round-large">
          <h1>{data.title}</h1>
          <div className="w3-row-padding">
            <div className="w3-half"><label>Name: {data.player.name}</label></div>
            <div className="w3-half"><label>Score: {data.player.score}</label></div>
          </div>
          <div className="w3-row-padding">
            <div className="w3-half"><label>Address: {data.address}</label></div>
            <div className="w3-half"><label>Date: {data.time}</label></div>
          </div>
        </div>

          <div className="w3-container w3-center formbox w3-border w3-round-large">
            <h3>Send hint to {data.friend.name} </h3>
            <div className="row">
              <input onChange={this.handleChange} value={this.state.msg} 
                type="text" name="msg" className="w3-input" placeholder="Text" />
              <input onChange={this.handleChange} value={this.state.imageLink} 
                type="text" name="imageLink" className="w3-input" placeholder="Image Link" />
            </div>
            <button onClick={this.sendHint}style={{margin: '5% 0'}}
              className="w3-button w3-square w3-red w3-border-red w3-round-large w3-right-align">Send</button>
          </div>
          <div style={{display:'flex', flexDirection: 'column', 
          textAlign:'center', margin: '15% 0 0 0'}}>
          <a style={{color: 'white', textDecoration: 'none'}} href="http://www.freepik.com">Images and icons designed by Freepik</a>
          <a href="https://github.com/verynice-solutions">
            <img width='64px' heigth='64px' src='https://i.imgur.com/I7yTBl4.png' />
          </a>
        </div>
      </Layout>
    );
  }
}

export default withRouter(GameRoom);