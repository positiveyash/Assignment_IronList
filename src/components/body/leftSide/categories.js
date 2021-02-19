import React, { Component } from "react";
class Categories extends Component {
    
    render() {
     
      return (
        <div className="g-mb-30 g-ml-30 g-color-black">
          <h3 className="h5 mb-3">Categories</h3>
  
          <ul className="list-unstyled">
         
            <li className="my-3">
              <a
                className="d-block u-link-v5 g-color-gray-dark-v4 g-colsor-primary--hover"
                href="#" onClick ={() => this.props.handleClickCategorySelection('Laptop')}
              >
                Laptops
                <span className="float-right g-font-size-12">{this.props.laptopCount}</span>
              </a>
            </li>
            <li className="my-3">
              <a
                className="d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                href="#" onClick ={() => this.props.handleClickCategorySelection('Mobile')}
              >
                Mobile Phones
                <span className="float-right g-font-size-12">{this.props.mobileCount}</span>
              </a>
            </li>
          
          </ul>
        </div>
      );
    }
  }
  export default Categories;