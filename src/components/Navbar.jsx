import React from 'react'

import  '../components/Navbar.css';
import Toggle from '../components/toggle/Toggle';
const Navbar = () => {
  return (
    <div>
      <div className=' n-wrapper flex justify-between h-[10vh]'>
        <div className='n-left flex-1 flex text-center gap-8'>
            <div className='n-name font-bold text-[1.3rem]'>
                Salma Anika
            </div>
            <span>
              <Toggle/>
            </span>
        </div>
        <div className='right flex flex-1 text-center justify-center'>
            <div className='n-list'>
                <ul className='flex gap-8 mr-16 hover:cursor-pointer ' style={{listStyleType:'none'}}>
                    <li className='font-semibold'>Home</li>
                    <li className='font-semibold'>Services</li>
                    <li className='font-semibold'>Experience</li>
                    <li className='font-semibold'>Portfolio</li>
                    <li className='font-semibold'>Testimonials</li>
                </ul>
            </div>
            <button className='button-contact'>
                Contact
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
