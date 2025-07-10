import React from 'react'
import { assets,feedbacks } from '../assets/assets'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'

const Feedback = () => {
  return (
    <div id='Feedback' className='section-container'>
        <div className="flex flex-col gap-3 justify-center items-center text-center  mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Customer Feedback</h2>
            <p className='title'>Testimonials</p>
        </div>

        <Swiper
            className='!pb-16'
            modules={[ Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
                0: { slidesPerView: 1, },
                768: { slidesPerView: 2 },
                }}
        >

            {feedbacks.map((feedback,index)=>(  
                <SwiperSlide key={index} className="p-5 border-2 border-primary space-y-4 rounded-lg min-h-72">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className='mb-1 text-2xl  text-white font-bold tracking-wide'>{feedback.name}</h2>
                            <div className="flex items-center gap-1.5">
                                <p className='text-primary md:text-lg'>{feedback.role}</p>
                                <div className="flex-grow border-b-2 border-dotted border-primary"></div>
                            </div>
                        </div>

                        <div className="flex gap-1">
                            {Array.from({length: feedback.rating},(_,i)=>(
                                <img key={i} src={assets.star_icon} alt="star icon" loading='lazy' className="w-5 h-5"/>
                            ))}
                        </div>
                    </div>

                    <p className='text-white md:text-lg'>{feedback.text}</p>
                </SwiperSlide>
            ))}

        </Swiper>

    </div>
  )
}

export default Feedback