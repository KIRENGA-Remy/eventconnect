import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const MissingBody = () => {
  const userData = useSelector(state => state.user);
  return (
    <div className='w-full p-3 text-center h-screen flex flex-col justify-center'>
       <div className='w-5/6 p-10 self-center shadow-2xl shadow-current align-middle'>
          <span className='text-slate-800 text-4xl'>404: <br />Page Not Found</span>
            { userData.email ?
                <li>
                    <Link to='/dashboard' className='hover:underline font-semibold p-4'>
                          Home
                    </Link>
                </li>
                             : 
                <li>
                    <Link to='/' className='hover:underline font-semibold p-4'>
                          Home
                    </Link>
                </li>
            }
       </div>
    </div>
  )
}

export default MissingBody