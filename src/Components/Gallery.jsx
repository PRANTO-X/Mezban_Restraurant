import React from 'react'
import { assets } from '../assets/assets'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'

const Gallery = () => {
  return (
    <div id='Gallery' className='section-container'>
        <div className="flex flex-col gap-3 justify-center items-center text-center  mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Photo Gallery</h2>
            <p className='title'>Learn our history see our glorious journey as a restaurant</p>
        </div>

        <Swiper
            className='!pb-16'
            modules={[ Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
                    0: { slidesPerView: 1, },
                    565: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1275: {slidesPerView: 4},
                    }}
            >
            <SwiperSlide className='w-full'>
                    <img src={assets.gallarey_img_1} alt="gallery img" loading='lazy' className='w-full'/>
            </SwiperSlide>
            <SwiperSlide className='w-full'>
                    <img src={assets.gallarey_img_2} alt="gallery img" loading='lazy' className='w-full'/>
            </SwiperSlide>
            <SwiperSlide className='w-full'>
                    <img src={assets.gallarey_img_3} alt="gallery img" loading='lazy' className='w-full'/>
            </SwiperSlide>
            <SwiperSlide className='w-full'>
                    <img src={assets.gallarey_img_4} alt="gallery img" loading='lazy' className='w-full'/>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Gallery