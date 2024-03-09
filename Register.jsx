import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { REGISTER_USER } from '../GraphQL/Mutation'

function Register() {
  const [fullName, setFullName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [registerUser] = useMutation(REGISTER_USER)

  const handleRegister = async () => {
    if (fullName.length === 0) {
      toast.warn('Please enter full name')
    } else if (phoneNo.length === 0) {
      toast.warn('Please enter phone number')
    } else if (email.length === 0) {
      toast.warn('Please enter email')
    } else if (password.length === 0) {
      toast.warn('Please enter password')
    } else {
      try {
        const { data } = await registerUser({
          variables: { email, password, fullName, phoneNo },
        })

        if (data && data.registerUser.status === 'success') {
          toast.success('Successfully registered your account')
          navigate('/')
        } else {
          toast.error('Registration failed. Please try again.')
        }
      } catch (error) {
        console.error('Registration failed:', error.message)
        toast.error('Registration failed. Please try again later.')
      }
    }
  }

  return (
    <>
      <h1 className='header'>Register</h1>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Full Name</label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Phone Number</label>
              <input
                onChange={(e) => setPhoneNo(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
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
                Already have an account? Login <Link to='/login'>here</Link>
              </div>
              <button onClick={handleRegister} className='btn btn-primary'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Register
