import Link from 'next/link'
import React from 'react'

function Users() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <p className="p-2 flex animate-pulse font-poppins text-lg ">please User Page is still Under Maintenance</p>

      <Link href="/" className="flex py-2 bg-red-500 hover:bg-red-900 p-2 rounded-full text-white italic cursor-pointer shadow-lg hover:scale-75  transition-transform duration-200 ease-in-out "> Back To Home</Link>
        
    </div>
  )
}

export default Users