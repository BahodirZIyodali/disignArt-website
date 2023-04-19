import React,{use, useState } from 'react'
import {FaHome} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';


const Navbar = () => {
    
    const [toggleMenu,setToggleMenu]=useState(false) // toggle for burger menu
    
  return (
    <div className='fixed bg-green-50 top-0 w-[100%] z-20 shadow-md'>
       <div className='container mx-auto flex justify-between items-center px-4 py-4'>
         <div className='flex gap-2 md:text-2xl font-bold items-center text-xl' >
            <span className='italic'>Art</span>
            <FaHome />
            <span className='text-green-700 italic'>Disign</span>
         </div>
         <div className=' hidden md:flex gap-10 tracking-wider text-gray-600'>
            <a  className='hover:text-green-700 ' >Home</a>
           <a href='#product' className='hover:text-green-700 '>Products</a>
     <a href='#categories' className='hover:text-green-700 '>Categories</a>
            <a className='hover:text-green-700 '>Servies</a>
         </div>
         <div>
            <button className='border hidden md:block border-green-700 px-4 py-1 rounded-md  text-gray-600 hover:bg-green-700 hover:text-white '>Contact</button>
         </div>
          {
            toggleMenu?(
           <AiOutlineClose onClick={()=>setToggleMenu(!toggleMenu)} size={30} className="md:hidden block"/>
              )  :(
            <FiMenu  onClick={()=>setToggleMenu(!toggleMenu)} size={30} className="md:hidden block"/>
            )
         }
      </div>
      {/*Responsive menu*/}
      <div className={`duration-300 md:hidden flex flex-col w-[70%] mt-2 h-screen text-white top-[60px] bg-black/70 fixed ${toggleMenu?"left-0" :"left-[-100%]"} gap-5  `}>
           <a className='hover:text-green-700 p-5 ' >Home</a>
             <a href="#product"  className='hover:text-green-700 p-5'>Products</a>
              <a href="#categories" className='hover:text-green-700 p-5'>Categories</a>
            <a className='hover:text-green-700 p-5'>Servies</a>
      <div className="flex gap-5 items-center mt-20 flex-col">
            <div className="bg-green-600 w-[250px] h-[1.5px]"></div>
              <div className='flex gap-10'>
              <BsFacebook
            className="text-green-600 hover:-translate-y-1.5 duration-300"
            size={25}
          />
          <BsTwitter
            className="text-green-600 hover:-translate-y-1.5 duration-300"
            size={25}
          />
          <BsYoutube
            className="text-green-600 hover:-translate-y-1.5 duration-300"
            size={25}
          />
        
          <BsLinkedin
            className="text-green-600 hover:-translate-y-1.5 duration-300"
            size={25}
          />
              </div>
            </div>
      </div>
       
    </div>
  )
}

export default Navbar