import React from 'react'
import { assets,chefs } from '../assets/assets'

const Chefs = () => {
  return (
    <div id='Team' className='section-container scroll-mt-16 sm:scroll-mt-24'>
        <div className="flex flex-col gap-3 justify-center items-center text-center  mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Meet Our Chefs</h2>
            <p className='title'>Experienced Team</p>
        </div>

        <div className="flex flex-wrap flex-row gap-7 ">
            {chefs.map((chef,index)=>(
                <div key={index} className=" w-full md:w-[45%] lg:w-[30%] mx-auto flex flex-col  justify-center gap-3 sm:gap-5 rounded-lg">
                    <img src={chef.img} alt={chef.name} loading='lazy' className='rounded-lg h-3/4 md:h-auto'/>
                    <div className="">
                        <h3 className='text-white text-2xl md:text-3xl font-bold tracking-wide mb-1'>{chef.name}</h3>
                        <p className='text-primary md:text-lg'>{chef.title}</p>
                    </div>
                    <p className='text-white md:text-lg'>{chef.description}</p>          
                </div>
            ))}
        </div>
    </div>
  )
}

export default Chefs