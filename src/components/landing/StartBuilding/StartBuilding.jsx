import { Link } from 'react-router-dom';
import './StartBuilding.css';

const StartBuilding = () => {
  return (
    <section className="start-building-section">
      <div className="start-building-container">
        <div className="start-building-card">
          <h2 className="start-building-title">加入我们</h2>
          <p className="start-building-subtitle">Talk is cheap. Show me the code. —— Linus Torvalds</p>

          <Link to="https://fresh.cuit.dev/" className="start-building-button">
            fresh.cuit.dev
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartBuilding;
