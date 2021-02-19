import React, { Component } from "react";
import threestar from "./../../../3-star.jpg";
import fivestar from "./../../../5-star-rating.png";
import "./Body.css";
class ListItem extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props.products !== undefined) {
        let  products  = this.props.products;
        let populate = []; 
        populate = products.map((products, index) => {
          let image = null;
          if (products.category == "Mobile") {
            image = "mobile.jpg";
          } else {
            image = "laptop.png";
          }
          return (
            <li className="item " key={index} >
              {/* <div className="front"> */}
                {/* <div className="frontimage">
                  <img className="img-fluid" src={"./assets/images/" + image} />
                </div> */}
                <div >
                  <header 
            
                    // style={{
              
                    //   // backgroundImage: `${products.category=="Mobile" ? "url(./assets/images/mobilepic.jpg)": "url(./assets/images/laptoppic.jpg)"}`
                    //   backgroundImage: 
                    // }}
                  >
                    <div class="container">
                   <img src={products.image} className="image" />
                   <div class="overlay">
    <div class="text">{products.description} </div>
  </div>
                   </div>
                  </header>
                  <div  className="productname" key={products.id}>
                      {" "}
                      {products.company}{" "}
                    
                    
                    </div>
                    <div style={{color:"black",paddingLeft:"5px"}} >Price : {products.price}{products.currency}
                  
                    </div>
                 
                  <div style={{color:"black",paddingLeft:"5px"}}>Category: {products.category}</div> 
                  <div style={{color:"black",paddingLeft:"5px"}}>{products.rating=="3" ? <img src={threestar}  style={{height:"20px" , width:"70px"}}/> : <img src={fivestar}  style={{height:"70px" , width:"80px"}}/> }
                  </div> 
                  {/* <div style={{color:"black"}}>{products.description} 
                  </div> */}
                   {/* <span class="tooltiptext">{products.description} </span> */}
                </div>
              {/* </div> */}
            </li>
          );
        });
        return <div> {populate} </div>;
      } else {
        return <div />;
      }
    }
  }
  export default ListItem;