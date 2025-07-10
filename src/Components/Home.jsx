import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div id='Home' className='min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden bg-fixed
                                flex flex-col gap-5  justify-center items-center -z-10 hero'>  
        <Navbar/>

        <h3 className='text-xl sm:text-2xl md:text-4xl  text-primary font-bold tracking-wide'>WELCOME OUR GUEST</h3>
        <h1 className='text-4xl sm:text-6xl md:text-7xl text-white font-bold leading-tight'>Enjoy Delicious & <br />Authentic Cuisine</h1>
        <button className='btn md:text-xl'>DISCOVER OUR MENU</button> 
    </div>
  )
}

export default Home