import React from 'react';
import './OrderComplete.css'
import Context from '../../context/Context';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderComplete = () => {

  const value = useContext(Context)

  useEffect(() => {
   
    sessionStorage.setItem("personData", JSON.stringify(value.database[`${value.username}`]))
  }, []);
  return (
    <div id='OrderCompletePage'>
      <h2>Hey {`${value.username}`},</h2>
      <h3 >Your Order Placed Successfully</h3>
      <Link to={'/'}>
        <button id='shopAgain'>Shop Again</button>
      </Link>
      
    </div>
  );
}

export default OrderComplete;
