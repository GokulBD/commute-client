import React from 'react'
import{BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import SignUp from './signup'
import LoginPage from './loginPage'
import { Error }  from './Error'
import Navbar from './navbar.js'
import Discussion from './discussion'
import Comment from './comment.js'

const LoginRouter = () => {
  return (
      <Router>
              <Navbar/>
              <Routes>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/' element={<Comment/>}/>
              <Route path='/discussion' element={<Discussion/>}/>
              <Route path='*' element={<Error/>}/>
              </Routes>
      </Router>

          

  )
}

export default LoginRouter;