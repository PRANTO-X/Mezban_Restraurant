import React from 'react'
import { assets,Blogs } from '../assets/assets'


const Blog = () => {
  return (
    <div id='Blog' className='section-container scroll-mt-16 sm:scroll-mt-24'>
        <div className="flex flex-col gap-3 justify-center items-center text-center  mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Our Recent Blog</h2>
            <p className='title'>Recent Blog</p>
        </div> 

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Blogs.map((blog,index)=>(
                <div key={index} 
                className="flex flex-col gap-5 justify-center items-center group border 
                border-transparent hover:border-primary rounded-lg p-5 transition duration-300">
                    <div className="relative w-full sm:w-auto mx-auto">
                        <img src={blog.img} alt="blog img" loading='lazy' className='w-full'/>
                        <span className='absolute top-5 left-0 p-1 bg-primary rounded-r text-white text-sm'>{blog.date}</span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <span className='text-white text-sm flex gap-1 items-center'>
                            <img src={assets.admin_icon} alt="author icon" loading='lazy'/>{blog.author}
                        </span>
                        <span className='text-white text-sm flex gap-1 items-center'>
                            <img src={assets.comment_icon} alt="comment icon" loading='lazy'/>Comments({blog.comments})
                        </span>
                    </div>
                    <h3 className='text-white text-lg md:text-xl font-bold tracking-wide'>{blog.title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blog