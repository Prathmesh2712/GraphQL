import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ADD_BLOG = gql`
  mutation AddingBlog(
    $title: String!
    $content: String!
    $category: String!
    $authorization: String!
  ) {
    addingBlog(
      title: $title
      content: $content
      category: $category
      authorization: $authorization
    ) {
      status
      datas {
        id
        title
        content
        category
        userId
        createdTimestamp
      }
    }
  }
`

const AddBlogForm = () => {
  const [title, setTitle] = useState('')

  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const navigate = useNavigate()
  const [addBlog, { loading, error }] = useMutation(ADD_BLOG)

  const handleDropdownItemClick = (category) => {
    setCategory(category)
  }

  const onCancel = () => {
    setTitle('')
    setCategory('')
    setContent('')
    navigate('/home')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const authorization = sessionStorage.getItem('token')
      const { data } = await addBlog({
        variables: { title, content, category, authorization },
      })
      console.log('Blog added successfully:', data)
      // You can add further actions like redirecting to another page or showing a success message
    } catch (err) {
      console.error('Error adding blog:', err)
    }
  }

  return (
    <div>
      <NavBar />
      <h1 className='header'>Add Your Own Blog</h1>
      <br />
      <div className='row'>
        <div className='col-3'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <img
                width={'40px'}
                height={'40px'}
                src='https://cdn-icons-png.flaticon.com/128/2333/2333296.png'
                alt=''
              />
              <label> Title : </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <img
                className='mb-2'
                width={'20px'}
                height={'20px'}
                src='https://cdn-icons-png.flaticon.com/128/8980/8980709.png'
                alt=''
              />
              <label htmlFor='' style={{ marginLeft: '5px' }}>
                {' '}
                Content :{' '}
              </label>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                className='form-control'
                rows='5'
              ></textarea>
            </div>
            <div className='mb-3'>
              <div className='dropdown'>
                <img
                  className='m-1'
                  width={'20px'}
                  height={'20px'}
                  src='https://cdn-icons-png.flaticon.com/128/4394/4394562.png'
                  alt=''
                />
                <label htmlFor=''>category : </label>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuLink'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{ marginLeft: '20px' }}
                >
                  {category ? category : 'Select category'}
                </button>

                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuLink'
                >
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Education')}
                    >
                      Education
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Technology')}
                    >
                      Technology
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Finance')}
                    >
                      Finance
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Environment')}
                    >
                      Environment
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Health')}
                    >
                      Health
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Career')}
                    >
                      Career
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Business')}
                    >
                      Business
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Food')}
                    >
                      Food
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Tradition')}
                    >
                      Tradition
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleDropdownItemClick('Astronomy')}
                    >
                      Astronomy
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className='mb-3'>
              <button onClick={handleSubmit} className='btn btn-success  ms-10'>
                Create
              </button>
              <button
                onClick={onCancel}
                className='btn btn-danger '
                style={{ marginLeft: '10px' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  )
}

export default AddBlogForm
