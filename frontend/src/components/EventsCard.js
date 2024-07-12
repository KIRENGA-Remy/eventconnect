import React from 'react'
import { FaClock , FaRegCalendar} from 'react-icons/fa'

function EventsCard({name, image, date, country, startTime}) {
  return (
    <div className='bg-white shadow-md p-2 rounded'>
      <div className='w-64'>
        <img src={image} className='h-full w-full' />
      </div>
      <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
      <div className='flex flex-row justify-between'>
      <p><FaRegCalendar />{date}</p>
     <p><FaClock />{startTime}</p>
      </div>
      <h3>{country}</h3>
    </div>
  )
}

export default EventsCard
