import { useEffect, useState } from 'react';
import FeatureCards from '../components/landing/FeatureCards/FeatureCards';
import StartBuilding from '../components/landing/StartBuilding/StartBuilding';
import Announcement from '../components/common/Misc/Announcement';
import Footer from '../components/landing/Footer/Footer';
import Hero from '../components/landing/Hero/Hero';
import CareerCard from '../components/landing/CareerCard/CareerCard';
import heroImage from '../assets/common/hero.webp';
import DotGrid from '@/content/Backgrounds/DotGrid/DotGrid';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <section className="landing-wrapper">
      <Announcement />

      {/* {isMobile && (
        <div className="mobile-hero-background-container">
          <img src={heroImage} alt="Hero background" className="mobile-hero-background-image" />
        </div>
      )} */}
      <Hero />
      <FeatureCards />
      <StartBuilding />
      <CareerCard />
      <Footer />
    </section>
  );
};

export default LandingPage;
