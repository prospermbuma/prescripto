import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 text-sm'>

        <img className='w-full md:max-w-[360px] rounded-2xl' src={assets.contact_image} alt="Contact Image" />

        <div className='flex flex-col justify-start items-start gap-4 w-full h-auto rounded-2xl py-10 sm:py-10 px-10 border border-blue-100  bg-blue-50'>
          <p className='font-semibold text-lg text-gray-700'>OUR OFFICE</p>
          <p className='text-gray-600'>54790 Wilms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-600'>Tel: +255 716 491 716 <br /> Email: info@prescripto.com</p>
          <p className='font-semibold text-lg text-gray-700'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='bg-primary text-white px-8 py-3 rounded-full cursor-pointer font-bold border border-primary hover:border-blue-400 hover:text-primary hover:bg-blue-50 transition-all duration-300'>Explore Jobs</button>
        </div>

      </div>

      <div>
        <iframe className='w-full h-120 rounded-xl' title="IFM Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6367935266585!2d39.29122961471989!3d-6.8139554950752075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b113fc2db53%3A0x1735d30e3398bba!2sInstitute%20of%20Finance%20Management%20(IFM)!5e0!3m2!1sen!2stz!4v1622844016338!5m2!1sen!2stz"
          allowfullscreen="" loading="lazy">
        </iframe>
      </div>

    </div>
  )
}

export default Contact