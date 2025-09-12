import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SplitText from '../../../content/TextAnimations/SplitText/SplitText';
import landingBlur from '../../../assets/svg/landing-blur.svg';
import { GoArrowRight } from 'react-icons/go';
import FadeContent from '../../../content/Animations/FadeContent/FadeContent';
import BlurText from '@/content/TextAnimations/BlurText/BlurText';
import logoUrl from '@/assets/svg/logo.svg';

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
    <div className="landing-content">


      <div className=" bg-black p-4 relative  w-screen">

        <h1 className="landing-title flex gap-2">
          <div
            className="logo-mask w-20 h-20 top-4 left-4 bg-white"
            style={{
              maskImage: `url(${logoUrl})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center'
            }}
          />
          <BlurText
            text="Epoch Lab"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl font-bold text-white"
          />
        </h1>

        <ResponsiveSplitText
          isMobile={isMobile}
          delay={250}
          className="landing-subtitle text-black"
          splitType="words"
          delay={25}
          duration={1}
          text="和优秀的人一起，做有意义的事！"
        />

      </div>

    </div>
  );
};

export default Hero;
