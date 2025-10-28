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
  const handleEditClick=()=>{
    setIsEditing(true)
  }
  const handleSaveClick=async(id)=>{
    dispatch(clearError())
    await dispatch(updateContact(id,{name,email,phone,place})).unwrap()
    setIsEditing(false)
    onEdit({...contact,name,email,phone,place})
  }
  const handleCancelClick=()=>{
    setIsEditing(false)
    setName(contact.name)
    setEmail(contact.email)
    setPhone(contact.phone)
    setPlace(contact.place)
  }

  return (
        <tr className="flex gap-3 items-center justify-between  even:bg-slate-200 p-2 ">
          <td className="whitespace-nowrap  text-sm flex-1 no-wrap ">
            {isEditing ? <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> : contact.name}
          </td>
          <td className="whitespace-nowrap  text-sm flex-1 ">
            {isEditing ? <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /> : contact.email}
          </td>
          <td className="whitespace-nowrap  text-sm flex-1 ">
            {isEditing ? <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/> : contact.phone}
          </td>
          <td className="whitespace-nowrap  text-sm flex-1 ">
            {isEditing ? <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)}/> : contact.place}
          </td>
          <td className="whitespace-nowrap overflow-hidden text-sm flex-1 ">
            {isEditing ? (
              <div className="flex items-center gap-3">
                <button className="px-2 py-1 rounded-md bg-blue-500 text-slate-50 cursor-pointer " onClick={()=>handleSaveClick(contact._id)} >Save</button>
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
