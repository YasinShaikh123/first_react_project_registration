import React from 'react'

function deletetab() {
  return (
    <div className='delete-tabs'>
        <div className='reason'>
            <div className='check-box'>
                <input type="checkbox" name="remember-me" />Reasons-1
            </div>
            <div className='check-box'>
                <input type="checkbox" name="remember-me" />Reasons-2
            </div>
            <div className='check-box'>
                <input type="checkbox" name="remember-me" />Reasons-3
            </div>
            <div className='check-box'>
                <input type="checkbox" name="remember-me" />Reasons-4
            </div>
            <div className='proceed-button'>
                <button type="submit" className="btn btn-primary">Delete Account</button>
            </div>
        </div>
        <div className='candidate'>
            <h2>Instructions for Candidate</h2>
            <ul>
                <li>Save Delete Reason for every user and change the user status in DB from 1 to 0 where 1 is active  and 0 is deleted</li>
                <li>deleted user cannot login and it will give error- Your account is   deleted, please contact Website Admin to Reactivate your account</li>
            </ul>
        </div>
    </div>
  )
}

export default deletetab
