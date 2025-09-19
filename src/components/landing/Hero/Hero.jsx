import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SplitText from '../../../content/TextAnimations/SplitText/SplitText';
import landingBlur from '../../../assets/svg/landing-blur.svg';
import { GoArrowRight } from 'react-icons/go';
import FadeContent from '../../../content/Animations/FadeContent/FadeContent';
import BlurText from '@/content/TextAnimations/BlurText/BlurText';
import logoUrl from '@/assets/svg/logo.svg';
import bg from '@/assets/svg/bg.svg';
import LaserFlow from '@/content/Animations/LaserFlow/LaserFlow';

const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? <span className={rest.className}>{text}</span> : <SplitText text={text} {...rest} />;

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full"
      >

      </div>
      <div className="landing-content">
        <div className="flex flex-col justify-center flex-1 p-8 relative bg-center bg-no-repeat bg-cover bg-fixed h-3/5 rounded-2xl " style={{
          backgroundImage: `url(${bg})`,
        }}>

          <h1 className="landing-title flex gap-2">
            <BlurText
              text="Epoch Lab."
              delay={50}
              animateBy="words"
              direction="top"
              className="text-6xl sm:text-6xl  md:text-8xl font-bold text-white"
            />
          </h1>
          <div className="landing-subtitle">
            <BlurText
              text="Code builds the future"
              delay={250}
              animateBy="words"
              direction="top"
              className="text-2xl text-white z-50 "
            />
            <BlurText
              text=">>>"
              delay={330}
              animateBy="letters"
              direction="top"
              className="text-2xl text-white z-50"
            />
          </div>
          <img
          src={logoUrl}
          className="logo-mask w-80  right-0 absolute z-0 "
          style={{
            opacity: 0.2,
            }}
        />
        </div>
      </div>
    </div>
  );
};

export default Hero;
