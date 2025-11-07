import React, { useState } from "react";
import DashboardLayouts from "../components/DashboardLayouts";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../slices/userSlice";
import { addContact } from '../slices/contactSlice';
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [place,setPlace]=useState('')
  const {loading,error}=useSelector(state=>state.contact)
  const dispatch=useDispatch()
const navigate=useNavigate()
  const handleSubmit=async (e) => {
    e.preventDefault()
    dispatch(clearError())
    await dispatch(addContact({name,email,phone,place})).unwrap()
 navigate('/')
  }
  return <DashboardLayouts activeMenu={'Add Contact'}>
    
    <div className="">
      <h1 className="font-bold text-center">Add contact</h1>
      <div className="mt-4 shadow-md max-w-[80%] bg-white p-3 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text"placeholder="Enter name" className="px-4 py-2 rounded-md outline-none bg-slate-200 text-slate-600 w-full" value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="text"placeholder="Enter email" className="px-4 py-2 rounded-md outline-none bg-slate-200 text-slate-600 w-full" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input type="text"placeholder="Enter phone" className="px-4 py-2 rounded-md outline-none bg-slate-200 text-slate-600 w-full" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
          </div>
          <div className="mb-4">
            <label htmlFor="place" className="block mb-2">Place</label>
            <input type="text"placeholder="Enter place" className="px-4 py-2 rounded-md outline-none bg-slate-200 text-slate-600 w-full" value={place} onChange={(e)=>setPlace(e.target.value)} />
          </div>
          {error && <p className="text-red-600 p-2 text-sm">Error: {error.message}</p>}
          <button type="submit" className=" px-4 py-2 rounded-md bg-teal-700 hover:bg-teal-800 text-slate-50 w-full sm:w-36 ">{loading ? 'adding...':'Add Contact'}</button>
        </form>
      </div>
    </div>
    </DashboardLayouts>;
};

export default AddContact;
