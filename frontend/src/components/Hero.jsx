import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>START TO SUCCESS</p>
                <h1 className='md:leading-[72px] py-2 md:text-4xl text-5xl font-semibold'>Access To <span className='text-[#20B486]'>500+</span> Events
                    from <span  className='text-[#20B486]'>100+</span> Organisers
                    & Institutions
                </h1>
                <p className='py-2 text-lg text-gray-600'>Enhance your event with top-notch audiovisual services at budget-friendly prices.</p>
                <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What is the event?'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />
                    </button>
                </form>
            </div>
            <img  src={heroImg} className="md:order-last lg:ml-2 order-first " alt='heroImg' />
        </div>
    </div>
  )
}

export default Hero