import './Ticket.css';
import PixelBlast from '../../../content/Backgrounds/PixelBlast/PixelBlast';
import logo from '../../../assets/svg/logo.svg';
import NO1 from '../../../assets/svg/NO1.svg';
import code from '../../../assets/svg/code.svg';
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
            rippleSpeed={1}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            speed={1}
            edgeFade={0.25}
            transparent
          />
        </div>
        <img src={NO1} className="absolute top-67 right-15 z-2 h-3.5 self-end" />

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
        <div className="gradient-header" />
        <span className="absolute z-20 mt-2 ml-5 w-full font-[cyrillic-pixel-7-1] text-4xl text-[#ffffff] [text-shadow:_1px_1px_0_#b13485,_-1px_-1px_0_#b13485,_1px_-1px_0_#b13485,_-1px_1px_0_#b13485]">
          Epoch
        </span>
        <img
          src={logo}
          className="mt-5 mb-5 w-30 self-center"
          style={{
            filter: 'invert(46%) sepia(40%) saturate(3654%) hue-rotate(256deg) brightness(95%) contrast(60%)'
          }}
        />
        <div className="flex h-10 w-full">
          <img src={code} className="absolute left-11 h-10" />
          <img src={code} className="absolute left-25 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
