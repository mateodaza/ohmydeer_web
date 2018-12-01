import React, { Component } from 'react';

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
        <div style={{minHeight: '100vh'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
