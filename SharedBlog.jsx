import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VIEW_SHARED_BLOG_MUTATION } from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'
export default function SharedBlog() {
  const categoryImages = {
    Finance:
      'https://i.pinimg.com/474x/4e/e8/de/4ee8de1944a5f1f7daf247a292319f76.jpg',
    Health:
      'https://i.pinimg.com/474x/0b/47/e7/0b47e7b506c662419f8a080167337c4b.jpg',
    Food: 'https://i.pinimg.com/474x/07/0f/55/070f552efebe50a4d028f32367d1adde.jpg',
    Tradition:
      'https://i.pinimg.com/474x/ac/34/a8/ac34a8c4b45b2df3e28fc04b66865140.jpg',
    Education:
      'https://i.pinimg.com/474x/ec/07/f2/ec07f22e5220f62b08776cdc45f1cbfc.jpg',
    Technology:
      'https://i.pinimg.com/474x/30/20/4f/30204f90f82fa641b62fa73ab094b548.jpg',

    Environment:
      'https://i.pinimg.com/474x/27/62/8e/27628eb26e7e3509341a71695358d31b.jpg',
    Astronomy:
      'https://i.pinimg.com/474x/78/46/cb/7846cbfd11f0300220724afe5ce22511.jpg',
    Business:
      'https://i.pinimg.com/474x/08/38/d0/0838d02c62ade208299f6e2c6e5414bf.jpg',
    Career:
      'https://i.pinimg.com/474x/1f/fa/a3/1ffaa33b2cdc7b55bd6fbaaa7b52766e.jpg',
  }

  const [blogs, setBlog] = useState([])
  const [sharedblog, { loading, error }] = useMutation(
    VIEW_SHARED_BLOG_MUTATION
  )
  const authorization = sessionStorage.getItem('token')
  const loadBlog = async () => {
    const result = await sharedblog({
      variables: { authorization },
    })
    console.log('Result is:', result.data.viewSharedBlog.data)
    setBlog(result.data.viewSharedBlog.data)

    // if (result['status'] == 'success') {
    //   setBlog(result.data)
    // } else {
    //   toast.error(result['error'])
    // }
  }
  console.log('id::', blogs)

  useEffect(() => {
    loadBlog()
  }, [])

  return (
    <div>
      <NavBar />
      <br />
      <div className='container'>
        <div>
          {/* <div className='row'>
            {blogs.map((blog, index) =>
              index % 2 == 0 ? (
                <div key={index}>
                  <div class='row mb-2'>
                    <div class='col-md-2' />
                    <div class='col-md-10'>
                      <div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                        <div class='col p-4 d-flex flex-column position-static'>
                          <strong class='d-inline-block mb-2 text-primary-emphasis'>
                            {blog.category}
                          </strong>
                          <h3 class='mb-0'>{blog.title}</h3>

                          <p class='card-text mb-auto'>{blog.content}</p>
                          <Link
                            className='btn btn-success'
                            to={`/viewBlog/${blog.id}`}
                          >
                            Continue reading
                          </Link>
                        </div>
                        <div class='col-auto d-none d-lg-block'>
                          <img
                            className='bd-placeholder-img'
                            width='400'
                            height='250'
                            src='https://i.pinimg.com/474x/91/e2/99/91e2992774380a4a4cf89c9df4f8c591.jpg'
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
                          <svg
                            class='bd-placeholder-img'
                            width='400'
                            height='250'
                            xmlns='http://www.w3.org/2000/svg'
                            role='img'
                            aria-label='Placeholder: Thumbnail'
                            preserveAspectRatio='xMidYMid slice'
                            focusable='false'
                          >
                            <title>Placeholder</title>
                            <rect
                              width='100%'
                              height='100%'
                              fill='#55595c'
                            ></rect>
                            <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
                              Thumbnail
                            </text>
                          </svg>
                        </div>
                        <div class='col p-4 d-flex flex-column position-static'>
                          <strong class='d-inline-block mb-2 text-primary-emphasis'>
                            {blog.category}
                          </strong>
                          <h3 class='mb-0'>{blog.title}</h3>

                          <p class='card-text mb-auto'>{blog.content}</p>
                          <a
                            href='#'
                            class='icon-link gap-1 icon-link-hover stretched-link'
                          >
                            Continue reading
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
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
                          <h3 class='mb-0'>{blog.title}</h3>
                          <br />
                          <strong class='d-inline-block mb-2 text-primary-emphasis'>
                            Category : {blog.category}
                          </strong>

                          <p class='card-text mb-auto'>
                            {blog.createdTimestamp}
                          </p>

                          <p class='card-text mb-auto'>
                            Shared by : {blog.shared_by_user_email}
                          </p>
                          <br />
                          <div style={{ display: 'flex' }}>
                            <Link className='' to={`/viewBlog/${blog.blog_id}`}>
                              Continue reading
                            </Link>
                          </div>
                        </div>
                        <div class='col-auto d-none d-lg-block'>
                          <img
                            className='bd-placeholder-img'
                            width='400'
                            height='250'
                            src={categoryImages[blog.category]}
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
                            src={categoryImages[blog.category]}
                          />
                        </div>
                        <div
                          style={{ textAlign: 'end', alignItems: 'end' }}
                          class='col p-4 d-flex flex-column position-static'
                        >
                          <h3 class='mb-0'>{blog.title}</h3>
                          <br />
                          <strong class='d-inline-block mb-2 text-primary-emphasis'>
                            Category : {blog.category}
                          </strong>
                          <p class='card-text mb-auto'>
                            {blog.createdTimestamp}
                          </p>

                          <p class='card-text mb-auto'>
                            Shared by : {blog.shared_by_user_email}
                          </p>
                          <br />
                          <div style={{ display: 'flex' }}>
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
      </div>
    </div>
  )
}
