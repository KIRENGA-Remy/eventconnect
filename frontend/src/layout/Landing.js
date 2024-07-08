import React from 'react';
import { Hero, Navbar, Companies, Courses, Achievement, Categories, Feedback, CTA, Footer } from '../components';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 mt-16 sm:px-6 lg:px-8">
        <Hero />
        <Companies />
        <Courses />
        <Achievement />
        <Categories />
        <Feedback />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
