import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'

const LoginSignup = ( {setShowLogin} ) => {
  const [CurrentState,SetCurrState]= useState("LOGIN")
  
  return (
      <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{CurrentState}</h2>
          <div className="cross-button"><FontAwesomeIcon icon={faMultiply} onClick={()=> setShowLogin(false)}/></div>
          
        </div>
        <div className="login-popup-inputs">{CurrentState==="LOGIN"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <div className="spacing"></div>
        <button>{CurrentState==="SIGN UP"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required /><p>By Continuing, I agree the terms and conditions & Privacy policy.</p>
          </div>
          <div className="login-footer"></div>
          {CurrentState==="LOGIN"
          ?<p className='signin-color'>Create a new account?<button onClick={()=>SetCurrState("SIGN UP")}>Click Here</button></p>
          :<p className='signin-color'>Already have a account?<button onClick={()=>SetCurrState("LOGIN")}>Login Here</button></p>
        }
      </form>
    </div>
  )
}

export default LoginSignup
