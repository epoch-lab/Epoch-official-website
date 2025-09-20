import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Logo } from '../../common/Misc/SVGComponents';
import { useStars } from '../../../hooks/useStars';
import star from '../../../assets/common/star.svg';
import './DisplayHeader.css';

const DisplayHeader = ({ activeItem }) => {
  const navRef = useRef(null);
  const starCountRef = useRef(null);
  const stars = useStars();

  useEffect(() => {
    if (stars && starCountRef.current) {
      gsap.fromTo(
        starCountRef.current,
        {
          scale: 0,
          width: 0,
          opacity: 0
        },
        {
          scale: 1,
          width: '100px',
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1)'
        }
      );
    }
  }, [stars]);

  const handleNavClick = e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <Logo />
        </Link>

        <div className="nav-cta-group">
          <nav className="landing-nav-items" ref={navRef}>
            <a className={`nav-link ${activeItem === 'home' && 'active-link'}`} href="#about" onClick={handleNavClick}>
              关于我们
            </a>
            <a
              className={`nav-link ${activeItem === 'technology' && 'active-link'}`}
              href="#technology"
              onClick={handleNavClick}
            >
              技术方向
            </a>
            <a
              className={`nav-link ${activeItem === 'showcase' && 'active-link'}`}
              href="#career"
              onClick={handleNavClick}
            >
              毕业去向
            </a>
          </nav>

          <button className="cta-button" onClick={() => window.open('https://github.com/epoch-lab', '_blank')}>
            关注我们
            <span ref={starCountRef} style={{ opacity: 0 }}>
              <img src={star} alt="Star Icon" />
              {stars}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DisplayHeader;
