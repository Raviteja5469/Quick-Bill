import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'

const LoginSignup = () => {
  const [CurrentState,SetCurrState]= useState("login")
  
  return (
    <div>
      <div className='Login-Popup'>
      <form className="Login-Popup-Container">
        <div className="Login-Popup-Title">
          <h2>{CurrentState}</h2>
          <FontAwesomeIcon icon={faMultiply} onClick={()=> setShowLogin(false)}/>
        </div>
        <div className="Login-Popup-inputs">{CurrentState==="login"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{CurrentState==="signup"?"Create account":"Login"}</button>
        <div className="Login_Popup-Condition">
          <input type="checkbox" required /><p>By Continuing, I agree the terms and conditions & Privacy policy.</p>
          </div>
          {CurrentState==="login"
          ?<p className='signin_color'>Create a new account?<button onClick={()=>SetCurrState("signup")}>Click Here</button></p>
          :<p className='signin_color'>Already have a account?<button onClick={()=>SetCurrState("login")}>Login Here</button></p>
        }
      </form>
    </div>
    </div>
  )
}

export default LoginSignup
