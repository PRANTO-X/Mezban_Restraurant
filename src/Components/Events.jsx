import React from 'react'
import { assets } from '../assets/assets'

const Events = () => {
  return (
    <div id='Events' className='section-container'>
        <div className="flex flex-col gap-3 justify-center items-center text-center  mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Organize Your Events in our Mezbaan</h2>
            <p className='title'>Events</p>
        </div>     

        <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className='lg:w-1/2'>
                <img src={assets.event_img} alt="event img" loading='lazy' />
            </div>

            <div className="lg:w-1/2 space-y-1.5">
                <h2 className='text-primary text-2xl md:text-3xl font-bold tracking-wide'>Private Parties</h2>
                <p className='text-white md:text-lg mb-3 font-bold border-b-2 border-dashed border-primary inline-block'>Tk.5000/-</p>

                <p className='text-white md:text-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga praesentium rem aut 
                    sapiente veritatis voluptas repellendus provident mollitia, tempora est cumque, molestias 
                    dolore architecto impedit id ex, deleniti eligendi nesciunt ratione qui velit laborum? Magnam 
                    id aliquam facilis quae reprehenderit nesciunt blanditiis consectetur doloribus officia at cumque 
                    eum minima illum harum provident itaque sequi fugiat et, facere ullam eos soluta.
                </p>
            </div>
        </div>   
    </div>
  )
}

export default Events