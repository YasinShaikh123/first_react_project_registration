import React from 'react'
import { NavLink } from "react-router-dom";

function Thankyou() {
  return (
    <div className='thankyou-page'>
      <div className='header'>
        <h2>Thank you Please Check<br></br>Your Email For OTP</h2>
      </div>
      <div className='proceed-btn'>
        <NavLink className="navbar-link" to="/Login">Proceed</NavLink>
      </div>
    </div>
  )
}

export default Thankyou
