import React,{useState} from 'react';
import {CiSearch} from 'react-icons/ci'
import {TfiMobile} from 'react-icons/tfi'
import {IoPersonSharp, IoCartSharp} from 'react-icons/io5'
import './Navbar.css'

const Navbar = ({setSearch, search}) => {
  // const [input, setInput] = useState();



  return (
    <div className='navbar'>
      <div className='mainNav'>
        <div className='containerNavLeft'>
            <span className='logo'>meesho</span>
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
                <div className='profile'>
                    <IoPersonSharp/>
                    <span>Profile</span>
                </div>
                <div className='custCart'>
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
