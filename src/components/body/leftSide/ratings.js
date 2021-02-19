import React, { Component } from "react";
import threestar from "./../../../3-star.jpg"
import fivestar from "../../../5-star-rating.png"
class Ratings extends Component {
    
    render() {
     
      return (
        <div className="g-mb-30 g-ml-30 g-color-black">
          <h3 className="h5 mb-3">Ratings</h3>
  
          <ul className="list-unstyled">
         
            <li className="my-3">
              <a
                className="d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                href="#" onClick ={() => this.props.handleClickRatingSelection('5')}
              >
              <img src={fivestar} style={{height:"70px" , width:"80px"}} />
                <span className="float-right g-font-size-12">{this.props. laptopratingCount}</span>
              </a>
            </li>
            <li className="my-3">
              <a
                className="d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                href="#" onClick ={() => this.props.handleClickRatingSelection('3')}
              >
         <img src={threestar} style={{height:"20px" , width:"55px",paddingLeft:"5px"}} />
                <span className="float-right g-font-size-12">{this.props. mobileratingCount}</span>
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }
  export default Ratings;