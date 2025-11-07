import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

import Home from './pages/Home'
import AddContact from './pages/AddContact'
import { useDispatch,  } from 'react-redux'
import { getUserProfile } from './slices/userSlice'
import PrivateRoutes from './components/PrivateRoutes';
const App = () => {

const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getUserProfile())
},[dispatch])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      {/* <Route path='/' element={user ?<Home/> : <Login/>}/> */}
      {/* <Route path='/add-contact' element={user ? <AddContact/> : <Login/>}/> */}
      <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>}/>
      <Route path='/add-contact' element={<PrivateRoutes><AddContact/></PrivateRoutes>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App