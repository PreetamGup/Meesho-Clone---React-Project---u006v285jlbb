import React, { useEffect, useRef } from "react";

import "./Login.css";
import { CiSearch } from "react-icons/ci";
import { TfiMobile } from "react-icons/tfi";
// import Navbar from '../../components/navbar/Navbar';

const Login = ({ setIsLoggedIn, setUsername }) => {
  const username = useRef("");
  const pass = useRef("");

  function handleSubmit() {
    //    e.preventDefault()
    const loginD = JSON.parse(sessionStorage.getItem("loginDetails"));
    // console.log(username.current.value, pass.current.value)
    // console.log(loginD);
    // setIsLoggedIn(true)
    if (loginD[`${username.current.value}`] == pass.current.value) {
      setUsername(username.current.value);
      setIsLoggedIn(true);
    } else {
      window.alert("Invalid credential");
    }
  }

  useEffect(()=>{
    alert("UserName: guest , Password: guest123")
  },[])

  return (
    <div className="loginPage">
      <div className="loginNavbar">
        <div className="logoSearch">
          <span className="logo">meesho</span>

          <div className="searchbar">
            <div className="searchIcon">
              <CiSearch />
            </div>

            <div className="searchInput">
              <input
                type="text"
                placeholder="Try Saree,Kuti or Search by Product Code"
              />
            </div>
          </div>
        </div>

        <div className="downloadSupplier">
          <div className="rightNavHead download">
            <TfiMobile />
            <span>Download App</span>
          </div>

          <div className="rightNavHead">
            <span>Become a supplier</span>
          </div>
        </div>
      </div>

      <div className="loginForm">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt=""
        />

        <div className="inputField">
          <div className="input-container">
            <label>Username </label>
            <br />
            <input type="text" name="uname" required ref={username} />
          </div>

          <div className="input-container">
            <label>Password </label>
            <br />
            <input type="password" name="pass" required ref={pass} />
          </div>

          <div className="button-container">
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>

        <div className="loginFooter">
          <span>
            By continuing, you agree to Meesho's <br />
          </span>{" "}
          <span className="colorPink">Terms & Conditons</span> and{" "}
          <span className="colorPink">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
