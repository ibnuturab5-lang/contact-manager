import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../slices/userSlice'
import { MdClose, MdMenu } from 'react-icons/md'
import { SIDEBAR_DATA } from '../utils/data'
const Navbar = ({activeMenu}) => {
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const [open,setOpen]=useState(false)
  const {user}=useSelector(state=>state.user)
  const handleLogout=async()=>{
    await dispatch(logoutUser()).unwrap()
    navigate('/login')
  }
   const handleRoute = (route) => {
      if (route === "/login") {
        handleLogout();
      }
      navigate(route);
    };
  
  
  return (<>
    <div className='fixed w-full z-50 flex items-center justify-between bg-teal-700 p-4 shadow-lg  '>
      <div className='flex gap-2 items-center text-slate-50 cursor-pointer'>
       {open ? (<MdClose size={30} onClick={()=>setOpen(!open)}/>):(<MdMenu size={30} onClick={()=>setOpen(!open)}/>)} 
         <Link to={'/'}><h1 className='font-bold text-xl text-slate-200 '>Contact Manager</h1></Link>
      </div>
       
      <div className='flex items-center gap-3'>
       {user && <>
       <div className='h-10 w-10 rounded-full bg-slate-800 border-1 text-slate-300 capitalize sm:hidden flex items-center justify-center font-bold'>{user.name[0]}</div>
        <button className='px-3 py-1 rounded-md bg-slate-700 text-slate-300 hover:bg-slate-800 transition-colors ' onClick={handleLogout}>Logout</button></>
      }</div>
    </div>
    {open &&  <div className='flex '>
        <div className='w-52  fixed z-50 bg-slate-300  top-16 pt-10  h-screen'>
          <ul className="space-y-6 px-3  mt-10">
                {SIDEBAR_DATA.map((item) => (
                  <li
                    key={item.id}
                    className={` flex gap-3 items-center font-bold px-4 py-2 rounded-md  ${
                      activeMenu == item.label
                        ? " bg-teal-700 hover:bg-teal-800 transition-colors text-slate-50"
                        : " hover:bg-slate-200"
                    } `}
                    onClick={()=>handleRoute(item.path)}
                  >
                    <item.icon size={30} /> {item.label}
                  </li>
                ))}
              </ul>
        </div>
        <div onClick={()=>setOpen(false)} className='flex-1 z-20 bg-slate-700 backdrop-blur-md bg-opacity-70 h-screen '></div>
      </div>  } </>
  )
}

export default Navbar