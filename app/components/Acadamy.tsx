import React from 'react'
import { GiDirectorChair } from 'react-icons/gi'
import PortableText from 'react-portable-text'

interface Props {
    acadamyContent:TeamContent //making use of the same typings from TeamContent
}

const Acadamy = ({acadamyContent}: Props) => {
    return (
        <div id="acadamy" className="flex space-y-2  flex-col md:flex-row-reverse md:space-x-2 md:space-y-0 w-full shadow-lg md:max-w-[85%]  md:my-2">
        <div className="h-[50%] w-45 bg-white justify-center items-center flex  flex-col md:mx-2 py-2">
        {/* <img className="" src="/bgimage.jpg " alt="" /> */}
        <div className="flex items-center justify-center h-24 w-24  border-2 border-black bg-gray-800 p-1 rounded-full">

        <GiDirectorChair className="h-12 w-12 text-white"/>
        </div>
        <p className="flex px-2 italic py-1 h-[50%]">

          <PortableText content={acadamyContent.body}/>

  
        </p> 
        </div>
        <div className="h-[50%] w-45 bg-black relative ">
            <img className="object-right" src="/accadermy.jpg " alt="" />

            <div className="absolute flex px-1 text-white fon flex-col bg-gray-800 h-32k w-[50%] bottom-0 opacity-80">

                <h1 className="text-4xl text-center border-b-2 border-b-white p-2 m-1">{acadamyContent.title} </h1>

                <p className="text-center">
                <PortableText content={acadamyContent.smallBody}/>
                    
                    </p>
                

            </div>
        </div>
    </div>
    )
}

export default Acadamy
