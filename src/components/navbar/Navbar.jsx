import React,{useState, useEffect} from 'react';
import {CiSearch} from 'react-icons/ci'
import {TfiMobile} from 'react-icons/tfi'
import {IoPersonSharp, IoCartSharp} from 'react-icons/io5'
import './Navbar.css'
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({setSearch, search, username, setIsLoggedIn}) => {
   const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  function goToCart(){
    navigate('/cart')
  }

  // useEffect(() => {
    // const totalCart= (JSON.parse(sessionStorage.getItem("personData"))).cart.length()
  //   totalCart===null?0:setCartLength(totalCart)
  // }, []);


  return (
    <div className='navbar'>
      <div className='mainNav'>
        <div className='containerNavLeft'>
         <Link to={'/'} className='logo'><span className='logo'>meesho</span></Link>   
            <div className='searchbar'>
                <div className='searchIcon'>
                    <CiSearch/>
                </div>
                <div className='searchInput'>
                    <input type="text" value={search} placeholder='Try Saree,Kuti or Search by Product Code' onChange={(e)=>setSearch(e.target.value)} />
                </div>
            </div>
        </div>
        
        <div className='containerNavRight'>
            <div className='rightNavHead download'>
              <TfiMobile/>
               <span>Download App</span>
            </div>

            <div className="rightNavHead">
                <span>Become a supplier</span>
            </div>

            <div className='customerNav'>
                <div className='profile' onClick={()=>setOpen(!open)}>
                    <IoPersonSharp/>
                    <span>Profile</span>
                    {open && <div className='personMenu'>
                        <p>{username}</p>
                        <p id='logout' onClick={()=>setIsLoggedIn(false)}>Logout</p>
                      </div>}
                </div>
                <div className='custCart' onClick={goToCart}>
                {/* <sup>{cartLength}</sup>  */}
                 <IoCartSharp/>
                    <span>Cart</span>
                </div>

            </div>
        </div>

      </div>
    <hr />
      <div className='catNav'>
        <span>Women Ethnic</span>
        <span>Women Western</span>
        <span>Men</span>
        <span>Kids</span>
        <span>Home & Kitchen</span>
        <span>Beauty & Health</span>
        <span>Jewellary & Accessories</span>
        <span>Bags and Footwear</span>
        <span>Electronics</span>

      </div>
      <hr />
    </div>
  );
}

export default Navbar;
