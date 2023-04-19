import React from 'react'
import Headline from './Headline'
import Card from './Card';


const Product = () => {
  return (
    <section id="product" className='py-16 mx-auto  p-4 max-w-[1640px]'>
        <Headline title='Products'/> 
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-16' >
            <Card d img='/assests/furtinure.jpg' title='Qing Red Lacquer'/>
            <Card img='/assests/sx1gjf8g1lfgcor_5d6dc84d.jpg.webp' title='Kitchen Furtinure'/>
            <Card img='/assests/furtinure2.jpg' title='Living Room Furtinure'/>
            <Card img='/assests/furniture3.jpg' title='Good Furtinure'/>
            <Card img='/assests/furniture4.jpeg' title='Brown Furtinure'/>
            <Card img='/assests/furniture5.jpg' title='Yellow Furtinure'/>
        </div>
    </section>
  )
}

export default Product