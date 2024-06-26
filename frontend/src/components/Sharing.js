import Navbar from './Navbar';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Sharing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 bg-white rounded-2xl mx-auto mt-8 px-6 py-8 relative h-[90vh] overflow-y-auto">
          <h1 className="text-center text-2xl md:text-3xl font-semibold mb-6">
            Invite
          </h1>
          <form className="space-y-4 h-full flex flex-col justify-between">
            <div className="grid gap-4 w-full mx-auto text-sm">
              <input
                type="text"
                className="text-center py-3 border-b-2 focus:outline-none focus:border-green-600"
                name="from"
                placeholder="Enter your name (FROM)"
              />
              <input
                type="text"
                className="text-center py-3 border-b-2 focus:outline-none focus:border-green-600"
                name="to"
                placeholder="Enter receiver's name (TO)"
              />
            </div>
            <div className="w-full mx-auto border-b-2 text-sm">
              <textarea
                className="text-center w-full py-3 focus:outline-none focus:border-green-600"
                placeholder="Message (60 words)"
                rows={3}
                name="message"
              ></textarea>
            </div>
            <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 grid-flow-row w-full py-2 mx-auto text-sm">
              <div className="grid grid-flow-row">
                <label
                  htmlFor="date"
                  className="text-[.75em] text-center text-gray-500"
                >
                  Expiry Date
                </label>
                <input
                  type="date"
                  className="text-center text-sm py-3 border-b-2 focus:outline-none focus:border-green-600"
                  id="date"
                  name="date"
                />
              </div>
              <div className="grid grid-flow-row">
                <label
                  htmlFor="time"
                  className="text-[.75em] text-center text-gray-500"
                >
                  CVV
                </label>
                <input
                  type="text"
                  className="text-center text-sm py-3 border-b-2 focus:outline-none focus:border-green-600"
                  id="time"
                  name="time"
                />
              </div>
            </div>
            <div className='w-full flex justify-around text-black mb-4'>
              <a href="https://web.whatsapp.com/" target='_blank' rel='noopener noreferrer'>
                <button type='button' className='p-2'><FaWhatsapp size={20} /></button>
              </a>
              <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'>
                <button type='button' className='p-2'><FaInstagram size={20} /></button>
              </a>
              <a href="http://www.facebook.com/" target='_blank' rel='noopener noreferrer'>
                <button type='button' className='p-2'><FaFacebook size={20} /></button>
              </a>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="bg-green-600 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3 hover:bg-green-700 transition-colors duration-300"
              >
                Share
              </button>
            </div>

             <div className="w-full flex justify-center">
          <button
                type="button"
                className="bg-green-600 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3 hover:bg-green-700 transition-colors duration-300"
              >  <a href="/thankyou"> 
                Click me to continue</a> 
              </button>
                
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
