import React from 'react';
import { Hero, Navbar, Companies, Courses, Achievement, Categories, Feedback, CTA, Footer } from '../components';
import EventsCard from '../components/EventsCard';
import { useSelector } from 'react-redux';

export default function Landing() {
  const eventData = useSelector((state) => state.event.eventList)
  console.log(eventData);
  const homeEventsCardList = eventData.slice(0, 4)
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 mt-16 sm:px-6 lg:px-8">
        <Hero />
        <Companies />
        {/* <Courses /> */}
        {
          homeEventsCardList[0] && homeEventsCardList.map(el => {
            return(
              <EventsCard
              key={el.id}
              name={el.eventname}
              image={el.eventimages}
              date={el.date}
              country={el.location.country}
              startTime={el.startTime}
              />
            )
          })
        }
        <Achievement />
        <Categories />
        <Feedback />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
