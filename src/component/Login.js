import React from 'react';
import { useForm } from 'react-hook-form';
import showPwdImg from '../show-password.svg';
import hidePwdImg from '../hide-password.svg';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [isRevealcfmPwd, setIsRevealcfmPwd] = useState(false);


  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = data =>{
    console.log(data);
    navigate('/otp')
  } 
  console.log(errors);
  const watchPassword = watch('password');
  const watchConfirmPassword = watch('confirmPassword');
    
    return (
      <>
        <div className='login-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='header'>
                            <h2>Login</h2>
                        </div>
                        <form  onSubmit={handleSubmit(onSubmit)}>                            
                            <div className="input-box">
                                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                <input type="text" placeholder="User Name / Email Address" {...register("FullName", {required: 'This field is required'})} />
                                <div className='error'>{errors.FullName?.message}</div>
                            </div>
                            <div className="input-box">
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                <input type={isRevealcfmPwd ? "text" : "password"}   
                                    placeholder="Password"
                                    {...register("confirmPassword", {required: 'This field is required', minLength: 6, maxLength: 12,})}
                                />
                                    <img
                                    title={isRevealcfmPwd ? "Hide password" : "Show password"}
                                    src={isRevealcfmPwd ? hidePwdImg : showPwdImg}
                                    onClick={() => setIsRevealcfmPwd(prevState => !prevState)}
                                    />
                                <div className='error'>{errors.confirmPassword?.message}</div>
                            </div>
                            <div className='check-box'>
                                <input type="checkbox" name="remember-me" />Remember Me
                            </div>
                            {/* <div className='proceed-btn'>
                                <NavLink className="navbar-link" to="/otp">Log In</NavLink>
                            </div> */}
                            <div className='inputsubmit-btn'>
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <div className='candidate'>
                            <h2>Instructions for Candidate</h2>
                            <ul>
                                <li>Login must be possible using Email ID and Username Both</li>
                                <li>Remember Me should save data in cookies for next time login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }

export default Login
