import React, { useRef, useState } from 'react';
import gen from '../../assets/genz.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Booking from './Booking';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CiStar } from 'react-icons/ci';

function Menu() {
  const params = useParams();
  const eventData = useSelector((state) => state.event.eventList);
  const eventDisplay = eventData.filter(el => el._id === params.filterby)[0];
  const [eventRating, setEventRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const submitHandler = () => {};
  const reviewMsgRef = useRef();

  // Convert the ISO date string to a Date object and then to the desired format
  const formattedDate = new Date(eventDisplay.date).toISOString().split('T')[0];

  return (
    <>
      <Navbar />
      <div className='flex m-32 w-full'>
      {loading && (
        <div className="fixed inset-0 bg-purple-500 bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-900"></div>
        </div>
      )}
        <div className='md:flex md:flex-row flex flex-col w-10/12'>
          <div className='border rounded-md  w-10/12'>
            <img src={eventDisplay.eventimages} alt='gen' className='w-[550px] h-[350px] object-fill rounded-md mb-4' />
            <div className='p-5 w-[550px]'>
            <h2 className='mb-4 -mt-2 text-xl'>{eventDisplay.categories}</h2>
              <h2 className='md:font-extrabold md:text-2xl md:py-2 font-extrabold text-2xl py-2 mx-1'>{eventDisplay.eventname}</h2>
              <div className='flex flex-col gap-5'>
                <span className='md:flex md:items-center md:justify-between flex items-center justify-between gap-6'>
                  <div className='flex gap-2 text-xl'>
                    <i className='text-blue-600 text-2xl font-bold'><CiStar /></i>
                    <span>{formattedDate}</span>
                  </div>
                  <div className='flex gap-2 text-xl'>
                    <i className='font-semibold'>At</i>
                    <span>{eventDisplay.startTime}</span>
                  </div>
                </span>
              </div>
              <div className='md:py-4 md:flex md:gap-8 md:flex-row flex flex-col gap-3 py-1'>
                <span className='flex gap-1 text-xl'>
                  <i className='text-blue-600 text-2xl font-bold'><CiStar /></i>{eventDisplay.location.address}
                </span>
                <span className='flex gap-1 text-xl'>
                  <i className='text-blue-600 text-2xl font-bold'><CiStar /></i>{eventDisplay.location.city}
                </span>
                <span className='flex gap-1 text-xl'>
                  <i className='text-blue-600 text-2xl font-bold'><CiStar /></i>{eventDisplay.location.country}
                </span>
              </div>
              <h5 className='font-bold underline text-2xl'>Description</h5>
              <p className='flex'>{eventDisplay.description}</p>
            </div>
            <div className='mt-4'>
              <h4 className='p-4 font-semibold text-2xl underline'>Reviews (3 reviews)</h4>
              <form onSubmit={submitHandler}>
                <div className='flex items-center justify-center gap-3 mb-4 rating_group p-4 cursor-pointer'>
                  <span className='p-1 md:px-4 flex items-center' onClick={() => setEventRating(1)}>
                    1<i className='text-blue-600 text-2xl font-bold'><CiStar /></i>
                  </span>
                  <span className='p-1 md:px-4 flex items-center' onClick={() => setEventRating(2)}>
                    2<i className='text-blue-600 text-2xl font-bold'><CiStar /></i>
                  </span>
                  <span className='p-1 md:px-4 flex items-center' onClick={() => setEventRating(3)}>
                    3<i className='text-blue-600 text-2xl font-bold'><CiStar /></i>
                  </span>
                  <span className='p-1 md:px-4 flex items-center' onClick={() => setEventRating(4)}>
                    4<i className='text-blue-600 text-2xl font-bold'><CiStar /></i>
                  </span>
                  <span className='p-1 md:px-4 flex items-center' onClick={() => setEventRating(5)}>
                    5<i className='text-blue-600 text-2xl font-bold'><CiStar /></i>
                  </span>
                </div>
                <div className='border rounded-3xl p-1 m-4 flex justify-between'>
                  <input
                    type='text'
                    ref={reviewMsgRef}
                    placeholder='Share your thoughts'
                    required
                    className='px-5'
                  />
                  <button
                    type='submit'
                    className='px-4 py-2 mx-2 rounded-3xl bg-green-500 hover:bg-white border hover:border-green-500 hover:text-green-500 text-white font-bold'>
                    Submit
                  </button>
                </div>
                <div className='flex justify-between p-4'>
                  <div className='flex flex-row gap-4'>
                    <img src={gen} alt='gen' className='w-[40px] h-[40px] rounded-full object-cover' />
                    <div className='flex flex-col'>
                      <h3 className='font-semibold text-xl'>Remy</h3>
                      <p className=''>12/09/2024</p>
                      <span className='py-2'>Comment is placed here ... </span>
                    </div>
                  </div>
                  <span className='flex gap-1 text-xl'>
                    <i className='text-blue-600 text-2xl font-bold'><CiStar /></i> 
                    4.5
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className='p-8 border mx-3 rounded-md'>
          <Booking setLoading={setLoading} eventDisplay={{ price: eventDisplay.ticketInfo.price, eventName: eventDisplay.eventname }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
