

import React, { useState } from 'react'
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';


interface Props {
    
}

const Sociallinks = (props: Props) => {

    const[navbarHid, setNavbarHid]=useState(false)

    const hidNavBar = ()=>{
        if(window.scrollY >= 80){
            setNavbarHid(true);
        }else{
            setNavbarHid(false)
        }
        
    }

    if(typeof window !== "undefined"){

        window.addEventListener('scroll',hidNavBar)
    }

    return (
        <div className={` ${navbarHid && `hidden md:hidden`} w-full  my-10 fixed pt-1 justify-center items-center flex  md:flex`}>
           
                <div className="flex w-full  mx-1 my-1 px-3 py-1 md:max-w-[800px] text-white  justify-between   items-center border rounded-full ">

                    <div className="flex ">
                    <p className="bg-green-800 text-white text rounded-full w-4 h-4 flex text-center items-center justify-center my-1">o</p> 
                    <p className="">ma</p>
                    </div>

                    <div className=" flex  text-xs space-x-2 items-center">
                        <a href="#about" className="cursor-pointer hover:text-orange-300 text-xs">About </a>
                        <a href="#service" className="cursor-pointer hover:text-orange-300  text-xs">Service</a>
                        <a href="#testimonies" className="cursor-pointer hover:text-orange-300  text-xs">Testimonies</a>
                        <a href="#health" className="cursor-pointer hover:text-orange-300  text-xs">Health</a>
                        <a href="#contact" className="cursor-pointer hover:text-orange-300  text-xs">Contact</a>
                        <CiFacebook className="w-5 h-5 hover:scale-150 transition duration-75"/>
                        <BsInstagram  className="w-4 h-4 hover:scale-150 duration-75"/>
                    </div>
                    
                </div>
            
        </div>
    )
}

export default Sociallinks
