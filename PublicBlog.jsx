import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GET_PUBLIC_BLOGS } from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'

function PublicBlog() {
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
  const [publicblog, { loading, error }] = useMutation(GET_PUBLIC_BLOGS)
  const loadBlog = async () => {
    const result = await publicblog()
    console.log(result)
    if (result.data.getPublicBlogs['status'] == 'success') {
      setBlog(result['data'].getPublicBlogs.data)
    } else {
      toast.error(result['error'])
    }
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
          <h3 className='header'>There are no Blogs public blogs.</h3>
        )}
        {/* {blogs.length > 0 && (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Content</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{blog['title']}</td>
                    <td>{blog['content']}</td>
                    <td>{blog['category']}</td>
                    <td></td>
                    <td>
                      <Link to={`/viewBlog/${blog.id}`}>View Blog</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )} */}

        {/* <div class='row mb-2'>
          {blogs.map((blog, index) => (
            <div class='col-ml-6'>
              <div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                <div class='col p-4 d-flex flex-column position-static'>
                  <strong class='d-inline-block mb-2 text-primary-emphasis'>
                    category : {blog.category}
                  </strong>
                  <hr />
                  <h3 class='mb-0'>{blog.title}</h3>
                  <p></p>
                  <div class='mb-1 text-body-secondary'>
                    {blog.createdTimestamp}
                  </div>
                  <br />
                  <a
                    href='#'
                    class='icon-link gap-1 icon-link-hover stretched-link'
                  >
                    Continue reading
                  </a>
                </div>
                <div class='col-auto d-none d-lg-block'>
                  <img
                    class='bd-placeholder-img'
                    width='400'
                    height='250'
                    src='https://i.pinimg.com/474x/ab/f0/4a/abf04a772c9e576e6a3ea6caeb10892d.jpg'
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}

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
                          <Link
                            className='btn btn-danger  btn-sm'
                            to={`/ShareYourBlog/${blog.id}`}
                          >
                            Share Blog
                          </Link>
                          <Link
                            className=''
                            to={`/viewBlog/${blog.id}`}
                            style={{ marginLeft: '10px' }}
                          >
                            Continue reading
                          </Link>
                        </div>
                      </div>
                      <div class='col-auto d-none d-lg-block'>
                        <img
                          className='bd-placeholder-img'
                          width='400'
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
                          width='400'
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
                          <Link
                            className='btn btn-danger  btn-sm'
                            to={`/ShareYourBlog/${blog.id}`}
                          >
                            Share Blog
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
      </div>
      <ToastContainer />
    </>
  )
}

export default PublicBlog
