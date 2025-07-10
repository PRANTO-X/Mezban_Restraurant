import React from 'react'
import { assets } from '../assets/assets'

const Form = () => {
  return (
    <div>
      <h2 className='heading text-center py-6 sm:py-10'>Get In Touch</h2>
      <form action="" className='flex flex-col lg:flex-row gap-4 justify-center items-center w-full'>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
              <div className="relative w-full">
                <input type="text" placeholder='Your name' className='border border-primary px-4 py-3 pr-12 rounded w-full  text-white focus:outline-none'/>
                <img src={assets.person_icon} alt="person icon" loading='lazy' className='absolute top-1/4 right-2 transform -translate-x-1/2 ' />
              </div>
              <div className="relative w-full">
                <input type="email" placeholder='Email address' className='border border-primary px-4 py-3 pr-12 rounded w-full  text-white focus:outline-none'/>
                <img src={assets.gray_email_icon} alt="email icon" loading='lazy' className='absolute top-1/4 right-2 transform -translate-x-1/2' />
              </div>
              <div className="relative w-full">
                <input type="number" placeholder='Your name' className='border border-primary px-4 py-3 pr-12 rounded w-full  text-white focus:outline-none'/>
                <img src={assets.phone_icon} alt="phone icon" loading='lazy' className='absolute top-1/4 right-2 transform -translate-x-1/2 ' />
              </div>
          </div>

          <div className="lg:w-1/2 w-full">
              <div className="relative w-full">
                <textarea name="" placeholder='your message' className='h-44 resize-none border border-primary px-4 py-3 pr-12 rounded w-full  text-white focus:outline-none'></textarea>
                <img src={assets.message_icon} alt="message icon"className='absolute top-4 right-2 transform -translate-x-1/2'/>
              </div>
          </div>
      </form>
    </div>
  )
}

export default Form