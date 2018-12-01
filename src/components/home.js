import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './layout'
import './home.css'

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="logo-header"> <img src={'https://i.imgur.com/whMCxDa.png'} /></div>
        <img src={'https://i.imgur.com/JXCg2Hr.png'} />
        <div className="home-btn">
         <Link to="/setup"><p>GO!</p></Link>
        </div>
      </Layout>
    );
  }
}

export default Home;