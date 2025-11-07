import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='animate-spin border-b-2 border-blue-500 rounded-full h-12 w-12 '></div>
        <div>Loading please wait...</div>
    </div>
  )
}

export default Loader