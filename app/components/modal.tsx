import React, { useState } from 'react'
import { component } from 'sanity/desk'

type Props={
    isVisible:boolean;
    setIsVisible:(isVisible:boolean) => void;
}

function Modal({isVisible, setIsVisible}:Props) {

   

    const handleClose =(e:any)=>{
        if(e.target.id === "wrap") setIsVisible(false)
        
    }

    if(!isVisible) return null;

  return (
    <div onClick={handleClose} id="wrap" className="fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center flex">
        
        <div className="w-[600px] flex flex-col">

            <button onClick={()=>setIsVisible(false)} className=" place-self-end text-2xl text-white">x</button>

          <div className="bg-white p-2 rounded-lg h-56 items-center justify-center w-full  flex flex-colp ">

              <p className=" text-sm  flex items-center justify-center animate-pulse   w-full">please this feature is under maintenance</p>
              

        
          </div>

        </div>
        
        </div>
  )
}

export default Modal