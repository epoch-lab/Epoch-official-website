import { useState, useEffect, useRef } from 'react';
import FeatureCards from '../components/landing/FeatureCards/FeatureCards';
import StartBuilding from '../components/landing/StartBuilding/StartBuilding';
// import Announcement from '../components/common/Misc/Announcement';
import Footer from '../components/landing/Footer/Footer';
import Hero from '../components/landing/Hero/Hero';
import CareerCard from '../components/landing/CareerCard/CareerCard';
import WhatIDo from '../components/landing/WhatIDo/WhatIDo';
import DisplayHeader from '../components/landing/DisplayHeader/DisplayHeader';

const LandingPage = () => {
  const [activeItem, setActiveItem] = useState('home');

  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const careerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'about') setActiveItem('home');
          else if (entry.target.id === 'technology') setActiveItem('technology');
          else if (entry.target.id === 'career') setActiveItem('showcase');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [aboutRef, techRef, careerRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="landing-wrapper">
      <DisplayHeader activeItem={activeItem} />
      {/* <Announcement /> */}
      <Hero />
      <div id="about" ref={aboutRef}>
        <FeatureCards id="about" />
      </div>
      <div id="technology" ref={techRef}>
        <WhatIDo id="technology" />
      </div>
      <div id="career" ref={careerRef}>
        <CareerCard id="career" />
      </div>
      <StartBuilding />
      <Footer />
    </section>
  );
};

export default LandingPage;
