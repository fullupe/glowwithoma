import React from 'react'
import { BsClockHistory } from 'react-icons/bs';
import { GoLocation } from 'react-icons/Go';
import { AiTwotoneCalendar } from 'react-icons/Ai';

interface Props {
    
}

const Information = (props: Props) => {
    return (
        <div className="flex  w-full h-[60px] md:h-[150px] opacity-80 justify-center   bg-gray-900">
          
          <div className="flex w-full h-full justify-between items-center space-x-4  px-1 md:max-w-[80%] ">

          <div className="flex h-full items-center space-x-2.5 opacity-100 text-xs  md:text-lg">
           <BsClockHistory className="h-6 w-6 text-red-500"/>
           <div className="flex flex-col text-white">
            <p className="uppercase ">OPening time</p>
            <p className="text-gray-400"> Mon-Fri 7am - 6pm</p>
           </div>

         </div>

          <div className="flex  h-full items-center space-x-2.5 opacity-100 text-xs md:text-lg">
            <GoLocation className="h-6 w-6 text-red-500"/>
          <div className="flex flex-col text-white">
            <p className="uppercase ">LOcation</p>
            <p className="text-gray-400"> 250 Udoma st opp, Johson street</p>
           </div>
            </div>

          <div className="flex h-full items-center space-x-2.5 opacity-100 text-xs md:text-lg">
            <AiTwotoneCalendar className="h-6 w-6 text-red-500"/>
          <div className="flex flex-col text-white">
            <p className="uppercase ">Booking</p>
            <p className="text-gray-400"> Mon-Fri 7am - 6pm</p>
           </div>
         </div>
          </div>

        </div>
    )
}

export default Information
