import React from 'react';
import { Hero, Navbar, Companies, Courses, Achievement, Categories, Feedback, CTA, Footer } from '../components';
import EventsCard from '../components/EventsCard';
import { useSelector } from 'react-redux';
import  image  from '../assets/arenas.jpg'
import genz  from '../assets/genz.jpeg'
import  gen  from '../assets/genz.jpg'

export default function Landing() {
  const eventData = useSelector((state) => state.event.eventList)
  const homeEventsCardList = eventData.slice(0, 4)
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 mt-16 sm:px-6 lg:px-8">
        <Hero />
        <Companies />
        <div className=' flex justify-center w-full h-full flex-col md:flex-row gap-8 cursor-pointer'>
        <span className=' shadow-md p-4 rounded-md'><img src={genz} className='w-[300px] h-[180px] object-fill my-2' />
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
          </span>
          <span className=' shadow-md p-4 rounded-md'><img src={image} className='w-[300px] h-[180px] object-fill my-2' />
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
          </span>
          <span className=' shadow-md p-4 rounded-md'><img src={gen} className='w-[300px] h-[180px] object-fill my-2' />
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
          </span>
      </div>
        {/* <Courses /> */}

        {/* <div className=' flex justify-center w-full h-full flex-col md:flex-row gap-8 cursor-pointer'>
        {
          homeEventsCardList[0] && homeEventsCardList.map(el => {
            return(
              <EventsCard
              key={el.id}
              name={el.eventname}
              image={el.eventimages}
              category={el.categories}
              country={el.location.country}
              startTime={el.startTime}
              />
            )
          })
        }
        </div> */}




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
