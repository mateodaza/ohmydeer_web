import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './layout'
import './home.css'

class Home extends Component {
  render() {
    return (
      <Layout>
        <Link to="/"><div className="logo-header">
         <img src={'https://i.imgur.com/whMCxDa.png'} /></div>
        </Link>
        <img src={'https://i.imgur.com/JXCg2Hr.png'} />
        <div className="home-btn">
         <Link to="/setup"><p>GO!</p></Link>
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

export default Home;