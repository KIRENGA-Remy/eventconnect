import React from 'react'

function Booking() {
    const handleChange = e => {};
  return (
    <div className='booking border -m-4 p-4'>
        <div className='booking_top flex items-center justify-between'>
            <h3 className='font-bold'>
                $price <span>/per person</span>
            </h3>
            <span className='tour_rating flex items-center'>
                <i>star icon</i>
                {/* {avgRating === 0 ? null : avgRating} ({reviews?.length}) */}
            </span>
        </div>
        <div className='booking_form'>
            <h5>Information</h5>
            <form className='booking_info-form'>
                <input type='text' placeholder='Full name' id='fullName' required onChange={handleChange} />
                <input type='Number' placeholder='Phone' id='phone' required onChange={handleChange} />
                <div className='flex items-center gap-3'>
                <input type='date' placeholder='' id='bookAt' required onChange={handleChange} />
                <input type='number' placeholder='Guest size' id='guestSize' required onChange={handleChange} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Booking
