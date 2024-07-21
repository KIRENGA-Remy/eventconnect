import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function AllEvents() {
  const eventData = useSelector((state) => state.event.eventList)
  const homeEventsCardList = eventData.slice(0, 400)
  return (
    <div className=' flex justify-center w-full h-full flex-col md:flex-row gap-8 cursor-pointer'>
    {
      homeEventsCardList[0] && homeEventsCardList.map(el => {
        return(
<Link to={`menu/${el._id}`}>
    <span className='shadow-md p-4 rounded-md'>
    <div className='relative'>
          <img src={el.eventimages} className='w-[300px] h-[180px] object-fill my-2' />
          <span className='absolute bottom-0 right-0 w-max h-max z-10 bg-green-500 text-white p-2 rounded-t-md rounded-tr-none font-semibold'>Upcoming</span>
    </div>
    <div className='flex flex-row justify-between'>
    <p><span className='font-bold text-2xl text-[#20B486]'>{el.eventname}</span></p><h1><span className='px-1 font-bold '>At</span>{el.startTime}</h1>
    </div>
    <div className='flex flex-row justify-between py-2'>
      <div className='flex flex-col'>
      <p><span className='pr-1 font-bold'>Country:</span>{el.location.country}</p>
      <p><span className='pr-1 font-bold'>Category:</span>{el.categories}</p>
    </div>
    <Link to='../'><p className='py-3 px-4 mt-4 flex justify-center rounded-md bg-blue-600 hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white cursor-pointer'>Cancel</p></Link>
    <p className='py-3 px-4  rounded-md bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold cursor-pointer'>Book</p>
    </div>
    <p className='bg-blue-600 hover:bg-blue-700 w-full p-2 text-white flex justify-center'>Buy Ticket</p>
    </span>
    </Link>
        )
      })
    }
    </div>
  )
}

export default AllEvents
