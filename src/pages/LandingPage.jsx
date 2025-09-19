import { useState } from 'react';
import FeatureCards from '../components/landing/FeatureCards/FeatureCards';
import StartBuilding from '../components/landing/StartBuilding/StartBuilding';
import Announcement from '../components/common/Misc/Announcement';
import Footer from '../components/landing/Footer/Footer';
import Hero from '../components/landing/Hero/Hero';
import CareerCard from '../components/landing/CareerCard/CareerCard';
import WhatIDo from '../components/landing/WhatIDo/WhatIDo';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <section className="landing-wrapper">
      <Announcement />
      <Hero />
      <FeatureCards id="about" />
      <WhatIDo id="technology" />
      <StartBuilding />
      <CareerCard id="career" />
      <Footer />
    </section>
  );
};

export default LandingPage;
