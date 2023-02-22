import React,{useEffect, useState} from 'react'
import '../styles/App.css';
import Navbar from './navbar/Navbar';
import Product from './product/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productdetail from './productDetails/ProductDetail';
import Context from '../context/Context';
import { loginDetails } from '../Login Detail';
import Login from '../pages/Login/Login';
import Cart from '../pages/cart/Cart';
import { database } from '../personData';
import OrderComplete from '../pages/orderComplete/OrderComplete';






const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [productId, setProductId] = useState(null);

  const [singleData, setSingleData] = useState({});
  // const value= useContext(Context);
  


  useEffect(() => {

    async function fetchData() {

      const data = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
      const res = await data.json()
      // console.log(res)
      setAllProduct(res)
      
    }

    fetchData()


    
  sessionStorage.setItem("loginDetails", JSON.stringify(loginDetails))
 
  sessionStorage.setItem("personData", JSON.stringify(database[`${username}`]))
    
  }, [username]);

 
  return (
    <div id="appmain">

      {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}/> :
      <BrowserRouter>
        <Navbar setSearch={setSearch} search={search} username={username} setIsLoggedIn={setIsLoggedIn}/>
        {/* <Product allProduct={allProduct} search={search}/> */}

        <Context.Provider value={{allProduct,search, singleData, setSingleData, productId, setProductId, username, database}} >
          <Routes>
            <Route exact path='/' element={<Product  />}/>
            <Route  path='/product' element={<Productdetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/ordercomplete' element={<OrderComplete/>}/>
          </Routes>
        </Context.Provider>

      </BrowserRouter>
    }
    </div>

  )
}


export default App;
