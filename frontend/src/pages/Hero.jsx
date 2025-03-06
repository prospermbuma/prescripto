import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* ==== Hero-Left === */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="Group profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.
          </p>
        </div>
        <a href="">
          Book appointment <img src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>
      {/* ==== Hero-Right === */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Hero image" />
      </div>
    </div>
  )
}

export default Hero