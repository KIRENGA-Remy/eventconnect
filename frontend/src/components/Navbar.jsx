import React, { useState } from 'react';
import { logo, lock, hamburgerMenu, close } from '../assets';
import userImage from '../assets/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import { toast } from "react-hot-toast";

const Navbar = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const handleProfile = () => (
        <div></div>
    )

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
    dispatch(logoutRedux())
    toast("Logout successfully")
};

    return (
        <div className='w-full h-[80px] bg-white top-0 border-b shadow-md z-20 fixed'>
            <div className='container mx-auto flex justify-between items-center h-full px-4'>
            {userData.email ? 
                <Link to='/dashboard' className='md:-ml-8 sm:-ml-12'>
                    <img src={logo} className="w-40" alt="logo" />
                </Link>
                :
                <Link to='/' className='md:-ml-8 sm:-ml-12'>
                    <img src={logo} className="w-40" alt="logo" />
                </Link>
            }
                <div className='hidden md:flex items-center'>
                    <ul className='flex space-x-6'>
            { userData.email ?
                <li>
                    <Link to='/dashboard' className='hover:underline font-semibold p-4'>
                          Home
                    </Link>
                </li>
                             : 
                <li>
                    <Link to='/' className='hover:underline font-semibold p-4'>
                          Home
                    </Link>
                </li>
            }
                        <li><Link to='/services' className='hover:underline font-semibold p-4'>Products & Services</Link></li>
                        <li><Link to='/about' className='hover:underline font-semibold p-4'>About</Link></li>
                        <li><Link to='/support' className='hover:underline font-semibold p-4'>Support</Link></li>
                    </ul>
                </div>
            {userData.email ?                        
                <div className='hidden md:flex items-center lg:-mr-4 *:max-lg:ml-4  sm:mr-2 '> 
                    <p className='hover:underline font-bold rounded-md cursor-pointer bg-red-500 text-white p-2' onClick={handleLogout}>Logout ( {userData.username} ) </p> 
                    <div className='ml-4' onClick={handleProfile}>
                    <div className='w-16 h-16 rounded-full overflow-hidden drop-shadow-md'>
                    {userData.userprofile ? <img src={userData.userprofile} className='h-full w-full' alt={userData.userprofile} />  : <img src={userImage} className='h-full w-full' alt={userImage} />   }  
                    </div>
                    {
                        toggle && (
                            <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col justify-center items-center'>
                                <Link to={"allevents"} className='whitespace-nowrap cursor-pointer'>All Events?</Link>
                                <Link to={"allbookings"} className='whitespace-nowrap cursor-pointer'>All Bookings?</Link>
                            </div>
                        )
                    }
                    </div>
                </div> 
                             :                 
                <div className='hidden md:flex items-center lg:-mr-4 *:max-lg:ml-4  sm:mr-2'>
                    <Link to='/authentication' className='flex items-center space-x-2 p-1 text-black font-semibold hover:underline'>
                        <img src={lock} alt='lock' />
                        <span>Login</span>
                    </Link>
                    <Link to='/authentication/signup' className='px-4 py-2 mx-2 rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold'>
                        Sign Up
                    </Link>
                </div> 
            }

                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} alt='toggle' />
                </div>
            </div>
            {toggle && (
                <div className='absolute top-[80px] left-0 w-full bg-white z-10 border-b'>
                    <ul className='flex flex-row p-10'>
                        <div className='flex flex-col items-center'>

                        { userData.email ?
                <li>
                    <Link to='/dashboard' className='hover:underline font-semibold p-2'>
                          Home
                    </Link>
                </li>
                             : 
                <li>
                    <Link to='/' className='hover:underline font-semibold p-2'>
                          Home
                    </Link>
                </li>
            }
                        <li><Link to='/services' className='p-2 hover:underline font-semibold'>Products & Services</Link></li>
                        <li><Link to='/about' className='p-2 hover:underline font-semibold'>About</Link></li>
                        <li><Link to='/support' className='p-2 hover:underline font-semibold'>Support</Link></li>
                        </div>
            { userData.email ? 
                <div className='flex flex-col mt-4 space-y-2'>
                    <p className='hover:underline bg-red-500 rounded-md p-1' onClick={handleLogout}>Logout ( {userData.username} ) </p> 
                    <div className='w-10 h-10 rounded-full overflow-hidden drop-shadow-md'>
                        {userData.userprofile ? <img src={userData.userprofile} className='h-full w-full' alt={userData.userprofile} />  : <img src={userImage} className='h-full w-full' alt={userImage} />   }
                        {/* <img src={userData.userprofile} className='h-full w-full' alt={userData.userprofile} />   */}
                    </div>
                </div>
                             :                         
                <div className='flex flex-col mt-4 space-y-2'>
                    <Link to='/authentication' className='flex items-center justify-center border border-[#20B486] hover:bg-[#20B486]  text-black font-bold hover:text-white px-4 py-1'>
                        <img src={lock} alt='lock' />
                        <span className='ml-1'>Login</span>
                    </Link>
                    <Link to='/authentication/signup' className='flex px-4 py-2 items-center justify-center bg-[#20B486] text-white font-bold hover:bg-[#608d7f]'>
                        <span className='ml-1'>Sign Up</span>
                    </Link>
                </div> }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
