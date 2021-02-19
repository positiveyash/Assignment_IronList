import React, { Component } from "react";
import ListItem from './listItem';


class RightSide extends Component {
  render() {
    let { products } = this.props;
    if(this.props.categoryName != undefined){
      var Name = this.props.categoryName;
    }
    
    return (
      <div className="col-md-10 order-md-4 ">
        <div className="g-pl-80--lg">
      
            <ul className="group clearfix ">
              <span className="row justify-content-center "> </span>
              
              {/* <div className="col "style={{ color:'black'}} align="center"> {Name} </div> */}
              <ListItem products={products} />
            </ul>
       
        </div>
      </div>
    );
  }
}

export default RightSide;
