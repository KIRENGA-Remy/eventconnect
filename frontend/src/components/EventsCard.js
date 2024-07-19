import React from 'react'
import { FaClock , FaRegCalendar} from 'react-icons/fa'
// import  image  from '../assets/arenas.jpg'
// import genz  from '../assets/genz.jpeg'
// import  gen  from '../assets/genz.jpg'


function EventsCard({name, image, category, country, startTime}) {
  return (
    // <div className='bg-white shadow-md p-2 rounded'>
    //   <div className='absolute gap-8 mx-auto w-[240px] h-[180px]'>
    //     <img src={image} className='h-full w-full object-cover' />
    //   </div>
    //   <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
    //   <div className='flex flex-row justify-between'>
    //   <p><FaRegCalendar />{date}</p>
    //  <p><FaClock />{startTime}</p>
    //   </div>
    //   <h3>{country}</h3>
    // </div>
    <span className=' shadow-md p-4 rounded-md'><img src={image} className='w-[300px] h-[180px] object-fill my-2' />
    <div className='flex flex-row justify-between'>
    <p><span className='font-bold text-2xl text-[#20B486]'>{name}</span></p><h1><span className='px-1 font-bold'><FaClock />At</span>{startTime}</h1>
    </div>
    <div className='flex flex-row justify-between py-2'>
      <div className='flex flex-col'>
      <p><span className='pr-1 font-bold'>Country:</span>{country}</p>
      <p><span className='pr-1 font-bold'>Category:</span>{category}</p>
    </div>
    <p className='py-3 px-4  rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
    </div>
    </span>
  )
}

export default EventsCard
