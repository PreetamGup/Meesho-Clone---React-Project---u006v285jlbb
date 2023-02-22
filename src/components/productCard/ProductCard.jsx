import React from 'react';
import {FaStar} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import { useContext } from 'react';
import Context from '../../context/Context';


const ProductCard = ({ item }) => {
    const value = useContext(Context)
    
    const navigate= useNavigate();

    function goToProductPage(id){
        value.setProductId(id);
        

        navigate("/product")
    }

    return (
        <div className='pcard' key={item.id}  onClick={()=> goToProductPage(item.id)}>
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
