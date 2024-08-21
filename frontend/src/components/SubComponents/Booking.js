import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { CiStar } from 'react-icons/ci';
import { useSelector } from 'react-redux';


function Booking({ eventDisplay, setLoading }) {
  const userData = useSelector(state => state.user);
  const { price, eventName } = eventDisplay;
  const [credentials, setCredentials] = useState({
    userId: '',
    userEmail: '',
    eventName: '',
    fullName: '',
    guestSize: '',
    phone: '',
    bookAt: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName: credentials.fullName,
      userEmail: credentials.userEmail,
      bookAt: credentials.bookAt,
      guestSize: credentials.guestSize,
      phone: credentials.phone,
      eventName: eventDisplay.eventName,
      userId: userData.id
     };
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
        // body: JSON.stringify({
        //   fullName: credentials.fullName,
        //   userEmail: credentials.userEmail,
        //   bookAt: credentials.bookAt,
        //   guestSize: credentials.guestSize,
        //   phone: credentials.phone,
        //   eventName: eventName,
        //   userId: userData.id
        // })
      // });
      const dataRes = await response.json();
      toast(dataRes.message);
      // if (response.status === 200) {
      //   toast.success(dataRes.message);
      //   navigate('/thankyou', { replace: true });
      // } else {
      //   toast.error(dataRes.message);
      // }
      if (response.status === 200) {
        setTimeout(() => {
          navigate("/thankyou", { replace: true });
        }, 1000);
      }
    } catch (error) {
      toast.error('Booking event failed. Network issues, Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const defaultPeople = 1;
  const serviceFee = 10
  const multiplePrice = Number(price) * Number(credentials.guestSize);
  const totalAmount = multiplePrice + serviceFee;

  return (
    <div className=" -m-4 p-4">
      <div className="flex items-center border-b-2 pb-8 justify-between">
        <h3>
          <span className="text-3xl pr-2 font-bold">${eventDisplay.price}</span>/per person
        </h3>
        <span className="flex items-center">
          <i className='text-blue-600 font-bold text-xl'><CiStar /></i>
          {/* {avgRating === 0 ? null : avgRating} ({reviews?.length}) */}
        </span>
      </div>
      <div className="pt-8">
        <h5 className="font-bold text-2xl pb-4">Information</h5>
        <form className="booking_info-form border p-8 flex flex-col gap-8" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={credentials.fullName}
            className="border border-t-0 border-l-0 border-r-0 w-full pb-2"
            placeholder="Enter your full names"
            id="fullName"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="userEmail"
            value={credentials.userEmail}
            className="border border-t-0 border-l-0 border-r-0 w-full pb-2"
            placeholder="Enter your email..."
            id="userEmail"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={credentials.phone}
            className="border border-t-0 border-l-0 border-r-0 w-full pb-2"
            placeholder="Phone number"
            id="phone"
            required
            onChange={handleChange}
          />
          <div className="flex items-center gap-3">
            <input
              type="date"
              name="bookAt"
              value={credentials.bookAt}
              className="border border-t-0 border-l-0 border-r-0 w-full pb-2"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="guestSize"
              value={credentials.guestSize}
              className="border border-t-0 border-l-0 border-r-0 w-full pb-2"
              placeholder="Guest size"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 mx-2 rounded-3xl bg-[#20B486] hover:bg-white border hover:border-[#20B486] hover:text-[#20B486] text-white font-bold"
          >
            Book Now
          </button>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between font-semibold py-4 text-gray-600">
          <span className="pr-2 text-lg">
            ${eventDisplay.price} x {credentials.guestSize ? credentials.guestSize : defaultPeople } person
          </span>
          <span className="pr-2 text-lg">${multiplePrice}</span>
        </div>
        <div className="flex flex-row justify-between font-semibold py-4 text-gray-600">
          <span className="pr-2 text-lg">Service charge</span>
          <span className="pr-2 text-lg">${serviceFee}</span>
        </div>
        <div className="flex flex-row justify-between font-semibold pt-4 pb-12 text-gray-900">
          <span className="pr-2 text-lg">Total</span>
          <span className="pr-2 text-lg">${totalAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default Booking;
