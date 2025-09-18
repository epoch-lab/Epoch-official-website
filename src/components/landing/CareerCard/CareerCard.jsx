import { Carousel, ConfigProvider } from 'antd';
import FirstTicket from './FirstTicket';
import SecondTicket from './SecondTicket';
const CareerCard = () => {
  return (
    <div className="align-center relative z-22 flex justify-center px-8 pb-0 select-none">
      <div className="carousel-container pd-0 m-0 h-full min-h-[650px]">
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                dotWidth: 50,
                dotHeight: 4,
                dotActiveWidth: 70,
                dotOffset: -24,
                arrowSize: 32,
                arrowOffset: -22
              }
            }
          }}
        >
          <Carousel draggable arrows dots={false}>
            <FirstTicket />
            <SecondTicket />
          </Carousel>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default CareerCard;
