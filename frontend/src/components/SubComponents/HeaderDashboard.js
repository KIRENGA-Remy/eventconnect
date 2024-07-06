import React from 'react';
import { FaBell, FaPlus, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import userImage from '../../assets/user.png';
import { useDispatch, useSelector } from 'react-redux';

function HeaderDashboard() {

  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b shadow">
<div>
  { userData.username ? 
    <h2 className="text-2xl font-semibold">Welcome {userData.username}</h2> : 
    <p className='text-2xl font-semibold'>Welcome User</p> 
  }
  <p className='flex md:flex-col'>
    We aim to streamline the event management process,
  </p>
  <p className='hidden md:flex md:flex-col'>
    making it easier for organizers to create successful events and for attendees to find and participate in their favorite events.
  </p>
</div>

      <div className="flex items-center space-x-4">
      <div className='text-4xl items-center '>
      { userData.username ? <p className='flex text-green-600 font-semibold'>{userData.username}</p> : <p>User</p> }
      </div>
       <Link to="/create">  <FaPlus size={20} className="text-gray-500" /></Link>
       <Link to="/notification"> <FaBell size={20} className="text-gray-500" /></Link>
      {/* <Link to="/profile">  <FaUserCircle size={40} className="text-gray-500" /></Link> */}
      <div className='text-4xl items-center w-[60px] h-[60px] rounded-full'>
      { userData.userprofile ? <img src={userData.userprofile} className='h-full w-full' alt={userData.userprofile} /> : <img src={userImage} className='h-full w-full' alt={userImage} /> }
      </div>
      </div>
    </div>
  );
}

export default HeaderDashboard;
