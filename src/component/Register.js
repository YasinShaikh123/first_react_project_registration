
import React from 'react'
// import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// import * as Yup from 'yup'

const ConfirmPassword = () => {
    const { register, handleSubmit,formState:{errors}} = useForm();
    console.log(errors);
    console.log(errors?.FullName?.message);
//   const formSchema = Yup.object().shape({
//     text: Yup.string()
//       .required('Please enter you\'re name.'),
//     //   .min(8, 'Password must be at 8 char long'),
//     email: Yup.string()
//       .required('Please enter you\'re email Id.'),
//     //   .min(8, 'Password must be at 8 char long'),
//     date: Yup.string()
//       .required('Please select a date.'),
//     //   .min(8, 'Password must be at 8 char long'),
//     text: Yup.string()
//       .required('Please enter you\'re Address.'),
//     //   .min(8, 'Password must be at 8 char long'),
//     password: Yup.string()
//       .required('Please enter the password')
//       .min(8, 'Password must be at 8 char long'),
//     confirmPwd: Yup.string()
//       .required('Confirm you\'re password.')
//       .oneOf([Yup.ref('password')], 'Passwords does not match'),
//   })
//   const formOptions = { resolver: yupResolver(formSchema) }


//   const { register, handleSubmit, reset, formState:{errors}} = useForm(formOptions)
  function onSubmit(data) {
    console.log(data)
    return false
  }

  return (
    <div className='register-page'>
        <div className='container'>           
            <div className='row'>
                <div className='col-md-6'>
                    <div className=" mt-2">
                        <div className='header'>
                            <h2>Register</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <i class="fa fa-user-o" aria-hidden="true"></i>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    {...register('FullName', {required: 'This field is required'})}
                                    className={"form-control"} 
                                />
                                {/* <div className="invalid-feedback">{errors.text?.message}</div> */}
                                <div className="">{errors.FullName?.message}</div>
                            </div>
                            <div className="form-group">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <input
                                    type="email"
                                    placeholder="Email-Id"
                                    {...register('Email Id',{required:true})}
                                    className={"form-control"} 
                                    // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
                                <div className="">{errors.FullName?.message}</div>
                            </div>
                            <div className="form-group">
                                <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
                                <input
                                    type="date"
                                    placeholder="MM/DD/YYYY"
                                    {...register('DOB',{required:true})}
                                    className={"form-control"} 
                                    // className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.date?.message}</div>
                            </div>
                            
                            <div className="form-group">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <input
                                    name="Address"
                                    type="text"
                                    placeholder="Address"
                                    {...register('Address', {required:true})}
                                    className={"form-control"} 
                                    // className={`form-control ${errors.text ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.text?.message}</div>
                            </div>
                            <div className="form-group">
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    {...register('password',{required:true})}
                                    className={"form-control"} 
                                    // className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                            <div className="form-group">
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                <input
                                    name="confirmPwd"
                                    type="password"
                                    placeholder="Confirm Password"
                                    {...register('confirmPwd')}
                                    className={"form-control"} 
                                    // className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                            </div>
                            <div className="mt-3 proceed-button">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
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
  )
}

export default ConfirmPassword