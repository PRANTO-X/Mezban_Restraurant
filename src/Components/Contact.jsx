import React from 'react'
import Form from './Form'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div id='Contact' className='section-container scroll-mt-16 sm:scroll-mt-24'>
        <div className="flex flex-col gap-3 justify-center items-center text-center  mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Contact Us</h2>
            <p className='title'>Contact</p>
        </div>        

        <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="contact-card">
                <img src={assets.call_icon} alt="call icon" loading='lazy' className='w-18 md:w-20'/>
                <h2 className='text-white text-2xl md:text-3xl font-bold tracking-wide my-5'>Call Now:</h2>
                <p className='text-white md:text-lg font-bold mb-1.5'>+1 555-028654</p>
                <p className='text-white md:text-lg font-bold'>+1 555-896531</p>
            </div>

            <div className="contact-card">
                <img src={assets.email_icon} alt="email icon" loading='lazy' className='w-18 md:w-20'/>
                <h2 className='text-white text-2xl md:text-3xl font-bold tracking-wide my-5'>Email Now:</h2>
                <p className='text-white md:text-lg font-bold mb-1.5'>info@restaurant.com</p>
                <p className='text-white md:text-lg font-bold'>contact@restaurant.com</p>
            </div>

            <div className="contact-card">
                <img src={assets.location_icon} alt="location icon" loading='lazy' className='w-18 md:w-20'/>
                <h2 className='text-white text-2xl md:text-3xl font-bold tracking-wide my-5'>Location:</h2>
                <p className='text-white md:text-lg font-bold mb-1.5'>14/A Banani, Dhaka-1207</p>
                <p className='text-white md:text-lg font-bold'>Mohammadpur, Dhaka-1206</p>
            </div>
        </div>

        <Form/>
    </div>
  )
}

export default Contact