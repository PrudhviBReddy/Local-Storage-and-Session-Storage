import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let navigate = useNavigate();


    useEffect(()=>{
        emailInputRef.current.value = localStorage.getItem("email");
        passwordInputRef.current.value = localStorage.getItem("password");
        if(localStorage.getItem("email") && localStorage.getItem("password")){
            onLoginClick();
        }
    },[]);


    let onLoginClick = ()=>{
        let typedEmail = emailInputRef.current.value;
        let typedPassword = passwordInputRef.current.value;
        if(typedEmail == "prudhvi@gmail.com" && typedPassword == "Prudhvi"){
            localStorage.setItem("email",emailInputRef.current.value);
            localStorage.setItem("password",passwordInputRef.current.value);
            navigate("/home");
        }else{
            alert("Invalid username/password");
        }
    }


  return (
    <div className='App'>
        <form>
            <h2>LOGIN</h2>
            <div>
                <label>Email</label>
                <input type='text' ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text' ref={passwordInputRef}></input>
            </div>
            <div>
                <button type='button' onClick={()=>{
                   onLoginClick();
                }}>Login</button>
            </div>
        </form>
        <br></br>
        <Link to="/signup">signup</Link>
    </div>
  )
}

export default Login