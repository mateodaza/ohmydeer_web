import React, { Component } from 'react';
import ReactLoading from "react-loading";
import './loading.css'

class Loading extends Component {
  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
    this.hide = this.hide.bind(this)
  }

  hide(show) {
    if(show) {
      this.overlayRef.current.style.display = "block";
    }else{
      this.overlayRef.current.style.display = "none";
    }
  }
  render() {
    let hide = () => this.hide(false)
    if(this.props.noInterruption) {
      hide = null
    }
    return (
      <div ref={this.overlayRef} id="overlay" onClick={hide}>
        <div id="container">
          <ReactLoading type="bubbles" color="#000" />
        </div>
      </div>
    );
  }
}

export default Loading;