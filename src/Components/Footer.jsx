import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='border-t-2 border-primary py-7 mt-18'>
        <div className="flex flex-col justify-center items-center gap-6 text-center">
            <img src={assets.logo} alt="logo" loading='lazy' />

            
                <h4 className='text-xl sm:text-2xl text-white tracking-wide font-bold'>+1 555-028654</h4>

                <ul className=' hidden sm:flex gap-8'>
                    <a href="#Home" className='footer-link'>Home</a>
                    <a href="#About" className='footer-link'>About</a>
                    <a href="#Menu"  className='footer-link'>Menu</a>
                    <a href="#Gallery" className='footer-link'>Gallery</a>
                    <a href="#Team" className='footer-link'>Team</a>
                    <a href="#Events" className='footer-link'>Events</a>
                    <a href="#Blog" className='footer-link'>Blog</a>
                    <a href="#Contact" className='footer-link'>Contact</a>
                </ul>

                <p className='text-gray-500 text-sm sm:text-[16px]'>Copyright @ 2023 Restaurant. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer