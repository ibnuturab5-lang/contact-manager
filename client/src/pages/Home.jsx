import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardLayouts from "../components/DashboardLayouts";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from '../slices/contactSlice';
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
  return (
    <DashboardLayouts activeMenu={"Contacts"}>
      <div className="overflow-x-auto">
        <table className="rounded-md min-w-full table-auto">
          <thead>
            <tr className="flex items-center justify-between ">
            <th className="py-4 px-2 border flex-1">Name</th>
            <th className="py-4 px-2 border flex-1">Email</th>
            <th className="py-4 px-2 border flex-1">Phone</th>
            <th className="py-4 px-2 border flex-1">Place</th>
            <th className="py-4 px-2 border flex-1">Actions</th>
          </tr>
          </thead>
          <tbody className="">
             {contacts.map((contact,index)=>(
          <TableCard key={index}
          contact={contact}/>
        ))}
          </tbody>
        </table>
       
      </div>
    </DashboardLayouts>
  );
};

export default Home;
