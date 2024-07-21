import React from 'react';
import { Hero, Navbar, Companies, Courses, Achievement, Categories, Feedback, CTA, Footer } from '../components';
import EventsCard from '../components/EventsCard';
import { useSelector } from 'react-redux';
import  image  from '../assets/arenas.jpg'
import genz  from '../assets/genz.jpeg'
import  gen  from '../assets/genz.jpg'
import Slider from 'react-slick';

export default function Landing() {
  const eventData = useSelector((state) => state.event.eventList)
  const homeEventsCardList = eventData.slice(0, 100)

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000
  // };
  return (
    <div>
      <Navbar />
      <div className="flex  mx-auto max-w-screen-xl px-4 mt-16 sm:px-6 lg:px-8">
        <Hero />
        <Companies />
        {/* <div className=' flex justify-center w-full h-full flex-col md:flex-row gap-8 cursor-pointer'>
        <span className=' shadow-md p-4 rounded-md'>
          <div className='relative'>
          <img src={genz} className='w-[300px] h-[180px] object-fill my-2' />
          <span className='absolute bottom-0 right-0 w-max h-max z-10 bg-green-500 text-white p-2 rounded-t-md rounded-tr-none font-semibold'>Upcoming</span>
          </div>
          <div className='flex flex-row justify-between'>
          <p><span className='font-bold text-2xl text-[#20B486]'>Argentina vs Colombia</span></p><h1><span className='px-1 font-bold'>At</span>12:00</h1>
          </div>
          <div className='flex flex-row justify-between py-2'>
            <div className='flex flex-col'>
            <p><span className='pr-1 font-bold'>Country:</span>Rwanda</p>
            <p><span className='pr-1 font-bold'>Category:</span>Concert</p>
          </div>
          <p className='py-3 px-4  rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
          </div>
          <p className='bg-blue-600 hover:bg-blue-700 w-full p-2 text-white flex justify-center font-semibold'>Buy Ticket</p>
          </span>
          <span className=' shadow-md p-4 rounded-md'>
          <div className='relative'>
          <img src={image} className='w-[300px] h-[180px] object-fill my-2' />
          <span className='absolute bottom-0 right-0 w-max h-max z-10 bg-green-500 text-white p-2 rounded-t-md rounded-tr-none font-semibold'>Upcoming</span>
          </div>
          <div className='flex flex-row justify-between'>
          <p><span className='font-bold text-2xl text-[#20B486]'>Argentina vs Colombia</span></p><h1><span className='px-1 font-bold'>At</span>12:00</h1>
          </div>
          <div className='flex flex-row justify-between py-2'>
            <div className='flex flex-col'>
            <p><span className='pr-1 font-bold'>Country:</span>Rwanda</p>
            <p><span className='pr-1 font-bold'>Category:</span>Concert</p>
          </div>
          <p className='py-3 px-4  rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
          </div>
          <p className='bg-blue-600 hover:bg-blue-700 w-full p-2 text-white flex justify-center font-semibold'>Buy Ticket</p>
          </span>
          <span className=' shadow-md p-4 rounded-md'>
          <div className='relative'>
          <img src={gen} className='w-[300px] h-[180px] object-fill my-2' />
          <span className='absolute bottom-0 right-0 w-max h-max z-10 bg-green-500 text-white p-2 rounded-t-md rounded-tr-none font-semibold'>Upcoming</span>
          </div>
          <div className='flex flex-row justify-between'>
          <p><span className='font-bold text-2xl text-[#20B486]'>Argentina vs Colombia</span></p><h1><span className='px-1 font-bold'>At</span>12:00</h1>
          </div>
          <div className='flex flex-row justify-between py-2'>
            <div className='flex flex-col'>
            <p><span className='pr-1 font-bold'>Country:</span>Rwanda</p>
            <p><span className='pr-1 font-bold'>Category:</span>Concert</p>
          </div>
          <p className='py-3 px-4  rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
          </div>
          <p className='bg-blue-600 hover:bg-blue-700 w-full p-2 text-white flex justify-center font-semibold'>Buy Ticket</p>
          </span>
          
      </div> */}
        {/* <Courses /> */}

        <div className='flex flex-row justify-center w-full h-full bg-white shadow-md gap-8 cursor-pointer'>
        {
          homeEventsCardList[0] && homeEventsCardList.map(el => {
            return(
              <EventsCard
              key={el._id}
              id={el._id}
              name={el.eventname}
              image={el.eventimages}
              category={el.categories}
              country={el.location.country}
              startTime={el.startTime}
              />
            )
          })
        }
        </div>




        {/* <div className='flex flex-wrap gap-5 items-center justify-center'>
        {
          homeEventsCardList[0] && homeEventsCardList.map(el => {
            return(
              <EventsCard
              key={el.id}
              name={el.eventname}
              image={el.eventimages}
              date={el.date}
              country={el.location.country}
              startTime={el.startTime}
              />
            )
          })
        }
        </div> */}
        <Achievement />
        <Categories />
        <Feedback />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
