// ViewBlog component code (ViewBlog.js)
import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GET_BLOG_BY_ID } from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'
import './allcss.css'

function ViewBlog() {
  let { id } = useParams()
  id = parseInt(id, 10)

  console.log(id)
  const [blog, setBlog] = useState(null)
  const [viewblog, { loading, error }] = useMutation(GET_BLOG_BY_ID)

  const loadBlog = async () => {
    const result = await viewblog({
      variables: { id },
    })
    setBlog(result.data.getBlogById.data)
    console.log(result)
  }

  console.log('Blog', blog)

  useEffect(() => {
    loadBlog()
  }, [])

  if (!blog) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <NavBar />
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col-2'
            style={{
              width: '32%',
              backgroundColor: 'pink',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Train</h1>
            <h1>of</h1>
            <h1>Thoughts</h1>
          </div>
          <div className='col-7' style={{ width: '68%', padding: 0 }}>
            <div class='bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
              <div class=''>
                <h2 class='display-5' style={{ fontWeight: 'bold' }}>
                  {blog[0]['title']}
                </h2>
                <p class='lead'>{blog[0].category}</p>
              </div>
              <div
                class='bg-dark shadow-sm mx-auto'
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '21px 21px 0 0',
                  objectFit: 'cover',
                  color: 'white',
                  padding: '20px',
                  overflow: 'scroll',
                  scrollbarWidth: 'none',
                }}
              >
                <p
                  style={{
                    margin: '40px',
                    textAlign: 'justify',
                  }}
                >
                  {blog[0]['content']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBlog
