import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-400'>
            <img onClick={() => { navigate('/'); scrollTo(0, 0) }} className='w-44 cursor-pointer' src={assets.logo} alt="prescripto logo" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {token ? (
                    <div className='relative cursor-pointer' ref={dropdownRef}>
                        <div className='flex items-center gap-2' onClick={() => setShowDropdown(prev => !prev)}>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile picture" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown icon" />
                        </div>

                        {showDropdown && (
                            <div className='absolute top-10 right-0 min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg text-gray-600 z-20 dropdown-menu'>
                                <p className="hover:text-black cursor-pointer" onClick={() => { navigate('/my-profile'); setShowDropdown(false); }}>My Profile</p>
                                <p className="hover:text-black cursor-pointer" onClick={() => { navigate('/my-appointments'); setShowDropdown(false); }}>My Appointments</p>
                                <p className="hover:text-black cursor-pointer" onClick={() => { setToken(false); navigate('/'); scrollTo(0, 0); setShowDropdown(false); }}>Logout</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='bg-primary text-white px-8 py-3 rounded-full cursor-pointer font-bold hidden md:block border border-blue-100 hover:text-primary hover:bg-blue-50 transition-all duration-300'>
                        Create Account
                    </button>
                )}
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu Icon" />
                {/* === Mobile Menu === */}
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="logo" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="cross icon" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => { scrollTo(0, 0); setShowMenu(false) }} to='/'><p className='px-4 py-2 rounded-xl inline-block'>Home</p></NavLink>
                        <NavLink onClick={() => { scrollTo(0, 0); setShowMenu(false) }} to='/doctors'><p className='px-4 py-2 rounded-xl inline-block'>All Doctors</p></NavLink>
                        <NavLink onClick={() => { scrollTo(0, 0); setShowMenu(false) }} to='/about'><p className='px-4 py-2 rounded-xl inline-block'>About</p></NavLink>
                        <NavLink onClick={() => { scrollTo(0, 0); setShowMenu(false) }} to='/contact'><p className='px-4 py-2 rounded-xl inline-block'>Contact</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar