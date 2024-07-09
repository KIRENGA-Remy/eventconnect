import React from 'react'
import { quotationMark } from '../assets'

const FeedbackCard = ({ feedback }) => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4 items-center'>
                <img src={feedback.avator} alt={feedback.person} className='w-[6rem] h-[6rem] rounded-full' />
                <div>
                    <h1 className='font-semibold'>{feedback.person}</h1>
                    <p>{feedback.role}</p>
                </div>
            
            </div>
            <img className='h-8' src={quotationMark} alt='' />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>{feedback.feedback}</h3>
      </div>
    </div>
  )
}

export default FeedbackCard