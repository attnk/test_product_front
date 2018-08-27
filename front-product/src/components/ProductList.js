import React from "react";

import Product from "./Product";

function ProductList(props) {
  return (
    <div>
    	{props.products.map(prd => 
    		<Product key={prd.id} name={prd.name} category={prd.category} size={prd.size} priceFrom={prd.priceFrom} priceTo={prd.priceTo} images={prd.images}/>)}
    </div>
  );
}

export default ProductList;