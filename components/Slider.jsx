import React from 'react'
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Attic from '../public/assests/attic.jpeg'
import Bedroom from '../public/assests/bedroom.jpg'
import Bethroom from '../public/assests/bethroom.jpeg'
import Diningroom from '../public/assests/diningroom.jpg'
import Image from 'next/image';
import Button from './Button';


const categories=[
    {
        name:"Attic",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam eos minus aperiam. Aliquid consequatur, officiis iure recusandae ex alias.",
        image:Attic,
        btnText:"Explore",
    },
    {
        name:"Bedroom",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam eos minus aperiam. Aliquid consequatur, officiis iure recusandae ex alias.",
        image:Bedroom,
        btnText:"Explore",
    },   {
        name:"Bethroom",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam eos minus aperiam. Aliquid consequatur, officiis iure recusandae ex alias.",
        image:Bethroom,
        btnText:"Explore",
    },   {
        name:"Diningroom",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam eos minus aperiam. Aliquid consequatur, officiis iure recusandae ex alias.",
        image:Diningroom,
        btnText:"Explore",
    },
]

const Slider = () => {
  return (
    <Swiper
     slidesPerView={1}
     spaceBetween={30}
     navigation={true}
     modules={[Navigation]}
     breakpoints={{
        700:{
            slidesPerView:1,
        }
     }} className="min-h-[660px] categorySlider"
   
    > 
      {
        categories.map((c,idx)=>{
            return(
                <>
                
              <SwiperSlide className='bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10 ' key={idx}>
                <div className='flex  flex-col gap-y-5 md:flex-row md:gax16'>
                    <Image src={c.image} height={400} width={400} />
                    <div className="flex flex-row gap-y-5">
                       <div className='text-2xl font-medium py-10 mx-10  '> 
                           {c.name} 
                        <div className="h-[3px] w-[40px] bg-green-600 rounded "></div>
                        <div className="text-[20px ] text-gray-600 ">{c.desc}</div>
                        <div >
                         <Button link="#" text={c.btnText} />
                        </div>
                       </div>
                    </div>
                </div>
              </SwiperSlide>

                </>
            )
        })
    }    
    </Swiper>      

  )
}

export default Slider