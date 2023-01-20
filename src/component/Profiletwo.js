import React from 'react'
import { NavLink } from "react-router-dom";

function Profiletwo() {
  return (
    <div className='profile-two'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='header'>
              <h2>Complete Profile Step-2</h2>
            </div>
            <div className='bio'>
              <p>Bio</p>
              <textarea rows='6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus lorem, 
                rutrum nec ipsum pellentesque, molestie blandit nunc. Phasellus ex nisl, finibus ut blandit efficitur, 
                pulvinar sed dolor. Praesent ut bibendum felis. Suspendisse ultricies felis et pharetra imperdiet.
                 Ut consequat sapien massa,
              </textarea>
            </div>
            <div className='url'>
              <p>Linkedin URL</p>
              <input type='url' placeholder='www.text.com' />
            </div>
            <div className='url'>
              <p>Facebook URL</p>
              <input type='url' placeholder='www.text.com' />
            </div>
            <div className='proceed-btn'>
                <NavLink className="navbar-link" to="/Tabs">submit</NavLink>
            </div>  
          </div>
          <div className='col-md-5'>
            <div className='candidate'>
              <h2>Instructions for Candidate</h2>
              <ul>
                <li>BIO must be only 2000 words</li>
                <li>URLs must include http or https automatically</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiletwo
