
"use client"

import React, { useEffect, useState } from 'react'
import Information from './Information'
import Sociallinks from './Sociallinks'

import {client} from "@/sanity/lib/client"
import Link from 'next/link'
import {BsTelephoneInbound } from 'react-icons/bs';

type Props = {}

 export   function  Herosection({}: Props) {

  const [herodata, setherodata] = useState([])

  useEffect(()=>{

    const getHeroSectionData=()=>{
      client.fetch(
            `*[_type == "herosection"]{
              _id,
              title,
              content,
            }`
          ).then(data =>setherodata(data))
    }

    getHeroSectionData()
    

  },[])


    const bgimg=['/makeup.jpg','/bgimage.jpg','makeup2.jpg']
    const bgimage = bgimg[Math.floor(Math.random()*bgimg.length)]
  return (
    <div id="about" className="flex w-full mb-2  items-center h-[600pxk] bg-[url('/makeup.jpg')] bg-cover bg-center  flex-col bgj-gradient-to-br from-[#18122B] via-[bg-gradient-to-r from-[#5C469C]  to-pink-500] to-[#5C469C]">
   <Sociallinks/>
   <div className=" flex mt-40 flex-col justify-center md:justify-between items-center space-y-4 md:flex-row">
   <div className="flex pb-2  flex-col text-white justify-center w-full items-centerd max-w-md space-y-4 ">
       
       <div className=" text-2xl mt-8  border-b-4 pb-1 ">
       <p className=" font-bold">Your Hair Is </p> 
       <p>Our Craft</p>

       </div>
       
      {
      

        <p className="flex bg-gray-900 opacity-80 p-1 px-4 rounded-br-full">{
          herodata?.map((v:any)=>(
             <p key={v._id}> {v.content}</p>
           ))
        }
        </p>

      
      }

       {/* <Link href="Tel:+2348121884692"> */}
         <div className="flex p-1 justify-center items-center shadow-lg space-x-1 w-32 rounded-full text-center text-white bg-red-400  cursor-pointer hover:scale-90 transition duration-700">
          
          <p className="flex rounded-full text-black text-center items-center justify-center bg-white w-6 h-6">

          <BsTelephoneInbound/> 
          
            
          </p>
          <p className="flex-1 bg-white rounded-xl text-black italic   text-sm">Call us Now</p>

         </div>
      {/* </Link> */}


   </div>
   <div className="flex w-full h-full pl-2 rounded-full border-4d  bg-cover items-center  mt-4 justify-center ">
      <img className=" hidden md:flex rounded-full object-cover  md:w-[200px] md:h-[200px]" src={bgimage} alt="img"/>
    </div> 
   </div>

   <Information/>
   
    </div>
  )
}

export default Herosection