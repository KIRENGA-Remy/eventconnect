import React, { useRef, useState } from 'react';
import Navbar from '../Navbar';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm('service_ow31k4r', 'template_ewzwlch', form.current, {
        publicKey: 'YCyg8VGeFlPybg0Op',
      })
      .then(
        () => {
          setStatus('SUCCESS! Your message has been sent.');
        },
        (error) => {
          setStatus(`FAILED: ${error.text}`);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <Navbar />
      <div className='my-[1rem] mt-14 flex max-lg:flex-col xl:flex-row max-sm:p-[1rem] max-sm:px-[0%] md:p-[3rem] justify-center items-center'>
        <div className='flex flex-col gap-4 px-[3rem] max-sm:px-0'>
          <h2 className='text-2xl font-bold '>Contact Us</h2>
          <p>Need To Get In Touch With Us? Either fill out the form with the inquiry or find the 
            <a href="mailto: aimablebyumvuhore@gmail.com" className='text-blue-600'> Department Email</a> you would like to contact below.
          </p>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="w-full shadow-2xl lg:w-4/5 px-[2rem] py-[2rem] max-sm:px-[4%]">
          <span className='w-full'>
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" name="user_name" className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm' required />
          </span>
          <span className='w-full'>
            <label>Your Email</label>
            <input type="email" placeholder="Email" name="user_email" className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm' required />
          </span>
          <span className='w-full'>
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="subject" className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm' required />
          </span>
          <span className='w-full'>
            <label>Type your message to Us below</label>
            <textarea name="message" className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm'></textarea>
          </span>
          <div className='w-full flex justify-center'>
            <button type='submit' className='px-[2rem] py-[.7rem] mt-[1rem] text-white bg-[#20B486] hover:bg-[#6beac2] rounded-md'>Send Message</button>
          </div>
          {status && (
            <div className={`mt-4 text-center ${status.startsWith('SUCCESS') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
