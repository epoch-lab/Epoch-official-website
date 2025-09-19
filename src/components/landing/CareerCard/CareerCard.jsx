import { Carousel, ConfigProvider } from 'antd';
import Ticket from './Ticket';
import { careerList, studentList } from './MemberList';
import { useState, useEffect } from 'react';
import './CareerCard.css';
const CareerCard = () => {
  const [hasArrows, setHasArrow] = useState(window.innerWidth >= 1100);

  useEffect(() => {
    const handleResize = () => {
      setHasArrow(window.innerWidth >= 1100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="career-section flex flex-col flex-wrap gap-8">
      <h2 className="ca-title">毕业去向</h2>
      <div className="carousel-container pd-0 m-0 flex h-full min-h-[450px] flex-col justify-center self-center">
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                dotOffset: -24,
                arrowSize: 32,
                arrowOffset: -22
              }
            }
          }}
        >
          <Carousel draggable arrows={hasArrows} dots={false}>
            <Ticket title="就业实习" list={careerList} itemKey="company" />
            <Ticket title="考研上岸" list={studentList} itemKey="college" />
          </Carousel>
        </ConfigProvider>
      </div>
    </section>
  );
};

export default CareerCard;
