import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

import Home from './pages/Home'
import AddContact from './pages/AddContact'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from './slices/userSlice'
const App = () => {
  const {user}=useSelector(state=>state.user)
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getUserProfile())
},[dispatch,user])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/' element={user ?<Home/> : <Login/>}/>
      <Route path='/add-contact' element={user ? <AddContact/> : <Login/>}/>
      {/* <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App