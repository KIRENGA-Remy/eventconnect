import React from 'react';
import HeaderDashboard from './SubComponents/HeaderDashboard';
import MainContentDashboard from './SubComponents/MainContentDashboard';
import SidebarDashboard from './SubComponents/SiderbarDashboard';
import NavbarDash from './NavbarDash';
import Footer from "./Footer";
import Navbar from './Navbar';

const NewDashboard = () => {
  return (
      <div className="flex flex-col h-full overflow-hidden">
      {/* <div className='mt-14 z-20'>
        <NavbarDash/>
      </div> */}
      {/* <div className="flex flex-row flex-grow">
        <div className='hidden md:flex md:flex-row'>
        <SidebarDashboard />
        </div> */}
        {/* <div className="flex flex-col flex-grow"> */}
  <Navbar />
  <div className='flex flex-row mt-24'>
    <div className=''>
  <SidebarDashboard />
  </div>
  <MainContentDashboard />
  </div>
  <Footer/>
  <div className='flex flex-row'>
  </div>
{/* </div> */}

       
      {/* </div> */}
     
      </div>
  );
}

export default NewDashboard;
