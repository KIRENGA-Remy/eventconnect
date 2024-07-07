import React, { useState } from 'react';
import { logo, lock, hamburgerMenu, close } from '../assets';
import userImage from '../assets/user.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className='w-full h-[80px] bg-white top-0 border-b z-20'>
            <div className='container mx-auto flex justify-between items-center h-full px-4'>
                <Link to='/'>
                    <img src={logo} className="w-40" alt="logo" />
                </Link>
                <div className='hidden md:flex items-center'>
                    <ul className='flex space-x-6'>
                        <li><Link to='/' className='hover:underline'>Home</Link></li>
                        <li><Link to='/services' className='hover:underline'>Products & Services</Link></li>
                        <li><Link to='/about' className='hover:underline'>About</Link></li>
                        <li><Link to='/support' className='hover:underline'>Support</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex items-center space-x-4'>
                    <Link to='/authentication' className='flex items-center space-x-2'>
                        <img src={lock} alt='lock' />
                        <span>Login</span>
                    </Link>
                    <Link to='/authentication/signup' className='px-4 py-2 rounded-md bg-[#20B486] text-white font-bold hover:bg-[#558173]'>
                        Sign Up
                    </Link>
                    <div className='text-2xl items-center w-[40px] h-[40px] rounded-full cursor-pointer'>
                         { userData.userprofile ? <img src={userData.userprofile} className='h-full w-full' alt={userData.userprofile} /> : <img src={userImage} className='h-full w-full' alt={userImage} /> }
                    </div>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} alt='toggle' />
                </div>
            </div>
            {toggle && (
                <div className='absolute top-[80px] left-0 w-full bg-white z-10 border-b'>
                    <ul className='flex flex-col p-4'>
                        <li><Link to='/' className='p-2 hover:bg-gray-100'>Home</Link></li>
                        <li><Link to='/services' className='p-2 hover:bg-gray-100'>Products & Services</Link></li>
                        <li><Link to='/about' className='p-2 hover:bg-gray-100'>About</Link></li>
                        <li><Link to='/support' className='p-2 hover:bg-gray-100'>Support</Link></li>
                        <div className='flex flex-col mt-4 space-y-2'>
                            <Link to='/authentication' className='flex items-center justify-center border border-[#20B486] px-4 py-2'>
                                <img src={lock} alt='lock' />
                                <span className='ml-2'>Login</span>
                            </Link>
                            <Link to='/authentication/signup' className='px-4 py-2 rounded-md bg-[#20B486] text-white font-bold hover:bg-[#608d7f]'>
                                Sign Up
                            </Link>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
