import React, { useState } from 'react';

const MultipleInputs = () => {

    const [ userRegistration, setUserRegistration] = useState({
       username:'',
       email:'',
       dob:'',
       location:'',
       password:'',
       comformpassword:'',
    });
    
    const [ records,setRecords] = useState([]);

    const handleInput = (e) =>{
       const name = e.target.name;
       const value = e.target.value;
       console.log(name,value);

       setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records,newRecord]);
        console.log(records);
    }

  return (
    <>
        <div className='container'> 
           <div className='row'>
                <div className='col-md-6'>       
                    <div className='reg-head'>
                        <h2>Register</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit}>       
                        <div className='input-box'>
                            <input type='text' autoComplete='off'
                            value={userRegistration.username} 
                            onChange={handleInput}
                            name='username' id='username' placeholder='username'/>
                        </div>
                        <div className='input-box'>
                            <input type='text' autoComplete='off'
                            value={userRegistration.email} 
                            onChange={handleInput}
                            name='email' id='email' placeholder='Email adress' />
                        </div>
                        <div className='input-box'>
                            <input type='dob' autoComplete='off'
                            value={userRegistration.dob} 
                            onChange={handleInput}
                            name='dob' id='dob' placeholder='DOB' />
                        </div>
                        <div className='input-box'>
                            <input type='location' autoComplete='off'
                            value={userRegistration.location} 
                            onChange={handleInput}
                            name='location' id='location' placeholder='Location' />
                        </div>
                        <div className='input-box'>
                            <input type='password' autoComplete='off'
                            value={userRegistration.password} 
                            onChange={handleInput}
                            name='password' id='password' placeholder='Password' />
                        </div>  
                        <div className='input-box'>
                            <input type='comformpassword' autoComplete='off'
                            value={userRegistration.comformpassword} 
                            onChange={handleInput}
                            name='comformpassword' id='comformpassword' placeholder='Comform Password' />
                        </div>   
                        <button type='submit'>Register</button>
                    </form>
                </div>
                <div className='col-md-6'>
                    <div className='intruction'>
                        <h2>Instructions for Candidate</h2>
                        <ul>
                            <li>Please add proper on all the fields</li>
                            <li>DOB should be greater then 18 Years</li>
                            <li>Google Location API to be used for location</li>
                            <li>Password should be encrypted and saved in DB</li>
                        </ul>
                    </div>
                </div>
            </div>   
        </div>
    </>
  )
}

export default MultipleInputs
