import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id='About' className='section-container lg:my-5 scroll-mt-16 sm:scroll-mt-24'>
        <div className="rounded-xl flex flex-col-reverse lg:flex-row lg:gap-8 items-center bg-bg-secondary relative overflow-hidden">
            
            <img src={assets.logo} alt="logo" loading="lazy" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-auto z-10 pointer-events-none opacity-80"/>

            <div className="lg:w-1/2 space-y-5 p-8">
                <div>
                    <h2 className='heading mb-2'>About Us</h2>
                    <p className='title'>Mezbaan cooks food as a culinary Art</p>
                </div>
                <p className='text-white md:text-xl leading-relaxed lg:max-w-[90%]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque eligendi distinctio et nostrum! Iste, repudiandae. Nostrum, odit eum cupiditate quos delectus fuga tenetur iure quasi ullam, sit aperiam deleniti?
                </p>
                <button className='btn'>Learn More</button>
            </div>

            <div className="lg:w-1/2 h-full">
                <img src={assets.about_img} alt="about img" loading='lazy' className='w-full  h-full'/>
            </div>
        </div>
    </div>
  )
}

export default About