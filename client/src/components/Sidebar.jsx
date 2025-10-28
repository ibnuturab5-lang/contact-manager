import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SIDEBAR_DATA } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../slices/userSlice";

const Sidebar = ({ activeMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleRoute = (route) => {
    if (route === "/login") {
      handleLogout();
    }
    navigate(route);
  };
  const handleLogout=async()=>{
await dispatch(logoutUser()).unwrap()
navigate('/login')
  }
  return (
    <div className="fixed top-16 w-52 border-r min-h-screen bg-white ">
      <div className="flex flex-col gap-2 my-10 ">
        <h1 className="flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-teal-800 text-slate-300 font-bold capitalize text-2xl">
          {user.name[0]}
        </h1>
        <p className="font-bold capitalize text-center">{user.name}</p>
      </div>
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
  );
};

export default Sidebar;
