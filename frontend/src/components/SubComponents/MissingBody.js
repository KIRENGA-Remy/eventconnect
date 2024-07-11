import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const MissingBody = () => {
  const userData = useSelector(state => state.user);
  return (
    <div className='w-full p-3 text-center h-screen flex flex-col justify-center'>
       <div className='w-5/6 p-10 self-center align-middle flex flex-col'>
          <span className='text-slate-800 text-4xl'>404: <br />Page Not Found</span>
            { userData.email ?
                    <Link to='/dashboard' className='text-violet-900 hover:text-violet-800 hover:underline py-6 font-semibold'>
                         Return Home?
                    </Link>
                             : 
                    <Link to='/' className='text-violet-900 hover:text-violet-800 hover:underline py-6 font-semibold'>
                         Return  Home?
                    </Link>
            }
       </div>
    </div>
  )
}

export default MissingBody