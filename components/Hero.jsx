import React from "react";
import Button from "./Button";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='bg-[url("/hero.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white flex flex-col md:gap-[40px] gap-[25px] ">
          <div>
            <h1 className="md:text-5xl text-2xl font-semibold tracking-wide">
              Design your Dream
            </h1>
          </div>
          <div>
            <h1 className="md:text-5xl text-2xl font-semibold tracking-wide">
              <span className=" text-green-600 ">Home</span> Very Easily
            </h1>
          </div>
          <span className="mx-auto  bg-green-600 h-[2px] w-[150px]"></span>
          <div>
            <p className="md:text-xl text-sm text-gray-300   tracking-widest">
              Simple Furniture High-end Quality
            </p>
            <div>
              <Button link="#" text="Explore Products" />
            </div>
          </div>
        </div>
        <div className="hidden absolute right-20 top-32 z-10 md:flex  flex-col gap-5 items-center">
          <div className="bg-green-600 w-[1.5px] h-[250px]"></div>
          <BsFacebook
            className="text-green-600 hover:-translate-x-1.5 duration-300"
            size={25}
          />
          <BsTwitter
            className="text-green-600 hover:-translate-x-1.5 duration-300"
            size={25}
          />
          <BsYoutube
            className="text-green-600 hover:-translate-x-1.5 duration-300"
            size={25}
          />
        
          <BsLinkedin
            className="text-green-600 hover:-translate-x-1.5 duration-300"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
