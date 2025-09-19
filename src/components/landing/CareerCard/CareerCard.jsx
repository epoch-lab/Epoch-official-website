import { Carousel, ConfigProvider } from 'antd';
import Ticket from './Ticket';
import { careerList, studentList } from './MemberList';
import { useState, useEffect } from 'react';

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
    <div className="align-center relative z-22 flex justify-center px-8 pb-0 select-none">
      <div className="carousel-container pd-0 m-0 h-full min-h-[650px]">
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
    </div>
  );
};

export default CareerCard;
