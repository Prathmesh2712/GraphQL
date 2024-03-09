import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LOGIN_USER_MUTATION } from '../GraphQL/Mutation'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER_MUTATION)

  const onLogin = async () => {
    try {
      if (email.length === 0) {
        toast.warn('Please Enter email.')
      } else if (password.length === 0) {
        toast.warn('Please enter password.')
      } else {
        const { data } = await loginUser({ variables: { email, password } })
        if (data && data.loginUser.token) {
          //localStorage.setItem('token', data.loginUser.token)
          sessionStorage['token'] = data.loginUser.token
          navigate('/home')
        } else {
          console.error('Invalid credentials')
        }
      }
    } catch (error) {
      console.error('Login failed:', error.message)
    }
  }

  return (
    <>
      <h1 className='header'>Login</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div className='mb-2'>
                Don't have account? Register <Link to='/register'>Sign Up</Link>
              </div>
              <button onClick={onLogin} className='btn btn-primary'>
                Login
              </button>{' '}
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login
