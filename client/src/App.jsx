import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoutes from './components/PrivateRoutes'
import Home from './pages/Home'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App