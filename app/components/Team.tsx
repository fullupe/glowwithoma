import React from 'react'
import { GiDirectorChair } from 'react-icons/gi'
import PortableText from 'react-portable-text'

type Props = {
  teamContent:TeamContent
}

const Team = ({teamContent}: Props) => {


  return (
    <div id="team" className="flex space-y-2  flex-col md:flex-row md:space-x-2 md:space-y-0 w-full shadow-lg md:max-w-[85%]  md:my-2">
        <div className="h-[50%] w-45 bg-white justify-center items-center flex flex-col  py-2">
        {/* <img className="" src="/bgimage.jpg " alt="" /> */}
        <div className="flex items-center justify-center h-24 w-24  border-2 border-black bg-gray-800 p-1 rounded-full">

        <GiDirectorChair className="h-12 w-12 text-white"/>
        </div>
        <p className="flex px-2 italic py-1 h-[50%]">

          <PortableText content={teamContent.body}/>
      
        </p>
       
        
        </div>
        <div className="h-[50%] w-45 bg-black relative ">
            <img className="" src="/teamimag.jpg " alt="" />

            <div className="absolute flex px-1 text-white fon flex-col bg-gray-800 h-32k w-full bottom-0 opacity-80">

                <div className="max-w-[60%] ml-4 ">
                <p className="font-bold text-lg border-b italic">{teamContent.title}</p>
                

                <p className="flex tabular-nums">
                <PortableText content={teamContent.smallBody}/>
                
                </p>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Team