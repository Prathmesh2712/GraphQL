import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  DELETE_BLOG,
  GET_MY_BLOG,
  SET_BLOG_PRIVATE,
  SET_BLOG_PUBLIC,
} from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'
import './allcss.css'

function MyBlog() {
  const categoryImages = {
    finance:
      'https://i.pinimg.com/474x/4e/e8/de/4ee8de1944a5f1f7daf247a292319f76.jpg',
    health:
      'https://i.pinimg.com/474x/0b/47/e7/0b47e7b506c662419f8a080167337c4b.jpg',
    food: 'https://i.pinimg.com/474x/07/0f/55/070f552efebe50a4d028f32367d1adde.jpg',
    tradition:
      'https://i.pinimg.com/474x/ac/34/a8/ac34a8c4b45b2df3e28fc04b66865140.jpg',
    education:
      'https://i.pinimg.com/474x/ec/07/f2/ec07f22e5220f62b08776cdc45f1cbfc.jpg',
    technology:
      'https://i.pinimg.com/474x/30/20/4f/30204f90f82fa641b62fa73ab094b548.jpg',
    // Add more categories and their corresponding image URLs here
    environment:
      'https://i.pinimg.com/474x/27/62/8e/27628eb26e7e3509341a71695358d31b.jpg',
    astronomy:
      'https://i.pinimg.com/474x/78/46/cb/7846cbfd11f0300220724afe5ce22511.jpg',
    business:
      'https://i.pinimg.com/474x/08/38/d0/0838d02c62ade208299f6e2c6e5414bf.jpg',
    career:
      'https://i.pinimg.com/474x/1f/fa/a3/1ffaa33b2cdc7b55bd6fbaaa7b52766e.jpg',
  }

  const [blogs, setBlog] = useState([])
  const [getMyBlog, { loading, error }] = useMutation(GET_MY_BLOG)

  const [getPublicBlog, { loading1, error1 }] = useMutation(SET_BLOG_PUBLIC)
  const [getPrivateBlog, { loading2, error2 }] = useMutation(SET_BLOG_PRIVATE)
  const [deleteblog, { loading3, error3 }] = useMutation(DELETE_BLOG)

  const navigate = useNavigate()

  const authorization = sessionStorage.getItem('token')
  const loadBlog = async () => {
    const result = await getMyBlog({
      variables: { authorization },
    })

    if (result.data.getMyblog.status == 'success') {
      setBlog(result.data.getMyblog.data)
    } else {
      toast.error(result['error'])
    }
  }
  console.log('blog is::', blogs)

  const onMarkPublicBlog = async (id) => {
    console.log('id of blog is ::', id)
    const result = await getPublicBlog({
      variables: { id, authorization },
    })
    loadBlog()
  }

  const onMarkPrivateBlog = async (id) => {
    console.log('id of blog is ::', id)
    const result = await getPrivateBlog({
      variables: { id, authorization },
    })
    loadBlog()
  }

  const onDeleteBlog = async (id) => {
    console.log('id of blog is ::', id)
    const result = await deleteblog({
      variables: { id, authorization },
    })
    loadBlog()
    console.log('delete blog result', result)
  }

  useEffect(() => {
    loadBlog()
  }, [])

  return (
    <>
      <NavBar />
      <br />
      <div className='container'>
        {blogs.length == 0 && (
          <h3 className='header'>
            There are no Blogs added by you. Please go to "Add Blog" page to add
            a Blog
          </h3>
        )}

        <div className='row'>
          {blogs.map((blog, index) =>
            index % 2 == 0 ? (
              <div key={index}>
                <div class='row mb-2'>
                  <div class='col-md-2' />
                  <div class='col-md-10'>
                    <div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                      <div
                        class='col p-4 d-flex flex-column position-static'
                        style={{ alignItems: 'start' }}
                      >
                        <strong class='d-inline-block mb-2 text-primary-emphasis'>
                          Category : {blog.category}
                        </strong>
                        <hr />
                        <h3 class='mb-0'>{blog.title}</h3>
                        <br />

                        <p class='card-text mb-auto'>{blog.createdTimestamp}</p>
                        <div style={{ display: 'flex' }}>
                          {blog['isPublic'] == 0 && (
                            <button
                              onClick={() => {
                                onMarkPublicBlog(blog['id'])
                              }}
                              className='btn btn-success btn-sm'
                              style={{ margin: '0px' }}
                            >
                              Mark Public
                            </button>
                          )}
                          {blog['isPublic'] == 1 && (
                            <button
                              onClick={() => {
                                onMarkPrivateBlog(blog['id'])
                              }}
                              className='btn btn-warning btn-sm ms-2'
                            >
                              Mark Private
                            </button>
                          )}
                          <button
                            style={{ marginLeft: '10px' }}
                            onClick={() => {
                              onDeleteBlog(blog['id'])
                            }}
                            className='btn btn-danger btn-sm'
                          >
                            Delete
                          </button>

                          <Link
                            to={`/updateBlog/${blog.id}`}
                            style={{ marginLeft: '10px', textAlign: 'center' }}
                            className='btn btn-secondary btn-sm'
                          >
                            Update
                          </Link>
                          <Link
                            style={{ marginLeft: '10px' }}
                            className=''
                            to={`/viewBlog/${blog.id}`}
                          >
                            Continue reading
                          </Link>
                        </div>
                      </div>
                      <div class='col-auto d-none d-lg-block'>
                        <img
                          className='bd-placeholder-img'
                          width='350'
                          height='250'
                          src={categoryImages[blog.category.toLowerCase()]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index}>
                <div class='row mb-2'>
                  <div class='col-md-10'>
                    <div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                      <div class='col-auto d-none d-lg-block'>
                        <img
                          className='bd-placeholder-img'
                          width='350'
                          height='250'
                          src={categoryImages[blog.category.toLowerCase()]}
                        />
                      </div>
                      <div
                        style={{ textAlign: 'end', alignItems: 'end' }}
                        class='col p-4 d-flex flex-column position-static'
                      >
                        <strong class='d-inline-block mb-2 text-primary-emphasis'>
                          Category : {blog.category}
                        </strong>
                        <hr />
                        <h3 class='mb-0'>{blog.title}</h3>
                        <br />

                        <p class='card-text mb-auto'>{blog.createdTimestamp}</p>
                        <div style={{ display: 'flex' }}>
                          {blog['isPublic'] == 0 && (
                            <button
                              onClick={() => {
                                onMarkPublicBlog(blog['id'])
                              }}
                              className='btn btn-success btn-sm'
                            >
                              Mark Public
                            </button>
                          )}
                          {blog['isPublic'] == 1 && (
                            <button
                              onClick={() => {
                                onMarkPrivateBlog(blog.id)
                              }}
                              className='btn btn-warning btn-sm ms-2'
                            >
                              Mark Private
                            </button>
                          )}
                          <button
                            style={{ marginLeft: '10px' }}
                            onClick={() => {
                              onDeleteBlog(blog['id'])
                            }}
                            className='btn btn-danger btn-sm'
                          >
                            Delete
                          </button>

                          <Link
                            to={`/updateBlog/${blog.id}`}
                            style={{ marginLeft: '10px', textAlign: 'center' }}
                            className='btn btn-secondary btn-sm'
                          >
                            Update
                          </Link>
                          <Link
                            style={{ marginLeft: '10px' }}
                            className=''
                            to={`/viewBlog/${blog.id}`}
                          >
                            Continue reading
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default MyBlog
