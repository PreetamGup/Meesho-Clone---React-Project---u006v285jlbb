import React,{useState, useEffect} from 'react';
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
// import { json } from 'react-router-dom';
import './Cart.css'


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "pink",
      width: 400,
    },
  };

  Modal.setAppElement('#root');


const Cart = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [ptotal, setPtotal] = useState(0);

    const navigate= useNavigate()

    function cartDetails(){
        const cart= JSON.parse(sessionStorage.getItem("personData")).cart
        // console.log(cart);

        if(cart.length==0){
            return ""
        }
        else{
            return cart
        }
    }

    function orderComplete(){
        navigate('/ordercomplete')
    }





    function handleClick(action, idx , Pprice){
        // const gettingData = JSON.parse(sessionStorage.getItem("personData"))
        // console.log(gettingData)

        // if(action==="+"){
        //        gettingData.cart[idx].pQuantity= gettingData.cart[idx].pQuantity+1
        //        gettingData.cart[idx].pTprice= gettingData.cart[idx].pQuantity * gettingData.cart[idx].pPrice
        //     }  
        // else{
        //     gettingData.cart[idx].pQuantity= gettingData.cart[idx].pQuantity-1
        //     gettingData.cart[idx].pTprice= gettingData.cart[idx].pQuantity * gettingData.cart[idx].pPrice
        // }
        
        // sessionStorage.setItem("personData", JSON.stringify(gettingData))

        // setPtotal(gettingData)

        const quantity = document.getElementById(`quantity${idx}`)
        const prices = document.getElementById(`price${idx}`)


        if(action==="+"){
            quantity.innerText= Number(quantity.innerText)+1;
            prices.innerText = Pprice*Number(quantity.innerText)
        }  
        else{
            if(quantity.innerText>0){
                quantity.innerText= Number(quantity.innerText)-1;

                prices.innerText = Pprice*Number(quantity.innerText)
            }
        }

        
        totalprice()
    }

    function totalprice(){
        const allPrice= document.getElementsByClassName("pPrices");
         console.log(allPrice);
    //
        // Object.keys(allPrice).map(everyprice=> toPrice=toPrice+Number(everyprice.innerText))
        // console.log(toPrice)

        let sum=0;

        for(let i=0; i<allPrice.length ; i++ ){
            console.log(allPrice[i]);
            sum+= Number(allPrice[i].innerHTML)
           
        }

        console.log(sum);
        
        setPtotal(sum)
       
    }

    useEffect(() => {
     totalprice()
    }, []);

   

  return (
    <div className='cartContainer'>
        {       
                cartDetails().length==0? <h1>Cart is empty</h1>:cartDetails().map((product, idx)=>{
                    // console.log(product);
                    return(
                        <div className='eachProductCart' key={idx}>
                            
                            <img src={product.pImg} alt="" className='pSingleImg' />
                            <h2>{product.pTitle}</h2>
                            <div className='quantity'>
                                Quantity: <span id={`quantity${idx}`}>{product.pQuantity}</span>
                                <button onClick={()=>handleClick("+", idx,product.pPrice)}>+</button>
                                <button onClick={()=>handleClick("-", idx,product.pPrice)}> - </button>
                            </div>

                            <p className='priceContainer'>₹ <span id={`price${idx}`} className='pPrices'>{product.pTprice}</span></p>
                           
                            
                        </div>
                    )
                })
        }
      <h2 >Total Prices: <span>{ ptotal.toFixed(2)}</span></h2>

      <div className="checkOutPage">
        <button onClick={setModalOpen} className='checkOut'>CheckOut</button>
        <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
            
        >
            <div className='paymentPage'>
                <h2 style={{textAlign:'center'}}>Confirm Your Payment</h2><br />

                <h3>Amount : ₹ {ptotal.toFixed(2)}</h3><br />
                <label htmlFor="Name">Name:</label>
                <input type="text"  placeholder='Enter Your Name'/><br />

                <div className='cardInfo'>
                    <label htmlFor="CardNo">Card Number<br />
                    <input type="number"  placeholder='Card Number'/></label><br />

                    <label htmlFor="">CVV<br />
                    <input type="Number"  placeholder='CVV' className='cvv' minLength={3} width='20px'/></label>
                </div>

                <div className="expiryMonth">
                    <label htmlFor="month">Card Expiry</label> <br />
                    <select id='month'>
                    <option name="January" value="Jan">January</option>
                        <option name="February" value="Feb">February</option>
                        <option name="March" value="Mar">March</option>
                        <option name="April" value="Apr">April</option>
                        <option name="May" value="May">May</option>
                        <option name="June" value="Jun">June</option>
                        <option name="July" value="Jul">July</option>
                        <option name="August" value="Aug">August</option>
                        <option name="September" value="Sep">September</option>
                        <option name="October" value="Oct">October</option>
                        <option name="November" value="Nov">November</option>
                        <option name="December" value="Dec">December</option>
                    </select>
                    <select id='year'>
                        
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>

                    </select>
                </div>

                <label htmlFor="Address">Address</label><br />
                <textarea name="Address" id="Address" cols="40" rows="8"></textarea>



            </div>
            <button className='completeBtn' onClick={() => orderComplete()}>Pay</button> &nbsp;
            <button className='cancelBtn' onClick={() => setModalOpen(false)}>Cancel</button>
        </Modal>
        </div>

      {/* <button className='checkOut'>CheckOut</button> */}

    
    </div>
  );
}

export default Cart;
