import React from 'react'
import  gen  from '../../assets/genz.jpg'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';

function Menu() {
    const { filterby } = useParams();
    console.log("id is ", filterby);
    const eventData = useSelector((state) => state.event.eventList);
    const eventDisplay = eventData.find(el => el._id === filterby);
  return (
    <>
    <Navbar />
    <div className='w-full max-w-4xl bg-white shadow-md my-28 m-auto py-1 md:py-2 flex flex-col'>
    <div className=' p-2 md:p-4 flex flex-row gap-4'>
      <div className='w-1/2'>
        <img src={eventDisplay.eventimages} alt='gen' className='w-[300px] h-[180px] object-fill' />
      </div>
      <div>
        <h2 className='font-bold text-2xl text-[#20B486]'>{eventDisplay.eventname}</h2>
        <div className='flex flex-row justify-between py-2'>
        <p><span className='font-bold'>Event Date: </span>{eventDisplay.date}</p>
        <p><span className='font-bold'>At </span>{eventDisplay.startTime}</p>
        </div>
        <div className='flex flex-row justify-between'>
        <div className='p-2'>
            <h2 className=' font-bold underline pt-2'>Event's location</h2>
            <div className='flex flex-col'>
                <p><span className='font-bold'>Address: </span>{eventDisplay.address}</p>
                <p><span className='font-bold'>City: </span>{eventDisplay.city}</p>
                <p><span className='font-bold'>State: </span>{eventDisplay.state}</p>
                <p><span className='font-bold'>Country: </span>{eventDisplay.country}</p>
                <p><span className='font-bold'>Postalcode: </span>{eventDisplay.postalCode}</p>
            </div>
        </div>
        <div className='p-2'>
            <h2 className='font-semibold underline pt-2'>Event's Ticket information</h2>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                <p><span className='font-bold'>Price: </span>{eventDisplay.price}</p>
                {eventDisplay.currency === 'USD' ? <p>$/person</p> : <p>{eventDisplay.currency}/person</p> }
                </div>
                <p><span className='font-bold'>Availability: </span>{eventDisplay.availability} people</p>
                {/* <Link to='./'><p className='bg-blue-600 hover:bg-blue-700 w-full p-2 text-white flex justify-center font-semibold cursor-pointer'>Buy Ticket</p></Link> */}
            </div>
        </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col p-2 md:p-4 max-w-4xl'>
       <p><span className='font-bold'>Category: </span>{eventDisplay.categories}</p>
       <p className='underline pt-2 font-bold'>Event Description:</p>
       <p className='capitalize'>{eventDisplay.description}</p>
       <div className='flex flex-row justify-end gap-2'>
       <Link to='../'><p className='py-3 px-4 mt-4 flex justify-center rounded-md bg-blue-600 hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white cursor-pointer'>Cancel</p></Link>
       <p className='py-3 px-4 mt-4 flex justify-center rounded-md bg-[#20B486] hover:bg-white border hover:border-blue-600 hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
       </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Menu;
