import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../slices/userSlice'

const Navbar = () => {
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const handleLogout=async()=>{
    await dispatch(logoutUser()).unwrap()
    navigate('/login')
  }
  const {user}=useSelector(state=>state.user)
  return (
    <div className='flex items-center justify-between bg-teal-700 p-3 border-b shadow-lg '>
      <Link to={'/'}><h1 className='font-bold text-xl text-slate-200 '>Contact Manager</h1></Link>
      <div className='flex items-center gap-3'>
       {user && <>
       <div className='h-10 w-10 rounded-full bg-slate-800 border-1 text-slate-300 capitalize sm:hidden flex items-center justify-center font-bold'>{user.name[0]}</div>
        <button className='px-3 py-1 rounded-md bg-slate-700 text-slate-300 hover:bg-slate-800 transition-colors ' onClick={handleLogout}>Logout</button></>
      }</div>
    </div>
  )
}

export default Navbar