import React, { Component } from "react";
import "./leftside.css"
class Currency extends Component {
    
    render() {
     
      return (
        <div className="g-mb-30 g-ml-30 g-color-black">
          <h3 className="h5 mb-3">Countries</h3>
          <div className="dropdown">
  <button className="dropbtn">Select</button>
  <div className="dropdown-content">
    <a   onClick ={() => this.props.handleClickCurrencySelection('¥')}>Japan</a>
    <a  onClick ={() => this.props.handleClickCurrencySelection('₹')}>India</a>
    <a   onClick ={() => this.props.handleClickCurrencySelection('$')}>US</a>
  </div>
</div>
        </div>
      );
    }
  }
  export default Currency;