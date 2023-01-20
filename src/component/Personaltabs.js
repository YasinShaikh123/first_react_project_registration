import React from 'react';
// import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';

export default function Register() {    
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className='personal-tabs'>      
            <div className='row'>
                <div className='col-md-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='tab-input'>
                                    <label>Full Name</label><br></br>
                                    <input type="text" value="Priyanka Joshi" {...register("First name", {required: true, maxLength: 80})} />   
                                </div>                                 
                                <div className='tab-input'>
                                    <label>DOB</label><br></br>
                                    <input type="date" value="DOB" {...register("DOB", {required: true, maxLength: 100})} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='tab-input'>
                                    <label>Email Address</label><br></br>
                                    <input type="email" value="Priyankajoshi@gmail.com" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                                </div> 
                                <div className='tab-input'>
                                    <label>Location</label><br></br>
                                    <input type="text" value="Malad" {...register("Location", {required: true, minLength: 6, maxLength: 12})} />
                                </div>   
                            </div>                    
                        </div>
                        <div className='proceed-btn'>
                            <button>Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='candidate'>
                <h2>Instructions for Candidate</h2>
                <ul>
                    <li>Please add proper validations on all fields</li>
                    <li>DOB should be greater then 18 Years</li>
                    <li>Google Location API to be used for Location</li>
                    <li>Password should be encrypted and saved in DB</li>
                </ul>
            </div>
    </div>
  );
}