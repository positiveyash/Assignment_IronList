import React, { Component } from "react";
import "./leftside.css"
class Currency extends Component {
    
    render() {
     
      return (
        <div className="g-mb-30 g-ml-30 g-color-black">
          <h3 className="h5 mb-3">Currencies</h3>
  
          {/* <ul className="list-unstyled">
         
            <li className="my-3">
              <a
                className="d-block u-link-v5 g-color-gray-dark-v4 g-colsor-primary--hover"
                href="#" onClick ={() => this.props.handleClickCurrencySelection('¥')}
              >
              Japan
                <span className="float-right g-font-size-12">{this.props.JapanCount}</span>
              </a>
            </li>
            <li className="my-3">
              <a
                className="d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                href="#" onClick ={() => this.props.handleClickCurrencySelection('₹')}
              >
             India
                <span className="float-right g-font-size-12">{this.props.IndiaCount}</span>
              </a>
            </li>
          
          </ul> */}
          <div className="dropdown">
  <button className="dropbtn">Select</button>
  <div className="dropdown-content">
    <a href="#"  onClick ={() => this.props.handleClickCurrencySelection('¥')}>Japan</a>
    <a href="#" onClick ={() => this.props.handleClickCurrencySelection('₹')}>India</a>
    <a href="#">US</a>
  </div>
</div>
        </div>
      );
    }
  }
  export default Currency;