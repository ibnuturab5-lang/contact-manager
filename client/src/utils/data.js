
import { MdAddCall, MdLogout, MdOutlinePeople } from 'react-icons/md'
export const SIDEBAR_DATA = [
    {
        id:1,
        label:"Contacts",
        icon:MdOutlinePeople,
        path:'/'
    },
    {
        id:2,
        label:"Add Contact",
        icon:MdAddCall,
        path:'/add-contact'
    },
    {
        id:3,
        label:"Logout",
        icon:MdLogout,
        path:'/login'
    },
];
