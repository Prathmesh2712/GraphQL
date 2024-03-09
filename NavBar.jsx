import { Link, useNavigate } from 'react-router-dom'
import './Card.css'
function NavBar() {
  const navigate = useNavigate()

  const onLogout = () => {
    // clear the token from session storage
    sessionStorage.removeItem('token')

    // to the login page
    navigate('/')
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme='dark'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-4 ml-30 mb-lg-0'>
            <li className='nav-item'>
              <img
                src='https://cdn-icons-png.flaticon.com/128/3938/3938092.png'
                width={'40px'}
                height={'40px'}
                alt=''
              />
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/home'>
                Blog Imagica
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/publicBlog'>
                Public Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/sharedBlog'>
                Shared Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/addBlog'>
                Add Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/myBlog'>
                My Blog
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/searchBlog'>
                Search Blog
              </Link>
            </li>

            <li className='nav-item'>
              <button className='nav-link' onClick={onLogout}>
                Logout
              </button>
            </li>
            <li>
              <Link className='profile' to={'/profile'}>
                <img
                  style={{ height: '40px', width: '40px' }}
                  src='https://cdn-icons-png.flaticon.com/128/1144/1144709.png'
                  alt=''
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
