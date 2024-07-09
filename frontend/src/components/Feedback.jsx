import React from 'react'
import Slider from "react-slick";
import FeedbackCard from './FeedbackCard';
import Avator1 from '../assets/avator3.gif'
import Avator2 from '../assets/avator4.gif'
import Avator3 from '../assets/avatar.png'

const feedbacks = [
  {
    id: 1,
    person: "David Luiz",
    role: "Artist Manager",
    avator: Avator1,
    feedback: "The overall design is clean and user-friendly, but there are areas where the layout can be more intuitive."
  },
  {
    id: 2,
    person: "James Rodriguez",
    role: "Events Organiser",
    avator: Avator2,
    feedback: "The color scheme is pleasant, but it could be more cohesive. Try using a consistent palette throughout the application."
  },
  {
    id: 3,
    person: "Nathan Ake",
    role: "Customer",
    avator: Avator3,
    feedback: "The application works well on desktop, but some elements need adjustment for mobile and tablet views."
  },
  {
    id: 4,
    person: "Jannet Smith",
    role: "Event attendee",
    avator: Avator2,
    feedback: "The application works well on desktop, but some elements need adjustment for mobile and tablet views."
  },
]

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='w-full bg-white py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Customers' <span className='text-[#20B486]'>Feedback</span></h1>
              <p className='text-[#6D737A]'>Your feedback helps us improve! Share your experience and help us serve you better.</p>
            </div>
            
            <Slider {...settings} >
              {feedbacks.map((feedback) => (
                <FeedbackCard feedback={feedback} />
              ))}
            </Slider>
            
        </div>

    </div>
  )
}

export default Feedback