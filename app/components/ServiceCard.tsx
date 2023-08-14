//import React from 'react'
import Image from 'next/image';
import PortableText from "react-portable-text"
import {urlForImage} from "../../sanity/lib/image";

type Props ={
    service:ServiveContent;
}

const ServiceCard = ({service}:Props) => {

    
    return (
        <div key={service._id} id="service" className="w-96 h-64 flex flex-col items-center p-2 m-2 bg-gray-300 rounded-lg shadow-lg ">
            <h1 className="font-bold text-lg tracking-[4px] uppercase border-b border-white">{service.title}</h1>

            <div className=" px-2">

                <div className="flex w-20 h-20 relative  z-0 float-left object-cover object-center drop-shadow-xl  px- mr-2">

                <Image className=" h-16 w-16 border-2 bg-black rounded-full hover:scale-150 transition-transform duration-700 ease-out " 
                src={urlForImage(service.mainImage).url()} 
                alt="img"
                fill
                />
                </div>
               
                    <PortableText  content={service.body}/>
            
            </div>
            
        </div>
    )
}

export default ServiceCard
