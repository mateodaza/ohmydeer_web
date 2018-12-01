import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Home from './components/home'
import Setup from './components/setup/setup'
import Room from './components/gameroom/game_room'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <head>
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          </head>
          <Route path="/" exact component={Home} />
          <Route path="/setup" exact component={Setup} />
          <Route path='/game_room/:userKey' component={Room} />
        </div>
    </Router>
    );
  }
}

export default App;
