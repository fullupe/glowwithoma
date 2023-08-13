import Link from 'next/link';
import React from 'react'
import { BsFacebook,BsInstagram,BsTwitter,BsWhatsapp } from 'react-icons/bs';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex w-full h-96 bg-gray-900  justify-center ">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full justify-center font-bold text-sm md:text-lg  md:w-[80%]">
            <div className="flex  flex-col items-center   justify-center text-white">
                <p className="flex pl-6">Monday - Friday</p>
                <p className="flex">7am - 4pm</p>
                <p className="flex pl-4">Home Service</p>
            </div>

            <div className="flex flex-col items-center  justify-center text-white">
                <p> 250 udomana street </p>
                <p>+234 81090016165</p>
                <p>glowwithoma@gmail.com</p>
            </div>


            <div className="flex  flex-col space-x-12 items-center justify-center w-full  ">

                <p className="flex text-white uppercase mb-4 border-b text-center">follow us</p>

                <div className="flex  space-x-12 items-center justify-center">

                <p className="text-red-500 flex md:h-12 md:w-12 hover:opacity-70 transition duration-700 cursor-pointer">
                <Link target="_blank" href="https://web.facebook.com/?_rdc=1&_rdr">
                <BsFacebook className=" text-xl md:text-4xl hover:text-white"/>
                </Link>
                </p>

                <p className="text-red-500 flex md:h-12 md:w-12 hover:opacity-70 transition duration-700 cursor-pointer">
                <Link target="_blank" href="https://www.instagram.com/">
                <BsInstagram className=" text-xl md:text-4xl hover:text-white  "/>
                </Link>
                </p>

                <p className="text-red-500 flex md:h-12 md:w-12 hover:opacity-70 transition duration-700 cursor-pointer">
               
                <Link target="_blank"  href="https://twitter.com/login?lang=en">
                <BsTwitter className="text-xl md:text-4xl  hover:text-white" />
                </Link>
                </p>
                <p className="text-red-500 flex md:h-12 md:w-12 hover:opacity-70 transition duration-700 cursor-pointer">
                <Link target="_blank"  href="https://wa.me/+2348121884692?text=I'm%20interested%20in%20your%20hair%20makeup%20product">
                <BsWhatsapp className="text-xl md:text-4xl hover:text-white" />
                </Link>
                </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-white">
                <p>Visite Our Online Shop</p>
                <p>Booking's Available</p>
                <p>Weddings, Parties, Birthday's.</p>
            </div>
        </div>

    </div>
  )
}

export default Footer