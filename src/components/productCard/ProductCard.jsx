import React from 'react';
import {FaStar} from 'react-icons/fa'
import './ProductCard.css'
const ProductCard = ({ item }) => {
    return (
        <div className='pcard' key={item.id} id={item.id}>
            <div className='pimage'>
                <img src={item.image} alt="" />
            </div>

            <div className='pDetails'>
                <p className='pTitle'>{item.title}</p>
                <p className='pPrice'>₹ {item.price}</p>
                <p>100% discount on 1st order</p>
                <p className='freeDelivery'>Free Delivery</p>
                <p><span id='rating'>{item.rating.rate} <span id='star'><FaStar/></span></span> <span id='ratingCount'>{item.rating.count} Reviews</span></p>
            </div>

        </div>
    );
}

export default ProductCard;
