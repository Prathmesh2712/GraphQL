// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import NavBar from '../components/NavBar'
// import { getAllBlog, searchBlog } from '../services/blog'

// export default function SearchBlog() {
//   const [blogs, setBlog] = useState([])
//   const [toggle, setToggle] = useState(false)
//   const [all, setAll] = useState([])
//   const [text, setSearchedName] = useState('')

//   const loadBlog = async () => {
//     const result = await getAllBlog()
//     if (result['status'] == 'success') {
//       setAll(result['data'])
//     } else {
//       toast.error(result['error'])
//     }
//   }

//   async function onSearch() {
//     try {
//       const result = await searchBlog(text)
//       if (result['status'] == 'success') {
//         setBlog(result['data'])
//       } else {
//         toast.error(result['error'])
//       }
//     } catch (error) {
//       console.error('Error searching blog:', error)
//     }
//   }

//   useEffect(() => {
//     loadBlog()
//   }, [])

//   return (
//     <div>
//       <NavBar />

//       <form className='d-flex' role='search'>
//         <input
//           className='form-control me-2 mt-4 mr-5 ml-5'
//           type='search'
//           placeholder='Search'
//           aria-label='Search'
//           value={text}
//           onChange={(e) => {
//             setSearchedName(e.target.value)
//             console.log('text', text)
//             if (text === '') {
//               setToggle(false)
//             }
//             setToggle(true)
//           }}
//         />

//         <button
//           className='btn btn-outline-success mt-4 mr-5 ml-5'
//           type='submit'
//           onClick={(e) => {
//             e.preventDefault()
//             onSearch()
//           }}
//         >
//           Search
//         </button>
//       </form>

//       {blogs.length === 0 && (
//         <h3 className='header'>There are no Blogs for given search</h3>
//       )}

//       {blogs.length > 0 && (
//         <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th>No</th>
//               <th>Title</th>
//               <th>Content</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {blogs.map((blog, index) => {
//               return (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{blog['title']}</td>
//                   <td>{blog['content']}</td>
//                   <td>{blog['category']}</td>
//                   <td>
//                     <Link
//                       to={`/shareyourblog/${blog.id}`}
//                       className='btn btn-danger btn-sm'
//                     >
//                       Share Blog
//                     </Link>
//                   </td>
//                   <td>
//                     <Link to={`/viewBlog/${blog.id}`}>View Blog</Link>
//                   </td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       )}

//       {/* <div className='row'>
//         {blogs.map((blog, index) => (
//           <div key={index} className='col-3 mb-5'>
//             <div className='d-block'>
//               <div className='card' style={{ width: '18rem' }}>
//                 <img
//                   src='https://media.istockphoto.com/id/1440246683/photo/blog-word-on-wooden-cube-blocks-on-gray-background.jpg?s=1024x1024&w=is&k=20&c=Em6bFzP96aP1XSju3GsOYLuWPkr3y6sYfUQbPwxXKxU='
//                   class='card-img-top'
//                   alt='...'
//                 />
//                 <div class='card-body'>
//                   <h5 style={{ textAlign: 'center' }} class='card-title'>
//                     {blog.title}
//                   </h5>

//                   <Link
//                     style={{ marginLeft: '70px' }}
//                     className='btn btn-success'
//                     to={`/viewBlog/${blog.id}`}
//                   >
//                     View Blog
//                   </Link>
//                   <p></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}

//       {all.length > 0 && toggle === false && (
//         <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th>No</th>
//               <th>Title</th>
//               <th>Content</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {all.map((blog, index) => {
//               return (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{blog['title']}</td>
//                   <td>{blog['content']}</td>
//                   <td>{blog['category']}</td>
//                   <td>
//                     <Link
//                       to={`/shareyourblog/${blog.id}`}
//                       className='btn btn-danger btn-sm'
//                     >
//                       Share Blog
//                     </Link>
//                   </td>
//                   <td>
//                     <Link to={`/viewBlog/${blog.id}`}>View Blog</Link>
//                   </td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   )
// }

import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_ALL_BLOGS, SEARCH_BLOG } from '../GraphQL/Mutation'
import NavBar from '../components/NavBar'

export default function SearchBlog() {
  const [blogs, setBlog] = useState([])
  const [all, setAll] = useState([])
  const [text, setSearchedName] = useState('')
  const [searchblog, { loading, error }] = useMutation(SEARCH_BLOG)
  const [getAllBlog, { loading1, error1 }] = useMutation(GET_ALL_BLOGS)

  const loadBlog = async () => {
    const result = await getAllBlog()
    console.log('all blogs are::', result)
    setAll(result.data.getAllBlogs.data)
    // if (result['status'] === 'success') {
    //   setAll(result['data'])
    // } else {
    //   toast.error(result['error'])
    // }
  }

  async function onSearch() {
    try {
      const result = await searchblog({
        variables: { text },
      })
      setBlog(result['data'].searchBlog.data)
    } catch (error) {
      console.error('Error searching blog:', error)
    }
  }

  useEffect(() => {
    loadBlog()
  }, [])

  useEffect(() => {
    if (text === '') {
      setBlog([])
    }
  }, [text])

  return (
    <>
      <NavBar />
      <div className='container'>
        <form className='d-flex' role='search'>
          <input
            className='form-control me-2 mt-4 mr-5 ml-5'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={text}
            onChange={(e) => {
              setSearchedName(e.target.value)
            }}
          />

          <button
            className='btn btn-outline-success mt-4 mr-5 ml-5'
            type='submit'
            onClick={(e) => {
              e.preventDefault()
              onSearch()
            }}
          >
            Search
          </button>
        </form>

        {/* {blogs.length === 0 && (
        <h3 className='header'>There are no Blogs for given search</h3>
      )} */}

        {blogs.length > 0 && (
          <div>
            <br />
            <h4>Matched Blogs</h4>
            <table class='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th className='col-1'>No</th>
                  <th className='col-3'>Title</th>

                  <th className='col-1'>Category</th>
                  <th className='col-1'>Share</th>
                  <th className='col-1'>View</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{blog['title']}</td>
                      {/* <td>{blog['content']}</td> */}
                      <td>{blog['category']}</td>
                      <td>
                        <Link
                          to={`/shareyourblog/${blog.id}`}
                          className='btn btn-danger btn-sm'
                        >
                          Share Blog
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/viewBlog/${blog.id}`}
                          className='btn btn-warning btn-sm'
                        >
                          View Blog
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {all.length > 0 && (
          <div>
            <br />
            <h4>All Blogs</h4>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th className='col-1'>No</th>
                  <th className='col-3'>Title</th>

                  <th className='col-1'>Category</th>
                  <th className='col-1'>Share</th>
                  <th className='col-1'>View</th>
                </tr>
              </thead>
              <tbody>
                {all.map((blog, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{blog['title']}</td>
                      {/* <td>{blog['content']}</td> */}
                      <td>{blog['category']}</td>
                      <td>
                        <Link
                          to={`/shareyourblog/${blog.id}`}
                          className='btn btn-danger btn-sm'
                        >
                          Share Blog
                        </Link>
                      </td>
                      <td>
                        <Link
                          className='btn btn-warning btn-sm'
                          to={`/viewBlog/${blog.id}`}
                        >
                          View Blog
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
