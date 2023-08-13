import Image from 'next/image';
import React from 'react'
import { AiOutlineStar } from 'react-icons/Ai';
import PortableText from 'react-portable-text';

import {urlForImage} from "../../sanity/lib/image";

type Props = {
   testimony:TestimoniesContent
}

const Testimonies = ({testimony}: Props) => {
  return (
    <div id="testimonies" className="w-96 h-[285px] flex flex-col items-center px-2 pb-2 my-2 md:my-0 bg-white rounded-lg shadow-lg ">
        <div className=" rounded-full flex flex-col  items-center justify-center ">

      <div className="flex w-20 h-20 relative drop-shadow-xl object-center">
        <Image className=" object-cover  w-20 border-2 bg-black rounded-full hover:rotate-6 transition duration-700 " 
        
        src={urlForImage(testimony.mainImage).url()}  
        alt="img"
        fill
        />

      </div>
        

         <p className="text-lg font-bold border-b-2 border-red-500 font-poppins">{testimony.clientname}</p>
        </div>

        <p className="flex mt-2 justify-center items-center font-poppins ">
          <PortableText content={testimony.body}/>
         
          </p>

          <p className="flex text-red-500 mt-1 ">
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        
          </p>
          
    </div>
  )
}

export default Testimonies