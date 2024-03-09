import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UPDATE_BLOG } from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'

function UpdateBlog() {
  let { id } = useParams()
  id = parseInt(id, 10)
  const [blog, setBlog] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [updateblog, { loading, error }] = useMutation(UPDATE_BLOG)

  const navigate = useNavigate()

  console.log('type of id::', typeof id)
  const onSave = async () => {
    const result = await updateblog({
      variables: { id, title, content, category },
    })
    navigate('/home')
    // if (result['status'] === 'success') {
    //   setBlog(result.data)
    //   toast.success('Successfully updated a note')
    //   navigate('/home')
    // } else {
    //   toast.error(result['error'])
    // }
  }
  const handleDropdownItemClick = (category) => {
    setCategory(category)
  }

  const onCancel = () => {
    setTitle('')
    setCategory('')
    setContent('')
    navigate('/home')
  }

  return (
    <>
      <NavBar />
      <h1 className='header'>Add Blog</h1>

      <div className='row'>
        <div className='col-3'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Content</label>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                className='form-control'
                rows='5'
              >
                {}
              </textarea>
            </div>
            <div className='mb-3'>
              <div className='dropdown'>
                <label htmlFor=''>category : </label>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuLink'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{ marginLeft: '20px' }}
                >
                  {category}
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
                      onClick={() => handleDropdownItemClick('Astronomy')}
                    >
                      Astronomy
                    </button>
                  </li>
                </ul>
              </div>
              {/* <label htmlFor=''>category</label> */}
              {/* <input
                onChange={(e) => setCategory(e.target.value)}
                type='date'
                className='form-control'
              /> */}
            </div>
            <div className='mb-3'>
              <button onClick={onSave} className='btn btn-success  ms-10'>
                Update
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
    </>
  )
}

export default UpdateBlog
