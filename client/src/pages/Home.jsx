import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardLayouts from "../components/DashboardLayouts";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts,deleteContact } from '../slices/contactSlice';
import TableCard from "../components/TableCard";
import { Link } from "react-router-dom";

const Home = () => {
  const {user}=useSelector(state=>state.user)
  const {contacts,loading,error}=useSelector(state=>state.contact)
  const dispatch=useDispatch()

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
  return (
    <DashboardLayouts activeMenu={"Contacts"}>
   
     {contacts.length=== 0 && (<div className="flex items-center justify-center h-96 flex-col gap-4 ">
      <p>No Contacts added yet!</p>
      <Link to={'/add-contact'} className="px-4 py-2 sm:w-48 mx-auto hover:bg-teal-800 text-center rounded-md bg-teal-700 text-slate-50">Add Contact</Link>
     </div>)}
     <div className="w-[80%]">
      <table className="overflow-x-auto ">
        <thead>
          <tr className="flex  items-center py-2 bg-slate-500 text-slate-50">
            <th className="w-24 whitespace-nowrap">Name</th> 
            <th className="w-24 whitespace-nowrap">Phone</th>
            <th className="w-40 whitespace-nowrap">Email</th>
           
            <th className="w-24 whitespace-nowrap">Place</th>
            <th className="w-24 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <TableCard key={contact._id} contact={contact}/>
          ))}
        </tbody>
      </table>
     </div>
    </DashboardLayouts>
  );
};

export default Home;
