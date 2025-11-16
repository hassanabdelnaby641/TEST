import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/stats/Stats';
import FeaturedStories from '../components/campaigns/FeaturedStories';
import Testimonials from '../components/testimonials/Testimonials';
import CallToAction from '../components/cta/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Stats />
      <Services />
      <FeaturedStories />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;