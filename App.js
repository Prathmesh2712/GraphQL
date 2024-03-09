import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddBlog from './pages/AddBlog'
import Home from './pages/Home.jsx'
import Login from './pages/Login1.jsx'
import MyBlog from './pages/MyBlog.jsx'
import PublicBlog from './pages/PublicBlog.jsx'
import Register from './pages/Register.jsx'
import SearchBlog from './pages/SearchBlog.jsx'
import ShareYourBlog from './pages/ShareYourBlog.jsx'
import SharedBlog from './pages/SharedBlog.jsx'
import UpdateBlog from './pages/UpdateBlog.jsx'
import ViewBlog from './pages/ViewBlog.jsx'
import Profile from './pages/Profile.jsx'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addBlog' element={<AddBlog />} />
        <Route path='/home' element={<Home />} />
        <Route path='/myBlog' element={<MyBlog />} />
        <Route path='/updateBlog/:id' element={<UpdateBlog />} />
        <Route path='/viewBlog/:id' element={<ViewBlog />} />
        <Route path='/publicBlog' element={<PublicBlog />} />
        <Route path='/searchBlog' element={<SearchBlog />} />
        <Route path='/shareyourblog/:id' element={<ShareYourBlog />} />
        <Route path='/sharedBlog' element={<SharedBlog />} />
         <Route path='/profile' element={<Profile />} /> 
      </Routes>
    </div>
  )
}

export default App
