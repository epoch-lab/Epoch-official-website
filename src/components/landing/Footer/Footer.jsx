import FadeContent from '../../../content/Animations/FadeContent/FadeContent';
import { AiFillHeart } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  return (
    <FadeContent blur duration={600}>
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-description">
              A showcase page created with <AiFillHeart className="footer-heart" /> by{' '}
              <a href="https://github.com/epoch-lab" target="_blank" className="footer-creator-link">
                Epoch lab
              </a>
            </p>
            <p className="footer-copyright">© {new Date().getFullYear()} 回声实验室</p>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
};

export default Footer;
