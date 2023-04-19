import React from 'react'
import { FaHome } from 'react-icons/fa';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='bg-green-600 min-h-[450px] md:h-[250px]'>
      <div className='container mx-auto '>
        <div className="flex flex-col items-center gap-y-2 py-36 md:flex-row md:justify-evenly ">
          <div className="flex gap-1 items-center text-xl md:text-2xl font-bold lg:text-3xl">
            <span className="italic text-white">Art</span>
            <FaHome/>
            <span className='italic text-white'>Design</span>
          </div>
          <div className='flex flex-col gap-8 tracking-wider text-gray-800 text-center md:flex-row md:pt-1'>
          <a href="/"  className='hover:text-white ' >Home</a>
              <a href="#product" className='hover:text-white '>Products</a>
             <a href="#categories"  className='hover:text-white '>Categories</a>
               <a  href="/" className='hover:text-white '>Servies</a>
            </div>
            <div className="flex gap-x-5 items-cneter">
          <BsFacebook
            className="text-gray-600 hover:-translate-y-1.5 duration-300 hover:text-white"
            size={25}
          />
          <BsTwitter
            className="text-gray-600 hover:-translate-y-1.5 duration-300 hover:text-white"
            size={25}
          />
          <BsYoutube
            className="text-gray-600 hover:-translate-y-1.5 duration-300 hover:text-white"
            size={25}
          />
        
          <BsLinkedin
            className="text-gray-600 hover:-translate-y-1.5 duration-300 hover:text-white"
            size={25}
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer