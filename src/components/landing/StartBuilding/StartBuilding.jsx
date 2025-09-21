import { Link } from 'react-router-dom';
import './StartBuilding.css';

const StartBuilding = () => {
  return (
    <section className="start-building-section">
      <div className="start-building-container">
        <div className="start-building-card">
          <h2 className="start-building-title">加入我们</h2>
          <p className="start-building-subtitle">Talk is cheap. Show me the code. —— Linus Torvalds</p>

          <Link to="https://pass.cuit.dev/" target="_blank" className="start-building-button">
            EPASS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartBuilding;
