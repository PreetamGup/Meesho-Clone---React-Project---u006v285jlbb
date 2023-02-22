import React,{useContext, useState,useEffect} from 'react';
import './ProductDetail.css'
import Context from '../../context/Context';
// import Product from '../product/Product';
import {FaStar} from 'react-icons/fa'




const ProductDetail = () => {
  // const [singleData, setSingleData] = useState({});
  const value= useContext(Context);


  function addToCart(item1){
    const personCart= JSON.parse(sessionStorage.getItem("personData"))
    const cartDetail= {
      pImg : item1.image,
      pTitle : item1.title,
      pPrice : item1.price,
      pTprice : item1.price,
      pQuantity : 1,
    }

    personCart.cart.push(cartDetail);

    sessionStorage.setItem("personData",JSON.stringify(personCart ))
    
  }


  return (
    <div className='productDetails' >
      {
        value.allProduct.filter((item) => (item.id == value.productId))
          .map((item1 => {
            return (
              <React.Fragment key={item1.id}>
                <div className="productPic">
                  <img src={item1.image} alt="" />
                  <button onClick={addToCart(item1)} >Add to Cart </button>
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

              </React.Fragment>)
          }))

      }
          
    </div>
  );
}

export default ProductDetail;
