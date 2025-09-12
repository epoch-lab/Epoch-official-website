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
  const [variant, setVariant] = useState('square');
  const [pixelSize, setPixelSize] = useState(6);
  const [patternScale, setPatternScale] = useState(1);
  const [patternDensity, setPatternDensity] = useState(1.4);
  const [pixelSizeJitter, setPixelSizeJitter] = useState(0);
  const [enableRipples, setEnableRipples] = useState(true);
  const [liquid, setLiquid] = useState(false);
  const [speed, setSpeed] = useState(0.5);
  const [edgeFade, setEdgeFade] = useState(0.25);
  const [color, setColor] = useState('#22c55e');

  return (
    // <section className="landing-wrapper">
    //   <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
    //     <title>React Bits - Animated UI Components For React</title>
    //          <Announcement />

    //     {/* <PixelBlast
    //       variant={variant}
    //       pixelSize={pixelSize}
    //       color={color}
    //       patternScale={patternScale}
    //       patternDensity={patternDensity}
    //       pixelSizeJitter={pixelSizeJitter}
    //       enableRipples={enableRipples}
    //       liquid={liquid}
    //       speed={speed}
    //       edgeFade={edgeFade}
    //     >

    //     </PixelBlast> */}
    //     {/* <Shuffle
    //     text="Epoch Lab"
    //     shuffleDirection="right"
    //     duration={0.35}
    //     animationMode="evenodd"
    //     shuffleTimes={1}
    //     ease="power3.out"
    //     stagger={0.03}
    //     threshold={0.1}
    //     triggerOnce={true}
    //     triggerOnHover={true}
    //     respectReducedMotion={true}
    //   /> */}
    //   </div>
    // </section>
    <section className="landing-wrapper">
      {/* <title>React Bits - Animated UI Components For React</title> */}

      <Announcement />

      {isMobile && (
        <div className="mobile-hero-background-container">
          <img src={heroImage} alt="Hero background" className="mobile-hero-background-image" />
        </div>
      )}

      {/* <PlasmaWaveV2 yOffset={0} xOffset={40} rotationDeg={-45} /> */}

      {/* <PixelBlast
        variant={variant}
        pixelSize={pixelSize}
        color={color}
        patternScale={patternScale}
        patternDensity={patternDensity}
        pixelSizeJitter={pixelSizeJitter}
        enableRipples={enableRipples}
        liquid={liquid}
        speed={speed}
        edgeFade={edgeFade}
        yOffset={0} xOffset={40} rotationDeg={-45}
      >

      </PixelBlast> */}
      <Hero />
      <FeatureCards />
      <Testimonials />
      <StartBuilding />
      <Footer />
    </section>
  );
};

export default LandingPage;
