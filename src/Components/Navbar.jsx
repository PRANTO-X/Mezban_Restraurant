import React from 'react'
import { useState,useEffect } from 'react';
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark  } from '@fortawesome/free-solid-svg-icons';
import useActiveSection from '../Hooks/useActiveSection';




const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false);
      const activeSection = useActiveSection();

  


    let handleMobileMenu = ()=>{
        setShowMobileMenu(prev=>!prev);
    }

    useEffect(()=>{
        if(showMobileMenu){
            document.body.classList.add('overflow-hidden');
        }else{
            document.body.classList.remove('overflow-hidden');
        }
        return ()=>{
            document.body.classList.remove('overflow-hidden');
        }
    },[showMobileMenu])

  return (
    <header className='fixed top-0 left-0 right-0 bg-bg-secondary z-100'>
        <nav className='container mx-auto px-6 md:px-8 py-3 flex justify-between items-center'>

            <ul className='xl:flex gap-5 items-center hidden'>
                <a href=""><img src={assets.Facebook} alt="facebook" loading='lazy' /></a>
                <a href=""><img src={assets.Twitter} alt="twitter" loading='lazy' /></a>
                <a href=""><img src={assets.Instagram} alt="instagram" loading='lazy' /></a>
                <a href=""><img src={assets.LinkedIn} alt="linkedin" loading='lazy' /></a>
             </ul>

             <div className='hidden md:flex justify-between items-center gap-10 lg:gap-20 w-full mx-auto xl:w-auto'>
                <ul className='space-x-8 md:space-x-5'>
                    <a href="#Home" className={`nav-link ${activeSection === 'Home' ? 'active' : ''}`}>Home</a>
                    <a href="#About" className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}>About</a>
                    <a href="#Menu" className={`nav-link ${activeSection === 'Menu' ? 'active' : ''}`}>Menu</a>
                    <a href="#Gallery" className={`nav-link ${activeSection === 'Gallery' ? 'active' : ''}`}>Gallery</a>
                </ul>

                <img src={assets.logo} alt="logo" loading='lazy'/>

                <ul className='space-x-8 md:space-x-5'>
                    <a href="#Team" className={`nav-link ${activeSection === 'Team' ? 'active' : ''}`}>Team</a>
                    <a href="#Events" className={`nav-link ${activeSection === 'Events' ? 'active' : ''}`}>Events</a>
                    <a href="#Blog" className={`nav-link ${activeSection === 'Blog' ? 'active' : ''}`}>Blog</a>
                    <a href="#Contact" className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}>Contact</a>
                </ul>
             </div>

             <div className='hidden xl:block'>
                <button className='btn'>BOOK A TABLE</button>
             </div>


            {/* Mobile Menu */}
            <div className="md:hidden z-100">
                <img src={assets.logo} alt="logo" className='w-3/4 sm:w-full' loading='lazy'/>
            </div>

            <button onClick={handleMobileMenu} className='md:hidden z-100'>
                <FontAwesomeIcon icon={showMobileMenu ? faXmark : faBars} className='text-2xl md:text-3xl text-white' />
            </button>

            <div className={`md:hidden absolute top-full left-0 w-full min-h-screen bg-bg-secondary 
                py-10 z-50 transition-transform duration-500 ease-in-out transform  overflow-hidden
                ${showMobileMenu ? '-translate-y-0' : '-translate-y-full'}`}>

                <ul className='flex flex-col justify-center items-center gap-10 '>
                    <a onClick={handleMobileMenu} href="#Home" className={`nav-link ${activeSection === 'Home' ? 'active' : ''}`}>Home</a>
                    <a onClick={handleMobileMenu} href="#About" className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}>About</a>
                    <a onClick={handleMobileMenu} href="#Menu" className={`nav-link ${activeSection === 'Menu' ? 'active' : ''}`}>Menu</a>
                    <a onClick={handleMobileMenu} href="#Gallery" className={`nav-link ${activeSection === 'Gallery' ? 'active' : ''}`}>Gallery</a>
                    <a onClick={handleMobileMenu} href="#Team" className={`nav-link ${activeSection === 'Team' ? 'active' : ''}`}>Team</a>
                    <a onClick={handleMobileMenu} href="#Events" className={`nav-link ${activeSection === 'Events' ? 'active' : ''}`}>Events</a>
                    <a onClick={handleMobileMenu} href="#Blog" className={`nav-link ${activeSection === 'Blog' ? 'active' : ''}`}>Blog</a>
                    <a onClick={handleMobileMenu} href="#Contact" className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}>Contact</a>
                </ul>
            </div>

            
        </nav>
    </header>
  )
}

export default Navbar