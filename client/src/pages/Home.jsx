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
   
        <h1 className="text-xl font-bold text-center py-4">My Contacts</h1>
      
      <div className="overflow-x-auto  mx-auto">
        <table className="rounded-md min-w-full table-auto">
          <thead>
            <tr className="flex gap-3 items-center bg-slate-200 ">
            <th className="py-2 text-start border-b w-24 px-2">Name</th>
            <th className="py-2 text-start border-b w-24 px-2">Phone</th>
            <th className="py-2 text-start border-b w-40 px-2">Email</th>
            
            <th className="py-2 text-start border-b w-24 px-2">Place</th>
            <th className="py-2 text-start border-b w-24 px-2">Actions</th>
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
