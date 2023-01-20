import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
export default function ConfirmPassword() {
  const formSchema = Yup.object().shape({
    Current : Yup.string()
      .required('Password is mendatory')
      .min(8, 'Password must be at 8 char long'),
    password: Yup.string()
      .required('Password is mendatory')
      .min(8, 'Password must be at 8 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }
  return (
    <div className=" mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Current Password</label>
          <input
            name="Current Password"
            type="password"
            placeholder="********"
            {...register('Current Password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label>Enter New Password</label>
          <input
            name="password"
            type="password"
            placeholder="********"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            name="confirmPwd"
            type="password"
            placeholder="********"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        </div>
        <div className="mt-3 proceed-button">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}