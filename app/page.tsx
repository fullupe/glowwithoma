"use client"
import Map  from './components/Map'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HealthAndTip from './components/HealthAndTip'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import ServiceCard from './components/ServiceCard'
import Team from './components/Team'
import Testimonies from './components/Testimonies'
import Acadamy from './components/Acadamy'
import { FaWhatsapp } from 'react-icons/fa';
import Marquee from './components/Marquee'
import { useEffect, useState } from 'react'
import {Any, groq} from "next-sanity"


import {client} from "@/sanity/lib/client"
import Link from 'next/link'
import acadamy from '@/sanity/schemas/acadamy'

const query = groq`
*[_type == 'services']{
  ...,
 _id,
  title,
  body[]
} 
`
const TestimonieQuery = groq`
*[_type == 'testimonies']{
  ...,
 _id,
  title,
  body[]
} 
`
const TeamQuery = groq`
*[_type == 'team']{
  ...,
 _id,
  title,
  body[]
} 
`
const AcadamyQuery = groq`
*[_type == 'acadamy']{
  ...,
 _id,
  title,
  body[]
} 
`


export default function Home() {

  const [servicedata, setServicedata] = useState([])
  const [testimonies, setTestimonie] = useState([])
  const [teamContent, setTeamContent] = useState([])
  const [acadamyContent, setAcadamyContent] = useState([])


  useEffect(()=>{

    const  getHeroSectionData  = async ()=>{
       await client.fetch(
        query
          ).then(data =>setServicedata(data));


          await client.fetch(
            TestimonieQuery
          ).then(data =>setTestimonie(data));


          await client.fetch(
            TeamQuery
          ).then(data =>setTeamContent(data));

          await client.fetch(
            AcadamyQuery
          ).then(data =>setAcadamyContent(data));
          
    }

    getHeroSectionData()
    

  },[])
//console.log(servicedata)

     const bgvide=['/hairvideo.mp4','/makeup.mp4','/makeup2.mp4']
    const bgvideo = bgvide[Math.floor(Math.random()*bgvide.length)]

 
  return (
    <main className="flex min-h-screen flex-col relative items-center space-y-1 bg-[#415274]l bg-transparent  w-full">
      <Navbar/>
      <Herosection/>

    <div className="flex flex-col  w-full items-center justify-center pt-4 bg-gray-900">

        <p className="flex text-center text-lg font-bold border-b uppercase text-white font-poppins ">Services</p>
    

      <div className="grid grid-cols-1 md:grid-cols-3  bg-[url('/bgcontact.jpg')] bg-cover bg-center bg-fixed">
    {
       servicedata.map((service:any)=>( 
        <ServiceCard key={service._id} service={service}/>
       )
       )
    }
    
    </div>


    </div>


          {/* Health tips */}
        <div className="flex flex-col  w-full items-center justify-center pb-4  pt-8">

           <HealthAndTip/>

           </div>

    
                          {/* testimonies */}
      <div className="flex flex-col  w-full items-center justify-center pt-8 bg-[url('/GlowWithOMA.png')] bg-cover bg-center bg-fixed">

      <div className="relative w-full h-full bg-gray-800 opacity-80">
                <video
                className="w-full h-full object-cover"
                src={bgvideo} 
                //type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                /> 
                </div>
                

        <p className="flex text-center text-white text-lg font-bold border-b uppercase  font-poppins">Testimonies</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 space-y-4 sm:space-y-0 md:space-y-0  mb-2">
          {
            testimonies.map((testimony:any)=>(

              <Testimonies key={testimony._id} testimony={testimony}/>
            ))
          }
        
        </div>


        </div>


      <div className="flex flex-col w-full items-center justify-center ">

        {/* our goes */}
        <div className="flex flex-col  w-full items-center justify-center pt-8 bg-[url('/GlowWithOMA.png')] bg-cover bg-center bg-fixed">
        {
          teamContent.map((team:any)=>(

            <Team key={team._id} teamContent={team}/>
          ))
        }
        </div>

        {/* our accademy */}
        <div className="flex flex-col  w-full items-center justify-center pt-8 bg-[url('/GlowWithOMA.png')] bg-cover bg-center bg-fixed">
        {
          acadamyContent.map((acadamy:any)=>(
            <Acadamy key={acadamy._id} acadamyContent={acadamy}/>

          ))
        }
        </div>

        {/* contact */}
        <div className="flex flex-col  w-full items-center justify-center pt-8 bg-[url('/GlowWithOMA2.png')] bg-cover bg-center bg-fixed">

          <Contact/>
          </div>

       </div>

       <Map/>

       <Marquee/>

         


        <Footer/> 
      
      <div className="flex bottom-5 rounded-full z-10 right-0 mr-4 hover:scale-75 cursor-pointer transition duration-700 bg-green-900 h-19 w-19 fixed items-center justify-center ">
       <Link target="_blank" href="https://wa.me/+2348121884692?text=I'm%20interested%20in%20your%20hair%20makeup%20product">
       <FaWhatsapp className="h-12 w-12 text-white" />
       </Link> 

        </div>
      
    </main>
  )
}
