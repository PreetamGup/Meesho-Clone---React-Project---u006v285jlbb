import React,{useContext, useState,useEffect} from 'react';
import './ProductDetail.css'
import Context from '../../context/Context';
// import Product from '../product/Product';
import {FaStar} from 'react-icons/fa'

const ProductDetail = () => {
  // const [singleData, setSingleData] = useState({});
  const value= useContext(Context);


  return (
    <div className='productDetails' >
      {
        value.allProduct.filter((item) => (item.id == value.productId))
          .map((item1 => {
            return (
              <>
                <div className="productPic">
                  <img src={item1.image} alt="" />
                  <button >Add to Cart </button>
                </div>

                <div className="pDetailsAndFeature">
                  <div className='ptitleAndPrice'>
                    <p className='pTitle'>{item1.title}</p>
                    <p className='pPrice'>₹ {item1.price}</p>
                    <p>100% discount on 1st order</p>
                    <p className='freeDelivery'>Free Delivery</p>
                    <p><span id='rating'>{item1.rating.rate} <span id='star'><FaStar /></span></span> <span id='ratingCount'>{item1.rating.count} Reviews</span></p>
                  </div>

                  <div className='pSize'>
                    <p style={{fontWeight:'bold', fontSize:'18px'}}>Select Size</p>
                    <p className='freeSize'>Free Size</p>
                  </div>

                  <div className='pDetails'>
                    <h2>Product Details</h2>
                    <p className='pDescriptions'>
                      {item1.description}
                    </p>

                  </div>
                </div>       

              </>)
          }))

      }
      
      
      
    
    </div>
  );
}

export default ProductDetail;
