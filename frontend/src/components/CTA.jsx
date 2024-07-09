import React from 'react'
import { cta } from '../assets'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        <img src={cta} className="w-[650px] mx-auto" alt='cta'/>
  
        <div>
            <h1 className='py-2  text-3xl font-semibold'>Join <span className='text-[#20B486]'>World's largest</span> event connect platform on your timeline </h1>
            <p className='py-4 text-lg text-gray-600'>Start exploring by registering for free here</p>
          <Link to='/authentication/signup'>
          {/* <button className='max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] hover:bg-[#81dabe] text-white font-bold'>Sign Up For Free</button> */}
          <button className='px-2 py-3 rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold'>Sign Up For Free</button>
          </Link> 
             
        </div>
        
    </div>
    
</div>
  )
}

export default CTA