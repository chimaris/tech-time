import React from 'react'
import logo from '../../assets/logo.svg'


const Nav = () => {
  return (
    <div className='flex justify-around items-center mx-24 py-[55px]'>
        <div className='w-[450px]'>
            <img src={logo} alt="logo" />
        </div>
        <ul className='flex items-center gap-5 text-[#AAC4E6]'>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Testimonial</li>
            <li>Community</li>
            <li className='px-8 py-4 bg-white text-blue-800'>Enroll Now</li>
        </ul>
    </div>
  )
}

export default Nav