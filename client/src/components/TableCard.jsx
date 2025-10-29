import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearError } from "../slices/userSlice";
import { updateContact } from "../slices/contactSlice";
const TableCard = ({ contact,onEdit,onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name,setName]=useState(contact.name ||'')
  const [phone,setPhone]=useState(contact.phone ||'')
  const [email,setEmail]=useState(contact.email ||'')
  const [place,setPlace]=useState(contact.place ||'')
  const dispatch=useDispatch()
  const contactData={ name, email, phone, place }
  const handleEditClick=()=>{
    setIsEditing(true)
  }
    const handleSaveClick = async () => {
    dispatch(clearError());
    try {
      await dispatch(updateContact({id:contact._id, contactData :contactData })).unwrap();
     
      onEdit({ ...contact, name, email, phone, place });
       setIsEditing(false);
    } catch (error) {
      console.error("Failed to save contact:", error);
    }
  };
  const handleCancelClick=()=>{
    
    setName(contact.name)
    setEmail(contact.email)
    setPhone(contact.phone)
    setPlace(contact.place)
    setIsEditing(false)
  }

  return (
        <tr className="flex gap-3 items-center even:bg-slate-200 p-2  ">
          <td className="whitespace-nowrap w-24  overflow-hidden   text-sm ">
            {isEditing ? <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="rounded-md px-2 py-2 border border-slate-400" /> : contact.name}
          </td>
          <td className="whitespace-nowrap  w-24   text-sm  ">
            {isEditing ? <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="rounded-md px-2 py-2 border border-slate-400"/> : contact.phone}
          </td>
          <td className="whitespace-nowrap  w-40 overflow-hidden   text-sm  ">
            {isEditing ? <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded-md px-2 py-2 border border-slate-400" /> : contact.email}
          </td>
          
          <td className="whitespace-nowrap  w-24   text-sm  ">
            {isEditing ? <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)} className="rounded-md px-2 py-2 border border-slate-400"/> : contact.place}
          </td>
          <td className="whitespace-nowrap   overflow-hidden text-sm  ">
            {isEditing ? (
              <div className="flex items-center gap-3">
                <button className="px-2 py-1 rounded-md bg-blue-500 text-slate-50 cursor-pointer " onClick={handleSaveClick} >Save</button>
                <button  className="px-2 py-1 rounded-md bg-red-600  text-slate-50 cursor-pointer" onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <MdEdit size={20} className=" text-blue-500 cursor-pointer" onClick={handleEditClick}/> <MdDelete size={20} onClick={()=>onDelete(contact._id)} className=" cursor-pointer text-red-600"/>
              </div>
            )}
          </td>
        </tr>   
 
  );
};

export default TableCard;
