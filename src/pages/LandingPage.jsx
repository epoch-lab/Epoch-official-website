import { useEffect, useState } from 'react';
import FeatureCards from '../components/landing/FeatureCards/FeatureCards';
import Testimonials from '../components/landing/Testimonials/Testimonials';
import StartBuilding from '../components/landing/StartBuilding/StartBuilding';
import PlasmaWaveV2 from '../components/landing/PlasmaWave/PlasmaWaveV2';
import Announcement from '../components/common/Misc/Announcement';
import Footer from '../components/landing/Footer/Footer';
import Hero from '../components/landing/Hero/Hero';
import heroImage from '../assets/common/hero.webp';

// const LandingPage = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
//     checkIsMobile();

//     window.addEventListener('resize', checkIsMobile);
//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, []);

//   return (
//     <section className="landing-wrapper">
//       <title>React Bits - Animated UI Components For React</title>

//       <Announcement />

//       {isMobile && (
//         <div className="mobile-hero-background-container">
//           <img src={heroImage} alt="Hero background" className="mobile-hero-background-image" />
//         </div>
//       )}

//       <PlasmaWaveV2 yOffset={0} xOffset={40} rotationDeg={-45} />

//       <Hero />
//       <FeatureCards />
//       <Testimonials />
//       <StartBuilding />
//       <Footer />
//     </section>
//   );
// };

// export default LandingPage;



import PixelBlast from '../content/Backgrounds/PixelBlast/PixelBlast';
import PixelBlastDemo from '@/demo/Backgrounds/PixelBlastDemo';
import ShuffleDemo from '@/demo/TextAnimations/ShuffleDemo';
import Shuffle from '@content/TextAnimations/Shuffle/Shuffle';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <section className="landing-wrapper">
      <div style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%'}}>
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={5}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={1}
          edgeFade={0.25}
          transparent
        />
      </div>

      <Announcement />

      {isMobile && (
        <div className="mobile-hero-background-container">
          <img src={heroImage} alt="Hero background" className="mobile-hero-background-image" />
        </div>
      )}

      <Hero />
      <FeatureCards />
      <Testimonials />
      <StartBuilding />
      <Footer />
    </section>
  );
};

export default LandingPage;
