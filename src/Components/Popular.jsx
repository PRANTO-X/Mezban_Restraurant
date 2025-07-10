import React from 'react'
import { assets,popularItems } from '../assets/assets'

const Popular = () => {
  return (
    <div className='section-container lg:my-8 scroll-mt-16 sm:scroll-mt-24'>
        <div className="flex flex-col gap-3 justify-center items-center text-center mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Mezbaan Popular Item List</h2>
            <p className='title'>Our Popular Item</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
                <div key={index}>

                <div className='flex justify-center z-10 relative'>
                    <img src={item.img} alt={item.name} loading='lazy' className='w-[90%]'/>
                    <span className='price-tag text-sm text-primary font-bold absolute bg-white border-2  border-primary p-1 left-10'>
                        {item.price}
                    </span>
                </div>

                <div className="item-card relative bg-bg-secondary rounded-lg p-7  flex flex-col justify-center items-center gap-4 text-center">

                    <div className="flex gap-1 justify-center">
                        {Array.from({ length: item.rating }, (_, i) => (
                        <img key={i} src={assets.star_icon} alt="star icon" loading="lazy" className="w-5 h-5" />
                        ))}
                    </div>

                    <h2 className="text-2xl  text-white font-bold tracking-wide">{item.name}</h2>
                    <p className="text-gray-500 md:text-lg">{item.description}</p>
                </div>
                
                </div>
            ))}
        </div>

    </div>
  )
}

export default Popular