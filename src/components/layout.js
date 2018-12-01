import React, { Component } from 'react';
import './layout.css'

const layoutStyle = {
  margin: '15px',
}

class Layout extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div style={layoutStyle}>
        <div className="layout-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
