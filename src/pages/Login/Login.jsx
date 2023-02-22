import React, { useRef } from 'react';
import './Login.css'

const Login = ({ setIsLoggedIn, setUsername }) => {

    const username = useRef("");
    const pass = useRef("")

    function handleSubmit() {
        //    e.preventDefault()
        const loginD = JSON.parse(sessionStorage.getItem("loginDetails"))
        // console.log(username.current.value, pass.current.value)
        // console.log(loginD);
        // setIsLoggedIn(true)
        if (loginD[`${username.current.value}`] == pass.current.value) {
            
            setUsername(username.current.value);
            setIsLoggedIn(true)
        }
        else {
            alert("Invalid credential")
        }
    }

    return (
        <div className='loginPage'>
            <h1>meesho</h1>
            <div className='loginForm'>
                <div className="input-container">
                    <label>Username </label><br />
                    <input type="text" name="uname" required ref={username} />

                </div>
                <div className="input-container">
                    <label>Password </label><br />
                    <input type="password" name="pass" required ref={pass} />

                </div>
                <div className="button-container">
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </div>

        </div>
    );
}

export default Login;
