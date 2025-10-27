import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const DashboardLayouts = ({children,activeMenu}) => {
  return (
    <div className=''>
      <Navbar activeMenu={activeMenu}/>
     <div className='flex '>
<Sidebar activeMenu={activeMenu}/>
      <div className='pt-4 ml-52'>
        {children}
      </div>
     </div>
      
    </div>
  )
}

export default DashboardLayouts