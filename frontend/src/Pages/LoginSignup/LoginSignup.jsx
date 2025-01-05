import React, { useState } from 'react'
import './LoginSignup.css'
import cross_icon from '../../assets/cross_icon.png';
const LoginSignup = () => {
  const [CurrentState,SetCurrState]= useState("LOGIN")
  return (
    <div>
      <div className='Login-Popup'>
      <form className="Login-Popup-Container">
        <div className="Login-Popup-Title">
          <h2>{CurrentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={cross_icon.png} alt="hello" />   
        </div>
        <div className="Login-Popup-inputs">{CurrentState==="LOGIN"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{CurrentState==="Sign-Up"?"Create account":"Login"}</button>
        <div className="Login_Popup-Condition">
          <input type="checkbox" required /><p>By Continuing,i agree the terms and conditions & Privacy policy.</p></div>{CurrentState==="LOGIN"
          ?<p className='signin_color'>Create a new account?<span onClick={()=>SetCurrState("Sign-Up")}>Click Here</span></p>
          :<p className='signin_color'>Already have a account?<span onClick={()=>SetCurrState("LOGIN")}>Login Here</span></p>
        }
      </form>
    </div>
    </div>
  )
}

export default LoginSignup
