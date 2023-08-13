import Image from 'next/image'
import React from 'react'

type Props = {}

const Marquee = (props: Props) => {
  return (
    <div className=" flex flex-col items-center justify-center  py-4 overflow-x-hidden bg-[url('/GlowWithOMA2.png')] bg-cover bg-center bg-fixed">

    <div className=" flex items-center justify-center">
        <p className=" text-white tracking-[10px] italic uppercase bg-gray-900 opacity-80 p-2">our Partners</p>
    </div>
   
    <div className=" relative px-4  flex overflow-x-hidden w-[80%] mb-8 justify-center sm:px-8 sm:w-[80%]" >

     <div className=" flex py-6 sm:py-12  space-x-8 sm:px-6 sm:space-x-16 animate-marquee whitespace-nowrap justify-center items-center">
     
      <div className="w-20 h-8 sm:w-40 sm:h-16 rounded-full">
       <Image width={32} height={32} unoptimized
       className="h-8 w-8 sm:h-28 sm:w-28 sm:justify-center items-center"
       src="https://res.cloudinary.com/fullupe/image/upload/v1691014228/oma/maquee-2_eswr2s.png"
       alt="img"
      
         />

     </div>

       <div className="w-20 h-8 sm:w-40 sm:h-16">
       <Image width={32} height={32} unoptimized
       className="h-8 w-8 sm:h-28 sm:w-28"
       src="https://res.cloudinary.com/fullupe/image/upload/v1691014224/oma/maquee-6_dnzyqa.png"
       alt="img"
         />
      </div>


        <div className="w-20 h-8 sm:w-40 sm:h-16">
       <Image width={32} height={32} unoptimized
       className="h-8 w-8 sm:h-28 sm:w-28" 
       src="https://res.cloudinary.com/fullupe/image/upload/v1691014220/oma/maquee-3_lmb2n4.jpg"
        alt="img"
         />
         </div>

       <div className="w-20 h-8 sm:w-40 sm:h-16">
       <Image width={32} height={32} unoptimized
       className="h-6 w-6 sm:h-28 sm:w-28" 
       src="https://res.cloudinary.com/fullupe/image/upload/v1691014211/oma/maquee-5_tm7fwy.png"
        alt="img"
         />
         </div>

         <div className="w-20 h-8 sm:w-40 sm:h-16">
         <Image width={32} height={32} unoptimized
         className="h-6 w-6 sm:h-28 sm:w-28" 
         src="https://res.cloudinary.com/fullupe/image/upload/v1691014204/oma/maquee-1_nckryn.jpg"
            alt="img"
         />
         </div>
     </div>

     {/* second line  */}

     <div className=" flex  absolute top-0 py-6 sm:px-6 ml-12 sm:ml-16 sm:py-12 space-x-8 sm:space-x-16 animate-marquee2 whitespace-nowrap justify-center items-center">
     
     <div className="w-20 h-8 sm:w-40 sm:h-16">
     <Image width={32} height={32} unoptimized
     className="h-8 w-8 sm:h-28 sm:w-28" 
     src="https://res.cloudinary.com/fullupe/image/upload/v1691014228/oma/maquee-2_eswr2s.png"
      alt="img"
      />
         </div>
         <div className="w-20 h-8 sm:w-40 sm:h-16">
       <Image width={32} height={32} unoptimized
       className="h-8 w-8 sm:h-28 sm:w-28" 
       src="https://res.cloudinary.com/fullupe/image/upload/v1691014224/oma/maquee-6_dnzyqa.png"
       alt="img"
         />
         </div>

          <div className="w-20 h-8 sm:w-40 sm:h-16">
       <Image width={32} height={32} unoptimized 
       className="h-8 w-8 sm:h-28 sm:w-28"
       src="https://res.cloudinary.com/fullupe/image/upload/v1691014220/oma/maquee-3_lmb2n4.jpg"
        alt="img"
         />
         </div>

         <div className="w-20 h-8 sm:w-40 sm:h-16">
       <Image width={32} height={32} unoptimized
       className="h-6 w-6 sm:h-28 sm:w-28"
       src="https://res.cloudinary.com/fullupe/image/upload/v1691014211/oma/maquee-5_tm7fwy.png"
       alt="img"
         />
         </div>
         <div className="w-20 h-8 sm:w-40 sm:h-16">
         <Image width={32} height={32} unoptimized
         className="h-6 w-6 sm:h-28 sm:w-28" 
         src="https://res.cloudinary.com/fullupe/image/upload/v1691014204/oma/maquee-1_nckryn.jpg"
          alt="img"
         />
         </div>
     </div>

     </div>
     </div>
  )
}

export default Marquee