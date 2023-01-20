import React from 'react';
import { useForm } from 'react-hook-form';
import showPwdImg from '../show-password.svg';
import hidePwdImg from '../hide-password.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Registernew() {
    const navigate = useNavigate();
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [isRevealcfmPwd, setIsRevealcfmPwd] = useState(false);


  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = data => {
    console.log(data);
    navigate('/Thankyou')
  }
  console.log(errors);
  const watchPassword = watch('password');
  const watchConfirmPassword = watch('confirmPassword');
//   console.log(watchPassword)
  return (
     <>
    <div className='register-page'>
        <div className='container'>           
            <div className='row'>
                <div className='col-md-6'>
                    <div className='header'>
                        <h2>Register</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            <input type="text" placeholder="Full Name" {...register("FullName", {required: 'This field is required'})} />
                            <div className='error'>{errors.FullName?.message}</div>
                        </div>
                        <div className="form-group">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <input type="text" placeholder="Email address" {...register("address", {required: 'This field is required',pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }})} />
                            <div className='error'>{errors.address?.message}</div>
                        </div>
                        <div className="form-group">
                            <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
                            <input type="date" placeholder="DOB" {...register("DOB", {required: 'This field is required'})} />
                            <div className='error'>{errors.DOB?.message}</div>
                        </div>
                        <div className="form-group">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <input type="text" placeholder="Location" {...register("Location", {required: 'This field is required', minLength: 6, maxLength: 12})} />
                            <div className='error'>{errors.Location?.message}</div>
                        </div>


                        <div className="form-group">
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            <input type={isRevealPwd ? "text" : "password"} 
                                placeholder="Password" 
                                {...register("password", {required: 'This field is required'})} 
                            />
                                <img
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                                />
                            <div className='error'>{errors.password?.message}</div>
                        </div>
                        <div className="form-group">
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            <input type={isRevealcfmPwd ? "text" : "password"}   
                                placeholder="Confirm Password"
                                {...register("confirmPassword", {required: 'This field is required', minLength: 6, maxLength: 12,})}
                             />
                                <img
                                title={isRevealcfmPwd ? "Hide password" : "Show password"}
                                src={isRevealcfmPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealcfmPwd(prevState => !prevState)}
                                />
                            <div className='error'>{errors.confirmPassword?.message}</div>
                        </div>
                        <div className='inputsubmit-btn'>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
                <div className='col-md-6'>
                    <div className='candidate'>
                        <h2>Instructions for Candidate</h2>
                        <ul>
                            <li>Please add proper validations on all the fields</li>
                            <li>DOB should be greater then 18 Years</li>
                            <li>Google Location API to be used for location</li>
                            <li>Password should be encrypted and saved in DB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
