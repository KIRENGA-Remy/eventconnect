import React from 'react'
import { logo } from '../assets'
import { FaDribbble, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-2 max-w-[600px]  px-4 md:px-8'>
            
            <div className='col-span-2'>
                <img src={logo} className="w-[10rem]" alt='logo' />
                <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                <h3 className='py-2 text-[#6D737A]'>Call : +250 784191775</h3>
                <h3 className='py-2 text-[#6D737A]'>We value your opinion. Tell us how we can enhance your app experience.</h3>
                <h3>Email: <a href="mailto: eventconnect123@gmail.com" className="text-blue-500 underline">eventconnect123@gmail.com</a></h3>
                <div className='flex max-sm:gap-1'>
                    <a
                    href="https://www.facebook.com/kirengaremyclaudien/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-6 max-sm:p-2 ">
                    <RiFacebookFill  className='rounded-full p-2 text-5xl border border-blue-900 bg-white-100 hover:bg-green-500 text-green-500 hover:text-white' />
                    </a>
                    <a 
                    href="https://dribbble.com/byumvuhoreaimable" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-4 py-6 max-sm:p-2 ">
                    <FaDribbble  className='rounded-full p-2 text-5xl border border-blue-900 bg-white-100 hover:bg-green-500 text-green-500 hover:text-white'  />
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/jeremy-nk-413a612a6/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-4 py-6 max-sm:p-2 ">
                    <FaLinkedinIn   className='rounded-full p-2 text-5xl border border-blue-900 bg-white-100 hover:bg-green-500 text-green-500 hover:text-white' />
                    </a>
                    <a 
                    href="www.instagram.comhttps://www.instagram.com/firstttyyy.____/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-4 py-6 max-sm:p-2 ">
                    <FaInstagram  className='rounded-full p-2 text-5xl border border-blue-900 bg-white-100 hover:bg-green-500 text-green-500 hover:text-white'  />
                    </a>
                    <a 
                    href="https://www.youtube.com/@BAI-SHOWS" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-4 py-6 max-sm:p-2 ">
                    <FaYoutube  className='rounded-full p-2 text-5xl border border-blue-900 bg-white-100 hover:bg-green-500 text-green-500 hover:text-white'  />
                    </a>

                </div>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2 hover:underline'><Link to={'/'}>Home</Link></li>
                    <li className='py-2 hover:underline'><Link to={'/about'}>About</Link></li>
                    <li className='py-2 hover:underline'><Link to={'/support'}>Support</Link></li>
                    <li className='py-2 hover:underline'><Link to={'/contact'}>Contacts</Link></li>
                    <li className='py-2 hover:underline'><Link to={'/termsandconditions'}>Terms & Conditions</Link></li>
                    <li className='py-2 hover:underline'><Link to={'/privacyandpolicy'}>Privacy & Policy</Link></li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>Category</h3>
                <ul className='py-6 text-[#6D737A]'>
                      <Link to='design'><li className='py-2 hover:underline'>Design</li></Link>
                      <Link to='development'><li className='py-2 hover:underline'>Development</li></Link>
                      <Link to='marketing'><li className='py-2 hover:underline'>Marketing</li></Link>
                      <Link to='business'><li className='py-2 hover:underline'>Business</li></Link>
                      <Link to='lifestyle'><li className='py-2 hover:underline'>Lifestyle</li></Link>
                      <Link to='photography'><li className='py-2 hover:underline'>Photography</li></Link>
                      <Link to='music'><li className='py-2 hover:underline'>Music</li></Link>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Subscribe</h3>
                <h3 className='py-2 text-[#6D737A]'>Enter your email to subscribe <br></br> so that you can stay connected to upcoming events worldwide.</h3>
                <form className='py-4'>
                    <input 
                        className='bg-[#F2F3F4] p-4 w-full rounded' 
                        placeholder='Email here' 
                    />
                    <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md hover:bg-[#6dcfb0] bg-[#20B486]  text-white font-medium'>Subscribe Now</button>

                  </form>


            </div>
       
          </div>
          <footer className=" text-gray-600 text-center w-full mt-8 mb-0">
           <p>&copy; Copyright Event Connect {new Date().getFullYear()} All rights reserved</p>
      </footer>
      </div>  
  )
    
}

export default Footer