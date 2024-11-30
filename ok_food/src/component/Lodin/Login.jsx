import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin }) => {
  const [current, setCurrent] = useState("Login")
  return (
    <div className='log-in'>
      <form className='login-pop'>
        <div className="login-title">
          <h2>{current}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {current === "Login" ? <></> : <input type="text" placeholder="Name" />}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder='Password' />
        </div>
        <button className='submit'>{current === "Sing Up" ? "Create account" : "Log In"}</button>
        <div className="login-con">
          <input type="checkbox" required />
          <p>By continuning, i agree to thr terms of use $ pricay police. </p>
        </div>
        {current === "Login" ? <p>Create a new account <span onClick={() => setCurrent("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrent("Login")}>Login here</span></p>}






      </form>
    </div>
  )

}
export default Login