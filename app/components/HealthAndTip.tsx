import React, { useEffect, useState } from 'react';
import {BsFillArrowDownCircleFill } from 'react-icons/bs';

interface Props {
    
}


import {client} from "@/sanity/lib/client"
import { groq } from 'next-sanity';
import PortableText from 'react-portable-text';

const query = groq`
*[_type == 'health']{
  ...,
 _id,
  body[]
} 
`

const HealthAndTip = (props: Props) => {

    const [showmore, setShowmore] = useState<boolean>(false)

    const handleshowMore =()=>{
      setShowmore(!showmore)
    }


    const [healthTips, setHealthTips] = useState([])

    useEffect(()=>{
  
      const  getHeroSectionData  = async ()=>{
         await client.fetch(
          query
            ).then(data =>setHealthTips(data))
      }
  
      getHeroSectionData()
      
  
    },[])

    return (
        <div id="health" className=" flex w-[95%] md:w-[80%] bg-black">
      
      <div className=" flex justify-center w-20 bg-red-900  ">
       <p className=" flex justify-center bg-blacks rotate-90 items-center text-center whitespace-nowrap text-white font-bold text-lg tracking-[4px] uppercase ">makeup and  beauty </p>

      </div>

      <div className=" flex flex-col text-white w-full pb-2 ">
        <div className=" text-white bg-gray-900 flex   pl-2 mx-2">
        <p className="text-white border-b  italic "> 👉 Makeup Health Tips</p>
        </div>

        <div className="px-2 space-y-2 flex flex-col pl-2">
          {
            healthTips.map((tip:HealthContent)=>(
              <p key={tip._id} className=" flex p-2 bg-gray-900 shadow-lg text-gray-200 ">

                <PortableText content={tip.body}/>
             
                
                </p>

            ))
          }
        </div>
        <div  className={`${!showmore ? `hidden`: `flex flex-col space-y-2 px-2 mt-2 mb-1` }`}>
          <p className=" flex p-2 bg-gray-400 shadow-lg ">
          By following these makeup health tips, you can enjoy the beauty-enhancing effects of makeup while ensuring the well-being of your skin. Remember that makeup should be a tool to enhance your natural beauty, and taking care of your skin is crucial for a radiant and healthy appearance.
          </p>

        </div>
        <div onClick={handleshowMore} className=" p-0 bg-gray-800 text-xs h-12 w-12 -mb-6  rounded-full flex flex-col items-center justify-center ml-2 mt-1 cursor-pointer ">
          {
            showmore ? <p>Less</p> : <p>More</p>
         }
          <BsFillArrowDownCircleFill className={` w-5 h-5 ${showmore ? "rotate-180" : "rotate-0"}`}/>
        </div>

      </div>

    </div>

    )
}

export default HealthAndTip
