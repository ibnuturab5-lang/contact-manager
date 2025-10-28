import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const TableCard = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
        <tr className="flex gap-3 items-center justify-between  even:bg-slate-200">
          <td className="px-4 text-sm flex-1 no-wrap">
            {isEditing ? <input type="text" /> : contact.name}
          </td>
          <td className="px-4 text-sm flex-1 ">
            {isEditing ? <input type="text" /> : contact.email}
          </td>
          <td className="px-4 text-sm flex-1 ">
            {isEditing ? <input type="text" /> : contact.phone}
          </td>
          <td className="px-4 text-sm flex-1 ">
            {isEditing ? <input type="text" /> : contact.place}
          </td>
          <td className="px-4 text-sm flex-1 ">
            {isEditing ? (
              <div className="flex items-center gap-3">
                <button className="px-2 py-1 rounded-md bg-blue-500 text-slate-50 ">Edit</button>
                <button  className="px-2 py-1 rounded-md bg-red-600  text-slate-50">Cancel</button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <MdEdit size={20} className=" text-blue-500" /> <MdDelete size={20} className=" text-red-600"/>
              </div>
            )}
          </td>
        </tr>
     
 
  );
};

export default TableCard;
