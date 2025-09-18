import './CareerCard.css';
import PixelBlast from '../../../content/Backgrounds/PixelBlast/PixelBlast';
import logo from '../../../assets/svg/logo.svg';
import EPOCHtext from '../../../assets/svg/EPOCHtext.svg';
import airplane from '../../../assets/svg/airplane.svg';
import '../../../assets/font.css';
import { Carousel, ConfigProvider } from 'antd';
import { useRef, useState } from 'react';

const Ticket = ({ title, list, itemKey }) => {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  // 分页函数
  const paginateData = (data, itemsPerPage) => {
    const pages = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      pages.push(data.slice(i, i + itemsPerPage));
    }
    return pages;
  };

  const pages = paginateData(list, 8);
  return (
    <div className="ticket-container">
      <div className="ticket-left">
        <div className="absolute top-0 left-0 z-1 h-full w-full">
          <PixelBlast
            variant="circle"
            pixelSize={5}
            color="#DED5F8"
            patternScale={4}
            patternDensity={1.4}
            pixelSizeJitter={0.6}
            enableRipples
            rippleSpeed={0.6}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
        <div className="mt-6 flex w-full justify-between text-xl text-black">
          <div className="ml-10 flex items-center">
            <img
              src={logo}
              alt="Epoch Icon"
              className="w-8"
              style={{
                filter: 'invert(16%) sepia(99%) saturate(4154%) hue-rotate(266deg) brightness(85%) contrast(91%)'
              }}
            />
            <span className="ml-2 font-[YeZiGongChangTianQingSong-2] text-2xl text-[#7b3ab9]">回声实验室</span>
          </div>
          <div className="mr-20 flex items-center">
            <img src={EPOCHtext} className="mr-2 w-30" />
            <img src={airplane} className="mr-3 w-8" />
            <span className="font-[SanJiHuaChaoTi-Cu-2] text-2xl">{title}</span>
          </div>
        </div>
        <div className="carousel-container">
          <ConfigProvider
            theme={{
              components: {
                Carousel: {
                  arrowSize: 16,
                  arrowOffset: -22
                }
              }
            }}
          >
            <Carousel
              ref={carouselRef}
              className="top-0 left-0 z-10 h-50 w-full"
              infinite
              arrows
              autoplay
              autoplaySpeed={6000}
              dots={false}
              beforeChange={(oldIndex, newIndex) => setCurrentPage(newIndex)}
            >
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="carousel-page">
                  <div className="grid grid-cols-2 grid-rows-4 p-0">
                    {page.map((item, index) => (
                      <div key={index} className="flex gap-2 rounded p-2 text-base">
                        <p>{item.grade}</p>
                        <p>{item.name}</p>
                        <p>{item[itemKey]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </ConfigProvider>
          <div className="custom-dots-container">
            {pages.map((_, index) => (
              <button
                key={index}
                className={`custom-dot ${currentPage === index ? 'custom-dot-active' : ''}`}
                onClick={() => {
                  carouselRef.current.goTo(index);
                  setCurrentPage(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="ticket-right">
        <div className="h-18 w-full rounded-t-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-[#8469dc]"></div>
      </div>
    </div>
  );
};

export default Ticket;
