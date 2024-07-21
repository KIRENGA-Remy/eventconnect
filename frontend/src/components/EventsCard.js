import React from 'react'
import { FaClock , FaRegCalendar} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
// import  image  from '../assets/arenas.jpg'
// import genz  from '../assets/genz.jpeg'
// import  gen  from '../assets/genz.jpg'


function EventsCard({name, id, image, category, country, startTime}) {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000
  // };
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
    // <Slider {...settings} className=''>
      <Link to={`menu/${id}`}>
    <span className='bg-white shadow-md p-4 rounded-md'>
    <div className='relative'>
          <img src={image} className='w-[300px] h-[180px] object-fill my-2' />
          <span className='absolute bottom-0 right-0 w-max h-max z-10 bg-green-500 text-white p-2 rounded-t-md rounded-tr-none font-semibold'>Upcoming</span>
    </div>
    <div className='flex flex-row justify-between'>
    <p><span className='font-bold text-2xl text-[#20B486]'>{name}</span></p><h1><span className='px-1 font-bold '>At</span>{startTime}</h1>
    </div>
    <div className='flex flex-row justify-between py-2'>
      <div className='flex flex-col'>
      <p><span className='pr-1 font-bold'>Country:</span>{country}</p>
      <p><span className='pr-1 font-bold'>Category:</span>{category}</p>
    </div>
    <p className='py-3 px-4  rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
    </div>
    <p className='bg-blue-600 hover:bg-blue-700 w-full p-2 text-white flex justify-center'>Buy Ticket</p>
    </span>
    </Link>
    // </Slider>
  )
}

export default EventsCard
