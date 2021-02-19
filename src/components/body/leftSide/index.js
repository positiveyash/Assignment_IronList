import React, { Component } from "react";
import Categories from "./categories";
import Currency from "./Currency";
import Pricing from "./pricing";
import Reset from "./reset";
import Rating from "./ratings";
import "./leftside.css";

class LeftSide extends Component {
  handleClickcategorySelection = selectedCategory => {
    this.props.setCategory(selectedCategory);
  };


  handleClickcurrencySelection = selectedCurrency => {
    this.props.setCurrency(selectedCurrency);
  };

  handleClickratingSelection = (selectedRating) => {
    this.props.setRating(selectedRating);

  };
 
 
  handleClickReset = () => {
    this.props.setReset();
  };
  handleClickFilterChangevalue = (min, max) =>{
    this.props.changefilterValue(min, max);
  }

  render() {
    if (this.props.products !== undefined) {
      let { products } = this.props;
 
      let mobile = 0;
      let laptop = 0;
      let subCat = products.map((row, index) => {
        if (row.category == "Mobile") {
          mobile = mobile + 1;
        } else {
          laptop = laptop + 1;
        }
      });

    
     
      let filterData = this.props.filterData;
      return (
        <div className="col-md-2 g-pt-20">
          <div className="g-pr-15--lg g-pt-60">
            <Categories
              mobileCount={mobile}
              laptopCount={laptop}
         subCat={subCat}
              handleClickCategorySelection={this.handleClickcategorySelection}
             
            />
             <Currency
      
        
              handleClickCurrencySelection={this.handleClickcurrencySelection}
             
            />
            <Pricing 
            filterData={filterData}
            handleClickFilterChangevalue={this.handleClickFilterChangevalue}
            />
                <Rating
    
  
              handleClickRatingSelection={this.handleClickratingSelection}
             
            />
            <Reset 
            handleClickReset={this.handleClickReset}
            />
          </div>
        </div>

        


 

      );
    } else {
      return (
        <div className="col-md-2 order-md-1 g-brd-right--lg g-brd-gray-light-v4 g-pt-40">
          <div className="g-pr-15--lg g-pt-60">
            <Categories />
            //pricing is here..
            <Reset />
          </div>
        </div>
      );
    }
  }
}
export default LeftSide;
