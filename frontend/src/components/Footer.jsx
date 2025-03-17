import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 md:mt-25 text-sm'>
                {/* ====== LEFT ===== */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="logo " />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nostrum dolor facere provident neque repellat sunt inventore veritatis veniam, animi possimus dolorem qui? Doloremque eaque totam modi, dignissimos quae atque.
                    </p>
                </div>

                {/* ====== CENTER ===== */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li onClick={() => {navigate('/'); scrollTo(0,0);}} className='cursor-pointer'>Home</li>
                        <li onClick={() => {navigate('/about'); scrollTo(0,0);}} className='cursor-pointer'>About Us</li>
                        <li onClick={() => {navigate('/contact'); scrollTo(0,0);}} className='cursor-pointer'>Contact Us</li>
                        <li onClick={() => {navigate('/privacy-policy'); scrollTo(0,0);}} className='cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>

                {/* ====== RIGHT ===== */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+255 716 491 716</li>
                        <li>info@prescripto.com</li>
                    </ul >
                </div>
            </div>

            {/* ====== COPYRIGHT ===== */}
            <div>
                <hr className='text-gray-300' />
                <p className='py-5 text-sm text-center'>&copy; {new Date().getFullYear()} Prescripto - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer