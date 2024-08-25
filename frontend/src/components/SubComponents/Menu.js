import React, { useRef, useState } from 'react';
import userImage from '../../assets/user.png';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Booking from './Booking';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiStar } from 'react-icons/ci';
import { MdOutlineDateRange, MdMyLocation  } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity, FaAcquisitionsIncorporated } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { setDatareview } from '../../redux/reviewSlice';

function Menu() {
  const params = useParams();
  console.log(params.filterby);
  const eventData = useSelector((state) => state.event.eventList);
  const eventDisplay = eventData.find(el => el._id === params.filterby);
  console.log(eventDisplay);
  const reviewData = useSelector((state) => state.review);
  // const reviewDisplay = reviewData.find(el => el.eventId === params.filterby);
  console.log("log review data", reviewData);
  // console.log("log review display", reviewDisplay);
  const userData = useSelector(state => state.user);
  const [eventRating, setEventRating] = useState(0);
  const [review, setReview] = useState({ eventId : '', username: '', date: '',  reviewText: '', userprofile: '' });
  const [loading, setLoading] = useState(false);
  const reviewMsgRef = useRef();
  const numReviews = Array.isArray(reviewData) ? reviewData.length : (reviewData ? 1 : 0);

  // Format event and review dates
  const formattedEventDate = eventDisplay ? new Date(eventDisplay.date).toISOString().split('T')[0] : '';
  // const formattedReviewDate = reviewData.date ? new Date(reviewData.date).toISOString().split('T')[0] : '';

  const dispatch = useDispatch();

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      eventId: eventDisplay._id,
      username: userData.username,
      reviewText: review.reviewText,
      userprofile: userData.userprofile,
      rating: eventRating,
      date: new Date().toISOString(),
    };
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const dataRes = await response.json();
      toast(dataRes.message);
  
      if (response.ok) {
        dispatch(setDatareview(dataRes));
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error('Review creation failed. Network issues, Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  const handleOnChange = (e) => {
    setReview(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Navbar />
      <div className='flex m-32 w-full'>
        {loading && (
          <div className="fixed inset-0 bg-purple-500 bg-opacity-40 flex justify-center items-center z-10">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-900"></div>
          </div>
        )}
        <div className='md:flex md:flex-row flex flex-col w-10/12'>
          <div className='border rounded-md w-10/12'>
            <img src={eventDisplay.eventimages} alt='gen' className='w-full h-[300px] object-fill rounded-t-md rounded-tr-md mb-4' />
            <div className='p-5'>
              <h2 className='mb-4 -mt-2 text-xl'>{eventDisplay.categories}</h2>
              <h2 className='md:font-extrabold md:text-2xl md:py-2 font-extrabold text-2xl py-2 mx-1'>{eventDisplay.eventname}</h2>
              <div className='flex flex-col gap-5'>
                <span className='md:flex md:items-center md:justify-between flex items-center justify-between gap-6'>
                  <div className='flex gap-2 text-xl'>
                    <i className='text-blue-600 text-2xl font-bold'><MdOutlineDateRange /></i>
                    <span>{formattedEventDate}</span>
                  </div>
                  <div className='flex gap-2 text-xl'>
                    <i className='font-semibold'>At</i>
                    <span>{eventDisplay.startTime}</span>
                  </div>
                </span>
              </div>
              <div className='md:py-4 md:flex md:gap-8 md:flex-row flex flex-col gap-3 py-1'>
                <span className='flex gap-1 text-xl'>
                  <i className='text-blue-600 text-2xl font-bold'><FaLocationDot /></i>{eventDisplay.location.address}
                </span>
                <span className='flex gap-1 text-xl'>
                  <i className='text-blue-600 text-2xl font-bold'><FaCity /></i>{eventDisplay.location.city}
                </span>
                <span className='flex gap-1 text-xl'>
                  <i className='text-blue-600 text-2xl font-bold'><MdMyLocation /></i>{eventDisplay.location.country}
                </span>
              </div>
              <h5 className='font-bold underline text-2xl'>Description</h5>
              <p className='flex'>{eventDisplay.description}</p>
            </div>
            <div className='mt-4'>
              <h4 className='p-4 font-semibold text-2xl underline'>Reviews ({eventDisplay.reviews.length} reviews)</h4>
              <form onSubmit={handleReviewSubmit}>
                <div className='flex items-center justify-center gap-3 mb-4 rating_group p-4 cursor-pointer'>
                  {[1, 2, 3, 4, 5].map(rating => (
                    <span key={rating} className='p-1 md:px-4 flex items-center' onClick={() => setEventRating(rating)}>
                      {rating}<i className='text-blue-600 text-sm font-bold'><FaAcquisitionsIncorporated /></i>
                    </span>
                  ))}
                </div>
                <div className='border rounded-3xl p-1 m-4 flex justify-between'>
                  <input
                    type='text'
                    name='reviewText'
                    ref={reviewMsgRef}
                    onChange={handleOnChange}
                    value={review.reviewText}
                    placeholder='Share your thoughts'
                    required
                    className='px-5'
                  />
                  <button
                    type='submit'
                    className='px-4 py-2 mx-2 rounded-3xl bg-green-500 hover:bg-white border hover:border-green-500 hover:text-green-500 text-white font-bold'>
                    Submit
                  </button>
                </div>
              </form>
{reviewData && (
  <div key={reviewData.id} className='flex justify-between p-4'>
    <div className='flex flex-row gap-4'>
      <img
        src={reviewData.userprofile || userImage}
        className='w-[40px] h-[40px] rounded-full object-cover'
        alt='User Profile'
      />
      <div className='flex flex-col'>
        <h3 className='font-semibold text-xl'>{reviewData.username || 'Anonymous'}</h3>
        <p>{reviewData.date ? new Date(reviewData.date).toISOString().split('T')[0] : '—'}</p>
        <span className='py-2'>{reviewData.reviewText || 'No review text'}</span>
      </div>
    </div>
    <span className='flex gap-1 text-xl'>
      <i className='text-blue-600 text-2xl font-bold'><CiStar /></i> {reviewData.rating || 0}
    </span>
  </div>
)}
            </div>
          </div>
          <div className='md:p-8 md:border md:mx-3 md:rounded-md p-8 border mx-0 rounded-md w-10/12'>
            <Booking setLoading={setLoading} eventDisplay={{ price: eventDisplay.ticketInfo.price, eventName: eventDisplay.eventname }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
