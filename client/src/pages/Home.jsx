import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardLayouts from "../components/DashboardLayouts";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts,deleteContact } from '../slices/contactSlice';
import TableCard from "../components/TableCard";
import { Link, useNavigate } from "react-router-dom";
import { MdAdd } from  'react-icons/md'
const Home = () => {
  const {user}=useSelector(state=>state.user)
  const {contacts,loading,error}=useSelector(state=>state.contact)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    if(user){
      dispatch(getAllContacts())
     
    }
  },[dispatch, user])
  //  console.log(contacts)
  const handleDelete=(id)=>{
     if(window.confirm('Are you sure you want to delete this ?')){
     dispatch(deleteContact(id))
      dispatch(getAllContacts());
   }
   
  }
  const handleEdit=()=>{
  dispatch(getAllContacts());
  }
  if(loading){
    return <div className="p-4 text-slate-500">Loading ....</div>
  }
  if(error){
    return <div className="p-2 text-red-500">{error.message}</div>
  }
  if(!user){
    navigate('/login')
    return;
  }
  return (
    <DashboardLayouts activeMenu={"Contacts"}>
   
     {contacts.length=== 0 && (<div className="flex items-center justify-center h-96 flex-col gap-4 ">
      <p>No Contacts added yet!</p>
      <Link to={'/add-contact'} className="px-4 py-2 sm:w-48 mx-auto hover:bg-teal-800 text-center rounded-md bg-teal-700 text-slate-50">Add Contact</Link>
     </div>)}
     <h2 className="text-center font-bold py-4">Table of  Contacts</h2>
     <div className=" max-w-[96%]  overflow-x-scroll">
      <table className="table-auto ">
        <thead>
          <tr className="flex  items-center  bg-slate-500 text-slate-50">
            <th className="w-[120px] lg:w-64 md:w-40 px-2 whitespace-nowrap font-semibold text-left border-r-2 py-2">Name</th> 
            <th className="w-[120px] lg:w-64 md:w-40 px-2 whitespace-nowrap font-semibold text-left border-r-2 py-2">Phone</th>
            <th className="w-40 lg:w-64  whitespace-nowrap font-semibold text-left border-r-2 py-2">Email</th>
           
            <th className="w-[120px] lg:w-64 md:w-40 px-2 whitespace-nowrap font-semibold text-left border-r-2 py-2">Place</th>
            <th className="w-[120px] lg:w-64 md:w-40 px-2 whitespace-nowrap font-semibold text-left border-r-2 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <TableCard key={contact._id} contact={contact}
            onEdit={handleEdit}
            onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
     </div>
     <Link to={'/add-contact'}>
     <button className="p-2 bg-blue-500 hover:bg-blue-700 rounded-full text-slate-50 font-bold bottom-4 right-4 absolute sm:hidden"><MdAdd size={40}/></button></Link>
    </DashboardLayouts>
  );
};

export default Home;
