import React from 'react'
import { assets } from '../assets/assets'

const Reserve = () => {
  return (
    <div className='section-container'>
        <div className="flex flex-col gap-3 justify-center items-center text-center mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Reserve Your Table</h2>
            <p className='title'>Book a table in advance to enjoy your time with friends & family</p>
        </div>

        <form action="" className='w-full flex flex-col lg:flex-row items-center justify-center gap-7'>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 flex-1">
                <div className="w-full">
                    <input className=" border border-primary px-4 py-3 pr-12 rounded w-full  text-white focus:outline-none" type="text" placeholder='Your Name'/>
                </div>

                <div className="w-full">
                    <input className="border border-primary px-4 py-3 pr-12 rounded w-full text-white focus:outline-none" type="text" placeholder='No. Of Person'/>
                </div>

                <div className="relative w-full">
                    <input type="date" className="border border-primary px-4 py-3 pr-12 rounded w-full text-white focus:outline-none"  />
                    <img src={assets.calaender_icon} alt="calendar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
                </div>
                
                <div className="relative w-full">
                    <input className="border border-primary px-4 py-3 pr-12 rounded w-full text-white focus:outline-none" type="time" />
                    <img src={assets.clock_icon} alt="clock" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
                </div>
            </div>

            <div>
                <button className='btn py-3'>Book A Table</button>
            </div>
        </form>
    </div>
  )
}

export default Reserve