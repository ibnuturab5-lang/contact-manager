import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardLayouts from "../components/DashboardLayouts";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts,deleteContact } from '../slices/contactSlice';
import TableCard from "../components/TableCard";

const Home = () => {
  const {user}=useSelector(state=>state.user)
  const {contacts,loading,error}=useSelector(state=>state.contact)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(user){
      dispatch(getAllContacts())
      console.log(contacts)
    }
  },[dispatch, user])
  const handleDelete=(id)=>{
     if(window.confirm('Are you sure you want to delete this ?')){
     dispatch(deleteContact(id))
   }
   
  }
  const handleEdit=(contact)=>{
  dispatch(updateContact(contact))
  }
  return (
    <DashboardLayouts activeMenu={"Contacts"}>
   
        <h1 className="text-xl font-bold text-center py-4">My Contacts</h1>
      
      <div className="overflow-x-auto  mx-auto">
        <table className="rounded-md min-w-full table-auto">
          <thead>
            <tr className="flex gap-3 items-center justify-between bg-slate-200 ">
            <th className="py-2 text-start border-b flex-1">Name</th>
            <th className="py-2 text-start border-b flex-1">Email</th>
            <th className="py-2 text-start border-b flex-1">Phone</th>
            <th className="py-2 text-start border-b flex-1">Place</th>
            <th className="py-2 text-start border-b flex-1">Actions</th>
          </tr>
          </thead>
          <tbody className="">
             {contacts.map((contact,index)=>(
          <TableCard key={index}
          contact={contact} onDelete={handleDelete} 
          onEdit={handleEdit}/>
        ))}
          </tbody>
        </table>
       
      </div>
    </DashboardLayouts>
  );
};

export default Home;
