import React,{useContext} from 'react';
import ProductCard from '../productCard/ProductCard';
import './Product.css'
import Context from '../../context/Context';


const Product = () => {
    // console.log(allProduct)
    const value= useContext(Context)
  return (
    <div id='productMain'>
      {value.allProduct.filter((item)=>{
        if(value.search==""){
            return item
        }else if((item.title.toLowerCase()).includes(value.search.toLowerCase()) || (item.description.toLowerCase()).includes(value.search.toLowerCase())){
            return item
        }
      }).map(item=>{
        return <ProductCard item={item} id={item.id} />
      })}
    </div>
  );
}

export default Product;
