import Image from 'next/image'
import React from 'react'

type Props = {}

const Marquee = (props: Props) => {

  const marquee1 = ["https://res.cloudinary.com/fullupe/image/upload/v1691014228/oma/maquee-2_eswr2s.png","https://res.cloudinary.com/fullupe/image/upload/v1691014224/oma/maquee-6_dnzyqa.png","https://res.cloudinary.com/fullupe/image/upload/v1691014220/oma/maquee-3_lmb2n4.jpg","https://res.cloudinary.com/fullupe/image/upload/v1691014204/oma/maquee-1_nckryn.jpg"]
  const marquee2=["https://res.cloudinary.com/fullupe/image/upload/v1691014228/oma/maquee-2_eswr2s.png","https://res.cloudinary.com/fullupe/image/upload/v1691014224/oma/maquee-6_dnzyqa.png","https://res.cloudinary.com/fullupe/image/upload/v1691014220/oma/maquee-3_lmb2n4.jpg","https://res.cloudinary.com/fullupe/image/upload/v1691014211/oma/maquee-5_tm7fwy.png","https://res.cloudinary.com/fullupe/image/upload/v1691014204/oma/maquee-1_nckryn.jpg"]

  return (
    <div className=" flex flex-col w-full items-center justify-center  py-4 overflow-x-hidden bg-[url('/GlowWithOMA2.png')] bg-cover bg-center bg-fixed">

    <div className=" flex items-center justify-center">
        <p className=" text-white tracking-[10px] italic uppercase bg-gray-900 opacity-80 p-2">our Partners</p>
    </div>
   
    <div className=" relative px-4 h-full  flex overflow-x-hidden w-[80%] mb-8 justify-center sm:px-8 sm:w-[80%]" >

     <div className=" flex py-6 sm:py-12  space-x-8 sm:px-6 sm:space-x-16 animate-marquee whitespace-nowrap justify-center items-center">
     
      {
        marquee1.map((marq,i)=>(

      <div key={i} className="w-20 h-20 sm:w-40 sm:h-16 rounded-full">
       <Image width={40} height={40} unoptimized
       className="h-20 w-28 sm:h-28 sm:w-28 sm:justify-center items-center"
       src={marq}
       alt="img"
      
         />

     </div>
        ))
      }
      
     </div>

     {/* second line  */}

     <div className=" flex  absolute top-0 py-6 sm:px-6 ml-12 sm:ml-16 sm:py-12 space-x-8 sm:space-x-16 animate-marquee2 whitespace-nowrap justify-center items-center">

     {
        marquee2.map((marq,i)=>(

      <div key={i} className="w-20 h-20 sm:w-40 sm:h-16 rounded-full">
       <Image width={40} height={40} unoptimized
       className="h-20 w-28 sm:h-28 sm:w-28 sm:justify-center items-center"
       src={marq}
       alt="img"
      
         />

     </div>
        ))
      }
    </div>
     </div>
     </div>
  )
}

export default Marquee