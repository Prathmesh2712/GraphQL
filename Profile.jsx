import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_USER_DETAILS } from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'

export default function Profile() {
  const [user, setUser] = useState([])
  const authorization = sessionStorage.getItem('token')
  const [getuser, { loading, error }] = useMutation(GET_USER_DETAILS)
  const loadBlog = async () => {
    const result = await getuser({
      variables: { authorization },
    })
    console.log(result)
    setUser(result.data.getUserDetails.data)
    console.log('result:', result)
  }

  useEffect(() => {
    loadBlog()
  }, [])

  return (
    <div>
      <NavBar />
      <br />
      <h1 className='header'>Profile</h1>
      <br />

      <div className='row'>
        <div className='container'>
          <div
            style={{
              textAlign: 'center',
              height: '250px',
              width: '500px',
              border: '1px solid black',
              borderRadius: '15px',
            }}
            className='container'
          >
            <div className='mb-3'>
              <label htmlFor=''>Full Name</label>
              <p>{user && user.length > 0 && user[0].fullName}</p>
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <p>{user && user.length > 0 && user[0].email}</p>
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Phone Number</label>
              <p>+91 {user && user.length > 0 && user[0].phoneNo}</p>
            </div>

            <div className='mb-3'>
              <Link to='/' className='btn btn-danger'>
                Logout
              </Link>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
