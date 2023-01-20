import React from 'react';
import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <>
       <div className='profile-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='header'>
                            <h2>Complete Profile Step-1</h2>
                        </div>
                        <div className='uploder'>
                            <div className='profile-input'>
                                <div className="mb-1">
                                    <p>Image</p>
                                    <div className="upload-box">
                                        <input type="file" id="file-input" name="ImageStyle"/>
                                    </div>
                                </div>
                            </div>
                            <div className='profile-input'>
                                <div className="mb-1">
                                    <p>Video</p>
                                    <div className="upload-box">
                                        <input type="file" id="file-input" name="videoStyle"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='radio-but'>
                            <p>Gender:</p>
                            <p><input type="radio" value="Male" name="gender" /> Male</p>
                            <p><input type="radio" value="Female" name="gender" /> Female</p>
                        </div>          
                        <div className='proceed-btn'>
                            <NavLink className="navbar-link" to="/Profiletwo">Proceed</NavLink>
                        </div>   
                    </div>
                    <div className='col-md-6'>
                        <div className='candidate'>
                            <h2>Instructions for Candidate</h2>
                            <ul>
                                <li>Image dimension should be 100*100 Pixels only</li>
                                <li>Only 30 Seconds Video File should be allowed and only MP4 File allowed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default Profile
