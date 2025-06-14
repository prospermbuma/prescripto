import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const [visibleDoctors, setVisibleDoctors] = useState(10);

    useEffect(() => {
        const updateSliceRange = () => {
            if (window.innerWidth >= 1800) {
                // For desktops 1800px and above
                setVisibleDoctors(12);
            } else {
                // For Laptops (below 1800px)
                setVisibleDoctors(10);
            }
        }

        updateSliceRange();
        window.addEventListener("resize", updateSliceRange);
    }, []);

    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center gap-4 mt-0 mb-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0, visibleDoctors).map((item) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={item._id}>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0); }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer hover:bg-primary hover:text-white transition-all duration-400'>More</button>
        </div>
    )
}

export default TopDoctors