// import React from 'react'
// import  gen  from '../../assets/genz.jpg'
// import { useSelector } from 'react-redux'
// import { Link, useParams } from 'react-router-dom'
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// function Menu() {
//     const params = useParams();
//     const eventData = useSelector((state) => state.event.eventList);
//     const eventDisplay = eventData.filter(el => el._id === params.filterby)[0]
//   return (
//     <>
//     <Navbar />
//     <div className='w-full max-w-4xl bg-white shadow-md my-28 m-auto py-1 md:py-2 flex flex-col'>
//     <div className=' p-2 md:p-4 flex flex-row gap-4'>
//       <div className='w-1/2'>
//         <img src={eventDisplay.eventimages} alt='gen' className='w-[300px] h-[180px] object-fill' />
//       </div>
//       <div>
//         <h2 className='font-bold text-2xl text-[#20B486]'>{eventDisplay.eventname}</h2>
//         <div className='flex flex-row justify-between py-2'>
//         <p><span className='font-bold pr-2'>Event Date: </span>{eventDisplay.date}</p>
//         <p><span className='font-bold'>At </span>{eventDisplay.startTime}</p>
//         </div>
//         <div className='flex flex-col md:flex md:flex-row md:justify-between'>
//         <div className='p-2'>
//             <h2 className=' font-bold underline pt-2'>Event's location</h2>
//             <div className='flex flex-col'>
//                 <p><span className='font-bold'>Address: </span>{eventDisplay.location.address}</p>
//                 <p><span className='font-bold'>City: </span>{eventDisplay.location.city}</p>
//                 <p><span className='font-bold'>State: </span>{eventDisplay.location.state}</p>
//                 <p><span className='font-bold'>Country: </span>{eventDisplay.location.country}</p>
//             </div>
//         </div>
//         <div className='p-2'>
//             <h2 className='font-semibold underline pt-2'>Event's Ticket information</h2>
//             <div className='flex flex-col'>
//                 <div className='flex flex-row'>
//                 <p><span className='font-bold'>Price: </span>{eventDisplay.ticketInfo.price}</p>
//                 {eventDisplay.currency === 'USD' ? <p>$/person</p> : <p>{eventDisplay.ticketInfo.currency}/person</p> }
//                 </div>
//                 <p><span className='font-bold'>Availability: </span>{eventDisplay.ticketInfo.availability} people</p>
//                 {/* <Link to='./'><p className='bg-blue-600 hover:bg-blue-700 w-full p-2 text-white flex justify-center font-semibold cursor-pointer'>Buy Ticket</p></Link> */}
//             </div>
//         </div>
//         </div>
//       </div>
//     </div>
//     <div className='flex flex-col p-2 md:p-4 max-w-4xl'>
//        <p><span className='font-bold'>Category: </span>{eventDisplay.categories}</p>
//        <p className='underline pt-2 font-bold'>Event Description:</p>
//        <p className='capitalize'>{eventDisplay.description}</p>
//        <div className='flex flex-row justify-end gap-2'>
//        <Link to='../'><p className='py-3 px-4 mt-4 flex justify-center rounded-md bg-blue-600 hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white cursor-pointer'>Cancel</p></Link>
//        <p className='py-3 px-4 mt-4 flex justify-center rounded-md bg-[#20B486] hover:bg-white border hover:border-blue-600 hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
//        </div>
//     </div>
//     </div>
//     <Footer />
//     </>
//   )
// }

// export default Menu;













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
  const submitHandler = () => {};
  const reviewMsgRef = useRef();
  console.log('Event Display Props:', eventDisplay);
  console.log('Event Display Props price:', eventDisplay.price);
  console.log('Event Display Props event name:', eventDisplay.eventname);
  console.log('Event Display Props event name:', eventDisplay.eventName);

  // Convert the ISO date string to a Date object and then to the desired format
  const formattedDate = new Date(eventDisplay.date).toISOString().split('T')[0];

  return (
    <>
      <Navbar />
      <div className='flex m-32 w-full'>
        <div className='md:flex md:flex-row flex flex-col w-10/12'>
          <div className='border rounded-md'>
            <img src={eventDisplay.eventimages} alt='gen' className='w-[550px] h-[350px] object-fill rounded-md mb-4' />
            <div className='tour_info p-5 w-[550px]'>
            <h2 className='mb-4 -mt-2 text-xl'>{eventDisplay.categories}</h2>
              <h2 className='font-extrabold text-2xl py-2'>{eventDisplay.eventname}</h2>
              <div className='flex flex-col gap-5'>
                <span className='tour_rating flex items-center justify-between'>
                  <div className='flex gap-2 text-xl'>
                    <i className='text-blue-600 font-bold'><CiStar /></i>
                    <span>{formattedDate}</span>
                  </div>
                  <div className='flex gap-2 text-xl'>
                    <i className='font-semibold'>At</i>
                    <span>{eventDisplay.startTime}</span>
                  </div>
                </span>
              </div>
              <div className='tour_extra-details py-4 flex gap-8'>
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
              <p>{eventDisplay.description}</p>
            </div>
            <div className='tour_reviews mt-4'>
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
                <div className='review_input border rounded-3xl p-1 m-4 flex justify-between'>
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
                  <div className=' flex flex-row gap-4'>
                    <img src={gen} alt='gen' className='w-[40px] h-[40px] rounded-full object-cover' />
                    <div className='flex flex-col'>
                      <h3 className='font-semibold text-xl'>Remy</h3>
                      <p className=''>12/09/2024</p>
                      <span className='py-2'>Comment is placed here ... </span>
                    </div>
                  </div>
                  <span className='flex flex-row text-blue-600 font-bold'><CiStar /> 4.5</span>
                </div>
              </form>
            </div>
          </div>
          <div className='p-8 border mx-3 rounded-md w-10/12'>
            <Booking eventDisplay={{ price: eventDisplay.ticketInfo.price, eventName: eventDisplay.eventname }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
