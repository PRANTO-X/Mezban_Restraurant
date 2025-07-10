import React from 'react'
import { assets } from '../assets/assets'

const Strength = () => {
  return (
    <div id='Strength' className='section-container'>
        <div className="flex flex-col gap-3 justify-center items-center text-center mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Our Strength</h2>
            <p className='title'>Why Choose us</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            <div className="strength-card">
                <img src={assets.hygienic_icon} alt="icon" loading='lazy' className='w-1/3'/>
                <h4 className='text-white text-2xl font-bold tracking-wide'>Hygienic Food</h4>
                <p className='text-gray-400'>Lorem Ipsum is simply dummy printing and typesettin</p>
            </div>

            <div className="strength-card">
                <img src={assets.environment_icon} alt="icon" loading='lazy' className='w-1/3'/>
                <h4 className='text-white text-2xl font-bold tracking-wide'>Fresh Environment</h4>
                <p className='text-gray-400'>Lorem Ipsum is simply dummy printing and typesettin</p>
            </div>

            <div className="strength-card">
                <img src={assets.skilled_chef_icon} alt="icon" loading='lazy' className='w-1/3'/>
                <h4 className='text-white text-2xl font-bold tracking-wide'>Skilled Chefs</h4>
                <p className='text-gray-400'>Lorem Ipsum is simply dummy printing and typesettin</p>
            </div>

            <div className="strength-card">
                <img src={assets.party_icon} alt="icon" loading='lazy' className='w-1/3'/>
                <h4 className='text-white text-2xl font-bold tracking-wide'>Event & Party</h4>
                <p className='text-gray-400'>Lorem Ipsum is simply dummy printing and typesettin</p>
            </div>
        </div>
    </div>
  )
}

export default Strength