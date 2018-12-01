import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './layout'

class Home extends Component {
  render() {
    return (
      <Layout>
        <h3>This is home! </h3>
        <Link to="/setup">Let's begin!</Link>
      </Layout>
    );
  }
}

export default Home;