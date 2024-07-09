import React from 'react';
import Navbar from './Navbar';
import ImgCarousel from './SubComponents/ImgCarousel';
import EventForm from './SubComponents/EventForm';

const EventCreation = () => {
  return (
    <div className="w-full">
      <Navbar />
      <main className="w-full p-2 mt-20">
        <section className="w-full flex justify-center" id="eventCarousel">
          <ImgCarousel />
        </section>
        <section className="w-full p-3 px-2 my-10 flex flex-col justify-center items-center">
          <EventForm />
        </section>
        <footer className="bg-white text-gray-600 text-center w-full py-4">
        <p>&copy; Copyright Event Connect {new Date().getFullYear()} All rights reserved</p>
        </footer>
      </main>
    </div>
  );
};

export default EventCreation;
