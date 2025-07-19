import React from 'react'
import { assets,menu } from '../assets/assets'

const Menu = () => {
  return (
    <div id='Menu' className='section-container scroll-mt-16 sm:scroll-mt-24'>
        <div className="flex flex-col gap-3 justify-center items-center text-center mb-10 sm:mb-12 lg:mb-0">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Checkout Our Menu</h2>
            <p className='title'>Our Menu List</p>
        </div>

        <div className="min-h-screen flex flex-col md:flex-row justify-between items-center gap-6 bg-center bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${assets.menu_img})` }}>

            <div className="w-full  lg:w-[36%] bg-bg-secondary p-8 rounded-lg flex flex-col justify-center items-center gap-6"> 
                {menu.map((item,index)=>(
                    <div key={index} className="flex items-center justify-between w-full">
                        <div>
                        <h4 className='text-lg md:text-xl lg:text-2xl text-white font-medium'>{item.name}</h4>
                        <p className='text-primary text-sm lg:text-[16px]'>{item.description}</p>
                    </div>
                    <div className="flex-grow border-b-2 border-dotted border-primary mx-4"></div>
                    <h4 className='text-white text-lg md:text-xl lg:text-2xl'>{item.price}</h4>
                    </div>     
                ))}     
            </div>

            <div className="w-full  lg:w-[36%] bg-bg-secondary p-8 rounded-lg flex flex-col justify-center items-center gap-6"> 
                {menu.map((item,index)=>(
                    <div key={index} className="flex items-center justify-between w-full">
                        <div>
                        <h4 className='text-lg md:text-xl lg:text-2xl text-white font-medium'>{item.name}</h4>
                        <p className='text-primary text-sm lg:text-[16px]'>{item.description}</p>
                    </div>
                    <div className="flex-grow border-b-2 border-dotted border-primary mx-4"></div>
                    <h4 className='text-white text-lg md:text-xl lg:text-2xl'>{item.price}</h4>
                    </div>     
                ))}    
            </div>
        </div>
    </div>
  )
}

export default Menu