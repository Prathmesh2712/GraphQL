import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GET_EMAIL, SHARE_BLOG_MUTATION } from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'

export default function ShareYourBlog() {
  let { id } = useParams()
  id = parseInt(id, 10)
  const [email, setEmail] = useState('')
  const [allemail, setAllEmail] = useState([])
  const [getAllEmail, { loading, error }] = useMutation(GET_EMAIL)
  const [sharedBlog, { loading1, error1 }] = useMutation(SHARE_BLOG_MUTATION)

  console.log(email)
  const authorization = sessionStorage.getItem('token')
  const loadBlog = async () => {
    const result = await getAllEmail()
    console.log('all blogs are::', result)
    setAllEmail(result.data.getEmail.data)
  }

  console.log('all email', allemail)

  useEffect(() => {
    loadBlog()
  }, [])
  const onShared = async (blog_id, email) => {
    console.log(blog_id, email)
    const result = await sharedBlog({
      variables: { blog_id, email, authorization },
    })
    console.log(result.data.shareBlog.status)
    setEmail(result)
    if (result.data.shareBlog.status == 'success') {
      toast.success('succesfully shared')
    } else {
      toast.error(result['error'])
    }
  }
  return (
    <div>
      <NavBar />
      <div>
        <div className='mb-3'>
          <div style={{ display: 'block', color: 'black' }}>
            {allemail.map((mail) => {
              return (
                <div className='container mt-4'>
                  <div className='container'>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '450px' }}>{mail}</div>
                      <button
                        style={{ marginLeft: '530px' }}
                        onClick={() => {
                          onShared(id, mail)
                        }}
                        className='btn btn-danger btn-sm'
                      >
                        Share Blog
                      </button>
                    </div>
                    <hr />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
