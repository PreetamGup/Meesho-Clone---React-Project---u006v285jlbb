import React,{useEffect, useState} from 'react'
import '../styles/App.css';
import Navbar from './navbar/Navbar';
import Product from './product/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './productDetails/ProductDetail';




const App = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    async function fetchData() {

      const data = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
      const res = await data.json()
      // console.log(res)
      setAllProduct(res)
      
    }

    fetchData()
    
  }, []);

  return (
    <div id="appmain">
      <BrowserRouter>
        <Navbar setSearch={setSearch} search={search}/>
        <Product allProduct={allProduct} search={search}/>


        <Routes>
          <Route path='/productdetail' element={<ProductDetail/>}/>
        </Routes>

      </BrowserRouter>
    </div>

  )
}


export default App;
