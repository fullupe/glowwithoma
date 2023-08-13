import React, { useState } from 'react'
import { SlBasket } from 'react-icons/sl';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMenu, AiFillInfoCircle, AiOutlinePhone } from 'react-icons/Ai';
import { GiHairStrands, } from 'react-icons/gi';
import { MdOutlineHealthAndSafety, } from 'react-icons/md';
import { BsMegaphoneFill } from 'react-icons/bs';
import { motion } from 'framer-motion'
import Modal from './modal';

type Props = {}

function Navbar({}: Props) {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    const [isVisible, setIsVisible] =useState(false);

  return (
    <div className=" h-12 w-full fixed  bg-[#18122B] flex items-center  justify-center ">
        
        <div className="flex justify-between  w-full md:w-[800px] h-full items-center px-2 ">
        <div className=" flex text-gray-200  font-bold capitalize" >
            g-w oma
        </div>
        <div className="flex space-x-8">
        <SlBasket onClick={()=>setIsVisible(!isVisible)} className="text-gray-200 h-6 w-6"/>
        <FaUser onClick={()=>setIsVisible(!isVisible)} className="text-gray-200  h-6  w-6"/>
        <AiOutlineMenu onClick={()=>setShowMenu(!showMenu)} className="text-gray-200 flex md:hidden cursor-pointer h-6 w-6"/>
        </div>
        </div>
        {
         showMenu &&    
        <motion.div initial={{
            x:500,
            opacity:1,
            scale:0.5
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1,
          
          }}
          transition={{
            duration:1.5,
          }}
        
        className="flex bg-[#0e0b18] h-screen md:hidden w-[50%] absolute  top-12 right-0 text-white z-10">
            <div className="flex flex-col space-y-4 w-full mx-2 py-2 pt-16">

                <div className="flex space-x-4 items-center w-full p-1 bg-gray-800 rounded-s-lg cursor-pointer">
                <AiFillInfoCircle className="text-lg w-5 h-5 font-bold  text-red-500 "/>
                    <a href="#about" className="hover:border-b transition duration-700">AboutUs</a>
                </div>

                <div className="flex space-x-4 items-center w-full p-1 bg-gray-800 rounded-s-lg cursor-pointer">
                <GiHairStrands className="text-lg w-5 h-5 font-bold  text-red-500 "/>
                <a href="#service" className="hover:border-b transition duration-700">Service</a>
                </div>
                <div className="flex space-x-4 items-center w-full p-1 bg-gray-800 rounded-s-lg cursor-pointer">
                <MdOutlineHealthAndSafety className="text-lg w-5 h-5 font-bold  text-red-500 "/>
                <a href="#health" className="hover:border-b transition duration-700">Health</a>
                </div>

                <div className="flex space-x-4 items-center w-full p-1 bg-gray-800 rounded-s-lg cursor-pointer">
                 <BsMegaphoneFill className="text-lg w-5 h-5 font-bold  text-red-500 "/> 
             
                <a href="#testimonies" className="hover:border-b transition duration-700">Testimonies</a>
                </div>

                <div className="flex space-x-4 items-center w-fll p-1 bg-gray-800 rounded-s-lg cursor-pointer">
                <AiOutlinePhone className=" text-lg font-bold w-5 h-5  text-red-500   rotate-180"/>
                <a href="#contact" className="hover:border-b transition duration-700">Contact Us</a>
                </div> 
        </div>
        </motion.div>
     

        }
        <Modal isVisible={isVisible} setIsVisible={setIsVisible}/>
    </div> 
  )
}

export default Navbar 