import React from 'react';
import ProductCard from '../productCard/ProductCard';
import './Product.css'

const Product = ({allProduct, search}) => {
    // console.log(allProduct)
  return (
    <div id='productMain'>
      {allProduct.filter((item)=>{
        if(search==""){
            return item
        }else if((item.title.toLowerCase()).includes(search.toLowerCase()) || (item.description.toLowerCase()).includes(search.toLowerCase())){
            return item
        }
      }).map(item=>{
        return <ProductCard item={item} id={item.id}/>
      })}
    </div>
  );
}

export default Product;
