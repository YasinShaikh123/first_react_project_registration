import React from 'react'
import { NavLink } from "react-router-dom";

function Thankyou() {
  return (
    <div className='thankyou-page'>
      <div className='header'>
        <h2>Thank you for the Payment, Please<br></br> Check Your Email<br></br> for the Payment reciept</h2>
      </div>
      <div className='proceed-btn'>
        <NavLink className="navbar-link" to="/Login">Click Here</NavLink>
      </div>
    </div>
  )
}

export default Thankyou
