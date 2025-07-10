import React from 'react'
import { assets,Blogs } from '../assets/assets'


const Blog = () => {
  return (
    <div className='section-container'>
        <div className="flex flex-col gap-3 justify-center items-center text-center  mb-10 md:mb-12">
            <img src={assets.heading_icon} alt="heading icon" loading='lazy'/>
            <h2 className='heading'>Our Recent Blog</h2>
            <p className='title'>Recent Blog</p>
        </div> 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Blogs.map((blog,index)=>(
                <div key={index} className="flex flex-col gap-5 justify-center items-center">
                    <div className="relative">
                        <img src={blog.img} alt="blog img" loading='lazy' />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className='text-white text-sm flex gap-1 items-center'><img src={assets.admin_icon} alt="author icon" loading='lazy'/>{blog.author}</span>
                        <span className='text-white text-sm flex gap-1 items-center'><img src={assets.comment_icon} alt="comment icon" loading='lazy'/>Comments({blog.comments})</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blog