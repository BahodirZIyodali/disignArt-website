import React from 'react'
import Headline from './Headline';
import Slider from './Slider';

const Categorie = () => {
  return (
    <section id='categories' className='bg-slate-200 min-h-[680px] py-16'>
      <div className='container mx-auto  h-[680px]'>
       <Headline title="categories"/>
       <Slider/> 
      </div>
    </section>
  )
}

export default Categorie