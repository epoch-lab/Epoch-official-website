import './CareerCard.css';
import PixelBlast from '../../../content/Backgrounds/PixelBlast/PixelBlast';
import logo from '../../../assets/svg/logo.svg';
import EPOCHtext from '../../../assets/svg/EPOCHtext.svg';
import airplane from '../../../assets/svg/airplane.svg';
import { careerList } from './MemberList';
import { Carousel, ConfigProvider } from 'antd';

const FirstTicket = () => {
  // 分页函数
  const paginateData = (data, itemsPerPage) => {
    const pages = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      pages.push(data.slice(i, i + itemsPerPage));
    }
    return pages;
  };

  const careerPages = paginateData(careerList, 8);
  return (
    <div className="ticket-container">
      <div className="ticket-left">
        <div className="absolute top-0 left-0 z-1 h-full w-full">
          <PixelBlast
            variant="circle"
            pixelSize={5}
            color="#B19EEF"
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
            <span className="ml-5">回声实验室</span>
          </div>
          <div className="mr-20 flex items-center">
            <img src={EPOCHtext} className="mr-2 w-30" />
            <img src={airplane} className="mr-3 w-8" />
            <span>就业实习</span>
          </div>
        </div>
        <div className="carousel-container">
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
            <Carousel className="top-0 left-0 z-10 h-50 w-full" infinite arrows>
              {careerPages.map((page, pageIndex) => (
                <div key={pageIndex} className="carousel-page">
                  <div className="grid grid-cols-2 grid-rows-4 p-0">
                    {page.map((career, index) => (
                      <div key={index} className="flex gap-2 rounded p-2 text-base font-bold text-purple-700">
                        <p>{career.grade}</p>
                        <p>{career.name}</p>
                        <p>{career.company}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </ConfigProvider>
        </div>
      </div>
      <div className="ticket-right">
        <div className="h-18 w-full rounded-t-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-[#8469dc]"></div>
      </div>
    </div>
  );
};

export default FirstTicket;
