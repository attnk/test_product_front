import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Product.css";


function Product(props) {
  return( 
  	<div className="product">
  		<div>
  			<img className="images" src={props.images[0]}/>
  			<img className="images" src={props.images[1]}/>
  			<img className="images" src={props.images[2]}/>
  			<img className="images" src={props.images[3]}/>
  		</div>
  		
  		<div>
  			<div>{props.name}</div>
	  		<div>{props.category}</div>
	  		<div>{props.size}</div>
  		</div>
  		
  		<div className="old-price">{props.priceFrom}</div>
  		<div>{props.priceTo}</div>
  	</div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired
};

export default Product;